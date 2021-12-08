#!/bin/bash
#2021年12月2日15点58分
#这是客户端，需要放到/usr/bin/下，且有可执行权限
case $1 in
"")
  echo "    addhost <IPAddress>               添加主机到服务器"
  echo "    start                             运行jaina服务"
  echo "    stop                              停止jaina服务"
  echo "    ping <IPAddress>                  测试连通行,返回img标签"
  echo "    testcpus                          查看cpu运行情况"
  echo "    testdisk                          测试磁盘读写速度"
  echo "    testnets                          测试网络传输速度"
  echo "    testport                          查看开放的端口"
  echo "    testcpui                          查看cpu型号等信息"
  echo "    testmoth                          查看主板信息"
  echo "    testmemo                          查看内存信息"
  echo "    testneti                          查看网卡信息"
  echo "    testdiki                          查看硬盘信息"
  ;;
"addhost")
  sh /etc/jaina/AddHostCurl.sh $2
  ;;
"ping")
  ping -c 3 $2 > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "<img src='/img/go.png' width='12%'>";
    else
        echo "<img src='/img/stop.png' width='12%'>";
    fi
    ;;
"testcpus")
  echo `uptime`
  ;;
"testdisk")
  `dd if=/dev/zero of=/tmp/jaina_disktest bs=1M count=200 > /tmp/jaina_diskwirte 2>&1 && dd if=/tmp/jaina_disktest of=/dev/null bs=1M > /tmp/jaina_diskread 2>&1`
  echo `cat /tmp/jaina_diskwirte | grep copied | awk -F ' ' '{print "写入速度：" $10 $11}' && cat /tmp/jaina_diskread | grep copied | awk -F ' ' '{print "读取速度：" $10 $11}'`
  ;;
"testnets")
#  `speedtest --list`(测速时的意外情况)
  echo `speedtest | grep :`
  ;;
"testport")
  echo `sh /etc/jaina/Port.sh`
  ;;
"testcpui")
  echo `cat /proc/cpuinfo | grep processor | wc -l | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`
  echo `cat /proc/cpuinfo | sed -n '5p' | awk -F ':' '{print $2}' | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`
  echo `cat /proc/cpuinfo | sed -n '8p' | awk -F ':' '{print $2}' | sed 's/$/ GHz<\/td>/g' | sed 's/^/<td>/g'`
  ;;
"testmoth")
  echo `cat /opt/device_all |grep -A16 "Base Board Information$" | grep "Product Name:" |awk -F ':' '{print $2}' | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  ;;
"testmemo")
  echo `cat /opt/device_all |grep -A16 "Memory Device$" | grep "MB$" | wc -l | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo `cat /opt/device_all |grep -A16 "Memory Device$" | grep "MB$" | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo `cat /opt/device_all |grep -A16 "Memory Device$" | grep "MHz$" | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  ;;
"testneti")
  echo `lspci | grep Ethernet | sed 's/$/<\/td>/g' | sed 's/^/<td>/g' | sed -n '1p'`
  echo `echo \'$(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g') | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  ;;
"testdiki")
  echo `lsblk -S | grep disk |wc -l | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo `lspci | grep SCSI | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo `lsblk | grep ^sd | awk '{print $4}' | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  ;;
"start")
  sh /etc/jaina/InsertData.sh > /etc/jaina/JainaStatus &
  ;;
"stop")
  kill $(cat /etc/jaina/JainaStatus) ; echo "" > /etc/jaina/JainaStatus
  ;;
esac

