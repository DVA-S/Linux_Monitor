<?php
//根据IP地址和密码添加主机
//向服务端数据库插入数据
$con = null;

$user = isset($_GET['user']) ? htmlspecialchars($_GET['user']) : '';
if ($user == ""){
    echo "<script>alert('请换个用户名！');</script>";
    exit;//退出当前脚本
}

//$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';
//密码要加盐，不然用户会根据自己的密码，得知服务器的加密方式（太过明显） 第二次加密
$createdate = date("Y-m-d h:i:s");
$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';
$yanzhi = "JainaProudmoore";
$all = $passwd.$createdate.$yanzhi;
//echo $all;
$passwd = hash('sha256',$all);

$email = isset($_GET['email']) ? htmlspecialchars($_GET['email']) : '';
$sex = isset($_GET['sex']) ? htmlspecialchars($_GET['sex']) : '';
$phone = isset($_GET['phone']) ? htmlspecialchars($_GET['phone']) : '';

require_once "../linkDB.php";

mysqli_select_db($con,"bysj");

mysqli_set_charset($con, "utf8");

$stmt = $con->prepare("insert into bysj.sysUser(user,passwd,email,sex,phone,createdate) values(?,?,?,?,?,?)");

$stmt->bind_param("ssssss",$user,$passwd,$email,$sex,$phone,$createdate);

$stmt->execute();

?>