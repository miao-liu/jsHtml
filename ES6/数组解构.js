//赋值
/*let colors=['red','green','blue'],
	firstColor='black',
	secondColor='purple';

[firstColor,secondColor]=colors;
console.log(firstColor)
console.log(secondColor)*/

//交换
/*let a=1,
	b=2;
[a,b]=[b,a];
console.log(a,b)*/

//默认值
/*let colors=['red'],
	[firstColor,secondColor='green']=colors;
	console.log(firstColor)
	console.log(secondColor)*/

//嵌套解构
/*let colors=['red',['green','blue'],'blue'],
	//[firstColor,secondColor]=colors;
	[firstColor,[secondColor]]=colors;
	console.log(firstColor)
	console.log(secondColor)*/

//剩余项
/*let colors=['red','green','blue'],
	[firstColor,...restColors]=colors;
console.log(firstColor)
console.log(restColors)//restColors=>['green','blue']*/

//克隆数组
/*let colors=['red','green','blue'],
	[...clonedColors]=colors;
console.log(clonedColors)*/

//混合解构
let node = {
		type: "Identifier",
		name: "foo",
		loc: {
			start: {
			line: 1,
			column: 1
			},
		end: {
			line: 1,
			column: 4
			}
		},
		range: [0, 3]
};
let {loc:{start},range:[startIndex]}=node;
console.log(start)//start=>{line:1,column:1}
console.log(startIndex)//startIndex=>0