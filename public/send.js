var n=0;//回数
var canuse='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ<>+-*/?.,_=~^\|@`{}][:;!#$%&()="あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁぃぅぇぉゃゅょっアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォャュョッｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯﾞﾟ「」・ ';//使用可能な文字を定義
var henkango='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<>+-*/?.,_=~^\|@`{}][:;!#$%&()="ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯﾞﾟ';
var dakuten="がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴ";
var dakhenkan="ｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟｳﾞ";
var doc=document.getElementById("come")
var bunsyo=""


function tyosei(name, talk, pass){//使用できない文字をカット
	var namere=""
	var talkre=""
	for(var i=0;i<name.length;i++){
		var p=name.slice(i,i+1)
		for(var j=0;j<canuse.length;j++){
			if(p.indexOf(canuse.slice(j,j+1))>=0){
				namere=namere+henkango.slice(j,j+1)
			}
		}
		for(var j=0;j<dakuten.length;j++){
			if(p.indexOf(dakuten.slice(j,j+1))>=0){
				namere=namere+dakhenkan.slice(j*2,j*2+2)
			}
		}
	}
	for(var i=0;i<talk.length;i++){
		var p=talk.slice(i,i+1)
		for(var j=0;j<canuse.length;j++){
			if(p.indexOf(canuse.slice(j,j+1))>=0){
				talkre=talkre+henkango.slice(j,j+1)
			}
		}
		for(var j=0;j<dakuten.length;j++){
			if(p.indexOf(dakuten.slice(j,j+1))>=0){
				talkre=talkre+dakhenkan.slice(j*2,j*2+2)
			}
		}
	}
  
  n++
	view(namere, talkre);
  send(namere, talkre, pass);
}

function view(name, talk){ //表示
  bunsyo=bunsyo.replace(" ", "&nbsp").replace("\n", "<br>")
	bunsyo=bunsyo + "<font color='green'>"+String(n)+":"+name+"</font><br />"+talk+" <br /><br />"//タグを追加
	come.innerHTML=bunsyo
}

function send(name, talk, pass){//送信
  fetch(location + "/se", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      "come": talk,
      "user": name,
      "pass": pass
    })
  })

}
