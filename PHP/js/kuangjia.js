/* - ------------------------------------------------------------------------------- -全局变量--------------------------- ----------------------------------------------------- - */
//echars图表变量
var chartDom;var myChart;

// 0-4:导航栏五个按钮 5-7:设备管理左侧三个按钮 8-11:自动巡检左侧四个按钮 12-15:用户管理左侧四个按钮
var panel_list = [
	'panel','host','checking','user','setup',
	'host_right_all','host_right_list','host_right_addhost',
	'checking_right_link','checking_right_test','checking_right_port','checking_right_device',
	'user_right_WebUser','user_right_DeviceUser','user_right_AddUser','user_right_List'
];

//正在显示的面板
var view=null;

//负的窗口宽度--优化
// var windowsSizeNoView = -document.body.clientWidth+'px';
var windowsSizeNoView = -window.innerWidth+'px';
/* - ---------------------------------------------------------------------------------全局变量----------------------------------------------------------------------------------- */

/* - ---------------------------------------------------------------------------------复用函数----------------------------------------------------------------------------------- */
//请求数据
function pgGet(url,back){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET",url,true);
	//当 readyState 的值改变的时候，callback 函数会被调用。
	xmlHttp.onreadystatechange = back;
	xmlHttp.send(null);
	return xmlHttp;
}

