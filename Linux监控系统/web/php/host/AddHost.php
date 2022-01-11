<?php
$con = null;

#服务器接受api上来的主机信息
$host_name = isset($_GET['host_name']) ? htmlspecialchars($_GET['host_name']) : '';
$host_type = isset($_GET['host_type']) ? htmlspecialchars($_GET['host_type']) : '';
$host_ip = isset($_GET['host_ip']) ? htmlspecialchars($_GET['host_ip']) : '';
$mem_total = isset($_GET['mem_total']) ? htmlspecialchars($_GET['mem_total']) : '';
$network_speed = isset($_GET['network_speed']) ? htmlspecialchars($_GET['network_speed']) : '';
$disk_all = isset($_GET['disk_all']) ? htmlspecialchars($_GET['disk_all']) : '';

require_once "/var/www/html/php/linkDB.php";

mysqli_select_db($con,"bysj");

mysqli_set_charset($con, "utf8");

$stmt = $con->prepare("insert into bysj.host (host_name,host_type,host_ip,mem_total,network_speed,disk_all) values(?,?,?,?,?,?)");

$stmt->bind_param("ssssss",$host_name,$host_type,$host_ip,$mem_total,$network_speed,$disk_all);

$stmt->execute();
?>