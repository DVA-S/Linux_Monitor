<?php
$hostIP = isset($_GET['hostIP']) ? htmlspecialchars($_GET['hostIP']) : '';
echo `sh /opt/Ping.sh $hostIP`
?>