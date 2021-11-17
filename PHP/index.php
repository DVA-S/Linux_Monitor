<!DOCTYPE html>
<html lang="zh">
	<head>
		<link rel="stylesheet" type="text/css" href="css/kuangjia.css"/>
		<script type="text/javascript" src="js/kuangjia.js"></script>
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/echars.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Inspection and Monitoring</title>

	</head>
    <!-- 根据session判断是否登录 -->
    <!-- session_start()函数前不能有任何代码输出到浏览器，最好加在页面头部，或者先用ob_start()函数打开输出缓冲区。-->
    <?php
        session_start();
        $status = $_SESSION["loginStatus"];
//        echo "<script>console.log('loginStatus:',{$_SESSION['loginStatus']});</script>";
    ?>
	<body>
		<!-- 登录页 -->
		<div class="background_color">
		</div>
		<div class="login_div" id="login_div">
			<div class="logo">
				<h1 style="text-align: center;line-height: 480%;color: #FFF;"><i>运维系统</i></h1>
			</div>
			<div class="login_form" id="login_form">
				<form action="#" method="post"">
                    <label for="username" style="font-size: 14px;color: #CCCCDC;">用户名：</label>
					<!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
					<input id="username" placeholder="admin" autofocus="autofocus" style="height: 8%;width: 94%;padding: 1% 2%;border-radius: 5px;" type="text" name="username" maxlength="20" onkeydown="keyLogin()">
					<br />
					<br />
					<label for="passwd" style="font-size: 14px;color: #CCCCDC;">密码：</label>
					<input id="passwd" placeholder="回车可登录" style="height: 8%;width: 94%;padding: 1% 2%;border-radius: 5px;" type="password" name="passwd"  onkeydown="keyLogin()">
					<br />
					<br />
					<input id="loginbtn" class="submit" type="button" value="登  录" onclick="loginOkAnimation()">
				</form>
			</div>
            <p style="color: #CCC;position: relative;top: 25%;left: 22.5%;font-size: 14px;">自动化运维与监控系统@2021 by wxk</p>
		</div>
		<!-- 主页 -->
