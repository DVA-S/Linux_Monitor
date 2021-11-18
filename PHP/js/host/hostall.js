// var xmlHttpHostCountUbuntu = new XMLHttpRequest();
// var xmlHttpHostCountCentOS = new XMLHttpRequest();
// var xmlHttpHostCountMySQL = new XMLHttpRequest();
//
// xmlHttpHostCountUbuntu.open("GET","../php/host/Count.php?type=Ubuntu",true);
// xmlHttpHostCountCentOS.open("GET","../php/host/Count.php?type=CentOS",true);
// xmlHttpHostCountMySQL.open("GET","../php/host/Count.php?type=MySQL",true);
//
// xmlHttpHostCountUbuntu.onreadystatechange = hostcount;
// xmlHttpHostCountCentOS.onreadystatechange = hostcount;
// xmlHttpHostCountMySQL.onreadystatechange = hostcount;
//
// xmlHttpHostCountUbuntu.send(null);
// xmlHttpHostCountCentOS.send(null);
// xmlHttpHostCountMySQL.send(null);

var xmlHttpHostCountUbuntu;
var xmlHttpHostCountCentOS;
var xmlHttpHostCountMySQL;

function runHostCount(){
    xmlHttpHostCountUbuntu= pgGet("http://192.168.157.128/php/host/Count.php?type=Ubuntu",hostcountback);
    xmlHttpHostCountCentOS = pgGet("http://192.168.157.128/php/host/Count.php?type=CentOS",hostcountback);
    xmlHttpHostCountMySQL = pgGet("http://192.168.157.128/php/host/Count.php?type=MySQL",hostcountback);
}
runHostCount();
function hostcountback(){
    chartDom = document.getElementById('hostall');
    myChart = echarts.init(chartDom);
    var option;

    option = {
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
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
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
                labelLine: {
                    show: false
                },
                data: [
                    { value: xmlHttpHostCountUbuntu.responseText, name: 'Ubuntu' },
                    { value: xmlHttpHostCountCentOS.responseText, name: 'CentOS' },
                    { value: xmlHttpHostCountMySQL.responseText, name: 'MySQL' }
                ]
            }
        ]
    };

    option && myChart.setOption(option);
}