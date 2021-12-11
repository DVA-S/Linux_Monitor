<!-- 系统设置 -->
<div class="setup" id="setup" style="background: inherit;">
    <!--  组件信息 -->
    <div onmouseover="(function (){
                    document.getElementById('package_info').style.display='block';
                    document.getElementById('package_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';})()"
         onmouseout="(function (){
                    document.getElementById('package_info').style.display='block';
                    document.getElementById('package_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginOk';})()"
         class="setup_package" style="left: 6%;top: 10%;"
    >
        <!-- 标题 -->
        <div class="sysTitle">
            <h2 class="sysTitleTitle">组  件  信  息</h2>
        </div>
        <!-- 内容 -->
        <div class="sysBody" id="package_info">
            <br><br>
            <h2 class="sysBodyTitle">组件信息</h2>
            <code style="text-shadow: #888 2px 2px 3px;">
                <?php
                echo "<br>";
                echo `echo "<b>PHP版本：</b><br>" && php -v | sed -n '1p' | sed 's/$/<br>/g'`;
                echo "<br>";
                echo `echo "<b>Apache2版本：</b><br>" && apache2 -v | sed 's/$/<br>/g'`;
                echo "<br>";
                echo `echo "<b>MySQL版本：</b><br>" && mysql --version`;
                ?>
            </code>
        </div>
    </div>
    <!--  时间 -->
    <div onmouseover="(function (){
                    document.getElementById('clock_info').style.display='block';
                    document.getElementById('clock_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';})()"
         onmouseout="(function (){
                    document.getElementById('clock_info').style.display='block';
                    document.getElementById('clock_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginOk';})()"
         class="setup_clock" style="left: 29%;top: -65%;"
    >
        <!-- 标题 -->
        <div class="sysTitle" style="height: 100%;width: 100%;border-radius: 3%;">
            <h2 class="sysTitleTitle">系  统  脚  本</h2>
        </div>
        <!-- 内容 -->
        <div class="sysBody" id="clock_info">
            <br><br>
            <h2 class="sysBodyTitle">系统脚本</h2>
            <br><br>

        </div>
    </div>
    <!--  关于 -->
    <div onmouseover="(function (){
                    document.getElementById('about_info').style.display='block';
                    document.getElementById('about_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';})()"
         onmouseout="(function (){
                    document.getElementById('about_info').style.display='block';
                    document.getElementById('about_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginOk';})()"
         class="setup_about" style="left: 52%;top: -140%;"
    >
        <!-- 标题 -->
        <div class="sysTitle" style="height: 100%;width: 100%;border-radius: 3%;">
            <h2 class="sysTitleTitle">邮  件  告  警</h2>
        </div>
        <!-- 内容 -->
        <div class="sysBody" id="about_info">
            <br><br>
            <h2 class="sysBodyTitle">告警设置</h2>
            <br><br>
            <p>触发条件：</p><br>
            <p>收件人：</p>
        </div>
    </div>
    <!--  退出登录 -->
    <div onmouseover="(function (){
                    document.getElementById('exit_info').style.display='block';
                    document.getElementById('exit_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';})()"
         onmouseout="(function (){
                    document.getElementById('exit_info').style.display='block';
                    document.getElementById('exit_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginOk';})()"
         class="setup_exit" style="left: 75%;top: -215%;">
        <!-- 标题 -->
        <div class="sysTitle" style="">
            <h2 class="sysTitleTitle">退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</h2>
        </div>
        <!-- 内容 -->
        <div class="sysBody" id="exit_info">
            <br><br>
            <h2 class="sysBodyTitle">退  出</h2>
            <br><br>
            <button onclick="loginout()" style="height: 20vh;width: 10vw;border-radius: 100%;left: 15%;top: 10%;">退出登录</button>
        </div>
    </div>
</div>
2021年12月10日16点59分

















<?php
//$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';

$con =null;
$data_time=null;
$disk_read=null;
$disk_write=null;
$datalist=array();
$readlist=array();
$writelist=array();

require_once "../linkDB.php";
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
$stmt = $con->prepare("select data_time,disk_read,disk_write from (select data_time,disk_read,disk_write from bysj.disk order by data_time desc limit 0,20) AS disk order by data_time;");
$stmt->bind_result($data_time,$disk_read,$disk_write);
$stmt->execute();

//数组datalist的意义不大，但要用它输出最后一个数值
//if ($type == "datatime"){

echo "[";
while($stmt->fetch()){
    echo "'$data_time'",",";
}
echo "'$data_time'","]";

//echo "[";
//$stmt->execute();
//while($stmt->fetch()){
//    echo "$disk_read",",";
//}
//echo "$disk_read","]X";
//
//echo "[";
//$stmt->execute();
//while($stmt->fetch()){
//    echo "$disk_write",",";
//}
//echo "$disk_write","]";




//第一种方案
//$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';
//
//$con =null;
//$data_time=null;
//$disk_read=null;
//$disk_write=null;
//$datalist=array();
//
//require_once "../linkDB.php";
//mysqli_select_db($con,"bysj");
//// 设置编码，防止中文乱码
//mysqli_set_charset($con, "utf8");
////利用数据行数判定登录
//$stmt = $con->prepare("select data_time,disk_read,disk_write from (select data_time,disk_read,disk_write from bysj.disk order by data_time desc limit 0,20) AS disk order by data_time;");
//$stmt->bind_result($data_time,$disk_read,$disk_write);
//$stmt->execute();
//
////数组datalist的意义不大，但要用它输出最后一个数值
//if ($type == "datatime"){
//    $num=0;
//    echo "[";
//    while($stmt->fetch()){
//        $datalist[$num]=$data_time;
//        $num=$num++;
//        echo "'$datalist[$num]'",",";
//    }
//    echo "'$datalist[0]']";
//}else if ($type == "diskread"){
//    $num=0;
//    echo "[";
//    while($stmt->fetch()){
//        $datalist[$num]=$disk_read;
//        $num=$num--;
//        echo "'$disk_read'",",";
//    }
//    echo "'$datalist[0]']";
//}else if ($type == "diskwrite"){
//    $num=0;
//    echo "[";
//    while($stmt->fetch()){
//        $datalist[$num]=$disk_write;
//        $num=$num--;
//        echo "'$disk_write'",",";
//    }
//    echo "'$datalist[0]']";
//}

?>


