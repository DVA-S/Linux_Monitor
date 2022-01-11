<?php
    $user = isset($_GET['user']) ? htmlspecialchars($_GET['user']) : '';
    $passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';

    //json
    class JsonDate {
        public $status = "";
        public $username  = "";
        public $token = "";
    }
    $rtJson = new JsonDate();

    $con = null;
    $login_status = null;
    $createdate = null;

    require_once "/var/www/html/php/linkDB.php";
    // 选择数据库
    mysqli_select_db($con,"bysj");
    // 设置编码，防止中文乱码
    mysqli_set_charset($con, "utf8");
    $stmt = $con->prepare("select createdate from bysj.sysUser where user = ?");
    $stmt->bind_param("s",$user);
    $stmt->bind_result($createdate);
    $stmt->execute();
    $stmt->fetch();
//    while($stmt->fetch()){}

    $yanzhi = "JainaProudmoore";
    $all = $passwd.$createdate.$yanzhi;
    $passwd = hash('sha256',$all);

    $stmt->free_result();
    $stmt->close();

//如果登录成功，在关闭窗口前都不需要重新登录
function keepLogin($login_status,$user,$rtJson){
    if ($login_status==1){
        //创建Token到数据库(memcached)和session(cookie) 解密base64后得到sha256+时间去memcached验证
        $yanzhi = "JainaProudmoore";
        $all = $user.$yanzhi;
        $hashToken = hash('sha256',$all)."--".date("Y-m-d h:i:s");
        $token = base64_encode($hashToken);

        //返回json数据
        $rtJson->status = 1;
        $rtJson->username = $user;
        $rtJson->token = $token;
        echo json_encode($rtJson);

        //memcache 4fb27a4f7a4e69c74068871ae1e788813d89d058c723a1dd77041794b3dfb55f--2021-12-23 01:13:26
        $memcache = new Memcache;             //创建一个memcache对象
        $memcache->connect('localhost', 11211) or die ("Could not connect"); //连接Memcached服务器
        $memcache->set($user.'UserToken', $hashToken,0,600);        //设置一个变量到内存中，有效期十分钟
    }else{
        //返回json数据
        $rtJson->status = 0;
        $rtJson->username = null;
        $rtJson->token = null;
        echo json_encode($rtJson);
    }
}

    //利用数据行数判定登录
    $stmt = $con->prepare("select count(*) as login_status from bysj.sysUser where user = ? and passwd = ?");
    $stmt->bind_param("ss",$user,$passwd);
    $stmt->bind_result($login_status);
    $stmt->execute();
    //判定登录--输出查询数据的行数
    $stmt->fetch();
//    while($stmt->fetch()){}

    //last
    keepLogin($login_status,$user,$rtJson);

    $stmt->free_result();
    $stmt->close();
    mysqli_close($con);
?>