var http = require("http"); 
 
http.createServer(function(request, response) { 
 
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    var res = {
    	msg:'',
    	data:'Hello World',
    	code:1
    }
    response.write('k('+JSON.stringify(res)+');'); 
 
    response.end(); 
 
}).listen(1234);