### Linux服务器自动巡检与监控系统的设计与实现

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
        apt install php-common libapache2-mod-php php-cli
        apt install php-mysql php-curl
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
Memcached：
```
版本：
    VERSION 1.5.22
安装：
    sudo apt-get install memcached
    apt -y install php-memcache
运行：
    memcached -p 11211 -m 64m -d -u root -l 192.168.157.128
利用点：
    将用户Token存储在服务器内存中，避免数据持久化。
位置：
    php/login.php
    index.php
```