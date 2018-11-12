//检查是否支持缓存
if(!window.applicationCache)
	alert('你的浏览器不支持离线功能!')

//在线/离线
function loadDemo(argument) {
	if(navigator.onLine)
		console.log('online')
	else
		console.log('offline')
}

//添加事件监听器
window.addEventListener('online',e=>{
	console.log('online')
},true)

window.addEventListener('offline',e=>{
	console.log('offline')
},true)