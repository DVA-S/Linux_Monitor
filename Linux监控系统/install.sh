#!/bin/bash
#安装源代码
mkdir /etc/jaina && cp -rvf ./agent/ ./server/ /etc/jaina/ && cp ./config.conf /etc/jaina/
touch /etc/jaina/JainaStatus
rm -rf /var/www/html/* && cp -rvf ./web/* /var/www/html/
  #记录日志
  echo {`date`}-{监控系统安装}-{安装目录：/etc/jaina /var/www/html } >> /var/log/jaina-server.log
