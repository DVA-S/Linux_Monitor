#!/bin/bash
#2021年12月2日15点58分
#这是客户端，需要放到/usr/bin/下，且有可执行权限
case $1 in
"")
  echo "    addhost x.x.x.x                   添加主机到服务器"
  echo "    start                             在后台运行jaina服务，会持续向服务器上报性能指标"
  ;;
addhost)
  sh /mnt/hgfs/Client/AddHostCurl.sh $2
  ;;
"start")
  sh /mnt/hgfs/Client/InsertData.sh > /opt/kill &
  ;;
"stop")
  kill $(cat /opt/kill) ; echo "" > /opt/kill
  ;;
esac


#添加按钮（安装Client）
#提示在客户端执行添加命令
#添加命令（通过API向数据库添加主机信息）
