<?php
//根据IP地址和密码添加主机
//向服务端数据库插入数据
$ipaddr = isset($_GET['ipaddr']) ? htmlspecialchars($_GET['ipaddr']) : '';
$user = isset($_GET['ipaddr']) ? htmlspecialchars($_GET['user']) : '';
$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';


echo $ssh_first = `
    mysql -uroot -pEsxi0000. -e "insert into bysj.devUser(ipaddr,user,passwd) values(\"$ipaddr\",\"$user\",\"$passwd\");"
`;
?>