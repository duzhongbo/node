var http = require("http");
var url = require('url');
 
http.createServer(function(request, response) {
	// 
	var path = (url.parse(request.url).pathname).split('/')[1];
	console.log(path);
	if(path == 'jsonpTest'){
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    var res = {
	    	msg:'',
	    	data:'Hello World',
	    	code:1
	    }
	    response.write('k('+JSON.stringify(res)+');'); 
	}else{
		response.write('k("request error");');
	}
 
    response.end(); 
 
}).listen(1234,function () {
	console.log("listen on port 1234......");
});