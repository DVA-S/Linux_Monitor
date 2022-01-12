#!/bin/bash
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
	send \"Esxi0000.\r\"
	expect \"Re-enter new password:\"
	send \"Esxi0000.\r\"
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
#CentOS MySQL
initialization_centos(){
  #安装额外包
  yum -y install redhat-lsb-core
	yum -y install expect
  #初始化数据库
	expect -c "
	spawn /usr/bin/mysql_secure_installation
	expect \"Enter current password for root (enter for none):\"
	send \"\r\"
	expect \"Set root password? [Y/n]\"
	send \"Y\r\"
	expect \"New password:\"
	send \"Esxi0000.\r\"
	expect \"Re-enter new password:\"
	send \"Esxi0000.\r\"
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
	#判断系统类型
	sys=`lsb_release -a 2> /dev/null | grep "Distributor ID:" | awk -F ' ' '{print $3}'`
	if [ $sys = "Ubuntu" ]
	then
		apt -y install mysql-server
		systemctl enable mysql
		initialization_ubuntu
		#echo "安装数据库"

		#采集网卡和硬盘信息使用的软件包
		apt -y install ethtool sysstat
	else
		if [ $sys = "Centos" ]
		then
			yum -y install mariadb mariadb-server
			systemctl start mariadb
			systemctl enable mariadb
			initialization_centos
			#echo "安装数据库"
		fi
	fi
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
  VALUES (NEW.host_ip,"90","1024","5","120","1218304973@qq.com");
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
#安装源代码
mkdir /etc/jaina && cp -rvf ./agent/ ./server/ /etc/jaina/ && cp ./config.conf /etc/jaina/
touch /etc/jaina/JainaStatus
rm -rf /var/www/html/* && cp -rvf ./web/* /var/www/html/
  #记录日志
  echo {`date`}-{监控系统安装}-{安装目录：/etc/jaina /var/www/html } >> /var/log/jaina-server.log

#安装额外包
apt -y install sysstat net-tools expect ethtool

#安装数据库
db=$(mysql --version 2> /dev/null | awk -F ' ' '{print $1}')
if [ $db ]
then
	#设置数据库编码
	mysql -uroot -pEsxi0000. -e "set global character_set_server=gbk;"
	mysql -uroot -pEsxi0000. -e "set global character_set_database=gbk;"
	#建库、建表
	mysql -uroot -pEsxi0000. -e "create database if not exists bysj character set utf8 collate utf8;"
	createTB
else
  #安装数据库
	installDB
	#建库、建表
	mysql -uroot -pEsxi0000. -e "create database if not exists bysj character set utf8 collate utf8;"
	createTB
fi

#安装PHP
apt install -y php7.4-cli php-common libapache2-mod-php php-cli php-mysql php-curl php-ssh2
sed -i 's/;extension=mysqli/extension=mysqli/g' /etc/php/7.4/apache2/php.ini

#安装数据库
apt -y install mysql-server
sed -i 's/^bind-address/#bind-address/g' /etc/mysql/mysql.conf.d/mysqld.cnf
mysql -uroot -pEsxi0000. -e "
  create user 'root'@'%' identified by '8080';
  grant all privileges on *.* to 'root'@'%';
  flush privileges;
"

#安装Apache
apt -y install apache2
a2enmod ssl
a2ensite default-ssl

mkdir /etc/apache2/ssl
cp ./ssl/server.crt ./ssl/server.key ./ssl/ca.crt /etc/apache2/ssl/

#安装memcached
apt -y install memcached php-memcache
