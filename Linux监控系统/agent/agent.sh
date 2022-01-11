#!/bin/bash
#2021年12月2日15点58分
#这是客户端，需要放到/usr/bin/下，且有可执行权限

#获取数据采集和自动巡检脚本的进程号
pid(){
    insertDate=`cat /etc/jaina/JainaStatus`
    checking=`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`
    test=""
}
#查看进程状态
catPidStatus(){
  cat /proc/$1/status | grep Name
  cat /proc/$1/status | grep VmSize | sed 's/VmSize:/Memory:/g'
  cat /proc/$1/status | grep VmPeak | sed 's/VmPeak:/Max Memory:/g'
  cat /proc/$1/status | grep State:
  cat /proc/$1/status | grep ^Pid:
}
#进程启动
start(){
  #数据采集
  sh /etc/jaina/agent/InsertData.sh > /etc/jaina/JainaStatus &
  sleep 1
  echo {`date`}-{$1 Server}-{PID:`cat /etc/jaina/JainaStatus`} >> /var/log/jaina-agent.log
  #自动巡检
  php /etc/jaina/agent/ClientSocket.php >> /var/log/jaina-agent.log &
  sleep 1
  echo {`date`}-{$1 Checking}-{PID:`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`} >> /var/log/jaina-agent.log
}
#进程停止
stop(){
  #数据采集
  echo {`date`}-{$1 Server}-{PID:`cat /etc/jaina/JainaStatus`} >> /var/log/jaina-agent.log
  kill $(cat /etc/jaina/JainaStatus) ; echo "" > /etc/jaina/JainaStatus
  #自动巡检
  echo {`date`}-{$1 Checking}-{PID:`netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`} >> /var/log/jaina-agent.log
  kill `netstat -ntlp | grep 1094 | awk '{print $7}' | sed 's/\/php//g'`
}
#进程状态
status(){
      echo "数据采集: "
      catPidStatus $insertDate
      cat /var/log/jaina-agent.log | grep Server | head -n 5

      echo ""
      echo "自动巡检： "

      catPidStatus $checking
      netstat -ntlp | grep $checking
      cat /var/log/jaina-agent.log | grep Checking | head -n 5
}

#主程序
case $1 in
"addhost")
  sh /etc/jaina/agent/AddHostCurl.sh $2
  echo {`date`}-{$1-$2}-{Status:$?} >> /var/log/jaina-agent.log
  ;;
#启动脚本
"start")
  pid
  #进程不为空
  if [[ $insertDate != $test || $checking != $test ]]
  then
    echo "服务已启动！"
  else
    start
  fi
  ;;

"stop")
  pid
  if [[ $insertDate = $test || $checking = $test ]]
  then
    echo "服务已停止！"
  else
    stop
  fi
  ;;

"status")
  pid
  if [[ $insertDate = $test || $checking = $test ]]
  then
     echo "服务已停止！"
  else
    status
  fi
  ;;

"logs")
  cat /var/log/jaina-agent.log
  ;;
"testcpus")
  res=`uptime`
  echo $res
  echo {`date`}-{$1}-{$res} >> /var/log/jaina-agent.log
  ;;
"testdisk")
  `dd if=/dev/zero of=/tmp/jaina_disktest bs=1M count=200 > /tmp/jaina_diskwirte 2>&1 && dd if=/tmp/jaina_disktest of=/dev/null bs=1M > /tmp/jaina_diskread 2>&1`
  res=`cat /tmp/jaina_diskwirte | grep copied | awk -F ' ' '{print "写入速度：" $10 $11}' && cat /tmp/jaina_diskread | grep copied | awk -F ' ' '{print "读取速度：" $10 $11}'`
  echo $res
  echo {`date`}-{$1}-{$res} >> /var/log/jaina-agent.log
  ;;
"testnets")
#  `speedtest --list`(测速时的意外情况)
  res=`speedtest | grep :`
  echo $res
  echo {`date`}-{$1}-{$res} >> /var/log/jaina-agent.log
  ;;
"testport")
  echo `sh /etc/jaina/agent/Port.sh`
  echo {`date`}-{$1}-{Status:$?} >> /var/log/jaina-agent.log
  ;;
"testcpui")
  echo `cat /proc/cpuinfo | grep processor | wc -l | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`
  echo `cat /proc/cpuinfo | sed -n '5p' | awk -F ':' '{print $2}' | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`
  echo `cat /proc/cpuinfo | sed -n '8p' | awk -F ':' '{print $2}' | sed 's/$/ GHz<\/td>/g' | sed 's/^/<td>/g'`
  echo {`date`}-{$1}-{Position: /proc/cpuinfo} >> /var/log/jaina-agent.log
  ;;
"testmoth")
  res=`dmidecode |grep -A16 "Base Board Information$" | grep "Product Name:" |awk -F ':' '{print $2}' | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo $res
  echo {`date`}-{$1}-{$res} >> /var/log/jaina-agent.log
  ;;
"testmemo")
  echo `dmidecode |grep -A16 "Memory Device$" | grep "MB$" | wc -l | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo `dmidecode |grep -A16 "Memory Device$" | grep "MB$" | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo `dmidecode |grep -A16 "Memory Device$" | grep "MHz$" | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo {`date`}-{$1}-{/etc/jaina/device_all} >> /var/log/jaina-agent.log
  ;;
"testneti")
  res=`lspci | grep Ethernet | sed 's/$/<\/td>/g' | sed 's/^/<td>/g' | sed -n '1p'`
  echo $res
  echo `echo \'$(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g') | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo {`date`}-{$1}-{$res} >> /var/log/jaina-agent.log
  ;;
"testdiki")
  res=`lsblk -S | grep disk |wc -l | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo $res
  echo `lspci | grep SCSI | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo `lsblk | grep ^sd | awk '{print $4}' | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`
  echo {`date`}-{$1}-{$res} >> /var/log/jaina-agent.log
  ;;
*)
  echo " 用法: jaina <选项> "
  echo ""
  echo " Linux监控系统代理... "
  echo ""
  echo " 选项： "
  echo "    addhost <ServerIPAddress>         添加主机到服务器"
  echo "    start                             开启代理服务"
  echo "    stop                              停止代理服务"
  echo "    status                            查看代理状态"
  echo "    logs                              查看代理日志"
  ;;
esac