<!--		 <div class="background_color"></div>-->
		 <!-- 导航栏 -->
		 <div class="head_div" id="head_div">
            <!--loading（）：点击监控面板按钮 重新触发刷新事件-->
			 <div class="panel_btn" onclick="btnOnClick(this);loading();">
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
             <div class="view" id="memory" style="width: 50%;height: 50%;position: relative;top: -0.5%;left: -0.5%;background-color: #FFF;">
                 <script src="js/memory.js"></script>
             </div>
             <div class="view" id="network" style="width: 50%;height: 50%;position: relative;top: 0.5%;left: -0.5%;background-color: #FFF;">
                 <script src="js/network.js"></script>
             </div>
             <div class="view" id="cpu" style="width: 50%;height: 50%;position: relative;top: -49.5%;left: 50.5%;background-color: #FFF;">
                 <script src="js/cpu.js"></script>
             </div>
             <div class="view" id="disk" style="width: 50%;height: 50%;position: relative;top: -150.5%;left: 50.5%;background-color: #FFF;">
                <script src="js/disk.js"></script>
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
                         <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo file_get_contents('http://localhost/php/host/Count.php?type=Ubuntu'); ?><br>Ubuntu</h1>
                     </div>
                     <div class='CentOS'>
                         <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo file_get_contents('http://localhost/php/host/Count.php?type=CentOS'); ?><br>CentOS</h1>
                     </div>
                     <div class='MySQL'>
                         <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo file_get_contents('http://localhost/php/host/Count.php?type=MySQL'); ?><br>MySQL</h1>
                     </div>
                 </div>
				 <div class="host_right_list" id="host_right_list">
                         <?php echo file_get_contents('http://localhost/php/host/List.php'); ?>
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
			 	 <div class="checking_right_test" id="checking_right_test">
                     <form action="#" method="get">
                         <label for="ipaddressC" style="font-size: 14px;color: #CCCCDC;">IP地址：</label>
                         <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                         <input id="ipaddressC" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="text" name="ipaddressC" maxlength="20">
                         <br />
                         <br />
                         <label for="hostuserC" style="font-size: 14px;color: #CCCCDC;">用户名：</label>
                         <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                         <input id="hostuserC" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="text" name="hostuserC" maxlength="20">
                         <br />
                         <br />
                         <label for="hostpasswdC" style="font-size: 14px;color: #CCCCDC;">密&nbsp;&nbsp;&nbsp;码：</label>
                         <input id="hostpasswdC" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="password" name="hostpasswdC">
                         <br />
                         <br />
                         <input class="hostDisk" style="height: 5%;width: 15%;padding: 1% 2%;border-radius: 5px;left: 36%;" type="button" value="磁盘速度" onclick="hostPerf(this)">
                         <input class="hostNetwork" style="height: 5%;width: 15%;padding: 1% 2%;border-radius: 5px;left: 36%;" type="button" value="网络速度" onclick="hostPerf(this)">
                         <input class="hostCpu" style="height: 5%;width: 15%;padding: 1% 2%;border-radius: 5px;left: 36%;" type="button" value="CPU性能" onclick="hostPerf(this)">
                     </form>
                     <p id="checking_disk"></p>
                     <p id="checking_network"></p>
                     <p id="checking_cpu"></p>

                 </div>
			 	 <div class="checking_right_port" id="checking_right_port">
                     <form action="#" method="get">
                         <label for="ipaddressP" style="font-size: 14px;color: #CCCCDC;">IP地址：</label>
                         <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                         <input id="ipaddressP" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="text" name="ipaddressP" maxlength="20">
                         <br />
                         <br />
                         <label for="hostuserP" style="font-size: 14px;color: #CCCCDC;">用户名：</label>
                         <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                         <input id="hostuserP" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="text" name="hostuserP" maxlength="20">
                         <br />
                         <br />
                         <label for="hostpasswdP" style="font-size: 14px;color: #CCCCDC;">密&nbsp;&nbsp;&nbsp;码：</label>
                         <input id="hostpasswdP" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="password" name="hostpasswdP">
                         <br />
                         <br />
                         <input class="hostPort" style="height: 5%;width: 15%;padding: 1% 2%;border-radius: 5px;left: 36%;" type="button" value="开放端口" onclick="hostPort()">
                     </form>
                     <p id="checking_port"></p>
                 </div>
				 <div class="checking_right_device" id="checking_right_device" style="overflow:auto;">
                     <form action="#" method="get">
                         <label for="ipaddressD" style="font-size: 14px;color: #CCCCDC;">IP地址：</label>
                         <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                         <input id="ipaddressD" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="text" name="ipaddressD" maxlength="20">
                         <br />
                         <br />
                         <label for="hostuserD" style="font-size: 14px;color: #CCCCDC;">用户名：</label>
                         <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                         <input id="hostuserD" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="text" name="hostuserD" maxlength="20">
                         <br />
                         <br />
                         <label for="hostpasswdD" style="font-size: 14px;color: #CCCCDC;">密&nbsp;&nbsp;&nbsp;码：</label>
                         <input id="hostpasswdD" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="password" name="hostpasswdD">
                         <br />
                         <br />
                         <input class="hostDevice" style="height: 5%;width: 15%;padding: 1% 2%;border-radius: 5px;left: 36%;" type="button" value="硬件信息" onclick="hostDevice()">
                     </form>
                     <p id="checking_device"></p>
                 </div>
			 </div>
		 </div>
		 
		 <!-- 用户管理 -->
		 <div class="user" id="user">
			 <!-- 左侧边栏 -->
			  <div class="user_left">
			  	 <!-- 用户列表 -- 登录 -->
<!--			  	 <div class="user_left_list" onclick="btnOnClick(this)">用户列表</div>-->
			  	 <!-- 系统用户 -- web用户 -->
			  	 <div class="user_left_webUser" onclick="btnOnClick(this)">系统用户</div>
			  	 <!-- 设备用户 -- 主机用户 -->
			  	 <div class="user_left_deviceUser" onclick="btnOnClick(this)">设备用户</div>
			 	 <!-- 添加用户 -- 系统用户/设备用户 -->
			  	<div class="user_left_addUser" onclick="btnOnClick(this)">添加用户</div>
			  </div>
			  <!-- 右侧面板 -->
			  <div class="user_right">

<!--			  	 <div class="user_right_list" id="user_right_List">用户列表</div>-->
			  	 <div class="user_right_webUser" id="user_right_WebUser">系统用户</div>
			  	 <div class="user_right_deviceUser" id="user_right_DeviceUser">设备用户</div>
			 	 <div class="user_right_addUser" id="user_right_AddUser">添加用户</div>
			  </div>
		 </div>
		 
		 <!-- 系统设置 -->
		 <div class="setup" id="setup">
             <button onclick="loginout()">退出登录</button>
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