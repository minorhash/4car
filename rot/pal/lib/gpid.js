var det={subtotal:null,tax:null,shipping:0}
let sum=0
var mnt=(sum,det)=>{
this.total=sum
this.details=det
}
var pson= {payer_id: null,transactions:null}

module.exports=(reqq,pri)=>{

if(reqq){pid = reqq.paymentId;
payid = reqq.PayerID
if(payid) pson.payer_id=payid

}

if(pri){
    det.subtotal=pri
    det.tax=Math.round(pri*.08)
    sum=pri*1.08}

if(sum&&det){
pson.transactions=[{amount:{currency:"JPY",total:sum,
details:det
}}]
}

return pson
}
