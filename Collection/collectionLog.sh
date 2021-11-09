#！/bin/bash
#采集日志到数据库
#2021年10月29日

#SSH登录日志
#以行号为标识

#从某一列到结尾
#sed -n 3p /var/log/auth.log | awk -F ' ' '{{for (i=4;i<=NF;i++)printf("%s ", $i);print ""}}'
# `cat -n /var/log/auth.log | wc -l` 为最新行号
logsInsert(){
	row=$1
	mysql -uroot -phtzy0000 -e "insert into bysj.logs (num,logs,data_time)
	values(
	$row,
	`echo \'$(sed -n ${row}p /var/log/auth.log | awk -F ' ' '{{for (i=4;i<=NF;i++)printf("%s ", $i);print ""}}')\'`,
	`date +"%Y%m%d%T" | sed 's/://g'`
	);"
}
logs(){
	row=`cat -n /var/log/auth.log | wc -l`
	logsInsert $row

	while(true)
	do
	{
		#如果上一条的总行数，小于现在的总行数，就一条一条往下插入，插入一条再比较一次
		nowRow=`cat -n /var/log/auth.log | wc -l`
		if [ $nowRow -gt $row ]
		then
		{
			#插入下一行
			row=$(($row+1))
			logsInsert $row
		}
		fi
	}
	done
}
logs