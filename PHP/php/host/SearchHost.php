<?php
$search = isset($_GET['search']) ? htmlspecialchars($_GET['search']) : '';
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
echo "<tr>
    <th>主机名</th><th>类型</th><th>地址</th><th>内存</th><th>网卡速率</th><th>硬盘</th><th>操作</th>
</tr>";
if ($search == null){
    echo file_get_contents('http://localhost/php/host/List.php');
}else{
    //利用数据行数判定登录
    $stmt = $con->prepare("select id,host_name,host_type,host_ip,mem_total,network_speed,disk_all from bysj.host where host_name = ? or host_type = ? or host_ip = ?");
    $stmt->bind_param("sss",$search,$search,$search);
    $stmt->bind_result($id,$host_name,$host_type,$host_ip,$mem_total,$network_speed,$disk_all);
    $stmt->execute();
    while($stmt->fetch()){
        echo "
    <tr>
        <td>$host_name</td><td>$host_type</td><td>$host_ip</td><td>$mem_total MB</td><td>$network_speed</td><td>$disk_all</td><td id='host_$id' class='deleteBtn' onclick='deleteHost(this)'>删除</td>
    </tr>";
    }
}
?>