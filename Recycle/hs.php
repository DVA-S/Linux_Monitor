<!--Jaina php打包项目 phar-->
主页
index.php
<?php
require_once "phar://test.phar/test.php";
$config = parse_ini_file("config.ini");
AppManager::run($config);
?>

这是一个类里面的函数
test.php
<?php
class AppManager
{
    public static function run($config) {
        echo "Application is now running with the following configuration... ";
        var_dump($config);
    }
}
?>

配置文件：
config.ini
[database]
host=localhost
db=bysj
user=root
pass=Esxi0000.

打包操作：
createPhar.php
<?php
$srcRoot = "/root/PHAR/src";
$buildRoot = "/root/PHAR/build";

$phar = new Phar($buildRoot . "/test.phar",
    FilesystemIterator::CURRENT_AS_FILEINFO |       FilesystemIterator::KEY_AS_FILENAME, "test.phar");
$phar->buildFromDirectory($srcRoot. '/');
$phar->setStub($phar->createDefaultStub("index.html"));

//$phar["index.php"] = file_get_contents($srcRoot . "/index.php");
//$phar["test.php"] = file_get_contents($srcRoot . "/test.php");
//copy($srcRoot . "/config.ini", $buildRoot . "/config.ini");
?>

php配置文件：
/etc/php/7.4/cli/php.ini readonly = Off

运行：
将phar和ini放到网站根目录
访问页
<?php
require "test.phar";
?>

结果：
Application is now running with the following configuration... array(4) { ["host"]=> string(9) "localhost" ["db"]=> string(4) "bysj" ["user"]=> string(4) "root" ["pass"]=> string(9) "Esxi0000." }

目录结构：
root@ubuntu:~# tree PHAR/
PHAR/
├── build
│   ├── config.ini
│   └── test.phar
├── createPhar.php
└── src
├── config.ini
├── index.php
└── test.php

2 directories, 6 files


// function networkback(){
//     if(chartDom != null && chartDom != "" && chartDom != undefined){
//         echarts.dispose(document.getElementById("network"))
//     }
//     if(xmlHttpdNetworkTime.readyState == 4){
//         if(xmlHttpdNetworkTime.status == 200){
//             var datatime = xmlHttpdNetworkTime.responseText.split(",");
//             var networkup = xmlHttpNetworkUp.responseText.split(",");
//             var networkdown = xmlHttpNetworkDown.responseText.split(",");
//
//             //图表
//             chartDom = document.getElementById("network");
//             myChart = echarts.init(chartDom);
//             var option;
//
//             option = {
//                 animation: false,
//                 title: {
//                     text: 'network'
//                 },
//                 tooltip: {
//                     trigger: 'axis',
//                     axisPointer: {
//                         type: 'cross',
//                         label: {
//                             backgroundColor: '#6a7985'
//                         }
//                     }
//                 },
//                 legend: {
//                     data: ['up', 'down']
//                 },
//                 toolbox: {
//                     feature: {
//                         saveAsImage: {}
//                     }
//                 },
//                 grid: {
//                     left: '3%',
//                     right: '4%',
//                     bottom: '3%',
//                     containLabel: true
//                 },
//                 xAxis: [
//                     {
//                         type: 'category',
//                         boundaryGap: false,
//                         data: [datatime[0],datatime[1],datatime[2],datatime[3],datatime[4],datatime[5],datatime[6],datatime[7],datatime[8],datatime[9],datatime[10],datatime[11],datatime[12],datatime[13],datatime[14],datatime[15],datatime[16],datatime[17],datatime[18],datatime[19]]
//         }
//         ],
//             yAxis: [
//                 {
//                     type: 'value',
//                     axisLabel: {
//                         formatter: '{value} KB/S'
//                     }
//                 }
//             ],
//                 series: [
//                 {
//                     name: 'up',
//                     type: 'line',
//                     stack: 'Total',
//                     areaStyle: {},
//                     emphasis: {
//                         focus: 'series'
//                     },
//                     data: [networkup[0],networkup[1],networkup[2],networkup[3],networkup[4],networkup[5],networkup[6],networkup[7],networkup[8],networkup[9],networkup[10],networkup[11],networkup[12],networkup[13],networkup[14],networkup[15],networkup[16],networkup[17],networkup[18],networkup[19]]
//         },
//             {
//                 name: 'down',
//                     type: 'line',
//                 stack: 'Total',
//                 areaStyle: {},
//                 emphasis: {
//                     focus: 'series'
//                 },
//                 data: [networkdown[0],networkdown[1],networkdown[2],networkdown[3],networkdown[4],networkdown[5],networkdown[6],networkdown[7],networkdown[8],networkdown[9],networkdown[10],networkdown[11],networkdown[12],networkdown[13],networkdown[14],networkdown[15],networkdown[16],networkdown[17],networkdown[18],networkdown[19]]
//             }
//         ]
//         };
//             option && myChart.setOption(option);
//         }
//     }
// }



<?php
//            if(hash('sha256',$user."wxk") == $hashAndData[0] && $now-$datatime <= 600){
//                //前端保持
//                echo "<script>
//                //BUG0:平移登录动画时,每次刷新都会重复登录动画.改进登陆动画后 > BUG1:登录成功后,刷新任何界面,登录表单会出现一秒钟然后消失. --  解决方法:设置登陆成功后&&播放完登录动画后,移除登录盒子
//                //加了几个刷新按钮后，bug又回来了  --  最终方法：登录表单只有读不到登录session时才会出现
//		        //主页
//		        document.getElementById('head_div').style.display='block';
//		        document.getElementById('head_div').style.animation='0.5s ease 0s 1 normal forwards running index_head_loginOk';
//		        document.getElementById('panel').style.display='block';
//		        document.getElementById('panel').style.animation='0.5s ease 0s 1 normal forwards running index_panel_loginOk';
//		 		</script>";
//                //显示离开时的面板
//                echo "<script>lastView($viewStatus);</script>";
//            }else{
//                //拒绝登录动画
//                echo "<script>
//                document.getElementById('login_div').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';
//		        document.getElementById('login_div').style.display='block';
//		 		</script>";
//            }
?>


<?php
//    //登录的用户名
//    $user=$_COOKIE['UserName'];
//    //获取保持登录的cookie
//    $hashAndData = explode("--",base64_decode($_COOKIE['Status']));
//    //将日期转换为时间戳 注：时间戳即秒数
//    $now = strtotime(date("Y-m-d h:i:s"));
//    $datatime = strtotime($hashAndData[1]);
//    //离开时显示的面板
//    $viewStatus = $_COOKIE['panelView'];
//
//    //验证cookie中的数据合法性和有效性
//    if (hash('sha256',$user."wxk") == $hashAndData[0] && $now-$datatime <= 600){
//       //刷新有效期
//       setcookie('Status',base64_encode(hash('sha256',$user."wxk")."--".date("Y-m-d h:i:s")),time()+600,'/');
//        //创建并更新用户Token hash256+时间存在memcached,base64存在cookie
//        $yanzhi = "JainaProudmoore";
//        $all = $user.$yanzhi;
//        $hashToken = hash('sha256',$all)."--".date("Y-m-d h:i:s");;
//        $token = base64_encode($hashToken);
//        $memcache = new Memcache;             //创建一个memcache对象
//        $memcache->connect('localhost', 11211) or die ("Could not connect"); //连接Memcached服务器
//        $memcache->set($user.'UserToken', $hashToken,0,600);        //设置一个变量到内存中，有效期十分钟
//        //单位秒
//        setcookie("UserName",$user,time()+600);
//        setcookie("Token",$token,time()+600);
//    }
?>


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