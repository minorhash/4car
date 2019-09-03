var express = require('express');
var router = express.Router();
var db=require("scldb")
var mer,sess,usr,gpal,nam,pid,aid,cap,gema

const getEma = (req, res, next)=> {
sess=req.session
gema=require("./lib/gema")
    usr=gema(sess)
nava=require("./lib/nava")
next()};

var gPal=function(req, res, next) {
try{gpal=db.getPal(usr.nam)}catch(e){console.log(gpal)}
if(gpal)pid=gpal.id
if(gpal)aid=gpal.aid
next()}

var gCap=function(req, res, next) {
cap=require("./pal/cap.js")
cap(pid)
next()}

var chk=function(req, res, next) {

console.log("== mypage chk")
if(usr)console.log(usr.username)
if(pid)console.log(pid)
if(aid)console.log(aid)

if(gpal)console.log(gpal)
next()}

var cb=function(req,res){
var obj={ mer:mer,usr:usr,gpal:gpal,nava:nava}
res.render('mypage',obj);}//cb

var arr=[getEma,gPal,chk,cb];
router.get('/mypage',arr)
module.exports = router;
