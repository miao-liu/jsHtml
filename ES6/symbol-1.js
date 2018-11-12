//Symbol.isConcatSpreadable
//example-1 数组
/*let colors1 = [ "red", "green" ],
	colors2 = colors1.concat([ "blue", "black" ], "brown");
console.log(colors2.length); // =>5
console.log(colors2);//=>[ 'red', 'green', 'blue', 'black', 'brown' ]*/
//example-2 类数组
let collection = {
		0: "Hello",
		1: "world",
		length: 2,//required
		[Symbol.isConcatSpreadable]: true//required
};
let messages = [ "Hi" ].concat(collection);
console.log(messages.length); //=>3
console.log(messages); //=>[ 'Hi', 'Hello', 'world' ]