<?php
//$testText = isset($_GET['testText']) ? htmlspecialchars($_GET['testText']) : '';
//$sock = null;
//$msgsock = null;
//require_once "Socket8888.php";
$address = '192.168.157.128';
$port = 8888;
$sock = socket_create(AF_INET,SOCK_STREAM,SOL_TCP);
//端口复用
//socket_set_option($sock, SOL_SOCKET, SO_REUSEPORT, 1);

$ret = socket_bind($sock,$address,$port);
$ret = socket_listen($sock,4);

$msgsock = socket_accept($sock);
do {
    $msgsock = socket_accept($sock);
//    $msg ="发送测试！\n";
    socket_write($msgsock, "冷静，别捉急！", strlen("冷静，别捉急！"));
//    echo "发送消息：$msg\n";

    $buf = socket_read($msgsock,8192);
//    if($buf){
    $test = "".$buf;
//    }
    if (($test) == "test"){
        echo "判断成功！";
    }else{
        echo "别急！再来一次就能成功！";
    }
    echo "读取消息：$buf\n";
    echo "读取消息：$test\n";

    socket_close($msgsock);
}while(true);

socket_close($sock);
?>