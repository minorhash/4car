var sdk=require("./lib/sdk")
//var pid="8F148933LY9388354"
var pid="8P2285228R062122G"
module.exports=(pid)=>{
sdk.capture.get(pid, function (err, cap) {
if (err) console.log(err);
return cap
});
}//mod
