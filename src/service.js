/**
 * Created by Chutku on 9/9/2015.
 */

var restify = require('restify');
var validator = require('./validator.js');
var convertor = require('./sample-service-convertor.js');

var server = restify.createServer({
    name: 'mi9-Coding-Challenge',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


var port = Number(process.env.PORT || 8080);

server.post('/', function (req, res, next) {

    if(validator.validateJSON(JSON.stringify(req.body))){
        var resData = convertor.getDRMRes(req);

        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        res.end(JSON.stringify(resData));
        return next();
    }

    else{
        res.send(400,{"error":"Could not decode request: JSON parsing failed"});
    }
});


server.listen(port ,function () {
    console.log('%s listening at %s', server.name, server.url);
});



