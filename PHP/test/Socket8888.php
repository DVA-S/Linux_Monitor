<?php
$address = '192.168.157.128';
$port = 8888;
$sock = socket_create(AF_INET,SOCK_STREAM,SOL_TCP);
//端口复用
socket_set_option($sock, SOL_SOCKET, SO_REUSEPORT, 1);

$ret = socket_bind($sock,$address,$port);
$ret = socket_listen($sock,4);

$msgsock = socket_accept($sock);


?>