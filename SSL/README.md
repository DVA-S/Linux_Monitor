###SSL证书配置
####目录结构
```shell
.  
├── ca.crt  
├── ca.key  
├── http.ext  
├── server.crt  
├── server.csr  
└── server.key  
```
####证书信息
ca.crt: ca证书，客户端信任该证书意味着会信任该证书颁发出去的所有证书  
ca.key: ca证书的密钥  
server.key: 服务器密钥，需要配置的  
server.csr: 证书签名请求,通常是交给CA机构，这里我们就自己解决了  
server.crt: 服务器证书，需要配置的  
####证书生成
```shell
创建 CA 私钥:
openssl genrsa -des3 -out ca.key 4096

生成 CA 的自签名证书，其实 CA 证书就是一个自签名证书
openssl req -new -x509 -days 365 -key ca.key -out ca.crt

生成需要颁发证书的私钥
openssl genrsa -des3 -out server.key 4096

生成要颁发证书的证书签名请求
(证书签名请求当中的 Common Name 必须区别于 CA 的证书里面的 Common Name)
openssl req -new -key server.key -out server.csr

创建http.ext文件，内容如下
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth
subjectAltName=@SubjectAlternativeName

[ SubjectAlternativeName ]
DNS.1=jaina.com
DNS.2=*.jaina.com

用CA证书(ca.crt)给将要颁发证书的**签名请求**(server.key)进行签名
openssl x509 -req -days 365 -extfile http.ext -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt
```
####证书使用
_存放位置_
```shell
root@ubuntu:~/ssl# tree /etc/apache2/ssl/
/etc/apache2/ssl/
├── ca.crt
├── server.crt
└── server.key
```
_apache配置_
```shell
a2enmod ssl
apache2-ssl-certificate
a2ensite default-ssl
```
_配置文件_
```shell
/etc/apache2/sites-available/default-ssl.conf

<IfModule mod_ssl.c>
        <VirtualHost _default_:443>
                ServerAdmin webmaster@localhost
                ServerName https://192.168.157.128:443
                ……
                SSLEngine on
                SSLCertificateFile      /etc/apache2/ssl/server.crt
                SSLCertificateKeyFile   /etc/apache2/ssl/server.key
                SSLCertificateChainFile /etc/apache2/ssl/ca.crt
```
```shell
/etc/apache2/ports.conf

# If you just change the port or add more ports here, you will likely also
# have to change the VirtualHost statement in
# /etc/apache2/sites-enabled/000-default.conf

Listen 80

<IfModule ssl_module>
        Listen 443
</IfModule>

<IfModule mod_gnutls.c>
        Listen 443
</IfModule>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
```