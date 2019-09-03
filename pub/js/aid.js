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
var payload = {
"amount":<%=mer.pri%>,
"currency" : "JPY",
"store_name": "Paidy sample store",
"buyer": {
"email": "successful.payment@paidy.com",
"name1": "山田　太郎",
"phone" : "08000000001"
},
"buyer_data": {
"user_id": "yamada_taro",
"age": 29,
"order_count": 1000,
"ltv": 250000,
"last_order_amount": 20000,
"last_order_at": 20
},
"order": {
"items": [
     {
          "id":"101",
          "quantity":1,
          "title":"Paidyスニーカー",
          "unit_price":3000,
          "description":" "
     }
],
"shipping": 0,
"tax":240
},
 "shipping_address": {
"line1": "AXISビル 10F",
"line2": "六本木4-22-1",
"city": "港区",
"state": "東京都",
"zip": "106-2004"
},
"description" : "Sample store"
};
paidyHandler.launch(payload);
};


