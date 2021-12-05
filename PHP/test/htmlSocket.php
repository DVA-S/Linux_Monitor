<html>
    <head>
        <title>Socket测试</title>
        <script type="text/javascript" src="../js/jquery.js"></script>
    </head>

    <body>
        <input id="testText" type="text">
        <button onclick="testSocket()">发送请求</button>
        <p id="request">NULL</p>
        <script>
            function testSocket(){
                var testText =$("#testText").val();

                $.get(
                    "testSocket.php",{"testText":testText},
                    function(data){
                        document.getElementById("request").innerText=data;
                    }
                );
            }
        </script>
    </body>
</html>

