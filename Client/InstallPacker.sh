#!/bin/bash
#判断系统类型
sys=`lsb_release -a 2> /dev/null | grep "Distributor ID:" | awk -F ' ' '{print $3}'`
if [ $sys = "Ubuntu" ]
then
  ##Ubuntu
  #安装MySQL Client 获得MySQL命令行工具
  apt -y install mysql-client-8.0

  #网络实时速度采集需要sysstat里的sar命令
  apt -y install sysstat

  #网卡速率需要ethtool命令
  apt -y install ethtool
else
		##CentOS
		#lsb_release命令
    yum -y install redhat-lsb-core

    #lspci命令
    yum -y install pciutils

    #MySQL命令
    wget -P /opt/ https://repo.mysql.com//mysql80-community-release-el7-4.noarch.rpm --no-check-certificate && yum -y install /opt/mysql80-community-release-el7-4.noarch.rpm
    yum clean all && yum repolist
    yum -y install mysql-community-client
fi