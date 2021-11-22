<?php
$con = null;
$host_ip = null;
$host_name = null;

require_once "../linkDB.php";

mysqli_select_db($con,"bysj");

mysqli_set_charset($con, "utf8");

$stmt = $con->prepare("select host_name,host_ip from bysj.host");
$stmt->bind_result($host_name,$host_ip);
$stmt->execute();


//判定登录--输出查询数据的行数
//可以改为并行
echo "
<tr>
    <th>主机名</th><th>地址</th><th>延时</th>
</tr>";
while($stmt->fetch()){
    $ms = `ping -c 3 $host_ip | awk -F 'time=' '{print $2,$3}' | sed -n '3p'`;
    echo "
    <tr>
        <td>$host_name</td>
        <td>$host_ip</td>
        <td>$ms</td>
    </tr>
    ";
}
//echo "</table>";

?>