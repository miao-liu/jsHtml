let socket,	
	myId=Math.floor(10000*Math.random()),//会话ID
	rowCount=0;//当前行数

function updateSocketStatus(message){
	document.getElementById('socketStatus').innerHTML=message;
}
function updateGeolocationStatus(message){
	document.getElementById('geoStatus').innerHTML=message;
}
function handleLocationError(error) {
	let message=[
			'there was an error while retrieving you location',
			'the user prevented this page from retrieving a location',
			'the browser was unable to determine your location',
			'the browser timed out before retrieving the location'
		]
	updateGeolocationStatus(message[error.code]+error.message);
}
function loadDemo() {
	if(!(window.WebSocket&&navigator.geolocation)){
		alert('浏览器版本过低！')
	}	
		url='ws://localhost:8080';
		socket=new WebSocket(url);
		socket.onopen=()=>{
			updateSocketStatus('Connected to WebSocket tracker server.')
		}
		socket.onmessage=e=>{
			updateSocketStatus('Updated location from '+dataReturned(e.data));
		}

		let geolocation=navigator.geolocation;
		//注册位置更新处理函数
		geolocation
			.watchPosition(updateLocation,
						   handleLocationError,
						   {maximumAge:20000});
		
}
function dataReturned(locationData) {
	let allData=JSON.parse(locationData),
		incomingId=allData[0],
		incomingLat=allData[1],
		incomingLong=allData[2];
	//根据位置定位到HEML元素，不存在则创建
	let incomingRow=document.getElementById(incomingId);
	if(!incomingRow){
		incomingRow=document.createElement('div');
		incomingRow.setAttribute('id',incomingId);
		incomingRow.userText=(incomingId==myId)
							  ?'Me'
							  :'User '+rowCount;
		rowCount++;
		document.body.appendChild(incomingRow);
	}
	//使用新的值更新对应行的文本
	incomingRow.innerHTML=incomingRow.userText+'\\Lat:'+
						  incomingLat+'\\Lon: '+
						  incomingLong;
	return incomingRow.userText;						
}
function updateLocation(postion) {	
	let {latitude,longitude}=postion.coords,
		timestamp=postion.timestamp;
	updateGeolocationStatus('Location updated at '+timestamp)

	let toSend=JSON.stringify([myId,latitude,longitude]);
	sendMyLocation(toSend)
}
function handleLocationError(error) {	
}
function sendMyLocation(newLocation) {
	socket&&socket.send(newLocation)
}