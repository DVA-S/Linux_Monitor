var xmlHttpdCpuTime;
var xmlHttpCpuUsed;
var xmlHttpCpuFree;
xmlHttpdCpuTime = new XMLHttpRequest();
xmlHttpCpuUsed = new XMLHttpRequest();
xmlHttpCpuFree = new XMLHttpRequest();

function Cpu(){
    var urltime="../php/panel/cpu.php?type=datatime";
    var cpuused="../php/panel/cpu.php?type=cpuused";
    var cpufree="../php/panel/cpu.php?type=cpufree";

    xmlHttpdCpuTime.open("GET",urltime,true);
    xmlHttpCpuUsed.open("GET",cpuused,true);
    xmlHttpCpuFree.open("GET",cpufree,true);
    xmlHttpdCpuTime.onreadystatechange = cpuback;
    xmlHttpCpuUsed.onreadystatechange = cpuback;
    xmlHttpCpuFree.onreadystatechange = cpuback;
    xmlHttpdCpuTime.send(null);
    xmlHttpCpuUsed.send(null);
    xmlHttpCpuFree.send(null);
}
function cpuback(){
    //报错：There is a chart instance already initialized on the dom.解决方法0.1
    if(chartDom != null && chartDom != "" && chartDom != undefined){
        echarts.dispose(document.getElementById("cpu"))
    }
    if(xmlHttpdCpuTime.readyState == 4){
        if(xmlHttpdCpuTime.status == 200){
            var datatime = xmlHttpdCpuTime.responseText;
            var cpuused = xmlHttpCpuUsed.responseText;
            var cpufree = xmlHttpCpuFree.responseText;
            datatime=datatime.split(",");
            cpuused=cpuused.split(",");
            cpufree=cpufree.split(",");

            //There is a chart instance already initialized on the dom.解决方法0.1
            chartDom = document.getElementById("cpu");
            myChart = echarts.init(chartDom);
            var option;

            option = {
                animation: false,
                title: {
                    text: 'cpu'
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
                    data: ['占用', '空闲']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '1%',
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
                        formatter: '{value} %'
                    }
                }
            ],
                series: [
                {
                    name: '占用',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [cpuused[0],cpuused[1],cpuused[2],cpuused[3],cpuused[4],cpuused[5],cpuused[6],cpuused[7],cpuused[8],cpuused[9],cpuused[10],cpuused[11],cpuused[12],cpuused[13],cpuused[14],cpuused[15],cpuused[16],cpuused[17],cpuused[18],cpuused[19]]
        },
            {
                name: '空闲',
                    type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [cpufree[0],cpufree[1],cpufree[2],cpufree[3],cpufree[4],cpufree[5],cpufree[6],cpufree[7],cpufree[8],cpufree[9],cpufree[10],cpufree[11],cpufree[12],cpufree[13],cpufree[14],cpufree[15],cpufree[16],cpufree[17],cpufree[18],cpufree[19]]
            }
        ]
        };
            option && myChart.setOption(option);
        }
    }
}
Cpu();