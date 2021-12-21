#!/bin/bash
#安装MySQL Client 获得MySQL命令行工具
apt -y install mysql-client-8.0

#网络实时速度采集需要sysstat里的sar命令
apt -y install sysstat

#网卡速率需要ethtool命令
apt -y install ethtool