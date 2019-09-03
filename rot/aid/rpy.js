var express = require('express');
var router = express.Router();
let par=null,sum=null,red=null,email=null,usr=null
let sess=null,sar=null,adr=null,mer=null
const db=require("usrdb")
var cnf= require('./son/rpy.json');
var pub=cnf.pub;

const getEma = (req, res, next)=> {
sess=req.session
    mer=sess.mer

usr=require("../lib/usr")
next()};

var gPid=function(req, res, next) {

next()}

var logOut=function(req, res, next) {
var logo=require("../lib/logo");logo(req.query.out)
next()}

var chk=function(req, res, next) {
    console.log("=== rpay")
    console.log(usr)
    console.log(mer)
    next()}

var cb=function(req, res ) {
var obj={par:par, sar:sar,usr:usr,pub:pub,mer:mer}
res.render('rpay',obj);}
router.get('/rpay',[getEma,logOut,chk,cb] );
module.exports = router;
