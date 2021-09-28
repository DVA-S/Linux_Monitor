### Linux服务器自动巡检与监控系统的设计与实现

 _bysj_wxk 2021年9月24日12点46分_ 

 _Linux服务器自动巡检与监控系统是一个基于WEB界面的监控工具。系统主要使用Shell脚本、MySQL数据库和PHP来实现。用户可以在Web界面查看系统各项指标、资源使用情况、服务运行状态以及向服务器发送任务。_ 

 **添加主机**  添加主机就是将需要监控的主机显示到监控面板。输入Linux主机的IP地址和Root用户密码，即可完成添加。添加完成后，用户可以进行连通性测试，测试通过即可在监控面板看到主机的各项信息。

 **监控面板**  监控面板主要显示Linux主机的各项指标，例如CPU负荷、内存使用、网络状况、磁盘使用、端口监视、日志监视等。用户可以针对不同主机设置不同的监控项。

 **自动巡检**  自动巡检包括两个功能，设置巡检内容和查看巡检报告。例如有些主机没有数据库，用户便可以在设置巡检内容时排除掉数据库巡检。巡检报告会显示出此次巡检的各项指标，并且可以导出。

 **脚本管理**  用户可以使用此功能将脚本分发到不同的主机上运行并返回运行结果。运行结果会显示到此面板。只有管理员权限的用户才能运行脚本。

 **用户管理**  用户管理也包括权限管理。可以为不同的部门设置相应的用户，不同权限的用户会在监控面板上看到不同的内容。例如，某主机上存有机密信息，便可以设置该主机对管理员之外的用户不可见。

 **邮件通知**  利用邮件通知功能用户可以自行设置触发发送邮件的条件。例如，当CPU使用率超过95%时邮件通知系统管理员。