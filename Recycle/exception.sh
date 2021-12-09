1,VMware共享文件夹权限问题
sudo umount /mnt/hgfs
sudo /usr/bin/vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other -o uid=1000 -o gid=1000 -o umask=000

2,设置MySQL编码
set character_set_database=gbk;
set character_set_server=gbk;

set global character_set_database=gbk;
set global character_set_server=gbk;

