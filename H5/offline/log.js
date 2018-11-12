function log(){
	let p=document.createElement('p'),
		message=Array.prototype.join.call(arguments,' ');

	p.innerHTML=message;
	document.getElementById('info').appendChild(p);
}