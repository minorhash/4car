var config={
"api_key":"<%= pub %>",
"logo_url":"http://www.paidy.com/images/logo.jpg",
"closed":function(cb){

var loc= "http://localhost:3000";

var xhr = new XMLHttpRequest();
xhr.open("PUT", loc+"/pid", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(cb));
}
};
var paidyHandler=Paidy.configure(config);
function paidyPay(){
var payload={
"amount":<%= mer.pri*1.08 %>,
"currency":"JPY",
"store_name":"tmstore",
"buyer":{

"email":"minorhash@gmail.com",
"name1":"min",
"phone":"08059283275"

},
"buyer_data":{
"user_id":"yamada_taro",
"age":29,
"order_count":1000,
"ltv":250000,
"last_order_amount":20000,
"last_order_at":20
},
"order":{

"items":[
{
"id":"<%= mer.sku %>",
"quantity":"1",
"title":"<%= mer.sku%>",
"unit_price":"<%= mer.pri%>"
},
],
"order_ref":"88e021674",
"shipping":0,
"tax":<%= Math.round(mer.pri*.08)%>
},
"description":"tmStore"
};
paidyHandler.launch(payload);
};


