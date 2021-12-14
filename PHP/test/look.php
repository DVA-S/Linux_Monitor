<html>
<head>
    <script type="text/javascript" src="../js/allJS.js"></script>
    <script type="text/javascript" src="../js/kuangjia/jquery.js"></script>
    <script type="text/javascript" src="../js/kuangjia/echars.js"></script>
</head>
<body>
<h1>测试界面</h1>
<div style="position: relative; width: 648px; height: 284px; padding: 0px; margin: 0px; border-width: 0px;"><canvas data-zr-dom-id="zr_0" width="648" height="284" style="position: absolute; left: 0px; top: 0px; width: 648px; height: 284px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div>
<div class="view" id="memory" style="width: 50%; height: 50%; position: relative; top: -0.5%; left: -0.5%; background-color: rgb(255, 255, 255); -webkit-tap-highlight-color: transparent; user-select: none;" _echarts_instance_="ec_1637203024083"><div style="position: relative; width: 648px; height: 284px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas data-zr-dom-id="zr_0" width="648" height="284" style="position: absolute; left: 0px; top: 0px; width: 648px; height: 284px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div class="" style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px; transition: opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgb(255, 255, 255); border-width: 1px; border-radius: 4px; color: rgb(102, 102, 102); font: 14px / 21px &quot;Microsoft YaHei&quot;; padding: 10px; top: 0px; left: 0px; transform: translate3d(389px, 151px, 0px); border-color: rgb(255, 255, 255); pointer-events: none; visibility: hidden; opacity: 0;"><div style="margin: 0px 0 0;line-height:1;"><div style="margin: 0px 0 0;line-height:1;"><div style="font-size:14px;color:#666;font-weight:400;line-height:1;">2021-11-18 10:36:54</div><div style="margin: 10px 0 0;line-height:1;"><div style="margin: 0px 0 0;line-height:1;"><div style="margin: 0px 0 0;line-height:1;"><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5470c6;"></span><span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">已用内存</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">642</span><div style="clear:both"></div></div><div style="clear:both"></div></div><div style="margin: 10px 0 0;line-height:1;"><div style="margin: 0px 0 0;line-height:1;"><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#91cc75;"></span><span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">空闲内存</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">830.969</span><div style="clear:both"></div></div><div style="clear:both"></div></div><div style="clear:both"></div></div><div style="clear:both"></div></div><div style="clear:both"></div></div></div></div>
<!--<input type="button" value="开始显示时间" id="go" onclick="start()" />-->
<p>当前时间：<font color="red"><span id="showtime"></span></font></p>
<div id="cpu" style="width: 1000px;height: 400px;"></div>
<img src="../img/loading.gif" style="position: relative;left: 49%;background-color: #000;" />
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

    var a = document.createElement('div');
    a.innerHTML="<img src=\"../loading.gif\" style=\"position: absolute;left: 20%;top: 13%;opacity: 0.5;\" />";
    document.getElementById("showtime").appendChild(a);

    function removeEle(){
        var a = document.createElement('div');
        a.innerHTML="";
        document.getElementById("showtime").appendChild(a);
    }
</script>
</html>