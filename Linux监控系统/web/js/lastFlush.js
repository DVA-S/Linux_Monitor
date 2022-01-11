//刷新、验证和重置Token以及播放动画
$.get(
    "php/memcached.php",{"user":getCookie("UserName"),"token":getCookie("Token")},
    function (data){
        var obj = JSON.parse(data);
        if (obj.status == 1){
            //重置时间
            setCookie("UserName",obj.username,10);
            setCookie("Token",obj.token,10);
            //显示内容面板
            document.getElementById('head_div').style.animation='0.5s ease 0s 1 normal forwards running index_head_loginOk';
            document.getElementById('head_div').style.display='block';
            document.getElementById('panel').style.display='block';
            document.getElementById('panel').style.animation='0.5s ease 0s 1 normal forwards running index_panel_loginOk';
            //显示离开时的面板和子面板
            lastView(getCookie('panelView'));
            lastViewClild(getCookie('Child'));
            //刷新所有查询数据
            allFlush();
            <!-- 设置初始化监控面板 -->
            setTimeout(
                function (){
                    setCookie('panelHost',getCookie('panelHost'));
                    document.getElementById("viewPanelDev").innerText='正在显示：'+$('#panelHost').val().substring(11);
                    // console.log("刷新后："+$('#panelHost').val());
                    //刷新监控面板(登陆成功后，就会立马刷新数据) -- 解决：避免刷新后图表缩成一团
                    oneFlush();
                },500);

        }else{
            //播放拒绝动画
            // document.getElementById('login_div').style.animation='0.5s ease 0s 1 normal forwards running login_loginView';
            var windows = $("#login_div");
            windows.removeClass('login_loginOk');
            windows.addClass('login_loginView');
            document.getElementById('login_div').style.display='block';
        }
    }
);
