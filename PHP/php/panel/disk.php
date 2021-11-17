<?php

//第一种方案
$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';

$con =null;
$data_time=null;
$disk_read=null;
$disk_write=null;
$datalist=array();

require_once "../linkDB.php";
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
$stmt = $con->prepare("select data_time,disk_read,disk_write from (select data_time,disk_read,disk_write from bysj.disk order by data_time desc limit 0,20) AS disk order by data_time;");
$stmt->bind_result($data_time,$disk_read,$disk_write);
$stmt->execute();

//数组datalist的意义不大，但要用它输出最后一个数值
if ($type == "datatime"){
    $num=0;
//    echo "[";
    while($stmt->fetch()){
        $datalist[$num]=$data_time;
        $num=$num++;
        echo "$datalist[$num]",",";
//        echo "'$datalist[$num]'",",";
    }
//    echo "'$datalist[0]']";
}else if ($type == "diskread"){
    $num=0;
//    echo "[";
    while($stmt->fetch()){
        $datalist[$num]=$disk_read;
        $num=$num--;
        echo "$disk_read",",";
    }
//    echo "'$datalist[0]']";
}else if ($type == "diskwrite"){
    $num=0;
//    echo "[";
    while($stmt->fetch()){
        $datalist[$num]=$disk_write;
        $num=$num--;
        echo "$disk_write",",";
    }
//    echo "'$datalist[0]']";
}

?>


