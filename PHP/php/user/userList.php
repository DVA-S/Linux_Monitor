<?php
//查询系统类型的数量
//第一次：require_once 引入php >> 无论引入多少只能显示一个输出，而且会扰乱布局
//第二次：封装类 >> 同上
//第三次：转为接口 >> OK 不过,不安全(还要区分用户)
//$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';
$con = null;
$id  = null;
$usernaem = null;
$passwd = null;

require_once "../linkDB.php";
mysqli_select_db($con,"bysj");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");
//利用数据行数判定登录
$stmt = $con->prepare("select id,username,passwd from bysj.user;");
$stmt->bind_result($id,$usernaem,$passwd);
$stmt->execute();
echo "<table border='0' class='hostList' style=''>
    <tr>
        <th>ID</th><th>用户名</th><th>密码</th>
    </tr>";
while($stmt->fetch()){
    echo "
    <tr>
        <td>$id</td><td>$usernaem</td><td>$passwd</td>
    </tr>";
}
echo "</table>";
?>