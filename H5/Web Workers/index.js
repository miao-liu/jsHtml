//是否支持
if(typeof Worker==='undefined'){
	alert('Your browser not supports HTML5 Web Workers')
}
//创建Workers对象
let worker=new Worker('./worker1.js');

document.getElementById('btn').onclick=function(){
	worker.postMessage("Here's a message for you!")
}

worker.addEventListener('message',messageHandler,true);

function messageHandler(e) {
	//e.data
}