<?php
//查询系统类型的数量
//第一次：require_once 引入php >> 无论引入多少只能显示一个输出，而且会扰乱布局
//第二次：封装类 >> 同上
//第三次：转为接口 >> OK 不过,不安全(还要区分用户)
//$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';
$con = null;
$id  = null;
$host_name = null;
$host_type = null;
$host_ip = null;
$cpu_model  = null;
$cpu_core = null;
$mem_total = null;
$swap_total = null;
$network_model = null;
$network_speed = null;
$network_num = null;
$disk_num = null;
$disk_all = null;
require_once "../linkDB.php";
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
$stmt = $con->prepare("select host_name,host_type,host_ip,mem_total,network_speed,disk_all from bysj.host");
$stmt->bind_result($host_name,$host_type,$host_ip,$mem_total,$network_speed,$disk_all);
$stmt->execute();
//echo "<table border='0' class='hostList' style=''>
//    <tr>
//        <th>主机名</th><th>类型</th><th>地址</th><th>内存</th><th>网卡速率</th><th>硬盘</th>
//    </tr>";
while($stmt->fetch()){
    echo "
    <tr>
        <td>$host_name</td><td>$host_type</td><td>$host_ip</td><td>$mem_total MB</td><td>$network_speed</td><td>$disk_all</td>
    </tr>";
}
//echo "</table>";
?>