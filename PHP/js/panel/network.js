var xmlHttpdNetworkTime;
var xmlHttpNetworkUp;
var xmlHttpNetworkDown;

function runNetwork(){
    xmlHttpdNetworkTime = pgGet("http://192.168.157.128/php/panel/network.php?type=datatime",networkback);
    xmlHttpNetworkUp = pgGet("http://192.168.157.128/php/panel/network.php?type=networkup",networkback);
    xmlHttpNetworkDown = pgGet("http://192.168.157.128/php/panel/network.php?type=networkdown",networkback);
//    特别重要 这是刷新驱动函数
    loading();
}

function networkback(){
    if(chartDom != null && chartDom != "" && chartDom != undefined){
        echarts.dispose(document.getElementById("network"))
    }
    if(xmlHttpdNetworkTime.readyState == 4){
        if(xmlHttpdNetworkTime.status == 200){
            var datatime = xmlHttpdNetworkTime.responseText.split(",");
            var networkup = xmlHttpNetworkUp.responseText.split(",");
            var networkdown = xmlHttpNetworkDown.responseText.split(",");

            //图表
            chartDom = document.getElementById("network");
            myChart = echarts.init(chartDom);
            var option;

            option = {
                animation: false,
                title: {
                    text: 'network'
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
                    data: ['up', 'down']
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
                    name: 'up',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [networkup[0],networkup[1],networkup[2],networkup[3],networkup[4],networkup[5],networkup[6],networkup[7],networkup[8],networkup[9],networkup[10],networkup[11],networkup[12],networkup[13],networkup[14],networkup[15],networkup[16],networkup[17],networkup[18],networkup[19]]
        },
            {
                name: 'down',
                    type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [networkdown[0],networkdown[1],networkdown[2],networkdown[3],networkdown[4],networkdown[5],networkdown[6],networkdown[7],networkdown[8],networkdown[9],networkdown[10],networkdown[11],networkdown[12],networkdown[13],networkdown[14],networkdown[15],networkdown[16],networkdown[17],networkdown[18],networkdown[19]]
            }
        ]
        };
            option && myChart.setOption(option);
        }
    }
}
runNetwork();
