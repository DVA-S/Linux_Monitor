<!DOCTYPE html>
<html lang="zh">
	<head>
		<link rel="stylesheet" type="text/css" href="css/kuangjia.css"/>
		<script type="text/javascript" src="js/kuangjia.js"></script>
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/echars.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>主面板</title>
	</head>
    <!-- 根据session判断是否登录 -->
    <!-- session_start()函数前不能有任何代码输出到浏览器，最好加在页面头部，或者先用ob_start()函数打开输出缓冲区。-->
    <?php
        session_start();
        $status = $_SESSION["loginStatus"];
        echo "<script>console.log('loginStatus:',{$_SESSION['loginStatus']});</script>";
    ?>
	<body>

    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->


		<!-- 登录页 -->
		<div class="background_color">
		</div>
		<div class="login_div" id="login_div">
			<div class="logo">
				<h1 style="text-align: center;line-height: 480%;color: #CCCCDC;">登录✌</h1>
			</div>
			<div class="login_form" id="login_form">
				<form action="#" method="post">
                    <label for="username" style="font-size: 14px;color: #CCCCDC;">用户名：</label>
					<!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
					<input id="username" style="height: 8%;width: 94%;padding: 1% 2%;border-radius: 5px;" type="text" name="username" maxlength="20">
					<br />
					<br />
					<label for="passwd" style="font-size: 14px;color: #CCCCDC;">密码：</label>
					<input id="passwd" style="height: 8%;width: 94%;padding: 1% 2%;border-radius: 5px;" type="password" name="passwd">
					<br />
					<br />
					<input class="submit" type="button" value="登  录" onclick="loginOkAnimation()">
					<!-- onclick="loginOkAnimation()" -->
				</form>
			</div>
		</div>
		<!-- 主页 -->
<!--		 <div class="background_color"></div>-->
		 <!-- 导航栏 -->
		 <div class="head_div" id="head_div">
			 <div class="panel_btn" onclick="btnOnClick(this)">
				 <p>监控面板</p>
			 </div>
			 <div class="host_btn" onclick="btnOnClick(this)">
				 <p>设备管理</p>
			 </div>
			 <div class="checking_btn" onclick="btnOnClick(this)">
				 <p>自动巡检</p>
			 </div>
			 <div class="user_btn" onclick="btnOnClick(this)">
				 <p>用户管理</p>
			 </div>
			 <div class="setup_btn" onclick="btnOnClick(this)">系统设置</div>
		 </div>
		 <!-- 监控面板 -->
		 <div class="panel" id="panel">
