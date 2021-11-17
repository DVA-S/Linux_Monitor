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
        if(xmlHttpDiskTime.status == 200){
            var datatime = xmlHttpDiskTime.responseText;
            var diskwrite = xmlHttpDiskWrite.responseText;
            var diskread = xmlHttpDiskRead.responseText;
            datatime=datatime.split(",");
            diskwrite=diskwrite.split(",");
            diskread=diskread.split(",");



            //图表
            chartDom = document.getElementById("disk");
            myChart = echarts.init(chartDom);
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
Disk();








// function disk(){
//     $.get(
//         "php/panel/disk.php",{"type":"diskwrite"},
//         function(diskwrite){
//             $.get(
//                 "php/panel/disk.php",{"type":"datatime"},
//                 function(datatime){
//                     $.get(
//                         "php/panel/disk.php",{"type":"diskread"},
//                         function(diskread){
//                             var chartDom = document.getElementById('disk');
//                             var myChart = echarts.init(chartDom);
//                             var option;
//                             datatime=datatime.split(",");
//                             diskread=diskread.split(",");
//                             diskwrite=diskwrite.split(",");
//
//                             option = {
//                                 animation: false,
//                                 title: {
//                                     text: 'disk'
//                                 },
//                                 tooltip: {
//                                     trigger: 'axis',
//                                     axisPointer: {
//                                         type: 'cross',
//                                         label: {
//                                             backgroundColor: '#6a7985'
//                                         }
//                                     }
//                                 },
//                                 legend: {
//                                     data: ['r', 'w']
//                                 },
//                                 toolbox: {
//                                     feature: {
//                                         saveAsImage: {}
//                                     }
//                                 },
//                                 grid: {
//                                     left: '3%',
//                                     right: '4%',
//                                     bottom: '3%',
//                                     containLabel: true
//                                 },
//                                 xAxis: [
//                                     {
//                                         type: 'category',
//                                         boundaryGap: false,
//                                         data: [datatime[0],datatime[1],datatime[2],datatime[3],datatime[4],datatime[5],datatime[6],datatime[7],datatime[8],datatime[9],datatime[10],datatime[11],datatime[12],datatime[13],datatime[14],datatime[15],datatime[16],datatime[17],datatime[18],datatime[19]]
//                                     }
//                                 ],
//                                 yAxis: [
//                                     {
//                                         type: 'value',
//                                         axisLabel: {
//                                             formatter: '{value} KB/S'
//                                         }
//                                     }
//                                 ],
//                                 series: [
//                                     {
//                                         name: 'r',
//                                         type: 'line',
//                                         stack: 'Total',
//                                         areaStyle: {},
//                                         emphasis: {
//                                             focus: 'series'
//                                         },
//                                         data: [diskread[0],diskread[1],diskread[2],diskread[3],diskread[4],diskread[5],diskread[6],diskread[7],diskread[8],diskread[9],diskread[10],diskread[11],diskread[12],diskread[13],diskread[14],diskread[15],diskread[16],diskread[17],diskread[18],diskread[19]]
//
//                                     },
//                                     {
//                                         name: 'w',
//                                         type: 'line',
//                                         stack: 'Total',
//                                         areaStyle: {},
//                                         emphasis: {
//                                             focus: 'series'
//                                         },
//                                         data: [diskwrite[0],diskwrite[1],diskwrite[2],diskwrite[3],diskwrite[4],diskwrite[5],diskwrite[6],diskwrite[7],diskwrite[8],diskwrite[9],diskwrite[10],diskwrite[11],diskwrite[12],diskwrite[13],diskwrite[14],diskwrite[15],diskwrite[16],diskwrite[17],diskwrite[18],diskwrite[19]]
//
//                                     }
//                                 ]
//                             };
//                             option && myChart.setOption(option);
//                         }
//                     )
//                 }
//             )
//         }
//     )
// }
//
// setTimeout(function (){
//     disk();
//     console.log("test");
// },2000 );
