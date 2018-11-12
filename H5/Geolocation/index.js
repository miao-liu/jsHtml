//是否支持
function loadEemo(){
	if(!navigator.geolocation)
		alert('not supported!')
}

//定位
navigator.geolocation.getCurrentPosition(position=>{
   //纬度 经度 精确度
   let {latitude,longitude,accuracy}=position.coords;
},error=>{
	let message=[
			'there was an error while retrieving you location',
			'the user prevented this page from retrieving a location',
			'the browser was unable to determine your location',
			'the browser timed out before retrieving the location'
		]
	console.log(message[error.code]+error.message);
},{timeout:1000})

//监听
let watchId=navigator.geolocation.watchPosition(/*参数同上*/);
navigator.geolocation.clearWatch(watchId);//取消监听

