
<head>
    <link rel="stylesheet" type="text/css" href="../css/kuangjia.css"/>
    <script type="text/javascript" src="../js/allJS.js"></script>
    <script type="text/javascript" src="../js/kuangjia/jquery.js"></script>
    <script type="text/javascript" src="../js/kuangjia/echars.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Inspection and Monitoring</title>

</head>
<div id="main" style="height: 500px;width: 1000px;"></div>
<script>
    var xmlHttpDiskTime;
    var xmlHttpDiskWrite;
    var xmlHttpDiskRead;
    xmlHttpDiskTime = new XMLHttpRequest();
    xmlHttpDiskWrite = new XMLHttpRequest();
    xmlHttpDiskRead = new XMLHttpRequest();
    function Disk(){
        var urltime="../php/panel/disk.php?type=datatime";
        var urlwrite="../php/panel/disk.php?type=diskwrite";
        var urlread="../php/panel/disk.php?type=diskread";

        xmlHttpDiskTime.open("GET",urltime,true);
        xmlHttpDiskWrite.open("GET",urlwrite,true);
        xmlHttpDiskRead.open("GET",urlread,true);
        xmlHttpDiskTime.onreadystatechange = diskback;
        xmlHttpDiskWrite.onreadystatechange = diskback;
        xmlHttpDiskRead.onreadystatechange = diskback;
        xmlHttpDiskTime.send(null);
        xmlHttpDiskWrite.send(null);
        xmlHttpDiskRead.send(null);
    }

    function diskback(){
        if(chartDom != null && chartDom != "" && chartDom != undefined){
            echarts.dispose(document.getElementById("disk"))
        }
        if(xmlHttpDiskTime.readyState == 4){
            if(xmlHttpDiskTime.status == 200) {
                var datatime = xmlHttpDiskTime.responseText;
                var diskwrite = xmlHttpDiskWrite.responseText;
                var diskread = xmlHttpDiskRead.responseText;
                datatime = datatime.split(",");
                diskwrite = diskwrite.split(",");
                diskread = diskread.split(",");
                // type EChartsOption = echarts.EChartsOption;

                var chartDom = document.getElementById('main');
                var myChart = echarts.init(chartDom);
                var option;
                // : EChartsOption;

                // var data = '1998-10-04 15:00';
                // var value = 100;
                // var data1 = '1998-10-04 16:00';
                // var value1 = 130;
                // var data2 = '1998-10-06 16:00';
                // var value2 = 2541;

                option = {
                    animation: false,
                    title: {
                        text: 'Dynamic Data & Time Axis'
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (params) {
                            params = params[0];
                            return datatime[3] + ' ' + params.value[1];
                        },
                        axisPointer: {
                            animation: false
                        }
                    },
                    xAxis: {
                        type: 'time',
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%'],
                        splitLine: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: 'Fake Data',
                            type: 'line',
                            showSymbol: false,
                            data: [
                                [datatime[1], diskread[1]],[datatime[2], diskread[2]],[datatime[3], diskread[3]]
                            ]
                        }
                    ]
                };

                option && myChart.setOption(option);
            }}}
    setTimeout(Disk(),2000);











</script>