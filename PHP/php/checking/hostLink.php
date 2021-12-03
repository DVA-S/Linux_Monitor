<?php
$hostIP = isset($_GET['hostIP']) ? htmlspecialchars($_GET['hostIP']) : '';
echo `sh /opt/Ping.sh $hostIP`

//passthru('/opt/Ping.sh',$status);
//echo $status;

//system("/opt/Ping.sh '$hostIP'");
?>