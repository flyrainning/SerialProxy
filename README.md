# SerialProxy
基于nodejs和websocket的串口通讯代理，可以在网页上通过js直接与服务器端串口进行通讯

##安装
所需模块
serialport，ws，WSocket


##使用方法

###服务器串口设置 `nodejs/config.js`
```
module.exports ={

	listen_port:8080,   //websocket 监听端口
	
	dev:'/dev/pts/3',   //串口设备
	
	baudrate: 9600    //波特率
	
}

```


```
  //串口代理
	var serial=new SerialProxy();
	serial.ws.ondata(function(data,evt){//返回数据回调
		console.log(data);//串口返回数据

	});
	serial.send('data');//发送数据
	
```
