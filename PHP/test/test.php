<html>
<head>
    <script src="../js/kuangjia.js"></script>
</head>
<body>
<p id="ad"></p>
    <script>
        document.getElementById("ad").innerText=pgset("http://192.168.157.128/php/host/Count.php?type=Ubuntu");
        var a=pgset("http://192.168.157.128/php/host/Count.php?type=Ubuntu");
        console.log(a);
        console.log(pgset("http://192.168.157.128/php/host/Count.php?type=Ubuntu"));
    </script>
</body>
</html>