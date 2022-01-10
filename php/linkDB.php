<?php
require_once '/var/www/html/php/functionUse/getConfig.php';

//问题1：数据库不能远程连接 :: /etc/mysql/mysql.conf.d/mysql.cnf >> #bind-address = 127.0.0.1
// 创建连接
$con = new mysqli(getConfig('DbHost'), getConfig('DbUser'), getConfig('DbPasswd'));
return $con;
?>
