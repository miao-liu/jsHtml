//example1
/*let firstName=Symbol('first name'),
	person={};
person[firstName]='monica';
console.log('first name' in person)//=>false  说明不可被枚举
console.log(person[firstName])//=>monica
console.log(firstName)*/


//共享符号 Symbol.for
/*let uid=Symbol.for('uid'),
	object={
		[uid]:'12345'
	};
console.log(object[uid])//=>12345
console.log(uid)//=>Symbol(uid)

let uid2=Symbol.for('uid');
console.log(uid===uid2)//=>true
console.log(object[uid2])//=>12345
console.log(uid2)//=>Symbol(uid)*/


//检索Symbol.keyFor
/*let uid=Symbol.for('uid');
console.log(Symbol.keyFor(uid))//=>uid

let uid2=Symbol.for('uid');
console.log(Symbol.keyFor(uid2))//=>uid

let uid3=Symbol('uid');
console.log(Symbol.keyFor(uid3));//=>undefined*/

//Symbol.hasInstance
//example1
/*function Person(name){
	this.name=name;
}
Object.defineProperty(Person,Symbol.hasInstance,{
	value:function(v){
		return false
	}
})

let p1=new Person('monica');
console.log(p1.name)
console.log(p1 instanceof Person)//=>false*/
//example2
function SpecialNumber(){}

Object.defineProperty(SpecialNumber,Symbol.hasInstance,{
	value:function(v){
		console.log(v)
		return (v instanceof Number)&&(v>=1&&v<=100)
	}
});
		let two=new Number(2),
			zero=new Number(0);
		console.log(two instanceof SpecialNumber)//=>true
		console.log(zero instanceof SpecialNumber)//=>false