//事件处理器
//登录框
document.getElementById("username").addEventListener("keydown",keyLogin);
document.getElementById("passwd").addEventListener("keydown",keyLogin);
document.getElementById("loginbtn").addEventListener("click",loginJudge);

//导航栏按钮
document.getElementById("panel_btn").addEventListener("click",function () {
    btnOnClick(this);
    //不刷新时启动刷新，启动避免重复刷新;延时一秒是为了等cookie刷新。（勉强修复）
    setTimeout(
        function (){
            if (getCookie('flushPanel') == 1){
                console.log("已经在刷新了！");
            }else {
                loading();
                console.log(getCookie('flushPanel'));
            }
        },1000
    );
    setTimeout( function (){oneFlush();},470 );
});
document.getElementById("host_btn").addEventListener("click",function () {
    btnOnClick(this);    setCookie('flushPanel',0,10);
});
document.getElementById("checking_btn").addEventListener("click",function () {
    btnOnClick(this);    setCookie('flushPanel',0,10);
});
document.getElementById("user_btn").addEventListener("click",function () {
    btnOnClick(this);    setCookie('flushPanel',0,10);
});
document.getElementById("setup_btn").addEventListener("click",function () {
    btnOnClick(this);    setCookie('flushPanel',0,10);
});

//监控面板
document.getElementById("selectHostOK").addEventListener("click",function () {
    setCookie('panelHost',$('#panelHost').val().substring(11));
    document.getElementById('viewPanelDev').innerText='正在显示：'+$('#panelHost').val().substring(11);
    //刷新监控面板(登陆成功后，就会立马刷新数据) -- 解决：避免刷新后图表缩成一团
    oneFlush();
});

//设备管理
document.getElementById("host_left_all").addEventListener("click",function () {
    btnOnClick(this);
});
document.getElementById("host_left_list").addEventListener("click",function () {
    btnOnClick(this);
});
document.getElementById("host_left_addhost").addEventListener("click",function () {
    btnOnClick(this);
});
document.getElementById("searchHostBtn").addEventListener("click",SearchHost);

//自动巡检
document.getElementById("checking_left_link").addEventListener("click",function () {
    btnOnClick(this);
});
document.getElementById("checking_left_test").addEventListener("click",function () {
    btnOnClick(this);
});
document.getElementById("checking_left_port").addEventListener("click",function () {
    btnOnClick(this);
});
document.getElementById("checking_left_device").addEventListener("click",function () {
    btnOnClick(this);
});
//性能测试
document.getElementById("hostDisk").addEventListener("click",function () {
    hostPerf(this)
});
document.getElementById("hostNetwork").addEventListener("click",function () {
    hostPerf(this)
});
document.getElementById("hostCpu").addEventListener("click",function () {
    hostPerf(this)
});
//端口检测
document.getElementById("hostPort").addEventListener("click",hostPort);
//进行硬件检测
document.getElementById("hostDev").addEventListener("click",hostDevice);
//用户管理
document.getElementById("user_left_webUser").addEventListener("click",function () {
    btnOnClick(this)
});
document.getElementById("user_left_deviceUser").addEventListener("click",function () {
    btnOnClick(this)
});
//添加系统用户窗口
document.getElementById("addSysUserWindowsBtn").addEventListener("click",addUserWindows);
//添加系统用户按钮
document.getElementById("addUserSysBtn").addEventListener("click",function (){
    addUserSys();location.reload();
});
//关闭添加系统用户按钮
document.getElementById("closeSys").addEventListener("click",function (){
    document.getElementById('addSysUser').style.display='none';
});
//添加设备用户窗口
document.getElementById("addDevUserWindowsBtn").addEventListener("click",addUserWindowsDev);
//添加设备用户按钮
document.getElementById("addUserDevBtn").addEventListener("click",function (){
    addUserDev();location.reload();
});
//关闭添加设备用户按钮
document.getElementById("closeDev").addEventListener("click",function (){
    document.getElementById('addSysUserDev').style.display='none';
});
//系统设置
//组件/日志
document.getElementById("setup_info").addEventListener("click",function (){
    sysSetup('setup_info','setup_package','isBigA','isBigB');
});
document.getElementById("Bodysetup_info").addEventListener("click",cancelBubble);
//脚本
document.getElementById("setup_script").addEventListener("click",function (){
    sysSetup('setup_script','setup_clock','isBig1A','isBig1B');
});
document.getElementById("Bodysetup_script").addEventListener("click",cancelBubble);
//邮件
document.getElementById("setup_email").addEventListener("click",function (){
    sysSetup('setup_email','setup_about','isBig2A','isBig2B');
});
document.getElementById("Bodysetup_email").addEventListener("click",cancelBubble);
document.getElementById("eMailSend").addEventListener("click",eMailSend);
//退出
document.getElementById("setup_logout").addEventListener("click",function (){
    sysSetup('setup_logout','setup_exit','isBig3A','isBig3B');
});
document.getElementById("Bodysetup_logout").addEventListener("click",cancelBubble);
document.getElementById("loginout").addEventListener("click",loginout);
document.getElementById("logoutNo").addEventListener("click",function (){
    sysSetup('setup_logout','setup_exit','isBig3A','isBig3B');
});
