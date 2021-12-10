<!DOCTYPE html>
<html lang="zh">
	<head>
		<link rel="stylesheet" type="text/css" href="css/kuangjia.css"/>
		<script type="text/javascript" src="js/kuangjia.js"></script>
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/echars.js"></script>
		<script type="text/javascript" src="js/jssha256.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Inspection and Monitoring</title>
	</head>
    <!-- 根据session判断是否登录 -->
    <!-- session_start()函数前不能有任何代码输出到浏览器，最好加在页面头部，或者先用ob_start()函数打开输出缓冲区。-->
    <?php
        session_start();
        $status = $_SESSION["loginStatus"];
        //离开时显示的面板
        $viewStatus = $_COOKIE['panelView'];
//        echo "<script>console.log('loginStatus:',{$view});</script>";
    ?>
	<body>
		<!-- 登录页 -->
		<div class="background_color">
		</div>
		<div class="login_div" id="login_div">
			<div class="logo">
                <img src="img/logo.png" alt="这是logo！" style="width: 50%;left: 22.5%;top: 20%;"/>
			</div>
			<div class="login_form" id="login_form">
				<form action="#" method="post"">
                    <label for="username" style="font-size: 14px;color: #000;">用户名：</label>
					<!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
					<input id="username" autofocus="autofocus" style="border: 1px solid #888;height: 10%;width: 94%;padding: 1% 2%;border-radius: 2px;margin-top: 5px;" type="text" name="username" maxlength="20" onkeydown="keyLogin()">
					<br /><br />
					<label for="passwd" style="font-size: 14px;color: #000;">密码：</label>
					<input id="passwd" style="border: 1px solid #888;height: 10%;width: 94%;padding: 1% 2%;border-radius: 2px;margin-top: 5px;" type="password" name="passwd"  onkeydown="keyLogin()">
					<br /><br /><br />
					<input id="loginbtn" class="submit" type="button" value="登  录" onclick="loginJudge()" style="top: 0%;">
				</form>
			</div>
            <p style="color: #CCC;position: relative;top: 25%;left: 17vh;font-size: 2.2vh;">自动化运维与监控系统@2021 by ***</p>
		</div>

		 <!-- 导航栏 -->
		 <div class="head_div" id="head_div">
            <!--loading（）：点击监控面板按钮 重新触发刷新事件-->
             <div class="panel_btn" title="当前用户" onclick="" style="width: 4vw;box-shadow: none;background-image: none;margin: 0;top: -4px;border-radius: 100px;">
                 <img alt="logo" src="img/logo.png" width="70%" style="left: 20%;">
             </div>
			 <div class="panel_btn" title="内存、硬盘、网络、处理器图表" onclick="btnOnClick(this);loading();">监控面板</div>
			 <div class="host_btn" title="设备的总览、列表、添加" onclick="btnOnClick(this)">设备管理</div>
			 <div class="checking_btn" title="设备的连通、性能、端口、硬件" onclick="btnOnClick(this)">自动巡检</div>
			 <div class="user_btn" title="系统用户、设备用户、添加" onclick="btnOnClick(this)">用户管理</div>
			 <div class="setup_btn" title="退出登录、修改密码、系统状态、查看日志" onclick="btnOnClick(this)">系统设置</div>
             <p id="clock" style="top: 18%;left: 31vw;color: #FFF;font-family: fantasy;display: inline;"></p>
             <script src="js/system/date.js"></script>
		 </div>

		 <!-- 监控面板 -->
		 <div class="panel" id="panel">
             <div class="view" id="memory" style="top: 2%;left: 3%;">
                 <script src="js/panel/memory.js"></script>
             </div>
             <div class="view" id="network" style="top: 4%;left: 3%;">
                 <script src="js/panel/network.js"></script>
             </div>
             <div class="view" id="cpu" style="top: -41%;left: 52%;">
                 <script src="js/panel/cpu.js"></script>
             </div>
             <div class="view" id="disk" style="top: -133%;left: 52%;">
                <script src="js/panel/disk.js"></script>
             </div>
		 </div>

		 <!-- 主机管理 -->
		 <div class="host" id="host">
			 <!-- 左侧边栏 -->
			 <div class="host_left">
				 <!-- 设备总览 -- Linux/MySQL/Other -->
				 <div class="host_left_all" title="所有设备及分类" onclick="btnOnClick(this)">设备总览</div>
				 <!-- 设备列表 -- 修改/删除 -->
				 <div class="host_left_list" title="所有设备及设备信息" onclick="btnOnClick(this)">设备列表</div>
				 <!-- 添加设备 -- 表单 -->
				 <div class="host_left_addhost" title="添加某种设备" onclick="btnOnClick(this)">添加设备</div>
			 </div>
			 <!-- 右侧面板 -->
			 <div class="host_right">
				 <div class="host_right_all" id="host_right_all">
                     <div id="hostall" style="width: 90vh;height: 90vh;padding-left: 28%;padding-top: 3%;">
                         <script src="js/host/hostall.js"></script>
                     </div>
                 </div>
				 <div class="host_right_list" id="host_right_list">
                     <div class="alltable_head">
                         <p>设备列表</p>
                         <input id="searchHost" type="text" placeholder="  名称/类型/地址" style="height: 4vh;width: 24vw;top: -6vh;left: 45vw;background-color: #ddd;border-radius: 3px;color: #000;box-shadow: 2px 2px 2px 2px #888;" maxlength="20" onkeydown="keySearchHost()">
                         <div id="searchHostBtn" class="ok" onclick="SearchHost()" style="height: 4vh;width: 4vw;line-height: 3.5vh;left: 70vw;">搜索</div>
                     </div>
                     <table id="SearchTr" class='alltable'>
                         <tr>
                             <th>主机名</th><th>类型</th><th>地址</th><th>内存</th><th>网卡速率</th><th>硬盘</th><th>操作</th>
                         </tr>
                         <?php echo file_get_contents('http://localhost/php/host/List.php'); ?>
                     </table>
                 </div>
				 <div class="host_right_addhost" id="host_right_addhost">
                     <div class="alltable_head">
                         <p>添加设备</p>
                     </div>
                     <div class="addhost_form" style="height: 68vh;">
