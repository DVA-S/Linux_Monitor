#!/bin/bash
#2021年12月2日15点58分
#这是客户端，需要放到/usr/bin/下，且有可执行权限
case $1 in
"addhost")
  sh /etc/jaina/AddHostCurl.sh $2
  echo {`date`}-{$1-$2}-{Status:$?} >> /var/log/jaina.log
  ;;
"ping")
  #参数2是在client中根据ID从数据库中查询出来的
  ping -c 3 $2 > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        res="<img src='/img/go.png' width='12%'>";
        echo $res;
    else
        res="<img src='/img/stop.png' width='12%'>";
        echo $res;
    fi
  #写入日志
  echo {`date`}-{$1}-{$res} >> /var/log/jaina.log
    ;;
"start-server")
  sh /etc/jaina/InsertData.sh > /etc/jaina/JainaStatus &
  sleep 1
  echo {`date`}-{$1 Server}-{PID:`cat /etc/jaina/JainaStatus`} >> /var/log/jaina.log
  ;;
"start-client")
  php /var/www/html/Client/ClientSocket.php >> /var/log/jaina.log &
  sleep 1
  echo {`date`}-{$1 Client}-{PID:`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`} >> /var/log/jaina.log
  ;;
"start-email")
  php /var/www/html/Server/Setup/setupEmail.php &
  echo {`date`}-{$1 eMail}-{PID:`ps aux | grep setupEmail | grep php | awk '{print $2}'`} >> /var/log/jaina.log
  ;;
"stop-server")
  echo {`date`}-{$1 Server}-{PID:`cat /etc/jaina/JainaStatus`} >> /var/log/jaina.log
  kill $(cat /etc/jaina/JainaStatus) ; echo "" > /etc/jaina/JainaStatus
  ;;
"stop-client")
  echo {`date`}-{$1 Client}-{PID:`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`} >> /var/log/jaina.log
  kill `netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`
  ;;
"stop-email")
  echo {`date`}-{$1 eMail}-{PID:`ps aux | grep setupEmail | grep php | awk '{print $2}'`} >> /var/log/jaina.log
  kill `ps aux |  grep php | grep setupEmail | awk '{print $2}'`
  ;;
"status")
  cat /proc/`cat /etc/jaina/JainaStatus`/status | grep Name
  cat /proc/`cat /etc/jaina/JainaStatus`/status | grep VmSize | sed 's/VmSize:/Memory:/g'
  cat /proc/`cat /etc/jaina/JainaStatus`/status | grep VmPeak | sed 's/VmPeak:/Max Memory:/g'
  cat /proc/`cat /etc/jaina/JainaStatus`/status | grep State:
  cat /proc/`cat /etc/jaina/JainaStatus`/status | grep ^Pid:
  echo " "
  cat /proc/`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`/status | grep Name
  cat /proc/`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`/status | grep VmSize | sed 's/VmSize:/Memory:/g'
  cat /proc/`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`/status | grep VmPeak | sed 's/VmPeak:/Max Memory:/g'
  cat /proc/`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`/status | grep State:
  cat /proc/`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`/status | grep ^Pid:
  echo " "
  cat /proc/`ps aux | grep setupEmail | grep php | awk '{print $2}'`/status | grep Name
  cat /proc/`ps aux | grep setupEmail | grep php | awk '{print $2}'`/status | grep VmSize | sed 's/VmSize:/Memory:/g'
  cat /proc/`ps aux | grep setupEmail | grep php | awk '{print $2}'`/status | grep VmPeak | sed 's/VmPeak:/Max Memory:/g'
  cat /proc/`ps aux | grep setupEmail | grep php | awk '{print $2}'`/status | grep State:
  cat /proc/`ps aux | grep setupEmail | grep php | awk '{print $2}'`/status | grep ^Pid:
  echo {`date`}-{$1}-{Position: /proc/`cat /etc/jaina/JainaStatus`/status and /proc/`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`/status and /proc/`ps aux | grep setupEmail | grep php | awk '{print $2}'`/status} >> /var/log/jaina.log
 ;;
