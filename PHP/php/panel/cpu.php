<?php
$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';

$con =null;
$data_time=null;
$cpu_used=null;
$datalist=array();

require_once "../linkDB.php";
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
$stmt = $con->prepare("select data_time,cpu_used from (select data_time,cpu_used from bysj.cpu order by data_time desc limit 0,20) AS cpu order by data_time;");
$stmt->bind_result($data_time,$cpu_used);
$stmt->execute();
if ($type == "datatime"){
    $num=0;
//    echo "[";
    while($stmt->fetch()){
        $datalist[$num]=$data_time;
        $num=$num++;
        echo "$datalist[$num]",",";
    }
//    echo "'$datalist[0]']";
}else if ($type == "cpuused"){
    $num=0;
//    echo "[";
    while($stmt->fetch()){
        $datalist[$num]=$cpu_used;
        $num=$num--;
        echo "$cpu_used",",";
    }
//    echo "'$datalist[0]']";
}else if ($type == "cpufree"){
    $num=0;
    $all=100;
    $cpufree=0;
//    echo "[";
    while($stmt->fetch()){
        $cpufree=$all-$cpu_used;
        $datalist[$num]=$cpu_used;
        $num=$num--;
        echo "$cpufree",",";
    }
//    echo "'$datalist[0]']";
}
?>