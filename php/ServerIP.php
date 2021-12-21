<?php
echo `ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}' | awk -F '/' '{print $1}'`
?>