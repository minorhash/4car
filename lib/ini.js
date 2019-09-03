var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var logger = require('morgan');

var ini=function(app,exp){
app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));
}

module.exports=ini
