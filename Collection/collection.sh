#!/bin/bash
#采集系统指标到数据库
#2021年9月14日19点24分0x489ddbcd
#Linux ubuntu 5.11.0-34-generic #36~20.04.1-Ubuntu SMP Fri Aug 27 08:06:32 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux

#Host
host(){
	mysql -uroot -phtzy0000 -e "
	insert into php.host (host_name,host_ip,cpu_model,cpu_core,mem_total,swap_total,network_model,network_speed,network_num,disk_num) values
	(
	`echo \'$(hostname)\'`,
	`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
	`echo \'$(lscpu | grep "Model name:"|awk -F ":" '{print $2}')\' | sed 's/ /-/g' | sed "s/'-/'/g"`,
	`echo $(lscpu | grep -n "^CPU(s):"|awk -F ":" '{print $3}')`,
	`echo $(free -m | grep Mem | awk '{print $2}')`,
	`echo $(free -m | grep Swap | awk '{print $2}')`,
	`echo \'$(lspci | grep Ethernet | head -n 1 | awk -F ' ' '{print $4,$5,$6,$7,$8,$9,$10}')\'`,
	`echo \'$(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g')\'`,
	`lspci | grep Ethernet | wc -l`,
	`lsblk -S | grep disk |wc -l`
	);"
}

##Memory
memory(){
	mysql -uroot -phtzy0000 -e "insert into php.memory (host_ip,mem_used,mem_free,swap_used,swap_free,data_time) values
	(
	`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
	`free -m | grep Mem | awk '{print $3}'| sed 's/Gi//g' | sed 's/Mi//g'`,
	`free -m | grep Mem | awk '{print $4}'| sed 's/Gi//g' | sed 's/Mi//g'`,
	`free -m | grep Swap | awk '{print $3}'| sed 's/Gi//g' | sed 's/Mi//g'`,
	`free -m | grep Swap | awk '{print $4}'| sed 's/Gi//g' | sed 's/Mi//g'`,
	`date +"%Y%m%d%T" | sed 's/://g'`
	);"
}

#CPU
cpu(){
	mysql -uroot -phtzy0000 -e "insert into php.cpu(host_ip,cpu_used,cpu_free,data_time) 
	values(
	`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
	`echo 100 $(top -bn 1 -i -c | grep "%Cpu(s):" | awk -F " " '{print $8}')| awk '{print $1-$2}'`,
	`top -bn 1 -i -c | grep "%Cpu(s):" | awk -F " " '{print $8}'`,
	`date +"%Y%m%d%T" | sed 's/://g'`
	);"
}

#Network
network(){
	mysql -uroot -phtzy0000 -e "insert into php.network(host_ip,network_name,network_up,network_down,data_time)
	values(
	`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
	`echo \'$(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p')\'`,
	`sar -n DEV 1 1 | grep Average: | awk -F ' ' '{print $5}' | sed -n '3p'`,
	`sar -n DEV 1 1 | grep Average: | awk -F ' ' '{print $6}' | sed -n '3p'`,
	`date +"%Y%m%d%T" | sed 's/://g'`
	);"
}
#网卡二
#mysql -uroot -phtzy0000 -e "insert into php.network(host_ip,network_up,network_down,data_time)
#values(
#`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
#`echo \'$(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '3p')\'`,
#`sar -n DEV 1 1 | grep Average: | awk -F ' ' '{print $5}' | sed -n '4p'`,
#`sar -n DEV 1 1 | grep Average: | awk -F ' ' '{print $6}' | sed -n '4p'`,
#`date +"%Y%m%d%T" | sed 's/://g'`
#);"

#磁盘
disk(){
	mysql -uroot -phtzy0000 -e "insert into php.disk (host_ip,disk_read,disk_write,disk_used,disk_free,data_time)
	values(
	`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
	`echo $(iostat -d -k 1 1 | grep sda | awk -F ' ' '{print $3}')`,
	`echo $(iostat -d -k 1 1 | grep sda | awk -F ' ' '{print $4}')`,
	`echo $(df -h | grep "/$" | awk -F ' ' '{print $3}' | sed 's/G//g')`,
	`echo $(df -h | grep "/$" | awk -F ' ' '{print $4}' | sed 's/G//g')`,
	`date +"%Y%m%d%T" | sed 's/://g'`
	);"
}

host
memory
cpu
network
disk