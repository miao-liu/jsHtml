//记录window.applicationCache触发的每个事件
window.applicationCache.onchecking=e=>{
	log('checking for application update')
}

window.applicationCache.onnoupdate=e=>{
	log('no application update found')
}

window.applicationCache.onupdateready=e=>{
	log('application update ready')
}

window.applicationCache.ondownloading=e=>{
	log('downloading application update')
}

window.applicationCache.oncached=e=>{
	log('application cached')
}

window.applicationCache.onerror=e=>{
	log('application cache error')
}

window.addEventListener('online',e=>{
	log('online')
},true)

window.addEventListener('offline',e=>{
	log('offline')
},true)

//applicationCache状态代码转换消息
function showCacheStatus(n) {
	stausMessage=['Uncached','Idle','Checking','Downloading','Update Ready','obsolete'];
	return stausMessage;
}

function install() {
	log('checking for updates');
	try{
		window.applicationCache.update();
	}catch(e){
		applicationCache.onerror();
	}
}

function onload(e){
	if(!window.applicationCache){
		log('h5 offline applications are not supported in your browser.')
		return;
	}

	if(!navigator.geolocation){
		log('h5 Geolocation is not supported in your browser.');
		return;
	}
	if(!window.localStorage){
		log('h5 Local Storage is not supported in your browser.');
		return;
	}
	if(!window.WebSocket){
		log('h5 Local WebSocket is not supported in your browser.');
		return;	
	}

	log('initial cache status: '+showCacheStatus(window.applicationCache.status));
	document.getElementById('installButton').onclik=install;
}	
