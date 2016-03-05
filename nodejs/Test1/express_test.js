var express = require("express");

var app = express();

app.use(function(req,res,next) {
    console.log(req.method + " : " + req.url);
    next();
});

app.use(express.static("./public"));

app.listen(3000);

console.log("listening...");

module.export = app;
