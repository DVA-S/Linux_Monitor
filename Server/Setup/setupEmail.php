<?php
//邮件报警后端
function emailSend(){
    //数据库查询阈值
    $cpu = null;
    $disk= null;
    $mem = null;
    $time= null;

    $con = null;
    require "/var/www/html/php/linkDB.php";
    mysqli_select_db($con, "bysj");
    mysqli_set_charset($con, "utf8");
    $stmt = $con->prepare("select cpu,mem,disk,time from bysj.eMail;");
    $stmt->bind_result($cpu,$mem,$disk,$time);
    $stmt->execute();

    while ($stmt->fetch()) {
        echo "报警阈值：".PHP_EOL;
        echo "CpuUsed:".$cpu."%,"."DiskFree:".$disk,"B,"."MemFree:".$mem,"MB,"."Time:".$time."S".PHP_EOL;
    }
    $disk = str_replace('G','',$disk);

    $stmt->free_result();
    $stmt->close();

    sleep($time);
//    $con = null;

    //查询平均值
    $avg = null;
    $mem_free = null;
    $disk_free = null;
//    require "/var/www/html/php/linkDB.php";
    $stmt = $con->prepare("select avg(cpu_used) as avg from (select data_time,cpu_used from bysj.cpu order by data_time desc limit 0,20) as cpu;");
    $stmt->bind_result($avg);
    $stmt->execute();
    while ($stmt->fetch()) {
        echo "CpuUsed:".$avg.PHP_EOL;
    }
    if ($avg > $cpu){
        `echo "CPU Used is $avg%!" | s-nail -s "Test" 1218304973@qq.com`;
    }
    $stmt->free_result();
    $stmt->close();

    $stmt = $con->prepare("select avg(mem_free) as mem_free from (select data_time,mem_free from bysj.memory order by data_time desc limit 0,20) as mem;");
    $stmt->bind_result($mem_free);
    $stmt->execute();
    while ($stmt->fetch()) {
        echo "MemFree:".$mem_free.PHP_EOL;
    }
    if ($mem_free < $mem){
        `echo "Memory Free is $mem_free MB!" | s-nail -s "Test" 1218304973@qq.com`;
    }
    $stmt->free_result();
    $stmt->close();

    $stmt = $con->prepare("select avg(disk_free) as disk_free from (select data_time,disk_free from bysj.disk order by data_time desc limit 0,20) as disk;");
    $stmt->bind_result($disk_free);
    $stmt->execute();
    while ($stmt->fetch()) {
        echo "DiskFree:".$disk_free.PHP_EOL;
    }
    if ($disk_free < $disk){
        `echo "Disk Free is $disk_free GB!" | s-nail -s "Test" 1218304973@qq.com`;
    }
    $stmt->free_result();
    $stmt->close();
}

while (true){
    emailSend();
}
?>