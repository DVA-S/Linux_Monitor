<?php
//根据IP地址和密码添加主机
//向服务端数据库插入数据
$user = isset($_POST['user']) ? htmlspecialchars($_POST['user']) : '';
$passwd = isset($_POST['passwd']) ? htmlspecialchars($_POST['passwd']) : '';
//Jaina 密码要加盐，不然用户会根据自己的密码，得知服务器的加密方式（太过明显）

$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
$sex = isset($_POST['sex']) ? htmlspecialchars($_POST['sex']) : '';
$phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';

echo $ssh_first = `
    mysql -uroot -pEsxi0000. -e "insert into bysj.sysUser(user,passwd,email,sex,phone) values(\"$user\",\"$passwd\",\"$email\",\"$sex\",\"$phone\");"
`;
?>