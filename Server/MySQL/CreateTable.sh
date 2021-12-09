##建表
#createTB(){
#  #建库
#  mysql -uroot -pEsxi0000. -e "create database if not exists bysj character set utf8 collate utf8_bin;"
#	#主机表
#	mysql -uroot -pEsxi0000. -e "
#	use bysj;
#	create table if not exists host (
#	id int(255) not null primary key auto_increment,
#	host_name char(20) not null,
#	host_ip varchar(50) not null,
#	cpu_model varchar(50) not null,
#	cpu_core int not null,
#	mem_total float not null,
#	swap_total float null,
#	network_model varchar(100) not null,
#	network_speed varchar(50) not null,
#	network_num int not null,
#	disk_num int not null,
#	username varchar(20) not null,
#	passwd varchar(20) not null
#	);
#	"
#  #设置ip唯一
#	mysql -uroot -pEsxi0000. -e "
#	alter table bysj.host add unique(host_ip);
#	";
#
#	#内存表
#	mysql -uroot -pEsxi0000. -e "
#	use bysj;
#	create table if not exists memory (
#	id int(10) primary key auto_increment not null,
#	host_ip varchar(50) not null,
#	mem_used float not null,
#	mem_free float not null,
#	mem_cache float,
#	swap_used float,
#	swap_free float,
#	data_time datetime not null
#	);
#	"
#	#CPU表
#	mysql -uroot -pEsxi0000. -e "
#	use bysj;
#	create table if not exists cpu(
#	id int(10) primary key auto_increment not null,
#	host_ip varchar(50) not null,
#	cpu_used float not null,
#	data_time datetime not null
#	);"
#
#	#网卡表
#	mysql -uroot -pEsxi0000. -e "
#	use bysj;
#	create table if not exists network(
#	id int(10) primary key auto_increment not null,
#	host_ip varchar(50) not null,
#	network_name varchar(50) not null,
#	network_up  float not null,
#	network_down  float not null,
#	data_time datetime not null
#	);"
#
#	#磁盘表
#	mysql -uroot -pEsxi0000. -e "
#	use bysj;
#	create table if not exists disk (
#	id int(255) not null primary key auto_increment,
#	host_ip varchar(50) not null,
#	disk_read  float not null,
#	disk_write float not null,
#	disk_used float not null,
#	disk_free float not null,
#	data_time datetime  not null
#	);
#	"
#	#日志表
#	mysql -uroot -pEsxi0000. -e "
#	use bysj;
#	create table if not exists logs (
#	id int(255) not null primary key auto_increment,
#	num int(255) not null,
#	logs varchar(255) null,
#	data_time datetime  not null
#	);
#	"
#	#用户表
#	mysql -uroot -pEsxi0000. -e "
#  	use bysj;
#  	create table if not exists sysUser (
#  	id int(255) not null primary key auto_increment,
#  	username varchar(20) not null unique,
#  	passwd char(64) not null
#  	);
#  	"
#}
#createTB