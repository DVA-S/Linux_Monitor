<?php
$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';

$con =null;
$id = null;
$data_time=null;
$mem_used=null;
$mem_free=null;
$datalist=array();

require_once "../linkDB.php";
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
$stmt = $con->prepare("select id,data_time,mem_used,mem_free from (select id,data_time,mem_used,mem_free from bysj.memory order by data_time desc limit 0,20) AS BtoS order by data_time;");
$stmt->bind_result($id,$data_time,$mem_used,$mem_free);
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
}else if ($type == "memused"){
    $num=0;
//    echo "[";
    while($stmt->fetch()){
        $datalist[$num]=$mem_used;
        $num=$num--;
        echo "$mem_used",",";
    }
//    echo "'$datalist[0]']";
}else if($type == "memfree"){
    $num=0;
//    echo "[";
    while($stmt->fetch()){
        $datalist[$num]=$mem_free;
        $num=$num++;
        echo "$mem_free",",";
    }
//    echo "'$datalist[0]']";
}
?>