var path = require('path');

var rt=function(app,exp){
app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));
    app.use(exp.static(path.join(__dirname, '../public')));
}

module.exports=rt
