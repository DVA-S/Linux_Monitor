<?php
$token = isset($_GET['token']) ? htmlspecialchars($_GET['token']) : ''; //base64编码
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';

$hashAndData = explode('--', base64_decode($token));
//将日期转换为时间戳 注：时间戳即秒数
$now = strtotime(date('Y-m-d h:i:s'));
$datatime = strtotime($hashAndData[1]);

$memcache = new Memcache;             //创建一个memcache对象
$memcache->connect('localhost', 11211) or die ('Could not connect'); //连接Memcached服务器
$get_value = $memcache->get($username . 'UserToken');   //从内存中取出key的值 格式：4fb27a4f7a4e69c74068871ae1e788813d89d058c723a1dd77041794b3dfb55f--2021-12-15 10:05:15

//空值验证、sha256+date验证、有效期验证
if (base64_decode($token) !== '' && $get_value !== '' && base64_decode($token) == $get_value && $now - $datatime <= 600) {
    $con = null;
    $id = null;
    $user = null;
    $passwd = null;
    $createdate = null;

    require_once '../linkDB.php';
    mysqli_select_db($con, 'bysj');
// 设置编码，防止中文乱码
    mysqli_set_charset($con, 'utf8');
//利用数据行数判定登录
    $stmt = $con->prepare('select id,user,passwd,createdate from bysj.devUser;');
    $stmt->bind_result($id, $user, $passwd, $createdate);
    $stmt->execute();

    echo "
        <option seleted ='true' value=''>请选择设备用户</option>
        ";
    while ($stmt->fetch()) {
        //$host_ip传递IP地址到接口，Status$host_ip传回ping结果
        echo "
    <option value ='$user+$passwd'>$id,$user,$createdate</option>
    ";
    }
} else {
    echo '身份已失效！';
}

?>