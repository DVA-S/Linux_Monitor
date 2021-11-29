<?php
$hostID = isset($_GET['hostID']) ? htmlspecialchars($_GET['hostID']) : '';
$con = null;
$Count = null;
require_once "../linkDB.php";
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
$stmt = $con->prepare("delete from bysj.host where id=?");
$stmt->bind_param("i",$hostID);
$stmt->bind_result($Count);
$stmt->execute();

?>