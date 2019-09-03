var sdk=require("./sdk")

var pid="8P2285228R062122G"
module.exports=()=>{
sdk.authorization.capture(pid, function (err, cap) {
    if (err)console.error(err);
   console.log(cap);
return cap
});
}
