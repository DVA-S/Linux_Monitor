<html>
<head>
    <script type="text/javascript" src="../js/kuangjia.js"></script>
    <script type="text/javascript" src="../js/jquery.js"></script>
    <script type="text/javascript" src="../js/echars.js"></script>
</head>
<body>
<h1>Ajax动态显示时间</h1>

<!--<input type="button" value="开始显示时间" id="go" onclick="start()" />-->
<p>当前时间：<font color="red"><span id="showtime"></span></font></p>
<div id="cpu" style="width: 1000px;height: 400px;"></div>
<img src="../loading.gif" style="position: relative;left: 49%" />
</body>
<script type="text/javascript">
    var xmlHttpd;
    var xmlHttpw;
    var xmlHttpr;
    xmlHttpd = new XMLHttpRequest();
    xmlHttpw = new XMLHttpRequest();
    xmlHttpr = new XMLHttpRequest();

    function start(){
        var urltime="../php/panel/disk.php?type=datatime";
        var urlwrite="../php/panel/disk.php?type=diskwrite";
        var urlread="../php/panel/disk.php?type=diskread";

        xmlHttpd.open("GET",urltime,true);
        xmlHttpw.open("GET",urlwrite,true);
        xmlHttpr.open("GET",urlread,true);
        xmlHttpd.onreadystatechange = callback;
        xmlHttpw.onreadystatechange = callback;
        xmlHttpr.onreadystatechange = callback;
        xmlHttpd.send(null);
        xmlHttpw.send(null);
        xmlHttpr.send(null);
    }
    function callback(){
        if(xmlHttpd.readyState == 4){
            if(xmlHttpd.status == 200){
                var datatime = xmlHttpd.responseText;
                var diskwrite = xmlHttpw.responseText;
                var diskread = xmlHttpr.responseText;
                datatime=datatime.split(",");
                diskwrite=diskwrite.split(",");
                diskread=diskread.split(",");

                setTimeout("start()",5100);

                //图表
                var chartDom = document.getElementById("cpu");
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    animation: false,
                    title: {
                        text: 'disk'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data: ['r', 'w']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: [datatime[0],datatime[1],datatime[2],datatime[3],datatime[4],datatime[5],datatime[6],datatime[7],datatime[8],datatime[9],datatime[10],datatime[11],datatime[12],datatime[13],datatime[14],datatime[15],datatime[16],datatime[17],datatime[18],datatime[19]]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} KB/S'
                            }
                        }
                    ],
                    series: [
                        {
                            name: 'r',
                            type: 'line',
                            stack: 'Total',
                            areaStyle: {},
                            emphasis: {
                                focus: 'series'
                            },
                            data: [diskread[0],diskread[1],diskread[2],diskread[3],diskread[4],diskread[5],diskread[6],diskread[7],diskread[8],diskread[9],diskread[10],diskread[11],diskread[12],diskread[13],diskread[14],diskread[15],diskread[16],diskread[17],diskread[18],diskread[19]]

                        },
                        {
                            name: 'w',
                            type: 'line',
                            stack: 'Total',
                            areaStyle: {},
                            emphasis: {
                                focus: 'series'
                            },
                            data: [diskwrite[0],diskwrite[1],diskwrite[2],diskwrite[3],diskwrite[4],diskwrite[5],diskwrite[6],diskwrite[7],diskwrite[8],diskwrite[9],diskwrite[10],diskwrite[11],diskwrite[12],diskwrite[13],diskwrite[14],diskwrite[15],diskwrite[16],diskwrite[17],diskwrite[18],diskwrite[19]]

                        }
                    ]
                };
                option && myChart.setOption(option);
            }
        }
    }
    start();
</script>
</html>