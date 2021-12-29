<?php
$token = isset($_GET['token']) ? htmlspecialchars($_GET['token']) : ''; //base64编码
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';

$con = null;
$hashAndData = explode("--",base64_decode($token));
//将日期转换为时间戳 注：时间戳即秒数
$now = strtotime(date("Y-m-d h:i:s"));
$datatime = strtotime($hashAndData[1]);

$memcache = new Memcache;             //创建一个memcache对象
$memcache->connect('localhost', 11211) or die ("Could not connect"); //连接Memcached服务器
$get_value = $memcache->get($username.'UserToken');   //从内存中取出key的值 格式：4fb27a4f7a4e69c74068871ae1e788813d89d058c723a1dd77041794b3dfb55f--2021-12-15 10:05:15

//sha256+date验证、有效期验证
if (base64_decode($token) !== "" && $get_value !== "" && base64_decode($token) == $get_value && $now-$datatime <= 600) {
    $host_ip = isset($_GET['host_ip']) ? htmlspecialchars($_GET['host_ip']) : '';
    $cpu = isset($_GET['cpu']) ? htmlspecialchars($_GET['cpu']) : '';
    $mem = isset($_GET['mem']) ? htmlspecialchars($_GET['mem']) : '';
    $disk = isset($_GET['disk']) ? htmlspecialchars($_GET['disk']) : '';
    $time = isset($_GET['time']) ? htmlspecialchars($_GET['time']) : '';
    $email = isset($_GET['email']) ? htmlspecialchars($_GET['email']) : '';

    require_once "../linkDB.php";
    mysqli_select_db($con, "bysj");
    mysqli_set_charset($con, "utf8");
    $stmt = $con->prepare("update eMail set cpu=?,mem=?,disk=?,time=?,email=? where host_ip=?;");
    $stmt->bind_param("ssssss", $cpu,$mem,$disk,$time,$email,$host_ip);
    $stmt->execute();
}else{
    echo "身份已失效！";
}
?>