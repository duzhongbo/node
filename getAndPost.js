var http = require('http');
var url = require('url');
var qs = require('querystring');


http.createServer(function(request, response) {
	var method = request.method.toUpperCase();

	if(method == 'POST'){
		var postData = "";
		request.on('data',function (data) {
			postData += data;
		});

		request.on('end',function () {
			var query = qs.parse(postData);
			console.log("post data:",query);
			response.end();
		});
	}else if(method == 'GET'){
		var query = url.parse(request.url, true).query;
		console.log('get data:',query);
		response.end();
	}


}).listen(1234,function () {
	console.log("listen on port 1234......");
});