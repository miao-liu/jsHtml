//生成器表达式
//example-1
/*function *createIterator() {
	yield 1;
	yield 2;
	yield 3;
}
let iterator=createIterator();
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)*/
//example-2
/*function *createIterator(items) {
	for(let i=0;i<items.length;i++){
		yield items[i]
	}
}
let iterator=createIterator([1,2]);
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())*/

//生成器对象
/*let o={
	*createIterator(items){
		for(let i=0;i<items.length;i++){
			yield items[i]
		}
	}
}

let iterator=o.createIterator([1,2,3]);
console.log(iterator.next())*/

//可迭代对象
/*let collection={
	items:[],
	*[Symbol.iterator](){
		for(let item of this.items)
			yield item
	}
}
collection.items.push(1)
collection.items.push(2)
collection.items.push(3)
for(let x of collection)
	console.log(x)*/

//生成器return语句  return后面语句不会再执行
//example-1
/*function *createIterator() {
	yield 1;
	return;
	yield 2;
	yield 3;
}
let iterator = createIterator();
console.log(iterator.next()); 
console.log(iterator.next());*/
//example-2
/*function *createIterator() {
	yield 1;
	return 42;
}
let iterator = createIterator();
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); */

//生成器委托
//example-1
/*function *createIterator1(){
	yield 1;
	yield 2;
}
function *createIterator2(){
	yield 'a';
	yield 'b';
}
function *createIterator(){
	yield *createIterator1();
	yield *createIterator2();
	return true;
}
let iterator=createIterator();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())*/
//example-2
/*function *createIterator1() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
}
function *createIterator2(count){	
	for(let i=0;i<count;i++){
		yield 'repeat';
	}
}
function *createIterator(){
	//取得该函数返回值4
	let result=yield *createIterator1();	   	
	yield *createIterator2(result)
}
let iterator=createIterator();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())*/


//带数据执行任务
function run(taskDef) {
// 创建迭代器，让它在别处可用
let task = taskDef();
// 启动任务
let result = task.next();
// 递归使用函数来保持对 next() 的调用
function step() {
// 如果还有更多要做的
	if (!result.done) {
		result = task.next(result.value);
		step();
	}
}
// 开始处理过程
	step()
}

run(function*() {
	let value = yield 1;
	console.log(value); // 1
	value = yield value + 3;
	console.log(value); // 4
});