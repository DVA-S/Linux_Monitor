var xmlHttpdCpuTime;
var xmlHttpCpuUsed;
var xmlHttpCpuFree;

function runCpu(){
    xmlHttpdCpuTime = pgGet("http://192.168.157.128/php/panel/cpu.php?type=datatime",cpuback);
    xmlHttpCpuUsed = pgGet("http://192.168.157.128/php/panel/cpu.php?type=cpuused",cpuback);
    xmlHttpCpuFree = pgGet("http://192.168.157.128/php/panel/cpu.php?type=cpufree",cpuback);
}

function cpuback(){
    viewCharts('cpu',"占用","空闲","%");
}

runCpu();