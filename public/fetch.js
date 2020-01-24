var need = 0
var re_num = ""


function fetch_sub() {
  fetch(location + "/re/" + String(n) + "/" + re_num)
    .then(function(response) {
      return response.json();
    })
    .then(function(myjson) {
      console.log(myjson);
      myjson.forEach( function(json) {
	n = n + 1;
	console.log(json);
	view(json.user, json.come);
      });
    });
};


function fetch_boad() {
  // 差分の確認
  fetch(location + "/renum")
    .then(function(response) {
      return response.text();
    })
    
    .then(function(text){
      re_num = Number(text);
      fetch_sub()
    });
  }
