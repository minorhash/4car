var config = {
"api_key":"<%= pub %>",
"logo_url": "http://www.paidy.com/images/logo.png",
"closed":function(cb){

var loc= "http://localhost:3000";

var xhr = new XMLHttpRequest();
xhr.open("PUT", loc+"/pid", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(cb));
}
};
var paidyHandler = Paidy.configure(config);
function paidyPay() {
paidyHandler.launch(payload);
};
