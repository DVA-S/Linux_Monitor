<?php
#cat /proc/cpuinfo | grep processor | wc -l -- cpu内核数量
#cat /proc/cpuinfo | sed -n '5p' | awk -F ':' '{print $2}' -- cpu型号
#cat /proc/cpuinfo | sed -n '5p' | awk -F ':' '{print $2}' -- cpu频率
#dmidecode |grep -A16 "Base Board Information$" | grep "Product Name:" |awk -F ':' '{print $2}' -- 主板型号
#dmidecode |grep -A16 "Memory Device$" | grep "MB$" | wc -l -- 内存条数
#dmidecode |grep -A16 "Memory Device$" | grep "MB$" -- 内存大小
#dmidecode |grep -A16 "Memory Device$" | grep "MHz$" -- 内存速度

$ipaddress = isset($_GET['ipaddress']) ? htmlspecialchars($_GET['ipaddress']) : '';
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';
$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';
$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';
//$ssh = `
//        expect -c "
//        spawn /usr/bin/ssh $username@$ipaddress
//        expect \"yes/no\"
//        send \"yes\r\"
//        expect \"password:\"
//        send \"$passwd\r\"
//        expect \"#\"
//        send \"dmidecode > /opt/device_all \r\"
//        expect eof
//        "
//        `;
//echo "<h3>CPU</h3><br>";
//echo `cat /proc/cpuinfo | grep processor | wc -l | sed 's/$/<br>/g' | sed 's/^/CPU核心：/g'`;
//echo `cat /proc/cpuinfo | sed -n '5p' | awk -F ':' '{print $2}' | sed 's/$/<br>/g' | sed 's/^/CPU型号：/g'`;
//echo `cat /proc/cpuinfo | sed -n '8p' | awk -F ':' '{print $2}' | sed 's/$/ GHz<br>/g' | sed 's/^/CPU频率：/g'`;

//echo "<h3>主板</h3><br>";
//echo `cat /opt/device_all |grep -A16 "Base Board Information$" | grep "Product Name:" |awk -F ':' '{print $2}' | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`;
//
//echo "<h3>内存</h3><br>";
//echo `cat /opt/device_all |grep -A16 "Memory Device$" | grep "MB$" | wc -l | sed 's/$/<br>/g' | sed 's/^/内存条数：/g'`;
//echo `cat /opt/device_all |grep -A16 "Memory Device$" | grep "MB$" | sed 's/$/<br>/g'`;
//echo `cat /opt/device_all |grep -A16 "Memory Device$" | grep "MHz$" | sed 's/$/<br>/g' | sed 's/^/内存速度：/g'`;
//
//echo "<h3>网卡</h3><br>";
//echo `lspci | grep Ethernet | sed 's/$/<br>/g' | sed 's/^/网卡型号：/g'`;
//echo `echo \'$(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g') | sed 's/$/<br>/g' | sed 's/^/网卡速度：/g'`;
//
//echo "<h3>硬盘</h3><br>";
//echo `lsblk -S | grep disk |wc -l | sed 's/$/<br>/g' | sed 's/^/硬盘数量：/g'`;
//echo `lspci | grep SCSI | sed 's/$/<br>/g' | sed 's/^/硬盘驱动器：/g'`;
//echo `lsblk | grep ^sd | awk '{print $4}' | sed 's/$/<br>/g' | sed 's/^/硬盘容量：/g' `;

switch ($type){
    case "cpu":
        echo "
        <tr>
            <th>CPU核心</th><th>CPU型号</th><th>CPU频率</th>
        </tr>
        ";
        echo "<tr>";
        echo `cat /proc/cpuinfo | grep processor | wc -l | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
        echo `cat /proc/cpuinfo | sed -n '5p' | awk -F ':' '{print $2}' | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
        echo `cat /proc/cpuinfo | sed -n '8p' | awk -F ':' '{print $2}' | sed 's/$/ GHz<\/td>/g' | sed 's/^/<td>/g'`;
        echo "</tr>";
        break;
    case "mother":
        echo "
        <tr>
            <th>主板型号</th>
        </tr>
        ";
        echo "<tr>";
        echo `cat /opt/device_all |grep -A16 "Base Board Information$" | grep "Product Name:" |awk -F ':' '{print $2}' | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`;
        echo "</tr>";
        break;
    case "memory":
        echo "
        <tr>
            <th>内存条数</th><th>内存大小</th><th>频率</th>
        </tr>
        ";
        echo "<tr>";
        echo `cat /opt/device_all |grep -A16 "Memory Device$" | grep "MB$" | wc -l | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`;
        echo `cat /opt/device_all |grep -A16 "Memory Device$" | grep "MB$" | sed 's/$/<\/th>/g' | sed 's/^/<td>/g'`;
        echo `cat /opt/device_all |grep -A16 "Memory Device$" | grep "MHz$" | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`;
        echo "</tr>";
        break;
    case "network":
        echo "
        <tr>
            <th>网卡型号</th><th>网卡速度</th>
        </tr>
        ";
        echo "<tr>";
        echo `lspci | grep Ethernet | sed 's/$/<\/td>/g' | sed 's/^/<td>/g' | sed -n '1p'`;
        echo `echo \'$(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g') | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`;
        echo "</tr>";
        break;
    case "disk":
        echo "
        <tr>
            <th>硬盘数量</th><th>磁盘驱动器</th><th>硬盘容量</th>
        </tr>
        ";
        echo "<tr>";
        echo `lsblk -S | grep disk |wc -l | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`;
        echo `lspci | grep SCSI | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`;
        echo `lsblk | grep ^sd | awk '{print $4}' | sed 's/$/<\/td>/g' | sed 's/^/<td>/g'`;
        echo "</tr>";
        break;
}
?>