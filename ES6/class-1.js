//静态成员
/*class PersonClass {
	constructor(name) {
		this.name = name;
	}
	sayName() {
		console.log(this.name);
	}
	static create(name) {
		return new PersonClass(name);
	}
}
//静态成员直接引用
let person = PersonClass.create("monica");
console.log(person.name)*/

//派生类继承
class Rectangle{
	constructor(w,h){
		this.w=w;
		this.h=h;		
	}
	getArea(){		
		return this.w * this.h;
	}
}

/*class Square extends Rectangle{
	constructor(h){
		super(h,h);//等价于Rectangle.call(this,w,h);
	}
}

let square=new Square(5),
	rectangle=new Rectangle(4,5);
console.log(square.getArea())
console.log(rectangle.getArea())*/

//屏蔽类
/*class Square extends Rectangle{
	constructor(h){
		super(h,h)
	}
	getArea(){
// 重写、屏蔽并调用了 Rectangle.prototype.getArea()
		return super.getArea();
	}
}*/

//继承内置对象
//example-1  该方法创建实例后会出现嵌套情况,=>1.jpg
/*class MyArray extends Array{

}
let colors=new MyArray();
colors.push('red');
console.log(colors.length)
console.log(colors);*/
//example-2
// 此代码重写了从Array派生的MyArray类上的Symbol.species。所有返回数组的继承方
// 法现在都会使用Array的实例，而不是MyArray的实例。
class MyArray extends Array {
static get [Symbol.species]() {
	return Array;
	}
}
let items = new MyArray(1, 2, 3, 4),
subitems = items.slice(1, 3);
console.log(items instanceof MyArray); // true
console.log(items instanceof Array);//true
console.log(subitems instanceof Array); // true
console.log(subitems instanceof MyArray); // false