//类表达式
/*let PersonClass=class {
	constructor(name){
		this.name=name;
	}
	sayName(){
		console.log(this.name)
	}
};
let p1=new PersonClass('monica');
p1.sayName()
console.log(p1 instanceof PersonClass)
console.log(p1 instanceof Object)
console.log(typeof PersonClass)
console.log(typeof p1.constructor)*/

//具名表达式
/*let PersonClass1=class PersonClass{
	constructor(name){this.name=name}
	sayName(){console.log(this.name)}
};
console.log(typeof PersonClass)
console.log(typeof PersonClass1)*/

//作为一级公民的类
//example-1
/*function createObject(classof){
	return new classof();
}
let obj=createObject(class{
	sayName(){console.log('hi!')}
})
console.log(typeof obj)
console.log(typeof createObject)
console.log(obj.sayName())*/
//example-2
/*let p1=new class{
	constructor(name){this.name=name}
	sayName(){console.log(this.name)}
}('monica');
console.log(p1.sayName())*/

//访问器属性
/*class createDom{
	constructor(el){
		this.el=el;
	}
	get html(){
		return value;
	}
	set html(value){
		value=this.el.innerHTML;
	}
}
let descriptor=Object.getOwnPropertyDescriptor(createDom.prototype,'html');
console.log('get' in descriptor)
console.log('set' in descriptor)
console.log(descriptor.enumerable)*/

//类生成器
//example-1
/*class MyClass{
	*createIterator(){
		yield 1;
		yield 2;
		yield 3;
	}
} 
let iterator=new MyClass().createIterator();
console.log(iterator.next())
console.log(iterator.next())*/
//example-2
class Collection {
	constructor() {
		this.items = [];
	}
	*[Symbol.iterator]() {
		yield *this.items.values();
	}
}
var items = new Collection().items;
items.push(1);
items.push(2);
items.push(3);
for(let i in items)
console.log(i)