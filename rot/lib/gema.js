module.exports=function(sess){
if(sess){
if(sess.passport){
usr=sess.passport.user
return usr
}
}else{console.log("no sess")}
}//fun

