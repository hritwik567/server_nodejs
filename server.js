var http = require('http');
var fs = require('fs');
http.createServer(action).listen(8888);
console.log("server is now running");

function action(request,response){
	if(request.url=='/'&&request.method=='GET'){
		response.writeHead(200,{"Content-type":"text/html"});
		fs.createReadStream("./untitled.html").pipe(response);
	}else if(request.url=='/myaction'&&request.method=='get'){
		response.writeHead(200,{"Content-type":"text/html"});
		fs.createReadStream("./patani.html").pipe(response);
	}
}

