<?php
//邮件报警
//$cpu = isset($_GET['cpu']) ? htmlspecialchars($_GET['cpu']) : '';
//$disk = isset($_GET['disk']) ? htmlspecialchars($_GET['disk']) : '';
//$mem = isset($_GET['mem']) ? htmlspecialchars($_GET['mem']) : '';
//
//$token = isset($_GET['token']) ? htmlspecialchars($_GET['token']) : ''; //base64编码
//$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';
//
//$hashAndData = explode("--",base64_decode($token));
////将日期转换为时间戳 注：时间戳即秒数
//$now = strtotime(date("Y-m-d h:i:s"));
//$datatime = strtotime($hashAndData[1]);
//
//$memcache = new Memcache;             //创建一个memcache对象
//$memcache->connect('localhost', 11211) or die ("Could not connect"); //连接Memcached服务器
//$get_value = $memcache->get($username.'UserToken');   //从内存中取出key的值 格式：4fb27a4f7a4e69c74068871ae1e788813d89d058c723a1dd77041794b3dfb55f--2021-12-15 10:05:15
//
////空值验证、sha256+date验证、有效期验证
//if (base64_decode($token) !== "" && $get_value !== "" && base64_decode($token) == $get_value && $now-$datatime <= 600) {
    $con = null;
    $avg = null;
    $mem_free = null;
    $disk_free = null;
    require_once "../linkDB.php";
    mysqli_select_db($con, "bysj");
    mysqli_set_charset($con, "utf8");
    $stmt = $con->prepare("select avg(cpu_used) as avg from (select data_time,cpu_used from bysj.cpu order by data_time desc limit 0,20) as cpu;");
    $stmt->bind_result($avg);
    $stmt->execute();
    while ($stmt->fetch()) {
        echo $avg;
    }
    if ($avg > 10){
        `echo "CPU Used is $avg%!" | s-nail -s "Test" 1218304973@qq.com`;
    }
    $stmt->free_result();
    $stmt->close();

    $stmt = $con->prepare("select avg(mem_free) as mem_free from (select data_time,mem_free from bysj.memory order by data_time desc limit 0,20) as mem;");
    $stmt->bind_result($mem_free);
    $stmt->execute();
    while ($stmt->fetch()) {
        echo $mem_free;
    }
    if ($mem_free < 3000){
        `echo "Memory Free is $mem_free MB!" | s-nail -s "Test" 1218304973@qq.com`;
    }
    $stmt->free_result();
    $stmt->close();

    $stmt = $con->prepare("select avg(disk_free) as disk_free from (select data_time,disk_free from bysj.disk order by data_time desc limit 0,20) as disk;");
    $stmt->bind_result($disk_free);
    $stmt->execute();
    while ($stmt->fetch()) {
        echo $disk_free;
    }
    if ($disk_free < 10){
        `echo "Disk Free is $disk_free GB!" | s-nail -s "Test" 1218304973@qq.com`;
    }
    $stmt->free_result();
    $stmt->close();
//}
?>