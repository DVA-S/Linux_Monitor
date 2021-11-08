// 根据btnOnClick传入的ID显示面板
function viewPanel(view_btn){
	// 0-4:主页上方五个按钮 5-7:设备管理左侧三个按钮 8-11:自动巡检左侧四个按钮 12-15:用户管理左侧四个按钮
	var panel_list = [
		'panel','host','checking','user','setup',
		'host_right_all','host_right_list','host_right_addhost',
		'checking_right_link','checking_right_test','checking_right_port','checking_right_device',
		'user_right_WebUser','user_right_DeviceUser','user_right_AddUser','user_right_List'
	];
	//判断哪个面板正在显示
	function getPanelView(list){
		if(getComputedStyle(document.getElementById(panel_list[list]),null).getPropertyValue('left') != '2.5%' &&
			getComputedStyle(document.getElementById(panel_list[list]),null).getPropertyValue('left') != windowsSizeNoView){
			return true;
		}
	}
	switch(panel_list.indexOf(view_btn))
	{
		case 0:case 1:case 2:case 3:case 4:	
		// 点击按钮在当前窗口的左边或者右边 初始位置:top:8%;left:2.5%; 显示位置:top:100vh*0.08 or 100%*0.08 && *0.025 隐藏位置:top:50px left:-100vh
		// 判断哪个面板正在显示，然后设置变量值作为状态
		var windowsSizeNoView = -document.body.clientWidth+'px'
		if( getPanelView(0) ) {
			var view=0;
		}else if( getPanelView(1) ) {
			view=1;
		}else if( getPanelView(2) ) {
			view=2;
		}else if( getPanelView(3) ) {
			view=3;
		}else if( getPanelView(4) ) {
			view=4; }
		 if(view<panel_list.indexOf(view_btn)){
			 // ##BUG:所有面板都显示过后，无法跳转切换 ##例如：从2到4后，虽然实际显示的是4，但view的值是3 ##所以解决方法之一为：做动作前先清场，大概属于一刀切方法，很简单。
			 $('#panel,#checking,#user,#host,#setup').css('display', 'none');
			//点击当前面板右边的按钮
				// 离开动画--当前面板左移
				document.getElementById(panel_list[view]).style.display="block";
				document.getElementById(panel_list[view]).style.animation="0.5s ease forwards running btn_switch_CenterGoLeftHide";
				// 进入动画--当前元素从右边到中间显示 不加绝对定位动画会上天
				document.getElementById(view_btn).style.display="block";
				document.getElementById(view_btn).style.position="absolute";
				document.getElementById(view_btn).style.animation="0.5s ease forwards running btn_switch_RightGoCenterShow";
				console.log('当前显示为：'+view,"点击为：",panel_list.indexOf(view_btn)+"<<向左");
				break;
		}else if(view>panel_list.indexOf(view_btn)){
			$('#panel,#checking,#user,#host,#setup').css('display', 'none');
			// 点击当前面板左边的按钮
				// 离开动画--当前面板右移
				document.getElementById(panel_list[view]).style.display="block";
				document.getElementById(panel_list[view]).style.animation="0.5s ease forwards running btn_switch_CenterGoRightHide";
				// 进入动画--当前元素从左边到中间显示
				document.getElementById(view_btn).style.display="block";
				document.getElementById(view_btn).style.animation="0.5s ease forwards running btn_switch_LeftGoCenterShow";
				document.getElementById(view_btn).style.position="absolute";
				console.log('当前显示为：'+view,"点击为：",panel_list.indexOf(view_btn)+">>向右");
		}else if(view===panel_list.indexOf(view_btn)){		
			$('#panel,#checking,#user,#host,#setup').css('display', 'none');
			// 点击当前面板按钮
				// 刷新动画--当前元素显示
				//BUG:只能显示一次🤔
				document.getElementById(view_btn).style.display="block";
				document.getElementById(view_btn).style.animation="0.5s ease forwards running flush";
				document.getElementById(view_btn).style.position="absolute";
				console.log('当前显示为：'+view,"点击为：",panel_list.indexOf(view_btn)+"刷新显示");
		}
		break;
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
// btnOnClick(this)根据按钮类名-设置并传出右侧面板ID到view_panel()
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

// 登录判断显示动画、设置Cookie
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
				document.getElementById("login_div").style.animation="0.5s ease 0s 1 normal forwards running login_loginNo";
				// 延迟0.5秒刷新-重置登录失败动画
				setTimeout(function(){ location.reload(); },500);
				console.log("logNO!");
				}
			}
		);
}