/* jshint esnext: true */

var http = require("http");
var fs = require("fs");

http.createServer(function(req,res) {
    console.log("===> (" + req.method + ")");
    
    if(req.method === "GET") {
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    } else {
        console.log("xxx ===> (" + req.method + ")");

        if(req.method === "POST") {
            console.log("here");
            var body = "";
            
            req.on("data", function(chunk) {
                body += chunk;
            });
            
            req.on("end", function() {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(`
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <title>Form Results</title>
                        </head>
                        <body>
                            <h1>Your Form Result</h1>
                            <p>${body}</p>
                        </body>
                    </html>
                `);
            });
        }
    }
    
}).listen(3000);

console.log("Now listenning on..." + 3000);
