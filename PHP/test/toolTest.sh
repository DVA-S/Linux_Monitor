#!/usr/bash

#js向接口请求数据，接口的数据，来源于socket，socket脚本返回数据，
#传入参数        >

while [ true ]; do
    if [ $(exec 8<>/dev/tcp/192.168.157.128/9999 && cat <&8) = "test" ]
    then
      echo "收到1！"
    else
      echo "没有1！"
    fi

    sleep 2;
done
