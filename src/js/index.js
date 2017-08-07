import $ from 'jquery';
//こっからッスタート

window.onload = function() {
	console.log("始まるよ");
	//一つめのデータ
	let animData = {
		wrapper: document.getElementById('bodymovin'),
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: true,
		path: '../json/vj1.json'
	}
	let animData2 = {
		wrapper: document.getElementById('bodymovin2'),
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: true,
		path: '../json/vj2.json'
	}
	let animData3 = {
		wrapper: document.getElementById('bodymovin3'),
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: true,
		path: '../json/vj3.json'
	}
	let animData4 = {
		wrapper: document.getElementById('bodymovin4'),
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: true,
		path: '../json/vj4.json'
	}

	//音のイベントを追加する
	function sound(){
		document.getElementById("sound").currentTime = 0 ;
		document.getElementById("sound").play() ;
	}
	function sound2(){
		document.getElementById("sound2").currentTime = 0 ;
		document.getElementById("sound2").play() ;
	}
	function sound3(){
		document.getElementById("sound3").currentTime = 0 ;
		document.getElementById("sound3").play() ;
	}
	function sound4(){
		document.getElementById("sound4").currentTime = 0 ;
		document.getElementById("sound4").play() ;
	}

	//キー押した時のイベント
	$("html").keydown(function(e){
		switch(e.which){
            case 65:
            sound();
            let anim2 = bodymovin.loadAnimation(animData);
            $("#bodymovin").empty();
            break;
 
            case 66:
            sound2();
            let anim = bodymovin.loadAnimation(animData2);
            $("#bodymovin2").empty();
            break;
 
            case 67:
            sound3();
            let anim3 = bodymovin.loadAnimation(animData3);
            $("#bodymovin3").empty();
            break;
 
            case 68: // Key[↓]
            sound4();
            let anim4 = bodymovin.loadAnimation(animData4);
            $("#bodymovin4").empty();
            break;
        }
	});
}