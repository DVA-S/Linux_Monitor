<?php

/*************************************
 * PHP amqp(RabbitMQ) Demo - publisher
 * Author: Linvo
 * Date: 2012/7/30
 *************************************/
//配置信息
$conn_args = array(
    'host' => '127.0.0.1',
    'port' => '5672',
    'login' => 'admin',
    'password' => 'admin',
    'vhost' => '/'
);
$e_name = 'e_linvo'; //交换机名
//$q_name = 'q_linvo'; //无需队列名
$k_route = 'key_1'; //路由key

//创建连接和channel
$conn = new AMQPConnection($conn_args);
if (!$conn->connect()) {
    die("Cannot connect to the broker!\n");
}
$channel = new AMQPChannel($conn);

//消息内容
$message = 'TEST MESSAGE! 测试消息！';

//创建交换机对象
$ex = new AMQPExchange($channel);
$ex->setName($e_name);

//发送消息
//$channel->startTransaction(); //开始事务
echo 'Send Message:' . $ex->publish($message, $k_route) . "\n";
//$channel->commitTransaction(); //提交事务

//接收消息
$q = new AMQPQueue($channel);
$q_name = 'q_linvo'; //队列名
$q->setName($q_name);
$q->setFlags(AMQP_DURABLE); //持久化
echo 'Message Total:' . $q->declare() . "\n";

//绑定交换机与队列，并指定路由键
echo 'Queue Bind: ' . $q->bind($e_name, $k_route) . "\n";
$q->consume(function ($envelope, $queue) {
    $msg = $envelope->getBody();
    echo $msg."\n"; //处理消息
    switch ($msg){
    case 'test':
        //回复消息
        echo 'test OK!';
        break;
    default:
        break;
    }
}, AMQP_AUTOACK);

$conn->disconnect();

////服务端
//
//$conn = [
//    // Rabbitmq 服务地址
//    'host' => '127.0.0.1',
//    // Rabbitmq 服务端口
//    'port' => '5672',
//    // Rabbitmq 帐号
//    'login' => 'admin',
//    // Rabbitmq 密码
//    'password' => 'admin',
//    'vhost' => '/'
//];
//
////创建连接和channel
//$conn = new AMQPConnection($conn);
//if (!$conn->connect()) {
//    die("Cannot connect to the broker!\n");
//}
//$channel = new AMQPChannel($conn);
//
//// 用来绑定交换机和队列
//$routingKey = 'key_1';
//
//$ex = new AMQPExchange($channel);
////  交换机名称
//$exchangeName = 'ex1';
//$ex->setName($exchangeName);
//
//// 设置交换机类型
//$ex->setType(AMQP_EX_TYPE_DIRECT);
//// 设置交换机是否持久化消息
//$ex->setFlags(AMQP_DURABLE);
//$ex->declare();
//
//// 发送消息
//echo 'Send Message:' . $ex->publish("test", $routingKey) . "\n";
//
////获取结果
//
//
?>