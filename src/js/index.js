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

	//キー押した時のイベント
	$("html").keydown(function(e){
		switch(e.which){
            case 65: // Key[→]
            let anim = bodymovin.loadAnimation(animData);
            $("#bodymovin").empty();
            break;
 
            case 66: // Key[←]
            console.log("b");
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