setInterval(callback, 1000);

function callback (time) {
	var d = new Date();
	var time = d.toLocaleTimeString();
	console.log(time);
}
