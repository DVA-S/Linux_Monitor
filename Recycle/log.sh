collection.sh
#采集系统指标到数据库
#2021年9月14日19点24分0x489ddbcd
#Linux ubuntu 5.11.0-34-generic #36~20.04.1-Ubuntu SMP Fri Aug 27 08:06:32 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux

#cpu采集指数有规律的偏高，用vmstat替换。
#	`echo 100 $(top -bn 1 -i -c | grep "%Cpu(s):" | awk -F " " '{print $8}')| awk '{print $1-$2}'`,
#	`top -bn 1 -i -c | grep "%Cpu(s):" | awk -F " " '{print $8}'`,
# >> vmstat

##Memory -- 单位：MB
##优化 -- 2021年11月10日
# 1，使用/proc/meminfo中的MemAvailable代替free命令表示可用内存
# 2，移出mem_cache字段
# 3，使用/proc/swaps中的Used替代free命令表示已用交换分区
# 4，【free -m | grep Swap | awk '{print $4}'】 替换为 【free -m | sed -n '3p' | awk '{print $4}'】
#    系统语言为中文时无法运行

#Network - 网卡一
#sar命令需要sysstat包
#最多显示四张网卡名称，中间用空格隔开。
#print $5 rxkB/s表示接收速度，对应下载速度
#在同一时间端统计对比 - 四舍五入保留两位小数
#对比1
#系统每秒平均值 23.62	1,450.37
#脚本每秒平均值 23.93	1,439.49  -  差值：-0.31KB 10.88KB
#对比2
#系统每秒平均值 24.20	1,505.32
#脚本每秒平均值 23.19	1,492.81  -  差值：1.01KB  12.51KB
#对比3
#系统每两秒平均值 23.88	1,474.80
#脚本每两秒平均值 23.25	1,467.06  -  差值：0.33KB  7.74KB