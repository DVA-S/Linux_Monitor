#!/bin/bash
#2021年12月2日15点58分
#这是客户端，需要放到/usr/bin/下，且有可执行权限

#函数中的参数和脚本的不能重叠
hostCurl(){
  #此处的中文模式没有测试
  lang=`locale | grep LANG= | awk -F '=' '{print $2}'`
  if [ $lang = "zh_CN.UTF-8" ];
  then
    curl http://$1/php/host/AddHost.php?host_name=`echo $(hostname)`&host_type=`echo $(lsb_release -a 2> /dev/null | grep "Distributor ID:" | awk -F ' ' '{print $3}')`&host_ip=`echo $(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}' | awk -F '/' '{print $1}')`&cpu_model=`echo $(lscpu | grep "型号名称："|awk -F "：" '{print $2}') | sed 's/ /-/g' | sed "s/'-/'/g"`&cpu_core=`echo $(lscpu | grep "每个座的核数" | awk -F '：' '{print $2}')`&mem_total=`echo $(free -m | grep "内存：" | awk '{print $2}')`&swap_total=`echo $(free -m | grep "交换：" | awk '{print $2}')`&network_model=`echo $(lspci | grep Ethernet | head -n 1 | awk -F ' ' '{print $4,$5,$6,$7,$8,$9,$10}')`&network_speed=`echo $(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g')`&network_num=`lspci | grep Ethernet | wc -l`&disk_num=`lsblk -S | grep disk |wc -l`&disk_all=`echo $(lsblk | grep disk | awk '{print $4}')`
    else
    curl http://$1/php/host/AddHost.php?host_name=`echo $(hostname)`\&host_type=`echo $(lsb_release -a 2> /dev/null | grep "Distributor ID:" | awk -F ' ' '{print $3}')`\&host_ip=`echo $(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}' | awk -F '/' '{print $1}')`\&cpu_model=`echo $(lscpu | grep "Model name:"|awk -F ":" '{print $2}') | sed 's/ /-/g' | sed "s/'-/'/g"`\&cpu_core=`echo $(lscpu | grep -n "^CPU(s):"|awk -F ":" '{print $3}')`\&mem_total=`echo $(free -m | grep Mem | awk '{print $2}')`\&swap_total=`echo $(free -m | grep Swap | awk '{print $2}')`\&network_model=`echo $(lspci | grep Ethernet | head -n 1 | awk -F ' ' '{print $4,$5,$6,$7,$8,$9}') | sed 's/ /-/g'`\&network_speed=`echo $(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g')`\&network_num=`lspci | grep Ethernet | wc -l`\&disk_num=`lsblk -S | grep disk |wc -l`\&disk_all=`echo $(lsblk | grep disk | awk '{print $4}')`
  fi
}

case $1 in
"")
  echo "    addhost x.x.x.x                   添加主机到服务器"
  echo "    start                             在后台运行jaina服务，会持续向服务器上报性能指标"
  ;;
addhost)
  hostCurl $2
  ;;
"start")
  echo "运行"
  ;;
esac


#添加按钮（安装Client）
#提示在客户端执行添加命令
#添加命令（通过API向数据库添加主机信息）

