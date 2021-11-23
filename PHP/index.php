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
                <img src="img/logo1-1.png" alt="这是logo！" style="width: 50%;left: 22.5%;top: 20%;"/>
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
			 <div class="panel_btn" title="内存、硬盘、网络、处理器图表" onclick="btnOnClick(this);loading();">监控面板</div>
			 <div class="host_btn" title="设备的总览、列表、添加" onclick="btnOnClick(this)">设备管理</div>
			 <div class="checking_btn" title="设备的连通、性能、端口、硬件" onclick="btnOnClick(this)">自动巡检</div>
			 <div class="user_btn" title="系统用户、设备用户、添加" onclick="btnOnClick(this)">用户管理</div>
			 <div class="setup_btn" title="退出登录、修改密码、系统状态、查看日志" onclick="btnOnClick(this)">系统设置</div>
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
                     <div id="hostall" style="width: 500%;height: 500%;padding-left: 28%;padding-top: 3%;">
                         <script src="js/host/hostall.js"></script>
                     </div>
                 </div>
				 <div class="host_right_list" id="host_right_list">
                     <table class='alltable'>
                         <div class="alltable_head">
                             <p>设备列表</p>
                         </div>
                         <tr>
                             <th>主机名</th><th>类型</th><th>地址</th><th>内存</th><th>网卡速率</th><th>硬盘</th>
                         </tr>
                         <?php echo file_get_contents('http://localhost/php/host/List.php'); ?>
                     </table>

                 </div>
				 <div class="host_right_addhost" id="host_right_addhost">
                     <div class="alltable_head">
                         <p>添加设备</p>
                     </div>
                     <div class="addhost_form">
                         <form action="#" method="get">
                             <label for="ipaddress" style="position: absolute;top: 8%;left: 2%;">IP地址：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="ipaddress" class="form_input" style="position: absolute;top: 8%;left: 8%;" type="text" name="ipaddress" maxlength="20">
                             <br />
                             <br />
                             <label for="hostuser" style="position: absolute;top: 8%;left: 30%;">用户名：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="hostuser" class="form_input" style="position: absolute;top: 8%;left: 36%;" type="text" name="hostuser" maxlength="20">
                             <br />
                             <br />
                             <label for="hostpasswd" style="position: absolute;top: 8%;left: 58%;">密&nbsp;&nbsp;&nbsp;码：</label>
                             <input id="hostpasswd" class="form_input" style="position: absolute;top: 8%;left: 64%;" type="password" name="hostpasswd">
                             <br />
                             <br />
                             <div class="ok" onclick="addHost()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;添加</div>
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
			 	 <div class="checking_left_link" title="Ping命令检测" onclick="btnOnClick(this)">连通性检测</div>
			 	 <!-- 性能检测 -- disk读写/网速/CPU/内存 -->
			 	 <div class="checking_left_test" title="磁盘、网络、处理器性能" onclick="btnOnClick(this)">性能检测</div>
			 	 <!-- 端口检测 -- 主机暴露端口 -->
			 	 <div class="checking_left_port" title="设备端口开放情况" onclick="btnOnClick(this)">端口检测</div>
				 <!-- 硬件检测 -- cpu/内存条/网卡/硬盘(数量、规格) -->
			 	<div class="checking_left_device" title="硬件信息" onclick="btnOnClick(this)">硬件检测</div>
			 </div>
			 <!-- 右侧面板 -->
			 <div class="checking_right">
			 	 <div class="checking_right_link" id="checking_right_link">
                     <table class='alltable' id="alltable">
                         <div class="alltable_head">
                             <p>设备列表</p>
                         </div>
                         <tr>
                             <th>主机名</th><th>地址</th><th>延时</th>
                         </tr>
                     </table>
                     <button class="ok" style="position: absolute;top: 1.5%;height: 6%;left: 87%;box-shadow: 2px 2px 2px 2px #bbb;" onclick="hostLink()">开始检测</button>
                 </div>
			 	 <div class="checking_right_test" id="checking_right_test">
                     <div class="addhost_form" style="height: 18%;">
                         <form action="#" method="get">
                             <label for="ipaddressChecking" style="position: absolute;top: 8%;left: 2%;">IP地址：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="ipaddressChecking" class="form_input" style="position: absolute;top: 8%;left: 8%;" type="text" name="ipaddressChecking" maxlength="20">
                             <br />
                             <br />
                             <label for="hostuserChecking" style="position: absolute;top: 8%;left: 30%;">用户名：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="hostuserChecking" class="form_input" style="position: absolute;top: 8%;left: 36%;" type="text" name="hostuserChecking" maxlength="20">
                             <br />
                             <br />
                             <label for="hostpasswdChecking" style="position: absolute;top: 8%;left: 58%;">密&nbsp;&nbsp;&nbsp;码：</label>
                             <input id="hostpasswdChecking" class="form_input" style="position: absolute;top: 8%;left: 64%;" type="hostpasswdChecking" name="hostpasswd">
                             <br />
                             <br />
                             <div class="ok" id="hostDisk" style="position: absolute;top: 51%;left: 20%;background-color: #DDD;" onclick="hostPerf(this)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;硬盘</div>
                             <div class="ok" id="hostNetwork" style="position: absolute;top: 51%;left: 40%;background-color: #DDD;" onclick="hostPerf(this)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网络</div>
                             <div class="ok" id="hostCpu" style="position: absolute;top: 51%;left: 60%;background-color: #DDD;" onclick="hostPerf(this)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处理器</div>
                         </form>
                     </div>
                     <br />
                     <br />
                     <table class='alltable' id="checkingPerf">
                         <div class="alltable_head">
                             <p>测试结果</p>
                         </div>
                     </table>
                 </div>
			 	 <div class="checking_right_port" id="checking_right_port">
                     <div class="addhost_form">
                         <form action="#" method="get">
                             <label for="ipaddressCheckingPort" style="position: absolute;top: 8%;left: 2%;">IP地址：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="ipaddressCheckingPort" class="form_input" style="position: absolute;top: 8%;left: 8%;" type="text" name="ipaddressCheckingPort" maxlength="20">
                             <br />
                             <br />
                             <label for="hostuserCheckingPort" style="position: absolute;top: 8%;left: 30%;">用户名：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="hostuserCheckingPort" class="form_input" style="position: absolute;top: 8%;left: 36%;" type="text" name="hostuserCheckingPort" maxlength="20">
                             <br />
                             <br />
                             <label for="hostpasswdCheckingPort" style="position: absolute;top: 8%;left: 58%;">密&nbsp;&nbsp;&nbsp;码：</label>
                             <input id="hostpasswdCheckingPort" class="form_input" style="position: absolute;top: 8%;left: 64%;" type="hostpasswdCheckingPort" name="hostpasswd">
                             <br />
                             <br />
                             <div class="ok" id="hostDisk"  onclick="hostPort()">&nbsp;&nbsp;&nbsp;&nbsp;端口检测</div>
                         </form>
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

				 <div class="checking_right_device" id="checking_right_device" style="overflow-y: scroll;width: 106%;">
                     <div class="addhost_form">
                         <form action="#" method="get">
                             <label for="ipaddressCheckingDevice" style="position: absolute;top: 8%;left: 2%;">IP地址：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="ipaddressCheckingDevice" class="form_input" style="position: absolute;top: 8%;left: 8%;" type="text" name="ipaddressCheckingDevice" maxlength="20">
                             <br />
                             <br />
                             <label for="hostuserCheckingDevice" style="position: absolute;top: 8%;left: 30%;">用户名：</label>
                             <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                             <input id="hostuserCheckingDevice" class="form_input" style="position: absolute;top: 8%;left: 36%;" type="text" name="hostuserCheckingDevice" maxlength="20">
                             <br />
                             <br />
                             <label for="hostpasswdCheckingDevice" style="position: absolute;top: 8%;left: 58%;">密&nbsp;&nbsp;&nbsp;码：</label>
                             <input id="hostpasswdCheckingDevice" class="form_input" style="position: absolute;top: 8%;left: 64%;" type="hostpasswdCheckingDevice" name="hostpasswd">
                             <br />
                             <br />
                             <div class="ok" id="hostDisk"  onclick="hostDevice()">&nbsp;&nbsp;&nbsp;&nbsp;设备检测</div>
                         </form>
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
			  	 <!-- 用户列表 -- 登录 -->
