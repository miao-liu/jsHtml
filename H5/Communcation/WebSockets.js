//检测浏览器支持情况
	if(!window.WebSocket)
		alert('not support websocket!')
//创建及连接服务器
let url='ws://localhost:8080/echo',//可在node环境中引入wes模块创建
	w=new WebSocket(url);
//添加事件监听器
w.onopen=()=>{
	console.log('open');
	w.send('thank you for acceptin this websocket request');
}
w.onmessage=e=>{
	console.log(e.data)
}
w.onclose=e=>{
	console.log('closed')
}
//触发事件
w.send('hello,websocket!')