<?php
$con = null;

#服务器接受api上来的主机信息
$host_name = isset($_GET['host_name']) ? htmlspecialchars($_GET['host_name']) : '';
$host_type = isset($_GET['host_type']) ? htmlspecialchars($_GET['host_type']) : '';
$host_ip = isset($_GET['host_ip']) ? htmlspecialchars($_GET['host_ip']) : '';
$cpu_model = isset($_GET['cpu_model']) ? htmlspecialchars($_GET['cpu_model']) : '';
$cpu_core = isset($_GET['cpu_core']) ? htmlspecialchars($_GET['cpu_core']) : '';
$mem_total = isset($_GET['mem_total']) ? htmlspecialchars($_GET['mem_total']) : '';
$swap_total = isset($_GET['swap_total']) ? htmlspecialchars($_GET['swap_total']) : '';
$network_model = isset($_GET['network_model']) ? htmlspecialchars($_GET['network_model']) : '';
$network_speed = isset($_GET['network_speed']) ? htmlspecialchars($_GET['network_speed']) : '';
$network_num = isset($_GET['network_num']) ? htmlspecialchars($_GET['network_num']) : '';
$disk_num = isset($_GET['disk_num']) ? htmlspecialchars($_GET['disk_num']) : '';
$disk_all = isset($_GET['disk_all']) ? htmlspecialchars($_GET['disk_all']) : '';

require_once "../linkDB.php";

mysqli_select_db($con,"bysj");

mysqli_set_charset($con, "utf8");

$stmt = $con->prepare("insert into bysj.host (host_name,host_type,host_ip,cpu_model,cpu_core,mem_total,swap_total,network_model,network_speed,network_num,disk_num,disk_all) values(?,?,?,?,?,?,?,?,?,?,?,?)");

$stmt->bind_param("ssssssssssss",$host_name,$host_type,$host_ip,$cpu_model,$cpu_core,$mem_total,$swap_total,$network_model,$network_speed,$network_num,$disk_num,$disk_all);

$stmt->execute();

?>