var xmlHttpMemoryTime;
var xmlHttpMemoryUsed;
var xmlHttpMemoryFree;

function runMemory(){
    xmlHttpMemoryTime= pgGet("http://192.168.157.128/php/panel/memory.php?type=datatime&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),memoryback);
    xmlHttpMemoryUsed = pgGet("http://192.168.157.128/php/panel/memory.php?type=memused&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),memoryback);
    xmlHttpMemoryFree= pgGet("http://192.168.157.128/php/panel/memory.php?type=memfree&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),memoryback);
}
function memoryback() {
    viewCharts('memory',"已用","空闲","MB");
}
runMemory();
