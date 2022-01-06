<?php
//此处交给ClientSocket来启动，启动时带上地址、用户名和密码

$ip = `ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}' | awk -F '/' '{print $1}'`;
$port = 1095;

//创建socket
if (($sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP)) < 0) {
//    echo "socket_create() 失败的原因是:".socket_strerror($sock)."\n";
    exit();
}
//把socket绑定在一个IP地址和端口上
if (($ret = socket_bind($sock, $ip, $port)) < 0) {
//    echo "socket_bind() 失败的原因是:".socket_strerror($ret)."\n";
    exit();
}

set_time_limit(0);

//监听由指定socket的所有连接
if (($ret = socket_listen($sock, 4)) < 0) {
//    echo "socket_listen() 失败的原因是:".socket_strerror($ret)."\n";
    exit();
}

$connection = null;
$stream = null;

$shell = [];
$shell_link = [];
$shell_ip = [];
do {
    //接收一个Socket连接
    if (($msgsock = socket_accept($sock)) < 0) {
//        echo "socket_accept() failed: reason: " . socket_strerror($msgsock) . "\n";
        break;
    } else {
        $buf = socket_read($msgsock, 2048);
        $ip = explode("+",$buf)[0];
        $cmd = explode("+",$buf)[1];
        echo "命令：".$cmd."\n";
        if ($buf == 'exit') {
            exit();
        }
        $user= explode("+",$buf)[2];
        $pass = explode("+",$buf)[3];

        //未连接的IP == 数组为空
        if ( !in_array($ip,$shell_ip) || empty($shell_ip) ){
            //ip进栈
            array_push($shell_ip,$ip);
            //以IP队列为基准
            $shell[array_search($ip,$shell_ip)] = ssh2_connect(end($shell_ip), 22);
            ssh2_auth_password($shell[array_search($ip,$shell_ip)], $user, $pass);
            $shell_link[array_search($ip,$shell_ip)] = ssh2_shell($shell[array_search($ip,$shell_ip)], 'vt102', null, 80, 24, SSH2_TERM_UNIT_CHARS);
        }

        fwrite($shell_link[array_search($ip,$shell_ip)], $cmd);

        sleep(1);
        //发送命令结果
       while ($line = fgets($shell_link[array_search($ip,$shell_ip)])) {
               if ((strpos($line,'@')&&strpos($line,'~#')) || (strpos($line,'@')&&strpos($line,'$'))){
                   socket_write($msgsock, "der".$line."der", strlen('der'.$line .'der'));
               }else{
                   socket_write($msgsock, $line, strlen($line));
               }
               echo '返回结果：' . $line;
       }
    }
    //关闭socket
    socket_close($msgsock);
} while (true);

fclose($shell_link[array_search($ip,$shell_ip)]);
?>