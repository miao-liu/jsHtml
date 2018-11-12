//1
var PageHandler = {
id: "123456",
init: function() {
	document.addEventListener("click", function(event) {
		this.doSomething(event.type); // 错误
	}, false);
},
doSomething: function(type) {
	console.log("Handling " + type + " for " + this.id);
	}
};

//bind
var PageHandler = {
id: "123456",
init: function() {
	document.addEventListener("click", (function(event) {
			this.doSomething(event.type); // 错误
		}).bind(this), false);
},
doSomething: function(type) {
	console.log("Handling " + type + " for " + this.id);
	}
};

//箭头函数
var PageHandler = {
id: "123456",
init: function() {
	document.addEventListener("click", event=> {
		this.doSomething(event.type); // 错误
	}, false);
},
doSomething: function(type) {
	console.log("Handling " + type + " for " + this.id);
	}
};

