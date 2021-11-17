<?php
header("cache-control:no-cache,must-revalidate");
header("Content-Type:text/html;charset=utf-8");
$time = "2012-1-20 18:00:00";
$dt_element=explode(" ",$time);
$date_element=explode("-",$dt_element[0]);
$time_element=explode(":",$dt_element[1]);
$date = mktime($time_element[0],$time_element[1],$time_element[2],$date_element[1],$date_element[2],$date_element[0]);
$nowTime = time();
$showtime = date("北京时间Y年m月d日H:i:s",$date-$nowTime);
if($showtime<="北京时间1970年01月01日08:00:00"){
    echo "happy new year";
}
echo $showtime;
?>