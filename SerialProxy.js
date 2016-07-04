function SerialProxy(opt){
	this.opt=$.extend({//这里写默认配置
		server:"ws://"+window.location.host+":8080"
	},opt);
	
	var that=this;
	
	this.ws=new WSocket(this.opt.server,'json');
	this.ws.open();


}

SerialProxy.prototype.send=function(data){
	//var t=new Date().getTime();
	this.ws.send({
		act:"send",
		//timesnap:t,
		data:data
		
	});
}
SerialProxy.prototype.check=function(){
	this.ws.send({
		act:"check",
		data:[]

	});
}
