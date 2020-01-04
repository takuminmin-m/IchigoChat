var n = 0//回数
var list = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<>+-*/?.,_=~^\|@`{}][:;!#$%&()=アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォャュョッヴガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ「」・ "//使用可能な文字を定義

function jump(){//ヘルプ
  location.href = location + "about"
}

function send(name, talk, pass) {
  if pass === undefined {
    pass = "";
  };
  
  var re_json = {
    "user": name,
    "come": talk,
    "pass": pass
  }
  fetch(location + "\se", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
  });
}

function tyosei_(name, talk, pass){//使用できない文字をカット + htmlに書き込み
  var name2 = ""
  var talk2 = ""
  for( var i = 0; i < name.length; i++ ){
    var p=name.slice( i, i + 1 )
    for( var j = 0; j < list.length; j++ ){
    if( p.indexOf( list.slice( j, j + 1 ) ) >= 0 ){
      name2 = name2 + list.slice( j, j + 1 )
    }
    }
  }
  for( var i = 0; i < talk.length; i++ ){
    var p = talk.slice( i, i + 1 )
    for( var j = 0; j < list.length; j++ ){
      if( p.indexOf(list.slice( j, j + 1 )) >=0 ){
        talk2=talk2+list.slice( j, j + 1 )
      }

    }
    if( p == "\n" ){
      talk2 = talk2 + "<br />"
    }
  }
  
  // 送信
  send(name2, talk2, pass);

  no = document.getElementById( "kusa" + String(n) )
  n = n + 1
  bunsyo = "<font color='green'>" + String(n) + ":" +name2+ "</font><br />" + talk2 + " <br /><br /><div id='kusa"+String(n)+"'>"//タグを追加
  no.innerHTML = bunsyo
  console.log(bunsyo)
}
