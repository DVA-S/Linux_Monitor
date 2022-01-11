<?php
$search = isset($_GET['search']) ? htmlspecialchars($_GET['search']) : '';
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
    $id  = null;
    $host_name = null;
    $host_type = null;
    $host_ip = null;
    $cpu_model  = null;
    $cpu_core = null;
    $mem_total = null;
    $swap_total = null;
    $network_model = null;
    $network_speed = null;
    $network_num = null;
    $disk_num = null;
    $disk_all = null;
    //这儿linkDB会把 username 赋值为数据库登录用户名 -- （已修改）
    require_once "../linkDB.php";
    mysqli_select_db($con,"bysj");
    // 设置编码，防止中文乱码
    mysqli_set_charset($con, "utf8");
    if ($search == null){
        echo file_get_contents('http://localhost/php/host/List.php?username='.$username.'&token='.$token);
    }else{
        echo "
        <tr>
            <th>主机名</th><th>类型</th><th>地址</th><th>内存</th><th>网卡速率</th><th>硬盘</th><th>操作</th>
        </tr>";
        //利用数据行数判定登录
        $stmt = $con->prepare("select id,host_name,host_type,host_ip,mem_total,network_speed,disk_all from bysj.host where host_name = ? or host_type = ? or host_ip = ?");
        $stmt->bind_param("sss",$search,$search,$search);
        $stmt->bind_result($id,$host_name,$host_type,$host_ip,$mem_total,$network_speed,$disk_all);
        $stmt->execute();
        while($stmt->fetch()){
            echo "
        <tr>
            <td>$host_name</td><td>$host_type</td><td>$host_ip</td><td>$mem_total MB</td><td>$network_speed</td><td>$disk_all</td><td id='host_$id' class='deleteBtn' onclick='deleteHost(this)'>删除</td>
        </tr>";
        }
    }
}
?>