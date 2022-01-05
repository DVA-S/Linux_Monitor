var xmlHttpdNetworkTime;
var xmlHttpNetworkUp;
var xmlHttpNetworkDown;

function runNetwork(){
    xmlHttpdNetworkTime = pgGet("https://jaina.com/php/panel/network.php?type=datatime&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),networkback);
    xmlHttpNetworkUp = pgGet("https://jaina.com/php/panel/network.php?type=networkup&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),networkback);
    xmlHttpNetworkDown = pgGet("https://jaina.com/php/panel/network.php?type=networkdown&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),networkback);
//    特别重要 这是刷新驱动函数
    loading();
}

function networkback(){
    viewCharts('network',"上传","下载","KB/s");
}

runNetwork();
