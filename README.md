我的邮箱是：1218304973@qq.com

安装方法：
```
root@ubuntu:~# git clone https://gitee.com/JainaWitch/bysj-for-wxk/
root@ubuntu:~# cd ./bysj-for-wxk/Linux监控系统/

修改配置文件中的地址：
root@ubuntu:~/bysj-for-wxk/Linux监控系统# cat config.conf
{
        "DbHost": "192.168.157.131",
        "DbUser": "root",
        "DbPasswd": "Esxi0000.",
        "ServerHost":"192.168.157.131"
}
root@ubuntu:~/bysj-for-wxk/Linux监控系统# cat s-nail.rc
set from="207728515@qq.com"
set smtp="smtps://smtp.qq.com:465"
set smtp-auth-user="207728515@qq.com"
set smtp-auth-password="zidnnemqaclvbgje"
set smtp-auth=login

安装脚本：
root@ubuntu:~# sh install.sh（安装服务端和客户端）/sh installAgent.sh（安装客户端）

启动服务：
root@ubuntu:~# /etc/jaina/agent/agent.sh 
 用法: jaina <选项>

 Linux监控系统代理...

 选项：
    addhost <ServerIPAddress>         添加主机到服务器
    start                             开启代理服务
    stop                              停止代理服务
    status                            查看代理状态
    logs                              查看代理日志
root@ubuntu:~# /etc/jaina/server/server.sh
 用法: jaina <参数>

 Linux监控系统服务端...

 选项：
    ping <IPAddress>                  执行ping测试
    start                             开始Server服务
    stop                              停止Server服务
    status                            查看Server状态
    logs                              查看Server日志
```

### Linux服务器自动巡检与监控系统的设计与实现

####整体设计  
**环境**  
L(Linux)、A(Apache)、M(MySQL)、P(PHP)

Windows10(源码) ➡ VMware共享文件夹 ➡ Ubuntu(/mnt/hgfs/xxx) ➡ 软连接apache(/var/www/html/)  
Windows10(源码) ➡ gitee代码托管  
**功能**  
性能监控、设备分类、检测、用户管理、日志、邮件告警、交互动画

**流程**  
Web图表 ⬅ Echatrs框架 ⬅ Apache ⬅ MySQL ⬅ Shell脚本采集(/proc)

Web性能测试 ➡ jQuery GET ➡ PHP Socket发送指令 ➡ PHP Server执行脚本 ➡ jQuery GET data ➡ Web界面

Web Shell ➡ Xterm框架 ➡ PHP Socket发送指令 ➡ PHP SSH2扩展 ➡ Xterm GET data ➡ 命令结果

Web GET告警阈值 ➡ MySQL阈值存储 ➡ PHP SELECT均值 ➡ Shell发送邮件(s-nail)

tip：  
1,VMware共享文件夹权限问题
```
sudo umount /mnt/hgfs
sudo /usr/bin/vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other -o uid=1000 -o gid=1000 -o umask=000
```
2,设置MySQL编码
```
set character_set_database=gbk;
set character_set_server=gbk;

set global character_set_database=gbk;
set global character_set_server=gbk;
```
3,模拟负载
```
stress --cpu 8 --io 4 --vm 2 --vm-bytes 128M --timeout 10s
```
4,查看进程
```
ps aux
```
5,SQL增加列
```
alter table tableName add columnName varchar(30);
```
任务进度：
    2021年11月4日：数据采集完成、交互界面完成

 _bysj_wxk 2021年9月24日12点46分_ 

 _Linux服务器自动巡检与监控系统是一个基于WEB界面的监控工具。系统主要使用Shell脚本、MySQL数据库和PHP来实现。用户可以在Web界面查看系统各项指标、资源使用情况、服务运行状态以及向服务器发送任务。_ 

 **添加主机**  
 添加主机就是将需要监控的主机显示到监控面板。输入Linux主机的IP地址和Root用户密码，即可完成添加。添加完成后，用户可以进行连通性测试，测试通过即可在监控面板看到主机的各项信息。

 **监控面板**  
 监控面板主要显示Linux主机的各项指标，例如CPU负荷、内存使用、网络状况、磁盘使用、端口监视、日志监视等。用户可以针对不同主机设置不同的监控项。

 **自动巡检**  
 自动巡检包括两个功能，设置巡检内容和查看巡检报告。例如有些主机没有数据库，用户便可以在设置巡检内容时排除掉数据库巡检。巡检报告会显示出此次巡检的各项指标，并且可以导出。

 **脚本管理**  
 用户可以使用此功能将脚本分发到不同的主机上运行并返回运行结果。运行结果会显示到此面板。只有管理员权限的用户才能运行脚本。

 **用户管理**  
 用户管理也包括权限管理。可以为不同的部门设置相应的用户，不同权限的用户会在监控面板上看到不同的内容。例如，某主机上存有机密信息，便可以设置该主机对管理员之外的用户不可见。

 **邮件通知**  
 利用邮件通知功能用户可以自行设置触发发送邮件的条件。例如，当CPU使用率超过95%时邮件通知系统管理员。

