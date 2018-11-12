//Array.of
/*let items = Array.of(1, 2,'a');
for(let x of items)
	console.log(x)
*/

//Array.from
/*function translate(){
	let args=Array.from(arguments);		
	console.log(args);
}
translate(1,2,3,4)*/

//映射转换
/*function translate(){
	return Array.from(arguments,value=>value+1);
}
let numbers=translate(1,2,3,4),
	str=translate('a','b','c');
console.log(numbers)
console.log(str)*/

//映射转换  指定环境
/*let helper={
	diff:1,
	add(value){
		return value+this.diff
	}
};
function translate(){
	return Array.from(arguments,helper.add,helper)
}
let numbers=translate(1,2,3);
console.log(numbers)*/

//迭代对象上使用
let nums={
	*[Symbol.iterator](){
		yield 1;
		yield 2;
		yield 3;
	}
};
let nums1=Array.from(nums,value=>value+1);
console.log(nums1)