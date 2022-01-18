#!/bin/bash
#安装变量
server_ip=`cat config.conf | grep "DbHost" | awk -F "\"" '{print $4}'`
DbPasswd=`cat config.conf | grep "DbPasswd" | awk -F "\"" '{print $4}'`

#函数封装区

#主函数
#安装额外包
apt update && apt -y install sysstat net-tools expect ethtool curl expect

#安装源代码
chmod a+x `find . -name "*.sh"`
mkdir /etc/jaina && cp -rvf ./agent/ /etc/jaina/ && cp ./config.conf /etc/jaina/
touch /etc/jaina/JainaStatus

#安装PHP
apt install -y php7.4-cli php-common libapache2-mod-php php-cli php-mysql php-curl php-ssh2 php7.4-fpm
sed -i 's/;extension=mysqli/extension=mysqli/g' /etc/php/7.4/apache2/php.ini
