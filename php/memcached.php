<?php
$user = isset($_GET['user']) ? htmlspecialchars($_GET['user']) : '';
$token = isset($_GET['token']) ? htmlspecialchars($_GET['token']) : ''; //base64编码

$yanzhi = "JainaProudmoore";
$all = $user.$yanzhi;

class JsonDate {
    public $status = "";
    public $username  = "";
    public $token = "";
}
$rtJson = new JsonDate();

//登录的用户名
//$user=$_COOKIE['UserName'];
//获取保持登录的cookie
$hashAndData = explode("--",base64_decode($token));
//将日期转换为时间戳 注：时间戳即秒数
$now = strtotime(date("Y-m-d h:i:s"));
$datatime = strtotime($hashAndData[1]);
//离开时显示的面板
$viewStatus = $_COOKIE['panelView'];

//验证cookie中的数据合法性和有效性
if (hash('sha256',$all) == $hashAndData[0] && $now-$datatime <= 600){
    //刷新有效期
    //创建并更新用户Token hash256+时间存在memcached,base64存在cookie
    $yanzhi = "JainaProudmoore";
    $all = $user.$yanzhi;
    $hashToken = hash('sha256',$all)."--".date("Y-m-d h:i:s");
    $token = base64_encode($hashToken);
    $memcache = new Memcache;             //创建一个memcache对象
    $memcache->connect('localhost', 11211) or die ("Could not connect"); //连接Memcached服务器
    $memcache->set($user.'UserToken', $hashToken,0,600);        //设置一个变量到内存中，有效期十分钟

    //返回json数据
    $rtJson->status = 1;
    $rtJson->username = $user;
    $rtJson->token = $token;
    echo json_encode($rtJson);
}else{
    $rtJson->status = 0;
    echo json_encode($rtJson);
}

?>