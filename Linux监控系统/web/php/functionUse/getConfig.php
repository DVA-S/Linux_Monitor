<?php
function getConfig($valuse){
    $file_path = '/etc/jaina/config.conf';
    if (file_exists($file_path)) {
        $str = file_get_contents($file_path);//将整个文件内容读入到一个字符串中
        $data = json_decode($str, true);

        switch ($valuse){
            case "DbHost":
                return $data['DbHost'];
            case  "DbUser":
                return $data['DbUser'];
            case  "DbPasswd":
                return $data['DbPasswd'];
            case  'ServerHost':
                return $data['ServerHost'];
            default:
                return "{}";
        }
    }
    return "{}";
}
?>