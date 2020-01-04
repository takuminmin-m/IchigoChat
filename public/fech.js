var ary = []

function fetch_boad() {
  // 差分の確認
  fetch(location + "renum")
    .then(function(response) {
		return response.json();
    })
    .then(function(myjson) {
		return json.boad_size;
    })
    .then(function(boad_size) {
		need = Number(boad_size) - n;
    });

  // 差分の補充 更新
  for(n; n == need; n = n + 1){
	fetch(location + "re" + String())
		.then(function(response) {
			return response.json();
		})
		.then(function(mytext) {
			ary.push(myjson);
		});
	
	// ページの更新
	ary.forEach(function(myjson) {
		tyosei_(myjson.user, myjson.come);
	});
	
	ary = []
  }
};
