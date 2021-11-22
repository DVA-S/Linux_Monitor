<?php
//dd if=/dev/zero of=/opt/test.dd  bs=1M count=4000 -- 写入速度
//dd if=/opt/test.dd of=/dev/null  bs=1M            -- 读取速度
$type = isset($_GET['type']) ? htmlspecialchars($_GET['type']) : '';
$ipaddress = isset($_GET['ipaddress']) ? htmlspecialchars($_GET['ipaddress']) : '';
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';
$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';

if ($type == "disk"){
    $ssh = `
        expect -c "
        spawn /usr/bin/ssh $username@$ipaddress
        expect \"yes/no\"
        send \"yes\r\"
        expect \"password:\"
        send \"$passwd\r\"
        expect \"#\"
        send \"dd if=/dev/zero of=/opt/test.dd bs=1M count=200 > /opt/w 2>&1 && dd if=/opt/test.dd of=/dev/null bs=1M > /opt/r 2>&1\r\"
        expect eof
        "
        `;
    echo `cat /opt/w | grep copied | awk -F ' ' '{print "写入速度：" $10 $11}' && cat /opt/r | grep copied | awk -F ' ' '{print "读取速度：" $10 $11}'`;
} else if ($type == "network"){
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
    echo `speedtest | grep :`;
} else if ($type == "cpu"){
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
    echo `uptime`;
}

?>