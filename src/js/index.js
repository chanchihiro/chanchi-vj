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

	//音のイベントを追加する
	function sound(){
		document.getElementById("sound").currentTime = 0 ;
		document.getElementById("sound").play() ;
	}

	//キー押した時のイベント
	$("html").keydown(function(e){
		switch(e.which){
            case 65: // Key[→]
            sound();
            let anim2 = bodymovin.loadAnimation(animData);
            $("#bodymovin").empty();
            break;
 
            case 66: // Key[←]
            console.log("b");
            let anim = bodymovin.loadAnimation(animData2);
            $("#bodymovin2").empty();
            break;
 
            case 67: // Key[↑]
            console.log("c");
            break;
 
            case 68: // Key[↓]
            console.log("d");
            break;
        }
	});
}