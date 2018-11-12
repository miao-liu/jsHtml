//发送消息
let charFram=document.querySelector('iframe');
charFram.contentWindow.postMessage('hello,','friend.example.com');
//消息时间监听器
window.addEventListener('message',messageHandler,true);
function messageHandler(e) {
	switch(e.origin){
		case 'friend.example.com':
		//处理消息
			processMessage(e.data);			
		break;
		default:
			//消息无法识别，被忽略
	}
}

function processMessage(data){
	//TODO
}