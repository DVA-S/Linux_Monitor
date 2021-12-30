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

$connection = ssh2_connect('192.168.157.128', 22);

ssh2_auth_password($connection, 'root', '8080');

$stream = ssh2_shell($connection, 'vt102', null, 80, 24, SSH2_TERM_UNIT_CHARS);

do {
    //接收一个Socket连接
    if (($msgsock = socket_accept($sock)) < 0) {
//        echo "socket_accept() failed: reason: " . socket_strerror($msgsock) . "\n";
        break;
    } else {
        $buf = socket_read($msgsock, 2048);

        if ($buf == 'exit') {
            exit(1);
        }

        fwrite($stream, $buf . "\n");
//        fwrite($stream, $buf);

        sleep(1);

        while ($line = fgets($stream)) {
            socket_write($msgsock, $line, strlen($line));
            echo $line;
        }
    }
    //关闭socket
    socket_close($msgsock);
} while (true);

fclose($stream);
?>