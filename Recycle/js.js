//此处为弃用的代码

//cookie：get and set
//设置cookie存活时间：2021-11-08T03:23:55.000Z（这种时间格式表示格林尼治的时间，加上八个小时就是北京时间了）
function setCookie(cname,cvalue,minute)
{
	var d = new Date();
	d.setTime(d.getTime()+(minute*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	{
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}
//设置Cookie和Session
setCookie("loginCookie",data,5);
sessionStorage.setItem("loginSession", data);
//在控制台读取Cookie和Session
console.log("CookieYESLogin:",getCookie("loginCookie"));
console.log("SessionYESlogin:",sessionStorage.getItem("loginSession"));

//bug：对于记住登录状态，session和cookie可以被轻易修改，毫无安全可言 -- 2021年11月8日
//根据session判断登录状态
//根据cookie获取登录状态
window.onload = function(){
	if (getCookie("loginCookie")==1 && sessionStorage.getItem("loginSession")==1){
		//登录框  forwards属性会让对象停留在终点
		document.getElementById("login_div").style.animation="0.5s ease 0s 1 normal forwards running login_loginOk";
		// 主页
		document.getElementById("head_div").style.display="block";
		document.getElementById("head_div").style.animation="0.5s ease 0s 1 normal forwards running index_head_loginOk";
		document.getElementById("panel").style.display="block";
		document.getElementById("panel").style.animation="0.5s ease 0s 1 normal forwards running index_panel_loginOk";
		//刷新会重置cookie存活时间
		setCookie("loginCookie",1,5);
		console.log("CookieLoginOK:",getCookie("loginCookie"),"SessionLoginOK:",sessionStorage.getItem("loginSession"));
	}else{
		//document.getElementById("login_div").style.animation="0.5s ease 0s 1 normal forwards running login_loginNo";
		console.log("CookieLoginNO:",getCookie("loginCookie"),"SessionLoginNO:",sessionStorage.getItem("loginSession"));
	}
}
//退出登录
function exitLogin(){
	//清除cookie和session、刷新网页
	setCookie("loginCookie",0,0);
	sessionStorage.removeItem("loginSession");
	location.reload();
}