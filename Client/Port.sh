#!/usr/bash
#$allPort = `echo $(netstat -ntl | grep :::* | awk -F ' ' '{print "<td>",$1,"</td>","<td>",$4,"</td>","<td>",$7,"</td>"}' | wc -l)`;
#$i = 0;
#while( $i < $allPort ){
#    $i=$i+1;
#    echo "<tr>";
#    echo `hostname | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
#    echo `ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}' | awk -F '/' '{print $1}' | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
#    echo `netstat -ntl | grep :::* | awk -F ' ' '{print "<td>",$1,"</td>","<td>",$4,"</td>","<td>",$7,"</td>"}' | sed -n '$i p'`;
#    echo "</tr>";
#}
allPort=`netstat -ntlp | grep LISTEN | wc -l`
i=0
while [ $i -lt $allPort ];
do
      i=`expr $i + 1`
      echo "<tr>";
      echo `hostname | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
      echo `ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}' | awk -F '/' '{print $1}' | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
      echo `netstat -ntlp | grep LISTEN | awk '{print $1}' | sed -n ${i}p | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
      echo `netstat -ntlp | grep LISTEN | awk '{print $4}' | sed -n ${i}p | awk -F ':' '{print $2,$4}' | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
      echo `netstat -ntlp | grep LISTEN | awk '{print $7,$8,$9}' | sed -n ${i}p | sed 's/^/<td>/g' | sed 's/$/<\/td>/g'`;
      echo "</tr>";
done
