function cb(data){
var loc= "http://localhost:3000";

var xhr = new XMLHttpRequest();
xhr.open("PUT", loc+"/rls", false);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(data));

alert(data.id);		// 注文番号
}//cb
