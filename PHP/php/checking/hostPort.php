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
echo `netstat -ntlp | awk '{print $4}' | grep : | sed 's/$/<br>/g'`;
?>