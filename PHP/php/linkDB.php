<?php
//问题1：数据库不能远程连接 :: /etc/mysql/mysql.conf.d/mysql.cnf >> #bind-address = 127.0.0.1
$servername = "192.168.157.128";
$username = "root";
$password = "Esxi0000.";
// 创建连接
$con = new mysqli($servername, $username, $password);
return $con;
?>
