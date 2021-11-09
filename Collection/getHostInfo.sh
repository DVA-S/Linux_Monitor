#Host
host(){
	mysql -uroot -phtzy0000 -e "
	insert into bysj.host (host_name,host_type,host_ip,cpu_model,cpu_core,mem_total,swap_total,network_model,network_speed,network_num,disk_num) values
	(
	`echo \'$(hostname)\'`,
	`echo \'$(lsb_release -a 2> /dev/null | grep "Distributor ID:" | awk -F ' ' '{print $3}')\'`,
	`echo \'$(ip a | grep inet | sed -n '3p' | awk -F ' ' '{print $2}')\'`,
	`echo \'$(lscpu | grep "Model name:"|awk -F ":" '{print $2}')\' | sed 's/ /-/g' | sed "s/'-/'/g"`,
	`echo $(lscpu | grep -n "^CPU(s):"|awk -F ":" '{print $3}')`,
	`echo $(free -m | grep Mem | awk '{print $2}')`,
	`echo $(free -m | grep Swap | awk '{print $2}')`,
	`echo \'$(lspci | grep Ethernet | head -n 1 | awk -F ' ' '{print $4,$5,$6,$7,$8,$9,$10}')\'`,
	`echo \'$(ethtool $(ip a | grep "<" | awk -F ":" '{print $2}'| sed 's/^ //g' | sed -n '2p') |  grep -i speed | awk -F ":" '{print $2}' | sed 's/^ //g')\'`,
	`lspci | grep Ethernet | wc -l`,
	`lsblk -S | grep disk |wc -l`
	);"
}