<!--                         <div id="tip" style="position:absolute;top: 12vh;display: block;">-->
                             <p><i><b>第一步 - 安装：</b></i></p> <br>
                             <p style="background-color: #EEE;line-height: 25px;padding-top: 0.5vh;padding-bottom: 0.5vh;width: 70vw;top: -1vh;">
                                 &nbsp;&nbsp;#&nbsp;wget http://<?php echo file_get_contents('http://192.168.157.128/php/ServerIP.php'); ?>/Client/ -P /opt/ <br>
                                 &nbsp;&nbsp;#&nbsp;wget -nc -B http://<?php echo file_get_contents('http://192.168.157.128/php/ServerIP.php'); ?>/Client/ -F -nH --cut-dirs=3 -i /opt/index.html -P /etc/jaina/ <br>
                                 &nbsp;&nbsp;#&nbsp;mv /etc/jaina/jaina.sh /usr/bin/jaina && chmod a+x /usr/bin/jaina <br>
                             </p>
                             <p><i><b>第二步 - 添加设备：</b></i></p> <br>
                             <p style="background-color: #EEE;line-height: 25px;padding-top: 0.5vh;padding-bottom: 0.5vh;width: 70vw;top: -1vh;">
                                 &nbsp;&nbsp;#&nbsp;jaina addhost  <?php echo file_get_contents('http://192.168.157.128/php/ServerIP.php'); ?> <br>
