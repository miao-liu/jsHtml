//iframe中使用postMessage实现互信页面握手通信
let framebustTimer,
	timeout=3000;
if(window!==window.top){
	framebustTimer=setTimeout(()=>{
		window.top.location=location;
	}, timeout);
}

window.addEventListener('message',e=>{
	switch(e.origin){
		case trustedFramer:
			clearTimeout(framebustTimer);
			break;
	}
},true)