var boad_fetch = function(){
  // 差分の確認
  fetch(location + "renum")
    .then(function(response) {
      return response.json();
    })
    .then(function(myjson) {
      return json.boad_size;
    })
    .then(function(boad_size) {
      need = Nunber(boad_size) - n;
    });

  // 差分の補充 更新
  
};
