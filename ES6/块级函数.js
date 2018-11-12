//<=ES5 抛出错误
'use strict'
if(true){	
	//....
	function doSomething(){
		console.log(123)
	}
}

//ES6   没有异常
'use strict'
if(true){
	console.log(typeof doSomething);
	function doSomething(){console.log(this.name)}
}
