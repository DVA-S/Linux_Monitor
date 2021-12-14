<?php
    $user = isset($_GET['user']) ? htmlspecialchars($_GET['user']) : '';
    $passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';

    $con = null;
    $login_status = null;
    $createdate = null;

    require_once "linkDB.php";
    // 选择数据库
    mysqli_select_db($con,"bysj");
    // 设置编码，防止中文乱码
    mysqli_set_charset($con, "utf8");
    $stmt = $con->prepare("select createdate from bysj.sysUser where user = ?");
    $stmt->bind_param("s",$user);
    $stmt->bind_result($createdate);
    $stmt->execute();
    while($stmt->fetch()){}

    $yanzhi = "JainaProudmoore";
    $all = $passwd.$createdate.$yanzhi;
    $passwd = hash('sha256',$all);

    $stmt->free_result();
    $stmt->close();

//如果登录成功，在关闭窗口前都不需要重新登录
function keepLogin($login_status,$user){
    if ($login_status==1){
        //单位：秒 十分钟
        $lifeTime = 1 * 600;
        session_set_cookie_params($lifeTime);
        session_start();
        //删除旧的session
        session_regenerate_id(true);
        //在index.php中的php代码处 -- 用来保持登录 ( session存储在服务器端的/var/lib/php/sessions/sess_ssoutl719v5ekt8qbrp57e0v4j::loginStatus|i:1;loginUser|s:5:"admin"; )
        //php.ini中有session.gc_maxlifetime=1440来控制服务器session文件的存活时间，但默认情况下，session.gc_probability ＝ 1，session.gc_divisor ＝100，也就是说有1%的可能性会启动GC。
        //GC的工作，就是扫描所有的session信息，用当前时间减去session的最后修改时间（modified date），同session.gc_maxlifetime参数进行比较，如果生存时间已经超过gc_maxlifetime，就把该session删除。
        $_SESSION['loginStatus']=1;
//        echo $user;
        $_SESSION['loginUser']=$user;

        //创建Token到数据库(memcached)和session(cookie) 解密base64后得到sha256+时间去memcached验证
        $yanzhi = "JainaProudmoore";
        $all = $user.$yanzhi;
        $hashToken = hash('sha256',$all)."--".date("Y-m-d h:i:s");
        $token = base64_encode($hashToken);

        //memcache方案
        $memcache = new Memcache;             //创建一个memcache对象
        $memcache->connect('localhost', 11211) or die ("Could not connect"); //连接Memcached服务器
        $memcache->set($user.'UserToken', $hashToken,0,600);        //设置一个变量到内存中，有效期十分钟

        $_SESSION['Token'] = $token;
    }else{
        session_start();
        session_regenerate_id(true);
        $_SESSION['loginStatus']=0;
    }
}

    //利用数据行数判定登录
    $stmt = $con->prepare("select count(*) as login_status from bysj.sysUser where user = ? and passwd = ?");
    $stmt->bind_param("ss",$user,$passwd);
    $stmt->bind_result($login_status);
    $stmt->execute();
    //判定登录--输出查询数据的行数
    while($stmt->fetch()){
     echo $login_status;
    }

    keepLogin($login_status,$user);

    $stmt->free_result();
    $stmt->close();
    mysqli_close($con);

?>