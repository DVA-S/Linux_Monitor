<?php
//引用在index.php的select标签
$con = null;

$host_ip = null;
$host_name = null;

require_once "../linkDB.php";

mysqli_select_db($con,"bysj");

mysqli_set_charset($con, "utf8");

$stmt = $con->prepare("select host_name,host_ip from bysj.host");
$stmt->bind_result($host_name,$host_ip);
$stmt->execute();

while($stmt->fetch()){
    //$host_ip传递IP地址到接口，Status$host_ip传回ping结果
    echo "
    <option value ='Singlehost_$host_ip'>$host_name,$host_ip</option>
    ";
}
?>