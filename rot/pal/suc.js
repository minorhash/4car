var express = require("express")
var router = express.Router()
var paypal = require("paypal-rest-sdk")
// === db
var db = require("scldb")

var sess=undefined,sar=undefined
var usr=undefined,email=undefined,name=undefined
var pid=undefined,payid=undefined,exeJson=undefined
var red=0,sum=0
var suma=undefined,item=undefined,ist=undefined
var mer=null,pobj=null,pson=null,aid=null

var sdk=require("./lib/sdk")
// === get
const getEma = (req, res, next)=> {
sess=req.session
//var gses=require("../lib/gema");usr=gses(req.session)
usr=require("../lib/usr")
console.log(usr.nam)
if(sess)mer=sess.mer
next()};

var getPid= function(req, res, next) {
// console.log("=== suc gid")
// var payj=require("./lib/gpid")
// pobj=payj(req.query,mer.pri)
// console.log(pobj)
// pson=JSON.stringify(pobj)
// console.log(pson)

console.log("=== suc get pid===")
pid = req.query.paymentId
payid = req.query.PayerID
var det={subtotal:null,tax:null,shipping:null}
    det.subtotal=mer.pri
    det.tax=Math.round(mer.pri*.08)
    det.shipping=0
    sum=mer.pri*1.08
pobj= {
payer_id: payid,
transactions: [{amount: {currency: "JPY",total: sum,details:det}}],
}
pson=JSON.stringify(pobj)
console.log(sum)
console.log(det)
console.log(pobj)
console.log(pson)
next()}

var exePal= function(req, res,next) {
console.log("=== exe pal ===")
var utc = new Date().toJSON().slice(0,10)

sdk.payment.execute(pid, pson, function(err, pay) {
if (err) {console.log("=== exe fail");
console.log(err.response.details)
//res.redirect("cancel")
}else {
console.log("=== pal suc===")
aid=pay.transactions[0].related_resources[0].sale.id
//aid=pay.transactions[0]
if(aid)console.log(aid)

try{db.insPal(usr.nam,pid,aid,sum,pson,utc)}catch(e){console.log(e)}
}//else
})//exec
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
if(usr)console.log(usr)
if(usr)console.log(usr.nam)
if(pobj)console.log(pobj)
next()}

var cb= function(req, res, next) {
var obj={usr:usr,title:"buyer",pid: pid,payid:payid,item:item,red:red}
res.render("success",obj)}

var arr=[getEma,getPid,chk,exePal,cb]
router.get("/success", arr)
module.exports = router
