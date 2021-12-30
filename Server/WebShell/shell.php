<?php

/**
 * websocket服务器（使用swoole）
 * 使用ssh登录服务器
 */
class Ws
{
    private $shell;
    private $connection;
    private $isConnection;

    private $ws;

    public function __construct()
    {
        //监听0.0.0.0:8081端口
        $this->ws = new Swoole\WebSocket\Server('0.0.0.0', 8081);

        $this->ws->on('open', [$this, 'onOpen']);
        $this->ws->on('message', [$this, 'onMessage']);
        $this->ws->on('close', [$this, 'onClose']);

        $this->ws->start();
    }

    //监听WebSocket连接打开事件
    public function onOpen($ws, $request)
    {
        var_dump($request->fd, $request->server);
    }

    //监听WebSocket消息事件
    public function onMessage($ws, $frame)
    {
        $data = json_decode($frame->data, true);
        switch (key($data)) {
            case 'data':    //输入命令
                fwrite($this->shell[$frame->fd], $data['data']);
                usleep(800);
                while ($line = fgets($this->shell[$frame->fd])) {
                    $ws->push($frame->fd, $line);
                }
                break;
            case 'auth':    //登录
                if ($this->loginSSH($data['auth'], $frame)) {
                    $ws->push($frame->fd, '连接中...');
                    while ($line = fgets($this->shell[$frame->fd])) {
                        $ws->push($frame->fd, $line);
                    }
                } else {
                    $ws->push($frame->fd, '登录失败');
                }
                break;
            default:
                //清理空白行
                if ($this->isConnection[$frame->fd]) {
                    while ($line = fgets($this->shell[$frame->fd])) {
                        $ws->push($frame->fd, $line);
                    }
                }
                break;
        }
    }

    //监听WebSocket连接关闭事件
    public function onClose($ws, $fd)
    {
        $this->isConnection[$fd] = false;
        echo "client-{$fd} is closed\n";
    }

    //ssh登录
    public function loginSSH($auth, $frame)
    {
        //通过SSH连接服务器
        $this->connection[$frame->fd] = ssh2_connect($auth['server'], $auth['port']);
        //验证身份（登录）
        if (ssh2_auth_password($this->connection[$frame->fd], $auth['user'], $auth['password'])) {
            //使用流的方式打开shell
            $this->shell[$frame->fd] = ssh2_shell($this->connection[$frame->fd], 'xterm', null, 80, 24, SSH2_TERM_UNIT_CHARS);
            sleep(1);   //延迟执行一秒等待服务器
            $this->isConnection[$frame->fd] = true;
            return true;
        } else {
            return false;
        }
    }
}

new ws();

?>