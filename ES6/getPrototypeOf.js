let person={
	getGreeting(){
		return 'hello';
	}
},
	dog={
	getGreeting(){
		return 'woof'
	}
},
	friend={
	getGreeting(){		
		return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
	}
};
Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting()); // "Hello, hi!"
console.log(Object.getPrototypeOf(friend) === person); // true
// 将原型设置为 dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()); // "Woof, hi!"
console.log(Object.getPrototypeOf(friend) === dog); 