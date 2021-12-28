var xmlHttpCpuTime;
var xmlHttpCpuUsed;
var xmlHttpCpuFree;

//根据参数区分主机,这个参数预计为数据库中的 “host_ip” 将此参数传入下面函数
function runCpu(){
    xmlHttpCpuTime = pgGet("http://192.168.157.128/php/panel/cpu.php?type=datatime&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),cpuback);
    xmlHttpCpuUsed = pgGet("http://192.168.157.128/php/panel/cpu.php?type=cpuused&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),cpuback);
    xmlHttpCpuFree = pgGet("http://192.168.157.128/php/panel/cpu.php?type=cpufree&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),cpuback);
}

function cpuback(){
    viewCharts('cpu',"占用","空闲","%");
}

runCpu();