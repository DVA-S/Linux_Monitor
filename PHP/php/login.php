<?php
    $user = isset($_POST['user']) ? htmlspecialchars($_POST['user']) : '';
    $passwd = isset($_POST['passwd']) ? htmlspecialchars($_POST['passwd']) : '';
    $con = null;
    $login_status = null;

    require_once "linkDB.php";
    // 选择数据库
    mysqli_select_db($con,"bysj");
    // 设置编码，防止中文乱码
    mysqli_set_charset($con, "utf8");
    //利用数据行数判定登录
    $stmt = $con->prepare("SELECT count(*) as login_status FROM bysj.user WHERE username = ? and passwd = ?");
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
            session_start();
            $_SESSION['loginStatus']=1;
            $_SESSION['loginUser']=$user;
//            这儿将来会产生一个随机的用户标志，标志将会在别处使用前被还原
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