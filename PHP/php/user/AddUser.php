<?php
//根据IP地址和密码添加主机
//向服务端数据库插入数据
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';
$user = isset($_GET['user']) ? htmlspecialchars($_GET['user']) : '';
$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';
$email = isset($_GET['email']) ? htmlspecialchars($_GET['email']) : '';
$sex = isset($_GET['sex']) ? htmlspecialchars($_GET['sex']) : '';
$phone = isset($_GET['phone']) ? htmlspecialchars($_GET['phone']) : '';

echo $ssh_first = `
    mysql -uroot -pEsxi0000. -e "insert into bysj.sysUser(username,user,passwd,email,sex,phone) values(\"$username\",\"$user\",\"$passwd\",\"$email\",\"$sex\",\"$phone\");"
`;
?>