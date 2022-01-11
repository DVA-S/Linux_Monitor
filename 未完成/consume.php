<?php

/*************************************
 * PHP amqp(RabbitMQ) Demo - consumer
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
$q_name = 'q_linvo'; //队列名
$k_route = 'key_1'; //路由key

//创建连接和channel
$conn = new AMQPConnection($conn_args);
if (!$conn->connect()) {
    die("Cannot connect to the broker!\n");
}
$channel = new AMQPChannel($conn);

//创建交换机
$ex = new AMQPExchange($channel);
$ex->setName($e_name);
$ex->setType(AMQP_EX_TYPE_DIRECT); //direct类型
$ex->setFlags(AMQP_DURABLE); //持久化
echo 'Exchange Status:' . $ex->declare() . "\n";

//创建队列
$q = new AMQPQueue($channel);
$q->setName($q_name);
$q->setFlags(AMQP_DURABLE); //持久化
echo 'Message Total:' . $q->declare() . "\n";

//绑定交换机与队列，并指定路由键
echo 'Queue Bind: ' . $q->bind($e_name, $k_route) . "\n";

//阻塞模式接收消息
echo "Message:\n";
while (True) {
    $q->consume('processMessage');
}
$conn->disconnect();

/**
 * 消费回调函数
 * 处理消息
 */
function processMessage($envelope, $queue)
{
    $msg = $envelope->getBody();
    echo $msg . "\n"; //处理消息
    if ($msg == 'test') {
        echo $msg;
    }
}



////客户端
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
//    'vhost'=>'/'
//];
//
//
////创建连接和channel
//$conn = new AMQPConnection($conn);
//if(!$conn->connect()) {
//    die("Cannot connect to the broker!\n");
//}
//
//$channel = new AMQPChannel($conn);
//$exchangeName = 'ex1';
//
////创建交换机
//$ex = new AMQPExchange($channel);
//$ex->setName($exchangeName);
//
//$ex->setType(AMQP_EX_TYPE_DIRECT); //direct类型
//$ex->setFlags(AMQP_DURABLE); //持久化
//$ex->declare();
//
////  创建队列
//$queueName = 'queue1';
//$q = new AMQPQueue($channel);
//$q->setName($queueName);
//$q->setFlags(AMQP_DURABLE);
//$q->declareQueue();
//
//// 用于绑定队列和交换机，跟 send.php 中的一致。
//$routingKey = 'key_1';
//$q->bind($exchangeName,  $routingKey);
//
////接收消息
//$q->consume(function ($envelope, $queue) {
//    $msg = $envelope->getBody();
//    echo $msg."\n"; //处理消息
//    switch ($msg){
//    case 'test':
//        //回复消息
//
//        echo 'test OK!';
//        break;
//    default:
//        break;
//    }
//}, AMQP_AUTOACK);
//
//$conn->disconnect();
?>