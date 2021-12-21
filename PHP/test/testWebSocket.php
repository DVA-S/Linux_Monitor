<html>
<head>
    <title>Socket测试</title>
    <script type="text/javascript" src="../js/kuangjia/jquery.js"></script>
</head>

<body>
<input id="testText" type="text">
<button onclick="testSocket()">发送请求</button>
<p id="request">NULL</p>
<script>
    var ws = new WebSocket("ws://127.0.0.1:8888");

    ws.onopen = function() {
        // console.log("Connection open ...");
        ws.send("test");
    };

    ws.onmessage = function(evt) {
        console.log( "Received Message: " + evt.data);
        // document.getElementById("request").innerText=evt.data;
        // ws.close();
    };

</script>
</body>
</html>

