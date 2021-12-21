<?php
//第一种方案
$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';
$token = isset($_GET['token']) ? htmlspecialchars($_GET['token']) : ''; //base64编码
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';

$hashAndData = explode("--",base64_decode($token));
//将日期转换为时间戳 注：时间戳即秒数
$now = strtotime(date("Y-m-d h:i:s"));
$datatime = strtotime($hashAndData[1]);

$memcache = new Memcache;             //创建一个memcache对象
$memcache->connect('localhost', 11211) or die ("Could not connect"); //连接Memcached服务器
$get_value = $memcache->get($username.'UserToken');   //从内存中取出key的值 格式：4fb27a4f7a4e69c74068871ae1e788813d89d058c723a1dd77041794b3dfb55f--2021-12-15 10:05:15

//空值验证、sha256+date验证、有效期验证
if (base64_decode($token) !== "" && $get_value !== "" && base64_decode($token) == $get_value && $now-$datatime <= 600) {
    $con = null;
    $data_time = null;
    $disk_read = null;
    $disk_write = null;
    $datalist = array();

    require_once "../linkDB.php";
    mysqli_select_db($con, "bysj");
// 设置编码，防止中文乱码
    mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
    $stmt = $con->prepare("select data_time,disk_read,disk_write from (select data_time,disk_read,disk_write from bysj.disk order by data_time desc limit 0,20) AS disk order by data_time;");
    $stmt->bind_result($data_time, $disk_read, $disk_write);
    $stmt->execute();

//数组datalist的意义不大，但要用它输出最后一个数值
    if ($type == "datatime") {
        $num = 0;
//    echo "[";
        while ($stmt->fetch()) {
            $datalist[$num] = $data_time;
            $num = $num++;
            echo "$datalist[$num]", ",";
//        echo "'$datalist[$num]'",",";
        }
//    echo "'$datalist[0]']";
    } else if ($type == "diskread") {
        $num = 0;
//    echo "[";
        while ($stmt->fetch()) {
            $datalist[$num] = $disk_read;
            $num = $num--;
            echo "$disk_read", ",";
        }
//    echo "'$datalist[0]']";
    } else if ($type == "diskwrite") {
        $num = 0;
//    echo "[";
        while ($stmt->fetch()) {
            $datalist[$num] = $disk_write;
            $num = $num--;
            echo "$disk_write", ",";
        }
//    echo "'$datalist[0]']";
    }
}
?>


