var xmlHttpMemoryTime;
var xmlHttpMemoryUsed;
var xmlHttpMemoryFree;

function runMemory(){
    xmlHttpMemoryTime= pgGet("https://jaina.com/php/panel/memory.php?type=datatime&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),memoryback);
    xmlHttpMemoryUsed = pgGet("https://jaina.com/php/panel/memory.php?type=memused&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),memoryback);
    xmlHttpMemoryFree= pgGet("https://jaina.com/php/panel/memory.php?type=memfree&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),memoryback);
}
function memoryback() {
    viewCharts('memory',"已用","空闲","MB");
}
runMemory();
