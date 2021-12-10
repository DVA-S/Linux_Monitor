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

//    echo $all."\n";

    $passwd = hash('sha256',$all);
//    echo $passwd;

    $stmt->free_result();
    $stmt->close();

    //利用数据行数判定登录
    $stmt = $con->prepare("select count(*) as login_status from bysj.sysUser where user = ? and passwd = ?");
    $stmt->bind_param("ss",$user,$passwd);
    $stmt->bind_result($login_status);
    $stmt->execute();

    //判定登录--输出查询数据的行数
    while($stmt->fetch()){
     echo $login_status;
    }

    //如果登录成功，在关闭窗口前都不需要重新登录
    function keepLogin($login_status,$user){
        if ($login_status==1){
            $lifeTime = 1 * 3600;
            session_set_cookie_params($lifeTime);
            session_start();
            session_regenerate_id(true);
            //在index.php中的php代码处 -- 用来保持登录 ( session存储在服务器端的/var/lib/php/sessions/sess_ssoutl719v5ekt8qbrp57e0v4j::loginStatus|i:1;loginUser|s:5:"admin"; )
            //php.ini中有session.gc_maxlifetime=1440来控制服务器session文件的存活时间，但默认情况下，session.gc_probability ＝ 1，session.gc_divisor ＝100，也就是说有1%的可能性会启动GC。
            //GC的工作，就是扫描所有的session信息，用当前时间减去session的最后修改时间（modified date），同session.gc_maxlifetime参数进行比较，如果生存时间已经超过gc_maxlifetime，就把该session删除。
            $_SESSION['loginStatus']=1;
            //这句干嘛来着？忘了…… 也许没用到
            $_SESSION['loginUser']=$user;
            //这儿将来会产生一个随机的用户标志，标志将会在别处使用前被还原
        }else{
            session_start();
            $_SESSION['loginStatus']=0;
            $_SESSION['loginUser']=null;
        }
    }
    keepLogin($login_status,$user);

    $stmt->free_result();
    $stmt->close();
    mysqli_close($con);

?>