**环境配置：**
Ubuntu：

```shell
root@ubuntu:/opt# cat /etc/hosts
192.168.157.128 jaina.com
```
PHP:

```
版本：
    PHP 7.4.3 (cli) (built: Oct 25 2021 18:20:54) ( NTS )
    Copyright (c) The PHP Group
    Zend Engine v3.4.0, Copyright (c) Zend Technologies
        with Zend OPcache v7.4.3, Copyright (c), by Zend Technologies
    
安装：
    配置数据库驱动：
        【在/etc/php/7.4/apache2/php.ini中取消掉extension=mysqli的注释】
        apt install php7.4-cli php-common libapache2-mod-php php-cli php-mysql php-curl php-ssh2
```

MySQL：

```
版本：
    mysql  Ver 8.0.27-0ubuntu0.20.04.1 for Linux on x86_64 ((Ubuntu))

安装：
    【见仓库中MySQL/MySQL_install.sh】

远程登录：
    【在数据库配置文件中/etc/mysql/mysql.conf.d/mysqld.cnf（可能路径会不同），注释掉“bind-address = 127.0.0.1”】
     mysql> create user 'root'@'%' identified by '8080';
     mysql> grant all privileges on *.* to 'root'@'%';
     mysql> flush privileges;
```



Apache2：

```
版本：
    Server version: Apache/2.4.41 (Ubuntu)
    Server built:   2021-10-14T16:24:43
```

~~Grafana:~~（用ECharts替代）
```
版本：
    Version 8.2.3 (commit: fb85ed6912, branch: HEAD)

安装：
    sudo apt-get install -y adduser libfontconfig1
    wget https://dl.grafana.com/enterprise/release/grafana-enterprise_8.2.3_amd64.deb
    sudo dpkg -i grafana-enterprise_8.2.3_amd64.deb

允许界面嵌入：
    【在/usr/share/grafana/conf/defaults.ini中修改】
    allow_embedding = true
    [auth.anonymous]
    enabled = true
```
jQuery：
```
版本：
    jQuery JavaScript Library v3.6.0

利用点：
    $.get()
    $.post()
使用位置：
    在bysj-for-wxk/js/kuangjia.js文件中，用于前端操作对应的后台数据交互
```
Echarts:
~~图表1：未来一周气温变化
https://echarts.apache.org/examples/zh/editor.html?c=line-marker~~
```
版本：
    v5.2.2  2021-11-01
    
利用点：
    图表2：堆叠面积图
        https://echarts.apache.org/examples/zh/editor.html?c=area-stack
    图表3：环形图
        https://echarts.apache.org/examples/zh/editor.html?c=pie-doughnut
使用位置：
    图表1,2:
        在bysj-for-wxk/js/panel/*.js文件中，读取php接口数据
    图表3:    
        在bysj-for-wxk/js/host/hostall.js文件中，读取php接口数据
```
xterm：
```
地址：
    https://github.com/chjj/term.js
样式：
    Default styles for xterm.js
使用位置：
    bysj-for-wxk/Server/WebShell/shell.html
```

Memcached：
```
版本：
    VERSION 1.5.22
安装：
    sudo apt-get install memcached
    apt -y install php-memcache
运行：
    memcached -p 11211 -m 64m -d -u root -l 127.0.0.1
利用点：
    将用户Token存储在服务器内存中，避免数据持久化。
位置：
    php/login.php
    index.php
```

闲置:
```
内存：/proc/meminfo == MemTotal-MemAvailable=已用内存(KB)
磁盘：/proc/meminfo == 第十三列 取值两次 两次之差/所用时间（(xms-yms)/10*1000ms）=磁盘使用率(%)
网络：/proc/net/dev == 第二列（接收）和第十列（发送） 取值两次 两次之差/所用时间(xbytes-ybytes/10s)=每秒速率
CPU：/proc/stat    == 第一行的前三列和第一行的所有值之和 取值两次 两次之差相除*100=处理器使用率
```