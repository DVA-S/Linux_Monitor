<?php
//向客户端发送消息type
$ip = isset($_GET['ip']) ? htmlspecialchars($_GET['ip']) : '';
$cmd = isset($_GET['cmd']) ? htmlspecialchars($_GET['cmd']) : '';
$user = isset($_GET['user']) ? htmlspecialchars($_GET['user']) : '';
$pass = isset($_GET['pass']) ? htmlspecialchars($_GET['pass']) : '';

$token = isset($_GET['token']) ? htmlspecialchars($_GET['token']) : ''; //base64编码
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';

$con = null;
$hashAndData = explode('--', base64_decode($token));
//将日期转换为时间戳 注：时间戳即秒数
$now = strtotime(date('Y-m-d h:i:s'));
$datatime = strtotime($hashAndData[1]);

$memcache = new Memcache;             //创建一个memcache对象
$memcache->connect('localhost', 11211) or die ('Could not connect'); //连接Memcached服务器
$get_value = $memcache->get($username . 'UserToken');   //从内存中取出key的值 格式：4fb27a4f7a4e69c74068871ae1e788813d89d058c723a1dd77041794b3dfb55f--2021-12-15 10:05:15

//空值验证、sha256+date验证、有效期验证
if (base64_decode($token) !== '' && $get_value !== '' && base64_decode($token) == $get_value && $now - $datatime <= 600) {
    error_reporting(E_ALL);
//设置无限请求超时时间
    set_time_limit(0);
    $sock = null;

    $serverip = '192.168.157.128';
    $port = 1095;

//创建socket
    if (($socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP)) < 0) {
        echo 'socket_create() 失败的原因是:' . socket_strerror($socket) . "\n";
        exit();
    }

//连接socket
    if (($result = socket_connect($socket, $serverip, $port)) < 0) {
        $sock = null;
        echo 'socket_connect() 失败的原因是:' . socket_strerror($sock) . "\n";
        exit();
    }

    $in = null;
// Jaina 点的问题不了解
    $in .= $ip."+".$cmd."+".$user."+".$pass;
    $out = '';

//发送数据
    if (!socket_write($socket, $in, strlen($in))) {
        echo "<img src='/img/stop.png' width='12%'>";
        exit();
    }

//读取指定长度的数据
    while ($out = socket_read($socket, 2048)) {
        echo $out;
    }

    socket_close($socket);
}
//else{
//    echo "登录过期!";
//}
?>