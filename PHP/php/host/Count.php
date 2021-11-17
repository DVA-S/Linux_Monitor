<?php
//查询系统类型的数量
//第一次：require_once 引入php >> 无论引入多少只能显示一个输出，而且会扰乱布局
//第二次：封装类 >> 同上
//第三次：转为接口 >> OK 不过,不安全(还要区分用户)
$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';
$con = null;
$Count = null;
require_once "../linkDB.php";
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
$stmt = $con->prepare("select count(*) as Count from bysj.host where host_type = ? ");
$stmt->bind_param("s",$type);
$stmt->bind_result($Count);
$stmt->execute();

while($stmt->fetch()){
    echo $Count;
}
?>