#!/bin/bash
lang=`locale | grep LANG= | awk -F '=' '{print $2}'`

memory(){
    if [ $lang = "zh_CN.UTF-8" ]
    then
	      mysql -uroot -phtzy0000 -e "insert into bysj.memory (host_ip,mem_used,mem_free,swap_used,swap_free,data_time) values
	            (
	            `echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
	            `free -m | grep "内存：" | awk '{print $3}'`,
	            `echo $(cat /proc/meminfo | grep MemAvailable: | awk '{print $2}') 1024 | awk '{print $1/$2}'`,
	            `echo $(cat /proc/swaps | sed -n '2p' | awk '{print $4}') 1024 | awk '{print $1/$2}'`,
	            `free -m | sed -n '3p' | awk '{print $4}'`,
	            `date +"%Y%m%d%T" | sed 's/://g'`
	            );"
	  else
	    mysql -uroot -phtzy0000 -e "insert into bysj.memory (host_ip,mem_used,mem_free,swap_used,swap_free,data_time) values
      	      (
      	      `echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
      	      `free -m | grep Mem | awk '{print $3}'`,
      	      `echo $(cat /proc/meminfo | grep MemAvailable: | awk '{print $2}') 1024 | awk '{print $1/$2}'`,
      	      `echo $(cat /proc/swaps | sed -n '2p' | awk '{print $4}') 1024 | awk '{print $1/$2}'`,
      	      `free -m | sed -n '3p' | awk '{print $4}'`,
      	      `date +"%Y%m%d%T" | sed 's/://g'`
      	      );"
	  fi
}

#CPU
cpu(){
	mysql -uroot -phtzy0000 -e "insert into bysj.cpu(host_ip,cpu_used,data_time)
	values(
	`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
	`echo $(vmstat -w 2 2 | sed -n '4p' | awk -F ' ' '{print $13,$14}') | awk '{print $1+$2}'`,
	`date +"%Y%m%d%T" | sed 's/://g'`
	);"
}


network(){
  #系统语言
  if [ $lang = "zh_CN.UTF-8" ]
  then
    	mysql -uroot -phtzy0000 -e "insert into bysj.network(host_ip,network_name,network_up,network_down,data_time)
    	values(
    	`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
    	`echo \'$(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '1,4p')\' | sed 's/ /\//g'`,
    	`echo $(sar -n DEV 1 1 | grep "平均时间:" | awk -F ' ' '{print $6}' | sed -n '2p') $(sar -n DEV 1 1 | grep "平均时间:" | awk -F ' ' '{print $6}' | sed -n '3p') $(sar -n DEV 1 1 | grep "平均时间:" | awk -F ' ' '{print $6}' | sed -n '4p') | awk '{print $1+$2+$3}'`,
    	`echo $(sar -n DEV 1 1 | grep "平均时间:" | awk -F ' ' '{print $5}' | sed -n '2p') $(sar -n DEV 1 1 | grep "平均时间:" | awk -F ' ' '{print $5}' | sed -n '3p') $(sar -n DEV 1 1 | grep "平均时间:" | awk -F ' ' '{print $5}' | sed -n '4p') | awk '{print $1+$2+$3}'`,
    	`date +"%Y%m%d%T" | sed 's/://g'`
    	);"
  else
    	mysql -uroot -phtzy0000 -e "insert into bysj.network(host_ip,network_name,network_up,network_down,data_time)
    	values(
    	`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
    	`echo \'$(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '1,4p')\' | sed 's/ /\//g'`,
    	`echo $(sar -n DEV 1 1 | grep Average: | awk -F ' ' '{print $6}' | sed -n '2p') $(sar -n DEV 1 1 | grep Average: | awk -F ' ' '{print $6}' | sed -n '3p') $(sar -n DEV 1 1 | grep Average: | awk -F ' ' '{print $6}' | sed -n '4p') | awk '{print $1+$2+$3}'`,
    	`echo $(sar -n DEV 1 1 | grep Average: | awk -F ' ' '{print $5}' | sed -n '2p') $(sar -n DEV 1 1 | grep Average: | awk -F ' ' '{print $5}' | sed -n '3p') $(sar -n DEV 1 1 | grep Average: | awk -F ' ' '{print $5}' | sed -n '4p') | awk '{print $1+$2+$3}'`,
    	`date +"%Y%m%d%T" | sed 's/://g'`
    	);"
  fi
}

#磁盘
#读写单位为KB/s，空间单位为GB -- 针对sda
disk(){
	mysql -uroot -phtzy0000 -e "insert into bysj.disk (host_ip,disk_read,disk_write,disk_used,disk_free,data_time)
	values(
	`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
	`echo $(iostat -d -k 1 2 | grep sda | awk -F ' ' '{print $3}') | awk -F ' ' '{print $2}'`,
	`echo $(iostat -d -k 1 2 | grep sda | awk -F ' ' '{print $4}') | awk -F ' ' '{print $2}'`,
	`echo $(df -h | grep "/$" | awk -F ' ' '{print $3}' | sed 's/G//g')`,
	`echo $(df -h | grep "/$" | awk -F ' ' '{print $4}' | sed 's/G//g')`,
	`date +"%Y%m%d%T" | sed 's/://g'`
	);"
}
memory
cpu
network
disk