<!--			 <object data="http://192.168.157.128:3000/d/ULfAeD5nk/jian-kong-mian-ban?orgId=1&from=now-5m&to=now&viewPanel=2&refresh=5s"></object>-->
             <div class="view" id="memory" style="width: 50%;height: 50%;position: relative;top: 1%;background-color: #AAA;">
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
                             data: <?php echo file_get_contents('http://192.168.157.128/php/panel/memory.php?type=datatime'); ?>
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
                                 data: <?php echo file_get_contents('http://192.168.157.128/php/panel/memory.php?type=memused'); ?>,
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
                                 data: <?php echo file_get_contents('http://192.168.157.128/php/panel/memory.php?type=memfree'); ?>,
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
                     setTimeout(function (){
                         $("#memory").load("#memory");
                     },5000);
                 </script>
             </div>
             <div class="view" id="network" style="width: 50%;height: 50%;position: relative;top: 1%;background-color: #DDD;">
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
                                data: <?php echo file_get_contents('http://192.168.157.128/php/panel/network.php?type=datatime'); ?>
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
                                data: <?php echo file_get_contents('http://192.168.157.128/php/panel/network.php?type=networkup'); ?>
                            },
                            {
                                name: 'down',
                                type: 'line',
                                stack: 'Total',
                                areaStyle: {},
                                emphasis: {
                                    focus: 'series'
                                },
                                data: <?php echo file_get_contents('http://192.168.157.128/php/panel/network.php?type=networkdown'); ?>
                            }
                        ]
                    };
                    option && myChart.setOption(option);
                    setTimeout(function (){
                        $("#network").load("#network");
                    },5000);
                </script>
             </div>
             <div class="view" id="cpu" style="width: 50%;height: 50%;position: relative;top: -49%;left: 50%;background-color: #1196F3;">
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
                                 data: <?php echo file_get_contents('http://192.168.157.128/php/panel/cpu.php?type=datatime'); ?>
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
                                 data: <?php echo file_get_contents('http://192.168.157.128/php/panel/cpu.php?type=cpuused'); ?>
                             },
                             {
                                 name: '空闲',
                                 type: 'line',
                                 stack: 'Total',
                                 areaStyle: {},
                                 emphasis: {
                                     focus: 'series'
                                 },
                                 data: <?php echo file_get_contents('http://192.168.157.128/php/panel/cpu.php?type=cpufree'); ?>
                             }
                         ]
                     };
                     option && myChart.setOption(option);
                     setTimeout(function (){
                         $("#cpu").load("#cpu");
                     },5000);
                 </script>
             </div>
             <div class="view" id="disk" style="width: 50%;height: 50%;position: relative;top: -149%;left: 50%;background-color: #99DD55;">
                 <script>
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
                                 data: <?php echo file_get_contents('http://192.168.157.128/php/panel/disk.php?type=datatime'); ?>
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
                                 data: <?php echo file_get_contents('http://192.168.157.128/php/panel/disk.php?type=diskread'); ?>
                             },
                             {
                                 name: 'w',
                                 type: 'line',
                                 stack: 'Total',
                                 areaStyle: {},
                                 emphasis: {
                                     focus: 'series'
                                 },
                                 data: <?php echo file_get_contents('http://192.168.157.128/php/panel/disk.php?type=diskwrite'); ?>
                             }
                         ]
                     };
                     option && myChart.setOption(option);
                     setTimeout(function (){
                         $("#disk").load("#disk");
                     },5000);
                 </script>
             </div>
		 </div>
		 
		 <!-- 主机管理 -->
		 <div class="host" id="host">
			 <!-- 左侧边栏 -->
			 <div class="host_left">
				 <!-- 设备总览 -- Linux/MySQL/Other -->
				 <div class="host_left_all" onclick="btnOnClick(this)">设备总览</div>
				 <!-- 设备列表 -- 修改/删除 -->
				 <div class="host_left_list" onclick="btnOnClick(this)">设备列表</div>
				 <!-- 添加设备 -- 表单 -->
				 <div class="host_left_addhost" onclick="btnOnClick(this)">添加设备</div>
			 </div>
			 <!-- 右侧面板 -->
			 <div class="host_right">
				 <div class="host_right_all" id="host_right_all">
                     <div class='Ubuntu'>
                         <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo file_get_contents('http://192.168.157.128/php/host/Count.php?type=Ubuntu'); ?><br>Ubuntu</h1>
                     </div>
                     <div class='CentOS'>
                         <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo file_get_contents('http://192.168.157.128/php/host/Count.php?type=CentOS'); ?><br>CentOS</h1>
                     </div>
                     <div class='MySQL'>
                         <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo file_get_contents('http://192.168.157.128/php/host/Count.php?type=MySQL'); ?><br>MySQL</h1>
                     </div>
                 </div>
				 <div class="host_right_list" id="host_right_list">
                         <?php echo file_get_contents('http://192.168.157.128/php/host/List.php'); ?>
                 </div>
				 <div class="host_right_addhost" id="host_right_addhost">
                     <div class="addhost_form">
                         <form action="#" method="get">
                             <label for="ipaddress" style="font-size: 14px;color: #CCCCDC;">IP地址：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="ipaddress" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="text" name="ipaddress" maxlength="20">
                             <br />
                             <br />
                             <label for="hostuser" style="font-size: 14px;color: #CCCCDC;">用户名：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="hostuser" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="text" name="hostuser" maxlength="20">
                             <br />
                             <br />
                             <label for="hostpasswd" style="font-size: 14px;color: #CCCCDC;">密&nbsp;&nbsp;&nbsp;码：</label>
                             <input id="hostpasswd" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="password" name="hostpasswd">
                             <br />
                             <br />
                             <input style="height: 5%;width: 15%;padding: 1% 2%;border-radius: 5px;left: 36%;" type="button" value="添加" onclick="addHost()">
                         </form>
                     </div>
                 </div>
			 </div>
		 </div>
		 
		 <!-- 自动巡检 -->
		 <div class="checking" id="checking">
			 <!-- 左侧边栏 -->
			 <div class="checking_left">
			 	 <!-- 连通性检测 -- Ping/可登录 -->
			 	 <div class="checking_left_link" onclick="btnOnClick(this)">连通性检测</div>
			 	 <!-- 性能检测 -- disk读写/网速/CPU/内存 -->
			 	 <div class="checking_left_test" onclick="btnOnClick(this)">性能检测</div>
			 	 <!-- 端口检测 -- 主机暴露端口 -->
			 	 <div class="checking_left_port" onclick="btnOnClick(this)">端口检测</div>
				 <!-- 硬件检测 -- cpu/内存条/网卡/硬盘(数量、规格) -->
			 	<div class="checking_left_device" onclick="btnOnClick(this)">硬件检测</div>
			 </div>
			 <!-- 右侧面板 -->
			 <div class="checking_right">
			 	 <div class="checking_right_link" id="checking_right_link">
                     <button onclick="hostLink()">开始检测</button>
                     <p id="hostLinkList">test</p>
                 </div>
			 	 <div class="checking_right_test" id="checking_right_test">性能检测</div>
			 	 <div class="checking_right_port" id="checking_right_port">端口检测</div>
				 <div class="checking_right_device" id="checking_right_device">硬件检测</div>
			 </div>
		 </div>
		 
		 <!-- 用户管理 -->
		 <div class="user" id="user">
			 <!-- 左侧边栏 -->
			  <div class="user_left">
			  	 <!-- 用户列表 -- 登录 -->
			  	 <div class="user_left_list" onclick="btnOnClick(this)">用户列表</div>
			  	 <!-- 系统用户 -- web用户 -->
			  	 <div class="user_left_webUser" onclick="btnOnClick(this)">系统用户</div>
			  	 <!-- 设备用户 -- 主机用户 -->
			  	 <div class="user_left_deviceUser" onclick="btnOnClick(this)">设备用户</div>
			 	 <!-- 添加用户 -- 系统用户/设备用户 -->
			  	<div class="user_left_addUser" onclick="btnOnClick(this)">添加用户</div>
			  </div>
			  <!-- 右侧面板 -->
			  <div class="user_right">
				  <!-- test -->
				  <h1>④</h1>
			  	 <div class="user_right_list" id="user_right_List">用户列表</div>
			  	 <div class="user_right_webUser" id="user_right_WebUser">系统用户</div>
			  	 <div class="user_right_deviceUser" id="user_right_DeviceUser">设备用户</div>
			 	 <div class="user_right_addUser" id="user_right_AddUser">添加用户</div>
			  </div>
		 </div>
		 
		 <!-- 系统设置 -->
		 <div class="setup" id="setup">
		 </div>
        <!-- 放在页面底部可以读到上面元素的ID值 -->
        <!-- 保持登录一段时间 判定phpSession的值，为1表示已经登录 -->
<!--        问题：无法重置登录cookie的时间-->
        <?php
            if($status==1){
                echo "<script>
		 		//登录框  forwards属性会让对象停留在终点
		        document.getElementById('login_div').style.animation='0.5s ease 0s 1 normal forwards running login_loginOk';
		        //主页
		        document.getElementById('head_div').style.display='block';
		        document.getElementById('head_div').style.animation='0.5s ease 0s 1 normal forwards running index_head_loginOk';
		        document.getElementById('panel').style.display='block';
		        document.getElementById('panel').style.animation='0.5s ease 0s 1 normal forwards running index_panel_loginOk';
		 		</script>";
            }
        ?>
	</body>
</html>