<!--                         </div>-->
                     </div>
                 </div>
             </div>
         </div>
		 <!-- 自动巡检 -->
		 <div class="checking" id="checking">
			 <!-- 左侧边栏 -->
			 <div class="checking_left">
			 	 <!-- 连通性检测 -- Ping/可登录 -->
			 	 <div class="checking_left_link" title="Ping命令检测" onclick="btnOnClick(this);">连通性检测</div>
			 	 <!-- 性能检测 -- disk读写/网速/CPU/内存 -->
			 	 <div class="checking_left_test" title="磁盘、网络、处理器性能" onclick="btnOnClick(this)">性能检测</div>
			 	 <!-- 端口检测 -- 主机暴露端口 -->
			 	 <div class="checking_left_port" title="设备端口开放情况" onclick="btnOnClick(this)">端口检测</div>
				 <!-- 硬件检测 -- cpu/内存条/网卡/硬盘(数量、规格) -->
			 	<div class="checking_left_device" title="硬件信息" onclick="btnOnClick(this)">硬件检测</div>
			 </div>
			 <!-- 右侧面板 -->

			 <div class="checking_right">
                 <!-- 连通性检测 -->
			 	 <div class="checking_right_link" id="checking_right_link">
                     <table class='alltable' id="alltable">
                         <div class="alltable_head">
                             <p>设备列表</p>
                         </div>
                         <?php echo file_get_contents('http://localhost/php/checking/hostLinkList.php'); ?>
                     </table>
                 </div>
                <!-- 性能测试 -->
			 	 <div class="checking_right_test" id="checking_right_test">
                     <div class="addhost_form" style="height: 18%;">
                         <select id="perfSingle" style="top: 33%;left: 12%;height: 5vh;width: 13vw;border-radius: 4px;">
                             <option value ="">请选择主机</option>
                             <?php echo file_get_contents('http://localhost/php/checking/hostSingleList.php'); ?>
                         </select>
                             <div class="ok" id="hostDisk" style="position: absolute;top: 38%;left: 34%;" onclick="hostPerf(this)">&nbsp;硬盘</div>
                             <div class="ok" id="hostNetwork" style="position: absolute;top: 38%;left: 46%;" onclick="hostPerf(this)">&nbsp;网络</div>
                             <div class="ok" id="hostCpu" style="position: absolute;top: 38%;left: 58%;" onclick="hostPerf(this)">&nbsp;处理器</div>
                     </div>
                     <br />
                     <br />
                     <table class='alltable' id="checkingPerf">
                         <div class="alltable_head">
                             <p>测试结果</p>
                         </div>
                     </table>
                 </div>
                 <!-- 端口检测 -->
			 	 <div class="checking_right_port" id="checking_right_port">
                     <div class="addhost_form">
                         <select id="perfSinglePort" style="top: 14%;left: 12%;height: 5vh;width: 13vw;border-radius: 4px;">
                             <option value ="">请选择主机</option>
                             <?php echo file_get_contents('http://localhost/php/checking/hostSingleList.php'); ?>
                         </select>
                         <div class="ok" id="hostDisk" style="position: absolute;top: 23%;left: 34%;height: 50%;" onclick="hostPort()">&nbsp;端口检测</div>
                     </div>
                     <br />
                     <br />
                     <table class='alltable' id="checkingPerfPort">
                         <div class="alltable_head">
                             <p>测试结果</p>
                         </div>
                         <tr>
                             <th>主机名</th><th>地址</th><th>端口类型</th><th>端口</th><th>进程</th>
                         </tr>
                     </table>
                 </div>
                 <!-- 硬件检测 -->
				 <div class="checking_right_device" id="checking_right_device" style="overflow-y: scroll;width: 81vw;">
                     <div class="addhost_form">
                         <form action="#" method="get">
                             <select id="perfSingleDevice" style="top: 14%;left: 12%;height: 5vh;width: 13vw;border-radius: 4px;">
                                 <option value ="">请选择主机</option>
                                 <?php echo file_get_contents('http://localhost/php/checking/hostSingleList.php'); ?>
                             </select>
                             <div class="ok" id="hostDisk" style="position: absolute;top: 23%;left: 34%;height: 50%;" onclick="hostDevice()">&nbsp;设备检测</div>
                     </div>
                     <br />
                     <br />
                     <table class='alltable' id="checkingPerfDevice">
                         <div class="alltable_head">
                             <p>CPU</p>
                         </div>
                         <tr>
                             <th>CPU核心</th><th>CPU型号</th><th>CPU频率</th>
                         </tr>
                     </table>
                     <br />
                     <table class='alltable' id="checkingPerfDeviceMother">
                         <div class="alltable_head">
                             <p>主板</p>
                         </div>
                         <tr>
                             <th>主板型号</th>
                         </tr>
                     </table>
                     <br />
                     <table class='alltable' id="checkingPerfDeviceMemory">
                         <div class="alltable_head">
                             <p>内存</p>
                         </div>
                         <tr>
                             <th>主板型号</th>
                         </tr>
                     </table>
                     <br />
                     <table class='alltable' id="checkingPerfDeviceNetwork">
                         <div class="alltable_head">
                             <p>网卡</p>
                         </div>
                         <tr>
                             <th>网卡型号</th><th>网卡速度</th>
                         </tr>
                     </table>
                     <br />
                     <table class='alltable' id="checkingPerfDeviceDisk">
                         <div class="alltable_head">
                             <p>硬盘</p>
                         </div>
                         <tr>
                             <th>主板型号</th>
                         </tr>
                     </table>
                 </div>
			 </div>
		 </div>
		 
		 <!-- 用户管理 -->
		 <div class="user" id="user">
			 <!-- 左侧边栏 -->
			  <div class="user_left">
			  	 <!-- 系统用户 -- web用户 -->
			  	 <div class="user_left_webUser" title="可登录本界面" onclick="btnOnClick(this)">系统用户</div>
			  	 <!-- 设备用户 -- 主机用户 -->
			  	 <div class="user_left_deviceUser" title="可登录设备" onclick="btnOnClick(this)">设备用户</div>
			  </div>
			  <!-- 右侧面板 -->
			  <div class="user_right">
			  	 <div class="user_right_webUser" id="user_right_WebUser">
                     <table id="alltable" class='alltable'>
                         <div class="alltable_head">
                             <p>系统用户列表</p>
                         </div>
                         <tr>
                             <th>ID</th><th>用户名</th><th>邮箱</th><th>性别</th><th>电话</th>
                         </tr>
                         <?php echo file_get_contents('http://localhost/php/user/userList.php'); ?>
                     </table>
                     <button class="ok" style="position: absolute;top: 1.5%;height: 6%;left: 87%;box-shadow: 2px 2px 2px 2px #bbb;border: none;" onclick="addUserWindows()">添加用户</button>
                     <div id="addSysUser" class="floatWindows">
                         <form class="addWindows">
                             <h4 align="center">添加系统用户</h4>
                             <br>
                             <br>
                             <label for="userAdd" style="position: absolute;top: 22%;left: 22%;">用户名：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="userAdd" style="position: absolute;top: 23%;left: 33%;" type="text" name="userAdd" maxlength="20">
                             <br>
                             <br>
                             <label for="userAddPasswd" style="position: absolute;top: 37%;left: 22%;">密&nbsp;&nbsp;&nbsp;码：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="userAddPasswd" style="position: absolute;top: 38%;left: 33%;" type="password" name="userAddPasswd" maxlength="20">
                             <br>
                             <br>
                             <label for="email" style="position: absolute;top: 52%;left: 22%;">邮&nbsp;&nbsp;&nbsp;箱：</label>
                             <input id="email" style="position: absolute;top: 53%;left: 33%;" type="email" name="email" maxlength="20">
                             <br>
                             <br>
                             <label for="sex" style="position: absolute;top: 67%;left: 22%;">性&nbsp;&nbsp;&nbsp;别：</label>
