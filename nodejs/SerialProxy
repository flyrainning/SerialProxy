var SerialBus = require('./lib/SerialBus');
var config = require('./config');
var act=require('./act');

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: config.listen_port });

wss.on('connection', function connection(ws) {

	var Serial = new SerialBus(config);

	var port=Serial.port;
	port.on('data', function (data) {
		
		try {
			ws.send(JSON.stringify({
				result:true,
				from:'send',
				data:new Buffer(data),
				msg:''
			}));
		}catch(e){}
	});
	
	port.on('open', function(err) {
		if (err) {
			try {
				ws.send(JSON.stringify({
					result:false,
					from:'Serialopen',
					data:[],
					msg:'Error on open: '+err.message
				}));
			}catch(e){}
		}

	});
	
	ws.on('message', function incoming(message,flags) {

		try{
			var data=JSON.parse(message);
		  	if (data.act){
		  		if (data.act=='send'){
		  			Serial.send(data.data);
		  		}else if (typeof(act[data.act])=='function'){
		  			var back=act[data.act](data,ws);
		  			if (back.constructor.name=="Object"){
		  			
		  				ws.send(JSON.stringify(back),function(){});
		  				
		  			}else if (back.constructor.name=="String"){
		  			
		  				ws.send(back,function(){});
		  				
		  			}else{
		  				ws.send(back, { binary: true},function(){});
		  			}
	  		
	  			}
			}
		}catch(e){}
	});
	ws.on('error', function(message) {
	//console.log('error');

	});

});
