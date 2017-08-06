window.onload = function() {
	console.log("始まるよ");
	let animData = {
		wrapper: document.getElementById('bodymovin'),
		animType: 'svg',
		loop: true,
		prerender: true,
		autoplay: true,
		path: '../json/vj1.json'
	}
	let anim = bodymovin.loadAnimation(animData);
}