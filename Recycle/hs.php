<!-- 保持登录一段时间 判定phpSession的值，为1表示已经登录 -->
<!--        问题：无法重置登录cookie的时间-->
<!-- 根据session判断是否登录 -->
<!-- session_start()函数前不能有任何代码输出到浏览器，最好加在页面头部，或者先用ob_start()函数打开输出缓冲区。-->

<!--memory表格-->
<script>
    var chartDom = document.getElementById('memory');
    var myChart = echarts.init(chartDom);
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
            data: <?php echo file_get_contents('http://localhost/php/panel/memory.php?type=datatime'); ?>
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
                data: <?php echo file_get_contents('http://localhost/php/panel/memory.php?type=memused'); ?>,
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
                data: <?php echo file_get_contents('http://localhost/php/panel/memory.php?type=memfree'); ?>,
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
    // setTimeout(function (){
    //     $("#memory").load("#memory");
    // },5000);
</script>

<!-- network表格 -->
<script>

    var chartDom = document.getElementById('network');
    var myChart = echarts.init(chartDom);
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
                data: <?php echo file_get_contents('http://localhost/php/panel/network.php?type=datatime'); ?>
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
                data: <?php echo file_get_contents('http://localhost/php/panel/network.php?type=networkup'); ?>
            },
            {
                name: 'down',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: <?php echo file_get_contents('http://localhost/php/panel/network.php?type=networkdown'); ?>
            }
        ]
    };
    option && myChart.setOption(option);
    // setTimeout(function (){
    //     $("#network").load("#network");
    // },5000);
</script>



//disk透明刷新
<script>
    var windowsSizeNoView = -document.body.clientWidth+'px';
    function loading(){
        setTimeout(function (){
            if(getComputedStyle(document.getElementById("panel"),null).getPropertyValue('left') != '2.5%' &&
                getComputedStyle(document.getElementById("panel"),null).getPropertyValue('left') != windowsSizeNoView){
                if (getComputedStyle(document.getElementById("memory"),null).getPropertyValue("opacity") == "0.5"){
                    console.log("加载动画");
                    document.getElementById("memory").style.opacity="1";
                    document.getElementById("network").style.opacity="1";
                    document.getElementById("cpu").style.opacity="1";
                    document.getElementById("disk").style.opacity="1";
                }else {
                    console.log("显示");
                    document.getElementById("memory").style.opacity="0.5";
                    document.getElementById("network").style.opacity="0.5";
                    document.getElementById("cpu").style.opacity="0.5";
                    document.getElementById("disk").style.opacity="0.5";
                    document.getElementById("memory").innerHTML = "";
                }
            }
        },2000);
    }
    loading();
</script>

//图表php接口版本
var chartDom = document.getElementById('disk');
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
data: <?php //echo file_get_contents('http://localhost/php/panel/disk.php?type=datatime'); ?>
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
data: <?php //echo file_get_contents('http://localhost/php/panel/disk.php?type=diskread'); ?>
},
{
name: 'w',
type: 'line',
stack: 'Total',
areaStyle: {},
emphasis: {
focus: 'series'
},
data: <?php //echo file_get_contents('http://localhost/php/panel/disk.php?type=diskwrite'); ?>
}
]
};
option && myChart.setOption(option);

<!--cpu表格-->
<script>
    var chartDom = document.getElementById('cpu');
    var myChart = echarts.init(chartDom);
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
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: <?php echo file_get_contents('http://localhost/php/panel/cpu.php?type=datatime'); ?>
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
                data: <?php echo file_get_contents('http://localhost/php/panel/cpu.php?type=cpuused'); ?>
            },
            {
                name: '空闲',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: <?php echo file_get_contents('http://localhost/php/panel/cpu.php?type=cpufree'); ?>
            }
        ]
    };
    option && myChart.setOption(option);
    // setTimeout(function (){
    //     $("#cpu").load("#cpu");
    // },5000);
</script>