var http = require("http");
var url = require("url");    

function start(route) {
 function onRequest(request,response) {

    var pathname = url.parse(request.url).pathname;
        console.log("Request received for " + pathname);
        
        route(pathname);
        
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hello World from Cloud9");
    response.end();
}

http.createServer(onRequest).listen(process.env.PORT);
console.log("Server has started.")
}

exports.start = start;