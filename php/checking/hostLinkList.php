<?php

$token = isset($_GET['token']) ? htmlspecialchars($_GET['token']) : ''; //base64编码
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';

$hashAndData = explode("--",base64_decode($token));
//将日期转换为时间戳 注：时间戳即秒数
$now = strtotime(date("Y-m-d h:i:s"));
$datatime = strtotime($hashAndData[1]);

$memcache = new Memcache;             //创建一个memcache对象
$memcache->connect('localhost', 11211) or die ("Could not connect"); //连接Memcached服务器
$get_value = $memcache->get($username.'UserToken');   //从内存中取出key的值 格式：4fb27a4f7a4e69c74068871ae1e788813d89d058c723a1dd77041794b3dfb55f--2021-12-15 10:05:15

//空值验证、sha256+date验证、有效期验证
if (base64_decode($token) !== "" && $get_value !== "" && base64_decode($token) == $get_value && $now-$datatime <= 600) {
    $con = null;
    $id = null;
    $host_type = null;
    $host_ip = null;
    $host_name = null;

    require_once "../linkDB.php";

    mysqli_select_db($con, "bysj");

    mysqli_set_charset($con, "utf8");

    $stmt = $con->prepare("select id,host_name,host_type,host_ip from bysj.host");
    $stmt->bind_result($id, $host_name, $host_type, $host_ip);
    $stmt->execute();


//判定登录--输出查询数据的行数
//可以改为并行
    echo "
<tr>
    <th>主机名</th><th>类型</th><th>地址</th><th>状态</th><th>操作</th>
</tr>";
    while ($stmt->fetch()) {
        //$host_ip传递IP地址到接口，Status$host_ip传回ping结果
        echo "
    <tr>
        <td>$host_name</td>
        <td>$host_type</td>
        <td id='ip$id'>$host_ip</td>
        <td id='Status$id'>
            <img src='./img/none.png' width='12%'>
        </td>
        <td id='ping$id' class='deleteBtn' onclick='linkHostStatus(this)'>Ping</td>
    </tr>
    ";
    }
}
?>