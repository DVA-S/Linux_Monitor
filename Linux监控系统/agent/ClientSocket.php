<?php
require_once "/var/www/html/php/functionUse/getConfig.php";

// 创建连接
$con = new mysqli(getConfig('DbHost'), getConfig('DbUser'), getConfig('DbPasswd'));
// 选择数据库
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");

//设置无限请求超时时间
set_time_limit(0);

$ip = `ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}' | awk -F '/' '{print $1}'`;
$port = 1094;

//创建socket
if(($sock = socket_create(AF_INET,SOCK_STREAM,SOL_TCP)) < 0) {
//    echo "socket_create() 失败的原因是:".socket_strerror($sock)."\n";
    exit();
}
//把socket绑定在一个IP地址和端口上
if(($ret = socket_bind($sock,$ip,$port)) < 0) {
//    echo "socket_bind() 失败的原因是:".socket_strerror($ret)."\n";
    exit();
}
//监听由指定socket的所有连接
if(($ret = socket_listen($sock,4)) < 0) {
//    echo "socket_listen() 失败的原因是:".socket_strerror($ret)."\n";
    exit();
}

do{
    //接收一个Socket连接
    if (($msgsock = socket_accept($sock)) < 0) {
//        echo "socket_accept() failed: reason: " . socket_strerror($msgsock) . "\n";
        break;
    } else {
        $buf = socket_read($msgsock, 2048);
//        echo $buf."\n";
        //从第0个字符,往后取4个字符
        //消息参数 ping:ping177  cpus:cpus disk:disk nets:nets
        $go = substr($buf,0,4);

        switch ($go) {
            case "ping":
                $hostIP = null;
                //从第四个字符取到最后
                $hostID = substr($buf, 4);
//                echo $hostID . "\n";
                $stmt = $con->prepare("select host_ip from bysj.host where id = ?");
                $stmt->bind_param("s", $hostID);
                $stmt->bind_result($hostIP);
                $stmt->execute();
                while ($stmt->fetch()) {
                    $msg = `/etc/jaina/server/server.sh ping $hostIP`;
                    //$msg = <img src='/img/go.png' width='12%'> or <img src='/img/stop.png' width='12%'>
                    socket_write($msgsock, $msg, strlen($msg));
                }
                break;
            case "cpus":
                $msg = `/etc/jaina/agent/agent.sh testcpus`;
                //$msg = 10:42:18 up 2 days, 3:14, 3 users, load average: 0.04, 0.05, 0.01
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "disk":
                $msg = `/etc/jaina/agent/agent.sh testdisk`;
                //$msg = 写入速度：1.0GB/s 读取速度：7.5GB/s
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "nets":
                $msg = `/etc/jaina/agent/agent.sh testnets`;
                //$msg = Hosted by China Telecom JiangSu 5G (Suzhou) [118.30 km]: 14.205 ms Download: 94.05 Mbit/s Upload: 40.35 Mbit/s
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "port":
                $msg = `/etc/jaina/agent/agent.sh testport`;
                echo $msg;
                //$msg = <tr> <td>ubuntu</td> <td>127.0.0.1</td> <td>tcp</td> <td>58468 </td> <td>2675841/php </td> </tr>
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "cpui":
                $msg = `/etc/jaina/agent/agent.sh testcpui`;
                //$msg = <td>2</td> <td> AMD Ryzen 5 2500U with Radeon Vega Mobile Gfx</td> <td> 2000.000 GHz</td>
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "moth":
                $msg = `/etc/jaina/agent/agent.sh testmoth`;
                //$msg = <td> 440BX Desktop Reference Platform</td>
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "memo":
                $msg = `/etc/jaina/agent/agent.sh testmemo`;
                //$msg = <td>1</td> <td> Size: 2048 MB</td>
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "neti":
                $msg = `/etc/jaina/agent/agent.sh testneti`;
                //$msg = <td>02:01.0 Ethernet controller: Intel Corporation 82545EM Gigabit Ethernet Controller (Copper) (rev 01)</td> <td>'1000Mb/s</td>
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "diki":
                $msg = `/etc/jaina/agent/agent.sh testdiki`;
                //$msg = <td>1</td> <td>00:10.0 SCSI storage controller: Broadcom / LSI 53c1030 PCI-X Fusion-MPT Dual Ultra320 SCSI (rev 01)</td> <td>50G</td>
                socket_write($msgsock, $msg, strlen($msg));
                break;
            default:
                break;
        }
    }
    //关闭socket
    socket_close($msgsock);
}while(true);

?>
