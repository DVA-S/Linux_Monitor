<?php
$user = isset($_POST['user']) ? htmlspecialchars($_POST['user']) : '';
$passwd = isset($_POST['passwd']) ? htmlspecialchars($_POST['passwd']) : '';

$servername = "127.0.0.1";
$username = "root";
$password = "htzy0000";
// 创建连接
$con = new mysqli($servername, $username, $password);

// 选择数据库
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
 
$stmt = $con->prepare("SELECT count(*) as login_status FROM bysj.user WHERE username = ? and passwd = ?");
$stmt->bind_param("ss",$user,$passwd);
$stmt->bind_result($login_status);
$stmt->execute();

while($stmt->fetch()){
 echo $login_status;
}

$stmt->free_result();
$stmt->close();
mysqli_close($con);
?>