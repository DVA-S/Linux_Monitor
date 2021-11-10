1,VMware共享文件夹权限问题
root@ubuntu:~# sudo umount /mnt/hgfs
root@ubuntu:~# sudo /usr/bin/vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other -o uid=1000 -o gid=1000 -o umask=000
