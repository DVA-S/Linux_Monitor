<?php
$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';

$con =null;
$data_time=null;
$network_up=null;
$network_down=null;
$datalist=array();

require_once "../linkDB.php";
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
$stmt = $con->prepare("select data_time,network_up,network_down from (select data_time,network_up,network_down from bysj.network order by data_time desc limit 0,20) AS network order by data_time;");
$stmt->bind_result($data_time,$network_up,$network_down);
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
}else if ($type == "networkup"){
    $num=0;
//    echo "[";
    while($stmt->fetch()){
        $datalist[$num]=$network_up;
        $num=$num--;
        echo "$network_up",",";
    }
//    echo "'$datalist[0]']";
}else if($type == "networkdown"){
    $num=0;
//    echo "[";
    while($stmt->fetch()){
        $datalist[$num]=$network_down;
        $num=$num++;
        echo "$network_down",",";
    }
//    echo "'$datalist[0]']";
}
?>