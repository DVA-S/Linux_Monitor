<?php
//邮件报警后端 需要先用php命令运行，它会不断的查看数据库写的报警条件
function emailSend(){
    //数据库查询阈值
    $cpu = null;
    $disk= null;
    $mem = null;
    $time= null;
    $email= null;

    $con = null;
    require "/var/www/html/php/linkDB.php";
    mysqli_select_db($con, "bysj");
    mysqli_set_charset($con, "utf8");
    $stmt = $con->prepare("select cpu,mem,disk,time,email from bysj.eMail;");
    $stmt->bind_result($cpu,$mem,$disk,$time,$email);
    $stmt->execute();

    while ($stmt->fetch()) {
        `echo \{$(date)\}-\{报警阈值：CpuUsed:$cpu%,DiskFree:$disk\B,MemFree:$mem MB,Time:$time S,Email:$email \} >> /var/log/jaina.log`;
    }
    $disk = str_replace('G','',$disk);

    $stmt->free_result();
    $stmt->close();

    sleep($time);

    //查询平均值
    $avg = null;
    $mem_free = null;
    $disk_free = null;
    $stmt = $con->prepare("select avg(cpu_used) as avg from (select data_time,cpu_used from bysj.cpu order by data_time desc limit 0,20) as cpu;");
    $stmt->bind_result($avg);
    $stmt->execute();
    while ($stmt->fetch()) {    }
    if ($avg > $cpu){
        `echo "CPU Used is $avg%!" | s-nail -s "CPU Alarm" $email`;
        `echo \{$(date)\}-\{邮件内容：CPU Alarm,CPU Used is $avg%!\}-\{收件人：$email\} >> /var/log/jaina.log`;
    }
    $stmt->free_result();
    $stmt->close();

    $stmt = $con->prepare("select avg(mem_free) as mem_free from (select data_time,mem_free from bysj.memory order by data_time desc limit 0,20) as mem;");
    $stmt->bind_result($mem_free);
    $stmt->execute();
    while ($stmt->fetch()) {    }
    if ($mem_free < $mem){
        `echo "Memory Free is $mem_free MB!" | s-nail -s "Memory Alarm" $email`;
        `echo \{$(date)\}-\{邮件内容：Memory Alarm,Memory Free is $mem_free MB!\}-\{收件人：$email\} >> /var/log/jaina.log`;
    }
    $stmt->free_result();
    $stmt->close();

    $stmt = $con->prepare("select avg(disk_free) as disk_free from (select data_time,disk_free from bysj.disk order by data_time desc limit 0,20) as disk;");
    $stmt->bind_result($disk_free);
    $stmt->execute();
    while ($stmt->fetch()) {    }
    if ($disk_free < $disk){
        `echo "Disk Free is $disk_free GB!" | s-nail -s "Disk Alarm" $email`;
        `echo \{$(date)\}-\{邮件内容：Disk Alarm,Disk Free is $disk_free GB!\}-\{收件人：$email\} >> /var/log/jaina.log`;
    }
    $stmt->free_result();
    $stmt->close();
}

while (true){
    emailSend();
}
?>