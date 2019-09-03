var express = require('express');
var router = express.Router();
let par=null,sum=null,red=null,email=null,usr=null
let sess=null,sar=null,adr=null,mer=null
const db=require("usrdb")
var cnf= require('./son/aid.json');
var pub=cnf.pub;
//var pub=cnf.pkl;
const getEma = (req, res, next)=> {
console.log("== get ema ==")
sess=req.session
usr=require("../lib/usr")
mer=sess.mer
next()};

var gMer=function(req, res, next) {

next()}

var chk=function(req, res, next) {
    console.log("=== aid")
    console.log(sess)
    console.log(mer)
    next()}

var cb=function(req, res ) {
var obj={par:par, usr:usr,pub:pub,mer:mer}
res.render('paidy',obj);}
router.get('/paidy',[getEma,chk,cb] );
module.exports = router;
