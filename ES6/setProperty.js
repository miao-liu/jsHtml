let person = {
	getGreeting() {
		return "Hello";
	}
};
let dog = {
	getGreeting() {
		return "Woof";
	}
};
// 原型为 person
let friend = Object.create(person);
console.log(friend.getGreeting()); // "Hello"
console.log(Object.getPrototypeOf(friend) === person); // true
// 将原型设置为 dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()); // "Woof"
console.log(Object.getPrototypeOf(friend) === dog); 