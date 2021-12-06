#！/bin/bash
#apache2日志查看器

#程序开始时的行数
row=`cat -n /var/log/apache2/error.log | wc -l`

while(true)
do
{
	#如果上一条的总行数，小于现在的总行数，就一条一条往下插入，插入一条再比较一次
	#程序运行过程中增加后的行数，统计增加了几行。然后一行一行将差距填平
	nowRow=`cat -n /var/log/apache2/error.log | wc -l`
	if [ $nowRow -gt $row ]
	then
	{
		#插入下一行
		row=$(($row+1))
		sed -n ${row}p /var/log/apache2/error.log
	}
	fi
}
done