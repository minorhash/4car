module.exports=(pri,tran)=>{
tran.amount.details.subtotal =pri
tran.amount.details.tax=Math.round(pri*.08)
tran.amount.details.shipping=0
tran.amount.total =Math.round(pri*1.08)
console.log(tran)
return tran
}
