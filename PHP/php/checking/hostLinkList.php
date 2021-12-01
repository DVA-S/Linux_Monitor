<?php
$con = null;
$id = null;
$host_type = null;
$host_ip = null;
$host_name = null;

require_once "../linkDB.php";

mysqli_select_db($con,"bysj");

mysqli_set_charset($con, "utf8");

$stmt = $con->prepare("select id,host_name,host_type,host_ip from bysj.host");
$stmt->bind_result($id,$host_name,$host_type,$host_ip);
$stmt->execute();


//判定登录--输出查询数据的行数
//可以改为并行
echo "
<tr>
    <th>主机名</th><th>类型</th><th>地址</th><th>状态</th><th>操作</th>
</tr>";
while($stmt->fetch()){
     echo "
    <tr>
        <td>$host_name</td>
        <td>$host_type</td>
        <td>$host_ip</td>
        <td id='Status$host_ip'>未知</td>
        <td id='$host_ip' class='deleteBtn' onclick='linkHostStatus(this)'>Ping</td>
    </tr>
    ";
}
?>