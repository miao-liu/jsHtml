//创建跨源请求
function loadDemo(){
	let crossOriginRequest=new XMLHttpRequest();
	//是否支持
	if(typeof crossOriginRequest.withCredentials===undefined){
		alert('not support cross-origin XMLHttpRequest');
		return;
	}
	//指定不同源地址构造跨源
	crossOriginRequest.open('GET','http://www.example.net/load',true);
	//opprogress事件
	//下载进度
	crossOriginRequest.onprogress=e=>{
		let total=e.total,
			loaded=e.loaded;
		if(e.lengthComputable){
			//利用进度信息做些事情
		}
	}
	//上传进度
	crossOriginRequest.upload.onprogress=e=>{
		let total=e.total,
			loaded=e.loaded;
		if(e.lengthComputable)
			//利用进度信息做些事情
	}
	//下载完成
	crossOriginRequest.onload=e=>{
		//TODO
	}
	//error事件
	crossOriginRequest.onerror=err=>{
		//TODO
	}
}

//监听load事件
window.addEventListener('load',loadDemo,true)