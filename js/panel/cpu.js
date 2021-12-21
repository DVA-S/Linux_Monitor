var xmlHttpdCpuTime;
var xmlHttpCpuUsed;
var xmlHttpCpuFree;

function runCpu(){
    xmlHttpdCpuTime = pgGet("http://127.0.0.1/php/panel/cpu.php?type=datatime&username="+getCookie("UserName")+"&token="+getCookie("Token"),cpuback);
    xmlHttpCpuUsed = pgGet("http://127.0.0.1/php/panel/cpu.php?type=cpuused&username="+getCookie("UserName")+"&token="+getCookie("Token"),cpuback);
    xmlHttpCpuFree = pgGet("http://127.0.0.1/php/panel/cpu.php?type=cpufree&username="+getCookie("UserName")+"&token="+getCookie("Token"),cpuback);
}

function cpuback(){
    viewCharts('cpu',"占用","空闲","%");
}

runCpu();