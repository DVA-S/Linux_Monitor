function hostall(){
    var xmlHttpHostCountUbuntu;
    var xmlHttpHostCountCentOS;
    var xmlHttpHostCountMySQL;

//将数据返回到back函数
    function runHostCount(){
        xmlHttpHostCountUbuntu= pgGet("https://jaina.com/php/host/Count.php?type=Ubuntu&username="+getCookie("UserName")+"&token="+getCookie("Token"),hostcountback);
        xmlHttpHostCountCentOS = pgGet("https://jaina.com/php/host/Count.php?type=CentOS&username="+getCookie("UserName")+"&token="+getCookie("Token"),hostcountback);
        xmlHttpHostCountMySQL = pgGet("https://jaina.com/php/host/Count.php?type=MySQL&username="+getCookie("UserName")+"&token="+getCookie("Token"),hostcountback);
    }
    runHostCount();
    function hostcountback(){
        chartDom = document.getElementById('hostall');
        myChart = echarts.init(chartDom);
        var option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '设备总览',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2,
                        normal: {
                            // 设置扇形的阴影
                            shadowBlur: 8,
                            shadowColor: '#000',
                            shadowOffsetX: 8,
                            shadowOffsetY: 8
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: xmlHttpHostCountUbuntu.responseText, name: 'Ubuntu' },
                        { value: xmlHttpHostCountCentOS.responseText, name: 'CentOS' },
                        { value: xmlHttpHostCountMySQL.responseText, name: 'Other' }
                    ]
                }
            ]
        };
        option && myChart.setOption(option);
    }
}