"testcpus")
  res=`uptime`
  echo $res
  echo {`date`}-{$1}-{$res} >> /var/log/jaina.log
  ;;
"testdisk")
  `dd if=/dev/zero of=/tmp/jaina_disktest bs=1M count=200 > /tmp/jaina_diskwirte 2>&1 && dd if=/tmp/jaina_disktest of=/dev/null bs=1M > /tmp/jaina_diskread 2>&1`
  res=`cat /tmp/jaina_diskwirte | grep copied | awk -F ' ' '{print "写入速度：" $10 $11}' && cat /tmp/jaina_diskread | grep copied | awk -F ' ' '{print "读取速度：" $10 $11}'`
  echo $res
  echo {`date`}-{$1}-{$res} >> /var/log/jaina.log
  ;;
"testnets")
#  `speedtest --list`(测速时的意外情况)
  res=`speedtest | grep :`
  echo $res
  echo {`date`}-{$1}-{$res} >> /var/log/jaina.log
  ;;
"testport")
  echo `sh /etc/jaina/Port.sh`
  echo {`date`}-{$1}-{Status:$?} >> /var/log/jaina.log
  ;;
"testcpui")
  echo `cat /proc/cpuinfo | grep processor | wc -l | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`
  echo `cat /proc/cpuinfo | sed -n '5p' | awk -F ':' '{print $2}' | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`
  echo `cat /proc/cpuinfo | sed -n '8p' | awk -F ':' '{print $2}' | sed 's/$/ GHz<\/td>/g' | sed 's/^/<td>/g'`
  echo {`date`}-{$1}-{Position: /proc/cpuinfo} >> /var/log/jaina.log
  ;;
"testmoth")
  dmidecode > /etc/jaina/device_all
  res=`cat /etc/jaina/device_all |grep -A16 "Base Board Information$" | grep "Product Name:" |awk -F ':' '{print $2}' | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo $res
  echo {`date`}-{$1}-{$res} >> /var/log/jaina.log
  ;;
"testmemo")
  dmidecode > /etc/jaina/device_all
  echo `cat /etc/jaina/device_all |grep -A16 "Memory Device$" | grep "MB$" | wc -l | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo `cat /etc/jaina/device_all |grep -A16 "Memory Device$" | grep "MB$" | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo `cat /etc/jaina/device_all |grep -A16 "Memory Device$" | grep "MHz$" | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo {`date`}-{$1}-{/etc/jaina/device_all} >> /var/log/jaina.log
  ;;
"testneti")
  res=`lspci | grep Ethernet | sed 's/$/<\/td>/g' | sed 's/^/<td>/g' | sed -n '1p'`
  echo $res
  echo `echo \'$(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g') | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo {`date`}-{$1}-{$res} >> /var/log/jaina.log
  ;;
"testdiki")
  res=`lsblk -S | grep disk |wc -l | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo $res
  echo `lspci | grep SCSI | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo `lsblk | grep ^sd | awk '{print $4}' | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo {`date`}-{$1}-{$res} >> /var/log/jaina.log
  ;;
"logs")
  cat /var/log/jaina.log
  ;;
*)
  echo " 用法: jaina <选项> "
  echo ""
  echo " 毕业设计的客户端 用来启动采集服务和client代理... "
  echo ""
  echo " 选项： "
  echo "    addhost <ServerIPAddress>         添加主机到服务器"
  echo "    ping <IPAddress>                  测试连通行,返回img标签"
  echo "    start-server                      开始采集主机性能指标"
  echo "    start-client                      运行client代理，接收执行server命令"
  echo "    start-email                       开启邮件报警功能"
  echo "    stop-server                       停止采集主机性能指标"
  echo "    stop-client                       运行client代理，接收执行server命令"
  echo "    stop-email                        停止邮件报警功能"
  echo "    status                            查看服务状态"
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
esac