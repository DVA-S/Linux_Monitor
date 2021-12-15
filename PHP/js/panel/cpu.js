var xmlHttpdCpuTime;
var xmlHttpCpuUsed;
var xmlHttpCpuFree;

function runCpu(){
    xmlHttpdCpuTime = pgGet("http://192.168.157.128/php/panel/cpu.php?type=datatime&username="+getCookie("UserName")+"&token="+getCookie("Token"),cpuback);
    xmlHttpCpuUsed = pgGet("http://192.168.157.128/php/panel/cpu.php?type=cpuused&username="+getCookie("UserName")+"&token="+getCookie("Token"),cpuback);
    xmlHttpCpuFree = pgGet("http://192.168.157.128/php/panel/cpu.php?type=cpufree&username="+getCookie("UserName")+"&token="+getCookie("Token"),cpuback);
}

function cpuback(){
    viewCharts('cpu',"占用","空闲","%");
}

runCpu();