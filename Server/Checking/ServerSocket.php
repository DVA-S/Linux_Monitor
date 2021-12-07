<?php
$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';
$clientIP = isset($_GET['clientIP']) ? htmlspecialchars($_GET['clientIP']) : '';

error_reporting(E_ALL);
//设置无限请求超时时间
set_time_limit(0);
$sock = null;

$ip = $clientIP;
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

//发送数据
socket_write($socket, $in, strlen($in));

//读取指定长度的数据
while($out = socket_read($socket, 2048)) {
    echo $out;
}

//echo "关闭SOCKET...\n";
socket_close($socket);
?>