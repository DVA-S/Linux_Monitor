<?php
//参数 = host_177
$hostID = isset($_GET['hostID']) ? htmlspecialchars($_GET['hostID']) : '';
$hostID = substr($hostID,5);

$con = null;
$hostIP = null;

require_once "../linkDB.php";
// 选择数据库
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
$stmt = $con->prepare("select host_ip from host where id = ?");
$stmt->bind_param("s",$hostID);
$stmt->bind_result($hostIP);
$stmt->execute();

//判定登录--输出查询数据的行数
while($stmt->fetch()){
//    echo $login_status;
    echo `sh /opt/Ping.sh $hostIP`;
}


?>