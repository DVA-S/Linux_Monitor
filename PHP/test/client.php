<?php
$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';

error_reporting(E_ALL);
//设置无限请求超时时间
set_time_limit(0);
$sock = null;

$ip = '127.0.0.1';
$port = 58468;

//创建socket
if(($socket = socket_create(AF_INET,SOCK_STREAM,SOL_TCP)) < 0) {
    echo "socket_create() 失败的原因是:".socket_strerror($socket)."\n";
    exit();
}

//连接socket
if(($result = socket_connect($socket, $ip, $port)) < 0){
    $sock =null;
    echo "socket_connect() 失败的原因是:".socket_strerror($sock)."\n";
    exit();
}

$in = null;
$in .= $type;
$out = '';

//写数据到socket缓存
if(!socket_write($socket, $in, strlen($in))) {
//if(!socket_write($socket, $hostCpu, strlen($hostCpu))) {
    echo "socket_write() 失败的原因是:".socket_strerror($sock)."\n";
    exit();
}

//读取指定长度的数据
while($out = socket_read($socket, 2048)) {
    echo "接收的内容为:",$out;
}

//echo "关闭SOCKET...\n";
socket_close($socket);
?>