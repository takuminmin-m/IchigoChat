var n=0;//回数
var list='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ<>+-*/?.,_=~^\|@`{}][:;!#$%&()="あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁぃぅぇぉゃゅょっアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォャュョッｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯﾞﾟ「」・ ';//使用可能な文字を定義
var list2='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<>+-*/?.,_=~^\|@`{}][:;!#$%&()="ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯﾞﾟ';
var list3="がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴ";
var list4="ｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟｳﾞ";
var doc=document.getElementById("kusa")
var bunsyo=""

function jump(src){
	location.href=ip + src
}

function tyosei(name, touk, pass){//使用できない文字をカット
	var name2=""
	var touk2=""
	for(var i=0;i<name.length;i++){
		var p=name.slice(i,i+1)
		for(var j=0;j<list.length;j++){
			if(p.indexOf(list.slice(j,j+1))>=0){
				name2=name2+list2.slice(j,j+1)
			}
		}
		for(var j=0;j<list3.length;j++){
			if(p.indexOf(list3.slice(j,j+1))>=0){
				name2=name2+list4.slice(j*2,j*2+2)
			}
		}
	}
	for(var i=0;i<touk.length;i++){
		var p=touk.slice(i,i+1)
		for(var j=0;j<list.length;j++){
			if(p.indexOf(list.slice(j,j+1))>=0){
				touk2=touk2+list2.slice(j,j+1)
			}
		}
		for(var j=0;j<list3.length;j++){
			if(p.indexOf(list3.slice(j,j+1))>=0){
				touk2=touk2+list4.slice(j*2,j*2+2)
			}
		}
		if(p=="\n"){
			touk2=touk2+"<br />"
		}
	}
	view(name2, touk2);
  send(name2, touk2, pass);
}

function view(name, touk){ //表示
	bunsyo=bunsyo + "<font color='green'>"+String(n)+":"+name+"</font><br />"+touk+" <br /><br />"//タグを追加
	kusa.innerHTML=bunsyo
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
