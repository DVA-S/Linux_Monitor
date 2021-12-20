<html>
<head>
    <script src="../js/allJS.js"></script>
</head>
<body>
<p id="ad"></p>
    <script>
        document.getElementById("ad").innerText=pgset("http://127.0.0.1/php/host/Count.php?type=Ubuntu");
        var a=pgset("http://127.0.0.1/php/host/Count.php?type=Ubuntu");
        console.log(a);
        console.log(pgset("http://127.0.0.1/php/host/Count.php?type=Ubuntu"));
    </script>
</body>
</html>