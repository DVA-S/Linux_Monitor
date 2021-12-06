#!/bin/bash
#2021年12月2日15点58分
#这是客户端，需要放到/usr/bin/下，且有可执行权限
case $1 in
"")
  echo "    addhost <IPAddress>               添加主机到服务器"
  echo "    start                             运行jaina服务"
  echo "    stop                              停止jaina服务"
  ;;
"addhost")
  sh /etc/jaina/AddHostCurl.sh $2
  ;;
"start")
  sh /etc/jaina/InsertData.sh > /etc/jaina/JainaStatus &
  ;;
"stop")
  kill $(cat /etc/jaina/JainaStatus) ; echo "" > /etc/jaina/JainaStatus
  ;;
esac
