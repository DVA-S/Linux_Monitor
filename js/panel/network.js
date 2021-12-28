var xmlHttpdNetworkTime;
var xmlHttpNetworkUp;
var xmlHttpNetworkDown;

function runNetwork(){
    xmlHttpdNetworkTime = pgGet("http://192.168.157.128/php/panel/network.php?type=datatime&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),networkback);
    xmlHttpNetworkUp = pgGet("http://192.168.157.128/php/panel/network.php?type=networkup&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),networkback);
    xmlHttpNetworkDown = pgGet("http://192.168.157.128/php/panel/network.php?type=networkdown&username="+getCookie("UserName")+"&token="+getCookie("Token")+"&panelip="+getCookie("panelHost"),networkback);
//    特别重要 这是刷新驱动函数
    loading();
}

function networkback(){
    viewCharts('network',"上传","下载","KB/s");
}

runNetwork();
