<?php
$ipaddress = isset($_GET['ipaddress']) ? htmlspecialchars($_GET['ipaddress']) : '';
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';
$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';

$ssh = `
        expect -c "
        spawn /usr/bin/ssh $username@$ipaddress
        expect \"yes/no\"
        send \"yes\r\"
        expect \"password:\"
        send \"$passwd\r\"
        expect eof
        "
        `;

echo "
<tr>
    <th>主机名</th><th>地址</th><th>端口类型</th><th>端口</th><th>进程</th>
</tr>
";

$allPort = `echo $(netstat -ntl | grep :::* | awk -F ' ' '{print "<td>",$1,"</td>","<td>",$4,"</td>","<td>",$7,"</td>"}' | wc -l)`;
$i = 0;
while( $i < $allPort ){
    $i=$i+1;
    echo "<tr>";
    echo `hostname | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
    echo `ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}' | awk -F '/' '{print $1}' | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
    echo `netstat -ntl | grep :::* | awk -F ' ' '{print "<td>",$1,"</td>","<td>",$4,"</td>","<td>",$7,"</td>"}' | sed -n '$i p'`;
    echo "</tr>";
}

?>