var xmlHttpdNetworkTime;
var xmlHttpNetworkUp;
var xmlHttpNetworkDown;

function runNetwork(){
    xmlHttpdNetworkTime = pgGet("http://127.0.0.1/php/panel/network.php?type=datatime&username="+getCookie("UserName")+"&token="+getCookie("Token"),networkback);
    xmlHttpNetworkUp = pgGet("http://127.0.0.1/php/panel/network.php?type=networkup&username="+getCookie("UserName")+"&token="+getCookie("Token"),networkback);
    xmlHttpNetworkDown = pgGet("http://127.0.0.1/php/panel/network.php?type=networkdown&username="+getCookie("UserName")+"&token="+getCookie("Token"),networkback);
//    特别重要 这是刷新驱动函数
    loading();
}

function networkback(){
    viewCharts('network',"上传","下载","KB/s");
}

runNetwork();
