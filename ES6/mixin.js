//mixin等价于Object.assign
function mixin(receiver,supplier) {
	Object.keys(supplier).forEach(key=>{
		receiver[key]=supplier[key]
	})
	return supplier;	
}

//exapmle1
function EventTarget() {
	// body...
}
EventTarget.prototype={
	constructor:EventTarget,
	emit(){/*...*/},
	on(){/*...*/}
}

let myObject={};
mixin(myObject,EventTarget);
myObject.emit('xxx')