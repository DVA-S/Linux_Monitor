#！/bin/bash
ping -c 3 $1 > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "<img src='./img/go.png' width='12%'>";
    else
      echo "<img src='./img/stop.png' width='12%'>";
fi
resat