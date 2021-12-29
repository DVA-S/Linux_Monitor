<?php
//邮件报警后端 需要先用php命令运行，它会不断的查看数据库写的报警条件
function emailSend()
{
    //数据库查询阈值
    $host_ip = null;
    $cpu = null;
    $disk = null;
    $mem = null;
    $time = null;
    $email = null;
    $arryList = array();

    $con = null;
    require "/var/www/html/php/linkDB.php";
    mysqli_select_db($con, "bysj");
    mysqli_set_charset($con, "utf8");

    //查询报警阈值
    $stmt = $con->prepare("select host_ip,cpu,mem,disk,time,email from bysj.eMail;");
    $stmt->bind_result($host_ip, $cpu, $mem, $disk, $time, $email);
    $stmt->execute();

    $i = 0;
    while ($stmt->fetch()) {
        `echo \{$(date)\}-\{主机：$host_ip,报警阈值：CpuUsed:$cpu%,DiskFree:$disk\GB,MemFree:$mem\MB,Time:$time\S,Email:$email\} >> /var/log/jaina.log`;
        $arryList[$i] = $host_ip;
        $i = $i + 1;
    }
    $stmt->free_result();
    $stmt->close();

    //轮询间隔
    sleep($time);

    $arrlength = count($arryList);
    for ($x = 0; $x < $arrlength; $x++) {
        //查询CPU平均值
        $avg = null;
        $mem_free = null;
        $disk_free = null;
        $stmtCPU = $con->prepare('select avg(cpu_used) as avg from (select data_time,cpu_used from bysj.cpu where host_ip = ? order by data_time desc limit 0,20) as cpu;');
        $stmtCPU->bind_param('s', $arryList[$x]);
        $stmtCPU->bind_result($avg);
        $stmtCPU->execute();
        while ($stmtCPU->fetch()) {
            if ($avg > $cpu) {
                `echo "主机：$arryList[$x], 内容：CPU Used is $avg%!" | s-nail -s "CPU Alarm" $email`;
                `echo \{$(date)\}-\{邮件内容：主机：$arryList[$x], CPU Alarm,CPU Used is $avg%!\}-\{收件人：$email\} >> /var/log/jaina.log`;
            }
        }
        $stmtCPU->free_result();
        $stmtCPU->close();

        //查询内存平均值
        $stmtMem = $con->prepare('select avg(mem_free) as mem_free from (select data_time,mem_free from bysj.memory where host_ip = ? order by data_time desc limit 0,20) as mem;');
        $stmtMem->bind_param('s', $arryList[$x]);
        $stmtMem->bind_result($mem_free);
        $stmtMem->execute();
        while ($stmtMem->fetch()) {
            if ($mem_free < $mem) {
                `echo "主机：$arryList[$x],内容：Memory Free is $mem_free MB!" | s-nail -s "Memory Alarm" $email`;
                `echo \{$(date)\}-\{邮件内容：主机：$arryList[$x], Memory Alarm,Memory Free is $mem_free MB!\}-\{收件人：$email\} >> /var/log/jaina.log`;
            }
        }
        $stmtMem->free_result();
        $stmtMem->close();

        //查询磁盘占用平均值
        $stmtDisk = $con->prepare('select avg(disk_free) as disk_free from (select data_time,disk_free from bysj.disk where host_ip = ? order by data_time desc limit 0,20) as disk;');
        $stmtDisk->bind_param('s', $arryList[$x]);
        $stmtDisk->bind_result($disk_free);
        $stmtDisk->execute();
        while ($stmtDisk->fetch()) {
            if ($disk_free < $disk) {
                `echo "主机：$arryList[$x],Disk Free is $disk_free GB!" | s-nail -s "Disk Alarm" $email`;
                `echo \{$(date)\}-\{邮件内容：主机：$arryList[$x], Disk Alarm,Disk Free is $disk_free GB!\}-\{收件人：$email\} >> /var/log/jaina.log`;
            }
        }
        $stmtDisk->free_result();
        $stmtDisk->close();
    }
}
while (true){
    emailSend();
}
?>