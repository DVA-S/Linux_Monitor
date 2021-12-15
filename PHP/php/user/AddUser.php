<?php
//根据IP地址和密码添加主机
//向服务端数据库插入数据

$user = isset($_GET['user']) ? htmlspecialchars($_GET['user']) : '';
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

//空值验证、sha256+date验证、有效期验证
if (base64_decode($token) !== "" && $get_value !== "" && base64_decode($token) == $get_value && $now-$datatime <= 600) {

    if ($user == "") {
        echo "<script>alert('请换个用户名！');</script>";
        exit;//退出当前脚本
    }

    //$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';
    //密码要加盐，不然用户会根据自己的密码，得知服务器的加密方式（太过明显） 第二次加密
    $createdate = date("Y-m-d h:i:s");
    $passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';
    $yanzhi = "JainaProudmoore";
    $all = $passwd . $createdate . $yanzhi;
    //echo $all;
    $passwd = hash('sha256', $all);

    $email = isset($_GET['email']) ? htmlspecialchars($_GET['email']) : '';
    $sex = isset($_GET['sex']) ? htmlspecialchars($_GET['sex']) : '';
    $phone = isset($_GET['phone']) ? htmlspecialchars($_GET['phone']) : '';

    require_once "../linkDB.php";

    mysqli_select_db($con, "bysj");

    mysqli_set_charset($con, "utf8");

    $stmt = $con->prepare("insert into bysj.sysUser(user,passwd,email,sex,phone,createdate) values(?,?,?,?,?,?)");

    $stmt->bind_param("ssssss", $user, $passwd, $email, $sex, $phone, $createdate);

    $stmt->execute();
}else{
    echo "身份已失效！";
}
?>