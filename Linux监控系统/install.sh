#!/bin/bash
#安装服务端和客户端

#安装变量
server_ip=`cat config.conf | grep "DbHost" | awk -F "\"" '{print $4}'`
DbPasswd=`cat config.conf | grep "DbPasswd" | awk -F "\"" '{print $4}'`

#函数封装区
#Ubuntu MySQL
initialization_ubuntu(){
  #初始化数据库
	expect -c "
	spawn /usr/bin/mysql_secure_installation
	expect \"Press y|Y for Yes, any other key for No:\"
	send \"y\r\"
	expect \"Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG:\"
	send \"0\r\"
	expect \"New password:\"
	send \""$DbPasswd"\r\"
	expect \"Re-enter new password:\"
	send \""$DbPasswd"\r\"
	expect \"Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) :\"
	send \"y\r\"
	expect \"Remove anonymous users?\"
	send \"y\r\"
	expect \"Disallow root login remotely?\"
	send \"n\r\"
	expect \"Remove test database and access to it?\"
	send \"y\r\"
	expect \"Reload privilege tables now?\"
	send \"y\r\"
	expect eof
	"
}

#安装MySQL
installDB(){
  apt -y install mysql-server
  systemctl enable mysql
  initialization_ubuntu
}

#建表
createTB(){
	#主机表
	mysql -uroot -pEsxi0000. -e "
	use bysj;
	create table if not exists host (
	id int(255) not null primary key auto_increment,
	host_name char(20) not null,
	host_type char(20) not null,
	host_ip varchar(50) not null unique,
	mem_total float not null,
	network_speed varchar(50) not null,
	disk_all varchar(10) not null
	);
	"
	#内存表
	mysql -uroot -pEsxi0000. -e "
	use bysj;
	create table if not exists memory (
	id int(10) primary key auto_increment not null,
	host_ip varchar(50) not null,
	mem_used float not null,
	mem_free float not null,
	swap_used float,
	swap_free float,
	data_time datetime not null
	);
	"
	#CPU表
	mysql -uroot -pEsxi0000. -e "
	use bysj;
	create table if not exists cpu(
	id int(10) primary key auto_increment not null,
	host_ip varchar(50) not null,
	cpu_used float not null,
	data_time datetime not null
	);"
	#网卡表
	mysql -uroot -pEsxi0000. -e "
	use bysj;
	create table if not exists network(
	id int(10) primary key auto_increment not null,
	host_ip varchar(50) not null,
	network_name varchar(50) not null,
	network_up  float not null,
	network_down  float not null,
	data_time datetime not null
	);"
	#磁盘表
	mysql -uroot -pEsxi0000. -e "
	use bysj;
	create table if not exists disk (
	id int(255) not null primary key auto_increment,
	host_ip varchar(50) not null,
	disk_read  float not null,
	disk_write float not null,
	disk_used float not null,
	disk_free float not null,
	data_time datetime  not null
	);
	"
	#日志表
	mysql -uroot -pEsxi0000. -e "
	use bysj;
	create table if not exists logs (
	id int(255) not null primary key auto_increment,
	num int(255) not null,
	logs varchar(255) null,
	data_time datetime  not null
	);
	"
	#系统用户表 -- 要在前端去掉空格 姓名、账号、密码
  mysql -uroot -pEsxi0000. -e "
  use bysj;
  create table if not exists sysUser (
  id int(255) not null primary key auto_increment,
  user varchar(20) not null unique,
  passwd char(64) not null,
  email varchar(30)  null,
  sex varchar(5) null,
  phone char(11) null,
  createdate datetime not null
  );
  "
  #初始化管理员账号
  mysql -uroot -pEsxi0000. -e "
  use bysj;
  insert into sysUser(user,passwd,email,sex,phone,createdate)
  values(\"admin\",\"d25dcca71c5e8e48883fabcd938e3920dd0b9e63e7cd710474cd36b44baf821d\",\"1218304973@qq.com\",\"男\",\"17852766922\",\"2021-12-10 01:19:36\");"
  #用户Token表
  mysql -uroot -pEsxi0000. -e "
  use bysj;
  create table if not exists userToken (
  id int(255) not null primary key auto_increment,
  username varchar(20) not null unique,
  token char(64) not null unique,
  data datetime not null
  );
  "
  #设备用户表
  mysql -uroot -pEsxi0000. -e "
  use bysj;
  create table if not exists devUser (
  id int(255) not null primary key auto_increment,
  user varchar(20) not null,
  passwd varchar(20) not null,
  createdate datetime not null
  );
  "
  #告警邮件表
  mysql -uroot -pEsxi0000. -e "
  use bysj;
  create table if not exists eMail (
  id int(255) not null primary key auto_increment,
  host_ip varchar(50) not null unique,
  cpu varchar(20) not null,
  mem varchar(20) not null,
  disk varchar(20) not null,
  time varchar(20) not null,
  email varchar(20) not null
  );
  "
  #触发器 - 根据主机表初始化告警条件
  mysql -uroot -pEsxi0000. -e "
  use bysj;
  CREATE TRIGGER eMail
  AFTER INSERT ON host
  FOR EACH ROW
  INSERT INTO eMail(host_ip,cpu,mem,disk,time,email)
  VALUES (NEW.host_ip,\"90\",\"1024\",\"5\",\"120\",\"1218304973@qq.com\");
  "
  #触发器 - 删除主机时，删除对应的告警条目
  mysql -uroot -pEsxi0000. -e "
  use bysj;
  CREATE TRIGGER eMailDelete
  AFTER DELETE ON host
  FOR EACH ROW
  DELETE from eMail where host_ip=OLD.host_ip;
  "
}

#主函数
#安装额外包
apt update && apt -y install sysstat net-tools expect ethtool curl expect

#安装Apache
apt -y install apache2
#配置https和http2
a2enmod ssl
a2ensite default-ssl

mkdir /etc/apache2/ssl
cp ./ssl/server.crt ./ssl/server.key ./ssl/ca.crt /etc/apache2/ssl/
sed -i '/ServerAdmin/a ServerName https://'"$server_ip"':443' /etc/apache2/sites-available/default-ssl.conf
sed -i 's/\/etc\/ssl\/certs\/ssl-cert-snakeoil.pem/\/etc\/apache2\/ssl\/server.crt/g' /etc/apache2/sites-available/default-ssl.conf
sed -i 's/\/etc\/ssl\/private\/ssl-cert-snakeoil.key/\/etc\/apache2\/ssl\/server.key/g' /etc/apache2/sites-available/default-ssl.conf

a2dismod php7.4 && a2enconf php7.4-fpm && a2enmod proxy_fcgi
a2dismod mpm_prefork && a2enmod mpm_event && a2enmod http2
sed -i '/ServerAdmin/a Protocols h2 http/1.1' /etc/apache2/sites-available/default-ssl.conf
sed -i '/LoadModule/a <IfModule http2_module>\n    LogLevel http2:info\n</IfModule>' /etc/apache2/mods-available/http2.load

#安装源代码
chmod a+x `find . -name "*.sh"`
mkdir /etc/jaina && cp -rvf ./agent/ ./server/ /etc/jaina/ && cp ./config.conf /etc/jaina/
touch /etc/jaina/JainaStatus
rm -rf /var/www/html/* && cp -rvf ./web/* /var/www/html/
  #记录日志
  echo {`date`}-{监控系统安装}-{安装目录：/etc/jaina /var/www/html } >> /var/log/jaina-server.log

#安装数据库
db=$(mysql --version 2> /dev/null | awk -F ' ' '{print $1}')
if [ $db ]
then
	#设置数据库编码
	mysql -uroot -pEsxi0000. -e "set global character_set_server=gbk;"
	mysql -uroot -pEsxi0000. -e "set global character_set_database=gbk;"
	#建库、建表 "找不到编码类型"
	mysql -uroot -pEsxi0000. -e "create database if not exists bysj;"
	createTB
else
  #安装数据库
	installDB
	#建库、建表
	mysql -uroot -pEsxi0000. -e "create database if not exists bysj;"
	createTB
fi

#安装PHP
apt install -y php7.4-cli php-common libapache2-mod-php php-cli php-mysql php-curl php-ssh2 php7.4-fpm
sed -i 's/;extension=mysqli/extension=mysqli/g' /etc/php/7.4/apache2/php.ini

#安装数据库
apt -y install mysql-server
sed -i 's/^bind-address/#bind-address/g' /etc/mysql/mysql.conf.d/mysqld.cnf

mysql -e "create user 'root'@'%' identified by '$DbPasswd';"
mysql -e "grant all privileges on *.* to 'root'@'%';"
mysql -e "flush privileges;"

#安装memcached
apt -y install memcached php-memcache

#邮件服务s-nail未配置 (交互式界面需要用户按两次回车)
echo "deb http://cz.archive.ubuntu.com/ubuntu xenial main universe" >> /etc/apt/sources.list
apt update && apt install -y heirloom-mailx mailutils
cp ./s-nail.rc /etc/s-nail.rc
echo "OK!" |s-nail -s "邮件配置成功！" 1218304973@qq.com