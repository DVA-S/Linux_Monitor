#!/bin/bash
#2021年12月2日15点58分
#这是服务端，需要放到/usr/bin/下，且有可执行权限

#获取邮件告警和WebShell脚本的进程号
pid(){
    emailPid=`ps aux | grep setupEmail | grep php | awk '{print $2}'`
    webshellPid=`ps aux | grep shell | grep php | awk '{print $2}'`
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
start(){
  #邮件告警
  php /etc/jaina/server/setupEmail.php &
  echo {`date`}-{$1 eMail}-{PID:`ps aux | grep setupEmail | grep php | awk '{print $2}'`} >> /var/log/jaina-server.log
  #WebShell
  php /etc/jaina/server/shell.php &
  echo {`date`}-{$1 WebShell}-{PID:`ps aux | grep shell | grep php | awk '{print $2}'`} >> /var/log/jaina-server.log
}
stop(){
  #邮件告警
  echo {`date`}-{$1 eMail}-{PID:`ps aux | grep setupEmail | grep php | awk '{print $2}'`} >> /var/log/jaina-server.log
  kill `ps aux | grep php | grep setupEmail | awk '{print $2}'`
  #WebShell
  echo {`date`}-{$1 WebShell}-{PID:`ps aux | grep shell | grep php | awk '{print $2}'`} >> /var/log/jaina-server.log
  kill `ps aux | grep php | grep shell | awk '{print $2}'`
}
status(){
  echo "邮件告警模块: "
  catPidStatus $emailPid
  cat /var/log/jaina-server.log | grep eMail | head -n 5

  echo " "
  echo "远程连接模块: "

  catPidStatus $webshellPid
  netstat -ntlp | grep $webshellPid
  cat /var/log/jaina-server.log | grep WebShell | head -n 5

}

case $1 in
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
  echo {`date`}-{$1}-{$res} >> /var/log/jaina-server.log
  ;;
#启动脚本
"start")
  pid
  if [[ $emailPid != $test || $webshellPid != $test ]]
  then
    echo "服务已启动！"
  else
    start
  fi
  ;;

"stop")
  pid
  if [[ $emailPid = $test || $webshellPid = $test ]]
  then
     echo "服务已停止！"
  else
    stop
  fi
  ;;

"status")
  pid
  if [[ $emailPid = $test || $webshellPid = $test ]]
  then
     echo "服务已停止！"
  else
    status
  fi
  ;;
"logs")
  cat /var/log/jaina-server.log
  ;;
*)
  echo " 用法: jaina <参数> "
  echo ""
  echo " Linux监控系统服务端... "
  echo ""
  echo " 选项： "
  echo "    ping <IPAddress>                  执行ping测试"
  echo "    start                             开始Server服务"
  echo "    stop                              停止Server服务"
  echo "    status                            查看Server状态"
  echo "    logs                              查看Server日志"
  ;;
esac