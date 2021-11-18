<?php
//根据IP地址和密码添加主机
//向服务端数据库插入数据
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';
$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';

$ssh_first = `
    mysql -uroot -pEsxi0000. -e "insert into bysj.user(username,passwd) values(\"$username\",\"$passwd\");"
`;
?>