<!--                             <input id="sex" style="position: absolute;top: 68%;left: 33%;" type="text" name="sex" maxlength="20">-->
                             <select id="sex" style="position: absolute;top: 68%;left: 33%;">
                                 <option value ="">请选择性别</option>
                                 <option value="man">男</option>
                                 <option value="woman">女</option>
                             </select>
                             <br>
                             <br>
                             <label for="phone" style="position: absolute;top: 82%;left: 22%;">电&nbsp;&nbsp;&nbsp;话：</label>
                             <input id="phone" style="position: absolute;top: 83%;left: 33%;" type="text" name="phone" maxlength="20">
                             <br>
                             <br>
                             <div class="floatWindowsBtn ok" onclick="addUserSys();location.reload();" style="top: 92%;">&nbsp;添加</div>
                             <div class="floatWindowsBtn ok" onclick="(function (){
                                 document.getElementById('addSysUser').style.animation='0.5s ease forwards running login_loginOk';
                                 document.getElementById('addSysUser').style.display='none'
                             })()" style="left: 30%;top: 92%;">&nbsp;关闭</div>
                         </form>
                     </div>
                 </div>
			  	 <div class="user_right_deviceUser" id="user_right_DeviceUser">
                     <table class='alltable'>
                         <div class="alltable_head">
                             <p>设备用户列表</p>
                         </div>
                         <tr>
                             <th>ID</th><th>IP地址</th><th>用户名</th><th>密码</th>
                         </tr>
                         <?php echo file_get_contents('http://localhost/php/user/devList.php'); ?>
                     </table>
                     <button class="ok" style="position: absolute;top: 1.5%;height: 6%;left: 87%;box-shadow: 2px 2px 2px 2px #bbb;border: none;" onclick="addUserWindowsDev()">添加用户</button>
                     <div id="addSysUserDev" class="floatWindows">
                         <form class="addWindows">
                             <h4 align="center">添加设备用户</h4>
                             <label for="ipaddressDev" style="position: absolute;top: 7%;left: 22%;">IP地址：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="ipaddressDev" style="position: absolute;top: 8%;left: 33%;" type="text" name="ipaddressDev" maxlength="20">
                             <br>
                             <br>
                             <label for="userDev" style="position: absolute;top: 22%;left: 22%;">用户名：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="userDev" style="position: absolute;top: 23%;left: 33%;" type="text" name="userDev" maxlength="20">
                             <br>
                             <br>
                             <label for="passwdDev" style="position: absolute;top: 37%;left: 22%;">密&nbsp;&nbsp;&nbsp;码：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="passwdDev" style="position: absolute;top: 38%;left: 33%;" type="password" name="passwdDev" maxlength="20">
                             <br>
                             <br>
                             <div class="floatWindowsBtn ok" onclick="addUserDev();location.reload();" style="top: 92%;">&nbsp;添加</div>
                             <div class="floatWindowsBtn ok" onclick="(function (){
                                 document.getElementById('addSysUserDev').style.animation='0.5s ease forwards running login_loginOk';
                                 document.getElementById('addSysUserDev').style.display='none'
                             }
                             )();" style="left: 30%;top: 92%;">&nbsp;关闭</div>
                         </form>
                     </div>
                 </div>

			  </div>
		 </div>
		 
		 <!-- 系统设置 -->
		 <div class="setup" id="setup" style="background: inherit;">
        <!--  组件信息 -->
             <div onmouseover="(function (){
                    document.getElementById('package_info').style.display='block';
                    document.getElementById('package_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';})()"
                  onmouseout="(function (){
                    document.getElementById('package_info').style.display='block';
                    document.getElementById('package_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginOk';})()"
                  class="setup_package" style="left: 6%;top: 10%;"
             >
                <!-- 标题 -->
                 <div class="sysTitle">
                    <h2 class="sysTitleTitle">组  件  信  息</h2>
                 </div>
                <!-- 内容 -->
                 <div class="sysBody" id="package_info">
                     <br><br>
                     <h2 class="sysBodyTitle">组件信息</h2>
                    <code style="text-shadow: #888 2px 2px 3px;">
                        <?php
                        echo "<br>";
                        echo `echo "<b>PHP版本：</b><br>" && php -v | sed -n '1p' | sed 's/$/<br>/g'`;
                        echo "<br>";
                        echo `echo "<b>Apache2版本：</b><br>" && apache2 -v | sed 's/$/<br>/g'`;
                        echo "<br>";
                        echo `echo "<b>MySQL版本：</b><br>" && mysql --version`;
                        ?>
                     </code>
                 </div>
             </div>
             <!--  时间 -->
             <div onmouseover="(function (){
                    document.getElementById('clock_info').style.display='block';
                    document.getElementById('clock_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';})()"
                  onmouseout="(function (){
                    document.getElementById('clock_info').style.display='block';
                    document.getElementById('clock_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginOk';})()"
                     class="setup_clock" style="left: 29%;top: -65%;"
             >
                <!-- 标题 -->
                 <div class="sysTitle" style="height: 100%;width: 100%;border-radius: 3%;">
                     <h2 class="sysTitleTitle">系  统  脚  本</h2>
                 </div>
                 <!-- 内容 -->
                 <div class="sysBody" id="clock_info">
                     <br><br>
                     <h2 class="sysBodyTitle">系统脚本</h2>
                     <br><br>

                 </div>
             </div>
             <!--  关于 -->
             <div onmouseover="(function (){
                    document.getElementById('about_info').style.display='block';
                    document.getElementById('about_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';})()"
                  onmouseout="(function (){
                    document.getElementById('about_info').style.display='block';
                    document.getElementById('about_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginOk';})()"
                     class="setup_about" style="left: 52%;top: -140%;"
             >
                 <!-- 标题 -->
                 <div class="sysTitle" style="height: 100%;width: 100%;border-radius: 3%;">
                     <h2 class="sysTitleTitle">邮  件  告  警</h2>
                 </div>
                 <!-- 内容 -->
                 <div class="sysBody" id="about_info">
                     <br><br>
                     <h2 class="sysBodyTitle">告警设置</h2>
                     <br><br>
                     <p>触发条件：</p><br>
                     <p>收件人：</p>
                 </div>
             </div>
             <!--  退出登录 -->
             <div onmouseover="(function (){
                    document.getElementById('exit_info').style.display='block';
                    document.getElementById('exit_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';})()"
                  onmouseout="(function (){
                    document.getElementById('exit_info').style.display='block';
                    document.getElementById('exit_info').style.animation='0.5s ease 0s 1 normal forwards running login_loginOk';})()"
                     class="setup_exit" style="left: 75%;top: -215%;">
                 <!-- 标题 -->
                 <div class="sysTitle" style="">
                     <h2 class="sysTitleTitle">退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</h2>
                 </div>
                 <!-- 内容 -->
                 <div class="sysBody" id="exit_info">
                     <br><br>
                     <h2 class="sysBodyTitle">退  出</h2>
                     <br><br>
                     <button onclick="loginout()" style="height: 20vh;width: 10vw;border-radius: 100%;left: 15%;top: 10%;">退出登录</button>
                 </div>
             </div>
		 </div>
        <!-- 放在页面底部可以读到上面元素的ID值 -->
        <!-- 保持登录一段时间 判定phpSession的值，为1表示已经登录 -->
