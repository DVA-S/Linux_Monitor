#！/bin/bash
ping -c 3 $1 >/dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "可达";
    else
      echo "不可达";
#      变基后的第一次提交
fi