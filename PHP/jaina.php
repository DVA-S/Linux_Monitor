<?php
//根据IP地址和密码添加主机
//向服务端数据库插入数据
$ipaddress = isset($_GET['ipaddress']) ? htmlspecialchars($_GET['ipaddress']) : '';
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';
$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';

`
expect -c "
    spawn /usr/bin/scp /opt/jaina.sh $username@$ipaddress:/usr/bin/jaina
    expect \"yes/no\"
    send \"yes\r\"
    expect \"password:\"
    send \"$passwd\r\"
    expect \"#\"
    send \"chmod a+x /usr/bin/jaina\r\"
    expect eof
    "
`
?>