<!--        问题：无法重置登录cookie的时间-->
        <?php
            if($status==1){
                echo "<script>
                //BUG0:平移登录动画时,每次刷新都会重复登录动画.改进登陆动画后 > BUG1:登录成功后,刷新任何界面,登录表单会出现一秒钟然后消失. --  解决方法:设置登陆成功后&&播放完登录动画后,移除登录盒子
                //加了几个刷新按钮后，bug又回来了  --  最终方法：登录表单只有读不到登录session时才会出现,也就是说登录状态时，不对登陆表单做任何操作。（多余）
		        
		        //主页
		        document.getElementById('head_div').style.display='block';
		        document.getElementById('head_div').style.animation='0.5s ease 0s 1 normal forwards running index_head_loginOk';
		        document.getElementById('panel').style.display='block';
		        document.getElementById('panel').style.animation='0.5s ease 0s 1 normal forwards running index_panel_loginOk';
		 		</script>";
                switch ($viewStatus){
                    case 0:
                          echo "<script>lastView($viewStatus);</script>";
                        break;
                    case 1:
                        echo "<script>lastView($viewStatus);</script>";
                        break;
                    case 2:
                        echo "<script>lastView($viewStatus);</script>";
                        break;
                    case 3:
                        echo "<script>lastView($viewStatus);</script>";
                        break;
                    case 4:
                        echo "<script>lastView($viewStatus);</script>";
                        break;
                    default:
                        break;
                }
            }else{
                echo "<script>
                document.getElementById('login_div').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';
		        document.getElementById('login_div').style.display='block';
		 		</script>";
            }
        ?>
	</body>
</html>