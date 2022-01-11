var xmlHttpDiskTime;
var xmlHttpDiskWrite;
var xmlHttpDiskRead;

function runDisk(){
    xmlHttpDiskTime = pgGet("https://jaina.com/php/panel/disk.php?type=datatime&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),diskback);
    xmlHttpDiskWrite = pgGet("https://jaina.com/php/panel/disk.php?type=diskwrite&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),diskback);
    xmlHttpDiskRead = pgGet("https://jaina.com/php/panel/disk.php?type=diskread&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),diskback);
}
function diskback(){
    viewCharts('disk',"写速度","读速度","KB/s");
}
runDisk();