//cookie：get and set
//设置cookie存活时间：2021-11-08T03:23:55.000Z（这种时间格式表示格林尼治的时间，加上八个小时就是北京时间了）
function setCookie(cname,cvalue,minute){
	var d = new Date();
	d.setTime(d.getTime()+(minute*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	{
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}
/* - ---------------------------------------------------------------------------------复用函数----------------------------------------------------------------------------------- */

/* - ---------------------------------------------------------------------------------登录界面----------------------------------------------------------------------------------- */
//回车登录(在输入框调用)
function keyLogin(){
	if (event.keyCode==13)  //回车键的键值为13
		document.getElementById("loginbtn").click(); //调用登录按钮的登录事件
}

//登录 -- 判断显示动画、设置Cookie
function loginOkAnimation(){
	var username =$("#username").val();
	var passwd = $("#passwd").val();
	$.post(
		"php/login.php",{"user":username,"passwd":passwd},
		function(data,status){
			console.log("数据: \n" + data + "\n状态: " + status);
			if(data==1){
				// 登录框  forwards属性会让对象停留在终点
				document.getElementById("login_div").style.animation="0.5s ease 0s 1 normal forwards running login_loginOk";
				// 主页
				document.getElementById("head_div").style.display="block";
				document.getElementById("head_div").style.animation="0.5s ease 0s 1 normal forwards running index_head_loginOk";
				document.getElementById("panel").style.display="block";
				document.getElementById("panel").style.animation="0.5s ease 0s 1 normal forwards running index_panel_loginOk";
				console.log("logOK!");
			}else{
				//拒绝动画
				document.getElementById("login_div").style.animation="0.5s ease 0s 1 normal forwards running login_loginNo";
				// 延迟0.5秒刷新-重置登录失败动画
				setTimeout(function(){ location.reload(); },500);
				console.log("logNO!");
			}
		}
	);
}
/* - ---------------------------------------------------------------------------------登录界面----------------------------------------------------------------------------------- */

/* - ---------------------------------------------------------------------------------动作交互----------------------------------------------------------------------------------- */
//判断正在显示的面板：：list参数表示导航栏按钮
function getPanelView(list){
	if(getComputedStyle(document.getElementById(panel_list[list]),null).getPropertyValue('left') != '2.5%' &&
		getComputedStyle(document.getElementById(panel_list[list]),null).getPropertyValue('left') != windowsSizeNoView){
		return true;
	}
}

//根据传入面板值，显示离开时的面板
function lastView(view){
	switch (view){
		case 0:
			$('#panel,#checking,#user,#host,#setup').css('display', 'none');
			document.getElementById('panel').style.display='block';
			break;
		case 1:
			$('#panel,#checking,#user,#host,#setup').css('display', 'none');
			document.getElementById('host').style.display='block';
			break;
		case 2:
			$('#panel,#checking,#user,#host,#setup').css('display', 'none');
			document.getElementById('checking').style.display='block';
			break;
		case 3:
			$('#panel,#checking,#user,#host,#setup').css('display', 'none');
			document.getElementById('user').style.display='block';
			break;
		case 4:
			$('#panel,#checking,#user,#host,#setup').css('display', 'none');
			document.getElementById('setup').style.display='block';
			break;
		default:
			break;
	}
}

// btnOnClick(this)根据按钮的类名，传出右侧面板ID到view_panel()
function btnOnClick(element){
	var go=element.className;
	switch(go)
	{
		case 'panel_btn': 				viewPanel('panel');  				break;
		case 'host_btn':  				viewPanel('host');  				break;
		case 'checking_btn': 			viewPanel('checking');  			break;
		case 'user_btn': 				viewPanel('user');  				break;
		case 'setup_btn': 				viewPanel('setup');  				break;
		case 'host_left_all': 			viewPanel('host_right_all');  		break;
		case 'host_left_list': 			viewPanel('host_right_list'); 		break;
		case 'host_left_addhost': 		viewPanel('host_right_addhost');    break;
		case 'checking_left_link': 		viewPanel('checking_right_link');   break;
		case 'checking_left_test': 		viewPanel('checking_right_test');   break;
		case 'checking_left_port': 		viewPanel('checking_right_port');   break;
		case 'checking_left_device': 	viewPanel('checking_right_device'); break;
		case 'user_left_list': 			viewPanel('user_right_List');  	    break;
		case 'user_left_webUser': 		viewPanel('user_right_WebUser');    break;
		case 'user_left_deviceUser': 	viewPanel('user_right_DeviceUser'); break;
		case 'user_left_addUser': 		viewPanel('user_right_AddUser');    break;
		default:
	}
}

// 根据btnOnClick传入的ID显示面板（主界面导航栏按钮和面板左侧按钮）
function viewPanel(view_btn){
	//函数主体
	switch(panel_list.indexOf(view_btn))
	{
		case 0:case 1:case 2:case 3:case 4:
		// 点击按钮在当前窗口的左边或者右边 初始位置:top:8%;left:2.5%; 显示位置:top:100vh*0.08 or 100%*0.08 && *0.025 隐藏位置:top:50px left:-100vh
		//确定正在显示面板在数组中的位置（得到数组下标）
		if( getPanelView(0) ) {
			view=0;
		}else if( getPanelView(1) ) {
			view=1;
		}else if( getPanelView(2) ) {
			view=2;
		}else if( getPanelView(3) ) {
			view=3;
		}else if( getPanelView(4) ) {
			view=4; }

		 //switch主体 - 获取按钮点击传来的ID，判断该ID在数组中的位置（返回数字）;正在显示面板下标和点击按钮将要显示的面板的下标作比较
		 if(view<panel_list.indexOf(view_btn)){
			 // ##BUG:所有面板都显示过后，无法跳转切换 ##例如：从2到4后，虽然实际显示的是4，但view的值是3 ##所以解决方法之一为：做动作前先清场，大概属于一刀切方法，很简单。
			 $('#panel,#checking,#user,#host,#setup').css('display', 'none');
			//点击当前面板右边的按钮
			// 离开动画--当前面板左移(BUG:导航栏按钮--应该是将要显示前的面板离开)
			document.getElementById(panel_list[panel_list.indexOf(view_btn)-1]).style.display="block";
			document.getElementById(panel_list[panel_list.indexOf(view_btn)-1]).style.animation="0.5s ease forwards running btn_switch_CenterGoLeftHide";
			// 进入动画--当前元素从右边到中间显示 不加绝对定位动画会上天
			document.getElementById(view_btn).style.display="block";
			document.getElementById(view_btn).style.position="absolute";
			document.getElementById(view_btn).style.animation="0.5s ease forwards running btn_switch_RightGoCenterShow";
			console.log('当前显示为：'+view,"点击为：",panel_list.indexOf(view_btn)+"<<向左");
			//将最后一次显示的面板存入cookie
			setCookie("panelView",view,600);
			break;
		}else if(view>panel_list.indexOf(view_btn)){
			$('#panel,#checking,#user,#host,#setup').css('display', 'none');
			// 点击当前面板左边的按钮
			// 离开动画--当前面板右移
			document.getElementById(panel_list[panel_list.indexOf(view_btn)+1]).style.display="block";
			document.getElementById(panel_list[panel_list.indexOf(view_btn)+1]).style.animation="0.5s ease forwards running btn_switch_CenterGoRightHide";
			// 进入动画--当前元素从左边到中间显示
			document.getElementById(view_btn).style.display="block";
			document.getElementById(view_btn).style.animation="0.5s ease forwards running btn_switch_LeftGoCenterShow";
			document.getElementById(view_btn).style.position="absolute";
			console.log('当前显示为：'+view,"点击为：",panel_list.indexOf(view_btn)+">>向右");
			//将最后一次显示的面板存入cookie
			setCookie("panelView",panel_list.indexOf(view_btn),600);
			break;
		}else if(view===panel_list.indexOf(view_btn)){
			// $('#panel,#checking,#user,#host,#setup').css('display', 'none');
			// // 点击当前面板按钮
			// // 刷新动画--当前元素显示
			// //BUG:只能显示一次🤔
			// document.getElementById(view_btn).style.display="block";
			// document.getElementById(view_btn).style.animation="0.5s ease forwards running flush";
			// document.getElementById(view_btn).style.position="absolute";
			console.log('当前显示为：'+view,"点击为：",panel_list.indexOf(view_btn)+"刷新显示");
			//将最后一次显示的面板存入cookie
			setCookie("panelView",panel_list.indexOf(view_btn),600);
			break;
		}

		case 5:case 6:case 7:
		$('#host_right_list,#host_right_addhost,#host_right_all').css('display', 'none');
		document.getElementById(view_btn).style.display="block";		break;
		case 8:case 9:case 10:case 11:
		$('#checking_right_test,#checking_right_port,#checking_right_device,#checking_right_link').css('display', 'none');
		document.getElementById(view_btn).style.display="block";	    break;
		case 12:case 13:case 14:case 15:
		$('#user_right_WebUser,#user_right_DeviceUser,#user_right_AddUser,#user_right_List').css('display', 'none');
		document.getElementById(view_btn).style.display="block";		break;
		default:
			break;
	}
}
/* - ---------------------------------------------------------------------------------动作交互----------------------------------------------------------------------------------- */

/* - ---------------------------------------------------------------------------------单击事件----------------------------------------------------------------------------------- */
//设备管理 -- 删除设备
function deleteHost(element){
	hostID=element.id.slice(5);
	// console.log(hostID);
	res=confirm("确认删除？");
	if(res==true){
		//传入数据ID，调用php删除接口，刷新
		$.get(
			"php/host/DeleteHost.php",{"hostID":hostID}
		);
		setTimeout(function (){
			location.reload()
		},1500);
	}
}

//自动巡检 -- 添加主机
function addHost(){
	var ipaddress =$("#ipaddress").val();
	var username =$("#hostuser").val();
	var passwd = $("#hostpasswd").val();
	$.get(
		"php/host/AddHost.php",{"ipaddress":ipaddress,"username":username,"passwd":passwd},
		// function(data,status){
			// console.log("数据: \n" + data + "\n状态: " + status);
		// }
	);
	setTimeout(function (){
		location.reload()
	},1500);
}

//用户管理 -- 添加用户
//弹窗
function addUserWindows(){
	document.getElementById("addSysUser").style.display="block";
}
function addUserWindowsDev(){
	document.getElementById("addSysUserDev").style.display="block";
}
//添加数据
function addUserSys(){
	var username =$("#usernameAdd").val();
	var userAdd =$("#userAdd").val();
	var userAddPasswd =$("#userAddPasswd").val();
	var email =$("#email").val();
	var sex =$("#sex").val();
	var phone =$("#phone").val();
	$.get(
		"php/user/AddUser.php",{"username":username,"user":userAdd,"passwd":userAddPasswd,"email":email,"sex":sex,"phone":phone},
		function(){
			document.getElementById('addSysUser').style.display='none';
		}
	);
}
function addUserDev(){
	var ipaddr =$("#ipaddressDev").val();
	var user =$("#userDev").val();
	var passwd =$("#passwdDev").val();
	$.get(
		"php/user/AddDevUser.php",{"ipaddr":ipaddr,"user":user,"passwd":passwd},
		function(){
			alert("OK!");
			document.getElementById('addSysUserDev').style.display='none';
		}
	);
}

//自动巡检 -- 性能检测
function hostPerf(element){
	document.getElementById("checkingPerf").innerHTML="<img src=\"img/loading.gif\" style=\"position: relative;opacity: 0.5;width: 30%;\" />";
	var go=element.id;
	console.log(go);
	var ipaddress =$("#ipaddressChecking").val();
	var username =$("#hostuserChecking").val();
	var passwd = $("#hostpasswdChecking").val();
	switch (go){
		case 'hostDisk':
			$.get(
				"php/checking/hostPerformance.php",{"ipaddress":ipaddress,"username":username,"passwd":passwd,"type":"disk"},
				function(data){
					document.getElementById("checkingPerf").innerHTML=data;
				}
			);
			break;
		case 'hostNetwork':
			$.get(
				"php/checking/hostPerformance.php",{"ipaddress":ipaddress,"username":username,"passwd":passwd,"type":"network"},
				function(data){
					document.getElementById("checkingPerf").innerHTML=data;
				}
			);
			break;
		case 'hostCpu':
			$.get(
				"php/checking/hostPerformance.php",{"ipaddress":ipaddress,"username":username,"passwd":passwd,"type":"cpu"},
				function(data){
					document.getElementById("checkingPerf").innerHTML=data;
				}
			);
			break;
		default:
			break;
	}
}

//自动巡检 -- 连通性检测ping
function hostLink(){
	document.getElementById("alltable").innerHTML="<table class='alltable' id=\"alltable\">\n" +
		"                         <tr>\n" +
		"                             <th>主机名</th><th>地址</th><th>延时</th>\n" +
		"                         </tr>\n" +
		"                     </table>" +
		"<img src=\"img/loading.gif\" style=\"position: relative;left: 100%;top: 0;opacity: 0.5;width: 100%;\" />";
	$.get(
		"php/checking/hostLink.php",{},
		function(data){
			document.getElementById("alltable").innerHTML=data;
		}
	);
}

//自动巡检 -- 获取端口信息
function hostPort(){
	var ipaddress =$("#ipaddressPort").val();
	var username =$("#hostuserPort").val();
	var passwd = $("#hostpasswdPort").val();
	$.get(
		"php/checking/hostPort.php",{"ipaddress":ipaddress,"username":username,"passwd":passwd},
		function(data){
			document.getElementById("checkingPerfPort").innerHTML=data;
		}
	);
}

//自动巡检 -- 获取硬件信息
function hostDevice(){
	var ipaddress =$("#ipaddressCheckingDevice").val();
	var username =$("#hostuserCheckingDevice").val();
	var passwd = $("#hostpasswdCheckingDevice").val();
	$.get(
		"php/checking/hostDevice.php",{"ipaddress":ipaddress,"username":username,"passwd":passwd,type:"cpu"},
		function(data){
			document.getElementById("checkingPerfDevice").innerHTML=data;
		}
	);
	$.get(
		"php/checking/hostDevice.php",{"ipaddress":ipaddress,"username":username,"passwd":passwd,type:"mother"},
		function(data){
			document.getElementById("checkingPerfDeviceMother").innerHTML=data;
		}
	);
	$.get(
		"php/checking/hostDevice.php",{"ipaddress":ipaddress,"username":username,"passwd":passwd,type:"memory"},
		function(data){
			document.getElementById("checkingPerfDeviceMemory").innerHTML=data;
		}
	);
	$.get(
		"php/checking/hostDevice.php",{"ipaddress":ipaddress,"username":username,"passwd":passwd,type:"network"},
		function(data){
			document.getElementById("checkingPerfDeviceNetwork").innerHTML=data;
		}
	);
	$.get(
		"php/checking/hostDevice.php",{"ipaddress":ipaddress,"username":username,"passwd":passwd,type:"disk"},
		function(data){
			document.getElementById("checkingPerfDeviceDisk").innerHTML=data;
		}
	);
}

//退出登录
function loginout(){
	setCookie("PHPSESSID", "", -1);
	location.reload();
}
/* - ---------------------------------------------------------------------------------单击事件----------------------------------------------------------------------------------- */

/* - ---------------------------------------------------------------------------------监控面板----------------------------------------------------------------------------------- */
//刷新事件&加载动画（实时刷新可以传入一个时间间隔参数）
function loading(){
	var windowsSizeNoView = -document.body.clientWidth+'px';
	setTimeout(function (){
		//如果监控面板正在显示
		if(getComputedStyle(document.getElementById("panel"),null).getPropertyValue('left') != '2.5%' &&
			getComputedStyle(document.getElementById("panel"),null).getPropertyValue('left') != windowsSizeNoView){
			// console.log("动画开始");
			// //此动画主要用来清空图表刷新数据时的异常闪动
			document.getElementById("memory").innerHTML="<img src=\"img/loading.gif\" style=\"position: relative;left: 6.5vw;top: 4vh;\" />";
			document.getElementById("disk").innerHTML="<img src=\"img/loading.gif\" style=\"position: relative;left: 6.5vw;top: 4vh;\" />";
			document.getElementById("network").innerHTML="<img src=\"img/loading.gif\" style=\"position: relative;left: 6.5vw;top: 4vh;\" />";
			document.getElementById("cpu").innerHTML="<img src=\"img/loading.gif\" style=\"position: relative;left: 6.5vw;top: 4vh;\" />";
			setTimeout("runNetwork();runMemory();runDisk();runCpu();",200);
			// console.log("动画结束");
		}
	},10000);
}

//图表
function viewCharts(panelId,Atitle,Btitle,unit){
	//报错：There is a chart instance already initialized on the dom.解决方法0.1
	if(chartDom != null && chartDom != "" && chartDom != undefined){
		echarts.dispose(document.getElementById(panelId))
	}
	// if(xmlHttpdCpuTime.readyState == 4){
	//     if(xmlHttpdCpuTime.status == 200){
	// responseText解析：https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseText
	switch (panelId){
		case 'memory':
			date = datatime = xmlHttpMemoryTime.responseText.split(",");
			dataA = memused = xmlHttpMemoryUsed.responseText.split(",");
			dataB = memfree = xmlHttpMemoryFree.responseText.split(",");
			break;
		case 'disk':
			date = datatime = xmlHttpDiskTime.responseText.split(",");
			dataA =diskwrite = xmlHttpDiskWrite.responseText.split(",");
			dataB =diskread = xmlHttpDiskRead.responseText.split(",");
			break;
		case 'network':
			date = datatime = xmlHttpdNetworkTime.responseText.split(",");
			dataA =diskwrite = xmlHttpNetworkUp.responseText.split(",");
			dataB =diskread = xmlHttpNetworkDown.responseText.split(",");
			break;
		case 'cpu':
			date = xmlHttpdCpuTime.responseText.split(",");
			dataA = xmlHttpCpuUsed.responseText.split(",");
			dataB = xmlHttpCpuFree.responseText.split(",");
			break;
		default:
			break;
	}

	//There is a chart instance already initialized on the dom.解决方法0.1
	chartDom = document.getElementById(panelId);
	myChart = echarts.init(chartDom);
	var option = {
		animation: false,
		title: {
			text: panelId
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
			data: [Atitle, Btitle]
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '1%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: [date[0],date[1],date[2],date[3],date[4],date[5],date[6],date[7],date[8],date[9],date[10],date[11],date[12],date[13],date[14],date[15],date[16],date[17],date[18],date[19]]
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {
					formatter: '{value} '+unit
				}
			}
		],
		series: [
			{
				name: Atitle,
				type: 'line',
				stack: 'Total',
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [dataA[0],dataA[1],dataA[2],dataA[3],dataA[4],dataA[5],dataA[6],dataA[7],dataA[8],dataA[9],dataA[10],dataA[11],dataA[12],dataA[13],dataA[14],dataA[15],dataA[16],dataA[17],dataA[18],dataA[19]]
			},
			{
				name: Btitle,
				type: 'line',
				stack: 'Total',
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: [dataB[0],dataB[1],dataB[2],dataB[3],dataB[4],dataB[5],dataB[6],dataB[7],dataB[8],dataB[9],dataB[10],dataB[11],dataB[12],dataB[13],dataB[14],dataB[15],dataB[16],dataB[17],dataB[18],dataB[19]]
			}
		]
	};
	option && myChart.setOption(option);
}
/* - ---------------------------------------------------------------------------------监控面板----------------------------------------------------------------------------------- */





//鼠标右击
// function rightClick(){
// 	//这一步是为了阻止右击时系统默认的弹出框
// 	document.getElementById("exit_info").oncontextmenu = function(e){
// 		e.preventDefault();
// 	};
// 	//在这里你就可以自己定义事件的函数啦
// 	document.getElementById("exit_info").onmouseup=function(oEvent) {
// 		if (!oEvent) oEvent=window.event;
// 		if (oEvent.button==2) {
// 			alert('鼠标右击了')
// 		}
// 	}
// }