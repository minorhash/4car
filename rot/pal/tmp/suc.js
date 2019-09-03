var express = require("express")
var router = express.Router()
var paypal = require("paypal-rest-sdk")
// === db
var adb = require("scldb")

var sess=undefined,sar=undefined
var usr=undefined,email=undefined,name=undefined,mer=null
var pid=undefined,payid=undefined
var red=0,sum=0
var suma=undefined,item=undefined,ist=undefined
let pson=null,pobj=null,itenam=null

var sdk=require("./lib/sdk")
// === get
const getEma = (req, res, next)=> {
sess=req.session
console.log("=== get suc===")
usr=require("../lib/usr")
next()};

var getPid= function(req, res, next) {
console.log("=== suc gpid")
var payj=require("./lib/gpid")
if(sess)mer=sess.mer
console.log(mer)
if(mer)pobj=payj(req.query,mer.pri)
if(mer)itenam=mer.cat+mer.sku
if(pobj)console.log(pobj)
if(pobj)pson=JSON.stringify(pobj)

next()}

var exePal= function(req, res,next) {
console.log("=== exe pal ===")
var utc = new Date().toJSON().slice(0,10)
if(pson){
paypal.payment.execute(pid, pson, function(err, pay) {
if (err) console.log(err.response.details)
console.log("=== suc===")
// item=    pay.transactions[0].item_list.items
// ist=    JSON.stringify(pay.transactions[0].item_list.items)
// try{adb.insPal(name,pay.id,sum,ist,utc)}    catch(e){console.log(e);return}
console.log(pay)
// item=    pay.transactions[0].item_list.items
})//exec
}else{console.log("=== no pson===")}
next()}//exePal

var senEma = function(req, res, next) {
console.log('=== senEma =======================================');
    var ua=req.acceptsLanguages("en")
    var mail=require("./js/mpal.js");
    try{mail(email,pal,ua)}
    catch(err){console.log(err)}
next()};

var chk= function(req, res, next) {
console.log("=== suc ===")
if(usr)console.log(usr.id)
if(mer)console.log(mer)
next()}

var cb= function(req, res, next) {
var obj={usr:usr,title:"buyer",pid: pid,payid:payid,item:item,mer:mer}
res.render("success",obj)}

var arr=[getEma,getPid,chk,exePal,cb]
router.get("/success", arr)
module.exports = router