<!--			  	 <div class="user_left_list" onclick="btnOnClick(this)">用户列表</div>-->
			  	 <!-- 系统用户 -- web用户 -->
			  	 <div class="user_left_webUser" title="可登录本界面" onclick="btnOnClick(this)">系统用户</div>
			  	 <!-- 设备用户 -- 主机用户 -->
			  	 <div class="user_left_deviceUser" title="可登录设备" onclick="btnOnClick(this)">设备用户</div>
			 	 <!-- 添加用户 -- 系统用户/设备用户 -->
			  	<div class="user_left_addUser" title="添加某种用户" onclick="btnOnClick(this)">添加用户</div>
			  </div>
			  <!-- 右侧面板 -->
			  <div class="user_right">
			  	 <div class="user_right_webUser" id="user_right_WebUser">
                     <?php echo file_get_contents('http://localhost/php/user/userList.php'); ?>
                 </div>
			  	 <div class="user_right_deviceUser" id="user_right_DeviceUser">
                     <?php echo file_get_contents('http://localhost/php/user/userList.php'); ?>
                 </div>
			 	 <div class="user_right_addUser" id="user_right_AddUser">
                     <form action="#" method="get">
                         <label for="adduser" style="font-size: 14px;color: #CCCCDC;">用户名：</label>
                         <!-- 横向内边距为2*3=6% 维持宽度100%，不至于超出范围 -->
                         <input id="adduser" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="text" name="adduser" maxlength="20">
                         <br />
                         <br />
                         <label for="addpasswd" style="font-size: 14px;color: #CCCCDC;">密&nbsp;&nbsp;&nbsp;码：</label>
                         <input id="addpasswd" style="height: 5%;width: 40%;padding: 1% 2%;border-radius: 5px;" type="password" name="addpasswd">
                         <br />
                         <br />
                         <input style="height: 5%;width: 15%;padding: 1% 2%;border-radius: 5px;left: 36%;" type="button" value="添加" onclick="addUser()">
                     </form>
                 </div>
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
		        
                //BUG:登录成功后,刷新任何界面,登录表单会出现一秒钟然后消失. --  解决方法:设置登陆成功后&&播放完登录动画后,移除登录盒子.
                //平移登录动画时,每次刷新都会重复登录动画.改进登陆动画后,出现了此BUG                		                
		        document.getElementById('login_div').remove();      
		        
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