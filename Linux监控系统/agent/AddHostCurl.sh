lang=`locale | grep LANG= | awk -F '=' '{print $2}'`
#命令注入：无意义 因为运行在client Jaina（已完成） 缺点是可以利用此接口访问数据库 大致解决方法：加入客户端唯一性验证（客户端安装后，会生成唯一的字符串，该字符串的计算方法服务器也知道-加密解密过程）
#函数中的参数和脚本的不能重叠
hostCurl(){
  #此处的中文模式没有测试
  if [ $lang = "zh_CN.UTF-8" ];
  then
    curl http://$1/php/host/AddHost.php?host_name=`echo $(hostname)`\&host_type=`echo $(lsb_release -a 2> /dev/null | grep "Distributor ID:" | awk -F ' ' '{print $3}')`\&host_ip=`echo $(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}' | awk -F '/' '{print $1}')`\&mem_total=`echo $(free -m | grep "内存：" | awk '{print $2}')`\&network_speed=`echo $(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g')`\&disk_all=`echo $(lsblk | grep disk | awk '{print $4}')`
    else
    curl http://$1/php/host/AddHost.php?host_name=`echo $(hostname)`\&host_type=`echo $(lsb_release -a 2> /dev/null | grep "Distributor ID:" | awk -F ' ' '{print $3}')`\&host_ip=`echo $(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}' | awk -F '/' '{print $1}')`\&mem_total=`echo $(free -m | grep Mem | awk '{print $2}')`\&network_speed=`echo $(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g')`\&disk_all=`echo $(lsblk | grep disk | awk '{print $4}')`
  fi
}
hostCurl $1