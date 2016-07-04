exports.check=function(data,ws){

	return JSON.stringify({
			result:true,
			from:data.act,
			data:[],
			msg:''
		});
}
