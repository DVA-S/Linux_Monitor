<?php
//根据IP地址和密码添加主机
$ipaddress = isset($_GET['ipaddress']) ? htmlspecialchars($_GET['ipaddress']) : '';
$username = isset($_GET['username']) ? htmlspecialchars($_GET['username']) : '';
$passwd = isset($_GET['passwd']) ? htmlspecialchars($_GET['passwd']) : '';

//$ssh = `ssh $username@$ipaddress  `;
$ssh = `
    expect -c "
        spawn /usr/bin/ssh $username@$ipaddress
	    expect \"yes/no\"
	    send \"yes\r\"
	    expect \"password:\"
	    send \"$passwd\r\"
	    expect \"#\"
	    send \"sh /mnt/hgfs/bysj-for-wxk/Collection/collectionHostInfo.sh\r\"
	    expect eof
    "
`;
echo "<pre>$ssh</pre>";
?>