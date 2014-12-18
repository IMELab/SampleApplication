var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var tmpdata = {};
app.post("/uploadChunk",function(req, res) {
    req.on('data', function(chunk) {
        if(chunk.toString()==="start"){
            tmpdata.testid = [];
            console.log(tmpdata);
        }else if(chunk.toString()==="end"){
            console.log("end");
            console.log(Buffer.concat(tmpdata.testid));
            console.log(Buffer.concat(tmpdata.testid).toString());
        }else{
            tmpdata.testid.push(chunk);
            console.log(chunk);
        }
    });
    req.on('end', function() {
        res.send("success");
    });
});

app.post("/uploadMultipart",function(req, res) {
    req.on('data', function(chunk) {
        console.log(chunk.toString());
    });
    req.on('end', function() {
        res.send("success");
    });
});

/*
app.post("/uploadChunk",function(req,res){
    //リクエストが来たら、sessionのidを見て、streamをつくる
    req.on("data",function(chunk){
        console.log(chunk);
    });
    req.on("end",function(){
        res.send("finish");    
    });

});
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
