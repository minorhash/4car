var express = require('express'),router = express.Router();
var mer,sess,usr,gema,lang,soc,namsoc,nava
var db=require("scldb")

const getEma = (req, res, next)=> {
sess=req.session
gema=require("./lib/gema")
    usr=gema(sess)
nava=require("./lib/nava")
next()};

var logOut=function(req, res, next) {
var logo=require("./lib/logo");logo(req.query.out)
next()}

var gUa=function(req,res,next){
lang=(req.headers["accept-language"].split(",")[1]).split(";")[0]
console.log(lang)
next()}

var chk=function(req, res, next) {
console.log("=== top chk")
usr? console.log(usr.username):console.log("no usr")
nava? console.log(nava):console.log("no nava")
next()}

var cb=function(req, res ) {var obj={ mer:mer,usr:usr,lang:lang,nava:nava}
    res.render('index',obj)}//cb

var cob=[getEma,logOut,gUa,chk,cb];
router.get('/',cob)
module.exports = router;
