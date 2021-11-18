// var xmlHttpMemoryTime = new XMLHttpRequest();
// var xmlHttpMemoryUsed = new XMLHttpRequest();
// var xmlHttpMemoryFree = new XMLHttpRequest();
//
// function Memory(){
//     xmlHttpMemoryTime.open("GET","../php/panel/memory.php?type=datatime",true);
//     xmlHttpMemoryUsed.open("GET","../php/panel/memory.php?type=memused",true);
//     xmlHttpMemoryFree.open("GET","../php/panel/memory.php?type=memfree",true);
//     xmlHttpMemoryTime.onreadystatechange = memoryback;
//     xmlHttpMemoryUsed.onreadystatechange = memoryback;
//     xmlHttpMemoryFree.onreadystatechange = memoryback;
//     xmlHttpMemoryTime.send(null);
//     xmlHttpMemoryUsed.send(null);
//     xmlHttpMemoryFree.send(null);
// }

var xmlHttpMemoryTime;
var xmlHttpMemoryUsed;
var xmlHttpMemoryFree;

function runMemory(){
    xmlHttpMemoryTime= pgGet("http://192.168.157.128/php/panel/memory.php?type=datatime",memoryback);
    xmlHttpMemoryUsed = pgGet("http://192.168.157.128/php/panel/memory.php?type=memused",memoryback);
    xmlHttpMemoryFree= pgGet("http://192.168.157.128/php/panel/memory.php?type=memfree",memoryback);
}

function memoryback(){
    if(chartDom != null && chartDom != "" && chartDom != undefined){
        echarts.dispose(document.getElementById("memory"))
    }
    if(xmlHttpMemoryTime.readyState == 4){
        if(xmlHttpMemoryTime.status == 200){
            var datatime = xmlHttpMemoryTime.responseText.split(",");
            var memused = xmlHttpMemoryUsed.responseText.split(",");
            var memfree = xmlHttpMemoryFree.responseText.split(",");

            //图表
            chartDom = document.getElementById("memory");
            myChart = echarts.init(chartDom);
            var option;

            option = {
                //关闭图表加载动画
                animation: false,
                title: {
                    text: 'Memory'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {},
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: { readOnly: false },
                        magicType: { type: ['line', 'bar'] },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '1%',
                    right: '5%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [datatime[0],datatime[1],datatime[2],datatime[3],datatime[4],datatime[5],datatime[6],datatime[7],datatime[8],datatime[9],datatime[10],datatime[11],datatime[12],datatime[13],datatime[14],datatime[15],datatime[16],datatime[17],datatime[18],datatime[19]]
            // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
            yAxis: {
                type: 'value',
                    axisLabel: {
                    formatter: '{value} MB'
                }
            },
            series: [
                {
                    name: '已用内存',
                    type: 'line',
                    data: [memused[0],memused[1],memused[2],memused[3],memused[4],memused[5],memused[6],memused[7],memused[8],memused[9],memused[10],memused[11],memused[12],memused[13],memused[14],memused[15],memused[16],memused[17],memused[18],memused[19]],
            // [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
                data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            },
            markLine: {
                data: [{ type: 'average', name: 'Avg' }]
            }
        },
            {
                name: '空闲内存',
                    type: 'line',
                data: [memfree[0],memfree[1],memfree[2],memfree[3],memfree[4],memfree[5],memfree[6],memfree[7],memfree[8],memfree[9],memfree[10],memfree[11],memfree[12],memfree[13],memfree[14],memfree[15],memfree[16],memfree[17],memfree[18],memfree[19]],
                // [1, -2, 2, 5, 3, 2, 0],
                // markPoint: {
                //     data: [{ name: '最低点', value: -2, xAxis: 1, yAxis: -1.5 }]
                // },
                markLine: {
                    data: [
                        { type: 'average', name: 'Avg' },
                        [
                            {
                                symbol: 'none',
                                x: '90%',
                                yAxis: ''
                            },
                            {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: 'Max'
                                },
                                type: 'max',
                                name: '最高点'
                            }
                        ]
                    ]
                }
            }
        ]
        };
            option && myChart.setOption(option);
        }
    }
}
runMemory();
