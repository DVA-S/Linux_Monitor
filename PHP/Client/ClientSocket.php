<?php
//问题1：数据库不能远程连接 :: /etc/mysql/mysql.conf.d/mysql.cnf >> #bind-address = 127.0.0.1
$servername = "127.0.0.1";
$username = "root";
$password = "Esxi0000.";

// 创建连接
$con = new mysqli($servername, $username, $password);
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
//        echo $go."\n";

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
                    $msg = `jaina ping $hostIP`;
                    //$msg = <img src='/img/go.png' width='12%'> or <img src='/img/stop.png' width='12%'>
//                    echo "发送:" . $msg;
                    socket_write($msgsock, $msg, strlen($msg));
                }
                break;
            case "cpus":
                $msg = `jaina testcpus`;
                //$msg = 10:42:18 up 2 days, 3:14, 3 users, load average: 0.04, 0.05, 0.01
//                echo "发送:" . $msg;
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "disk":
                $msg = `jaina testdisk`;
                //$msg = 写入速度：1.0GB/s 读取速度：7.5GB/s
//                echo "发送:" . $msg;
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "nets":
                $msg = `jaina testnets`;
                //$msg = Hosted by China Telecom JiangSu 5G (Suzhou) [118.30 km]: 14.205 ms Download: 94.05 Mbit/s Upload: 40.35 Mbit/s
//                echo "发送:" . $msg;
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "port":
                $msg = `jaina testport`;
                //$msg = <tr> <td>ubuntu</td> <td>127.0.0.1</td> <td>tcp</td> <td>58468 </td> <td>2675841/php </td> </tr>
//                echo "发送:" . $msg;
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "cpui":
                $msg = `jaina testcpui`;
                //$msg = <td>2</td> <td> AMD Ryzen 5 2500U with Radeon Vega Mobile Gfx</td> <td> 2000.000 GHz</td>
//                echo "发送:" . $msg;
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "moth":
                $msg = `jaina testmoth`;
                //$msg = <td> 440BX Desktop Reference Platform</td>
//                echo "发送:" . $msg;
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "memo":
                $msg = `jaina testmemo`;
                //$msg = <td>1</td> <td> Size: 2048 MB</td>
//                echo "发送:" . $msg;
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "neti":
                $msg = `jaina testneti`;
                //$msg = <td>02:01.0 Ethernet controller: Intel Corporation 82545EM Gigabit Ethernet Controller (Copper) (rev 01)</td> <td>'1000Mb/s</td>
//                echo "发送:" . $msg;
                socket_write($msgsock, $msg, strlen($msg));
                break;
            case "diki":
                $msg = `jaina testdiki`;
                //$msg = <td>1</td> <td>00:10.0 SCSI storage controller: Broadcom / LSI 53c1030 PCI-X Fusion-MPT Dual Ultra320 SCSI (rev 01)</td> <td>50G</td>
//                echo "发送:" . $msg;
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
