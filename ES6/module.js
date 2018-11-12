//导出数据
export var color = "red";
export let name = "Nicholas";
export const magicNumber = 7;

// 导出函数
export function sum(num1, num2) {
	return num1 + num1;
}
// 导出类
export class Rectangle {
constructor(length, width) {
	this.length = length;
	this.width = width;
	}
}

// 此函数为模块私有
function subtract(num1, num2) {
	return num1 - num2;
}
// 定义一个函数……
function multiply(num1, num2) {
	return num1 * num2;
}
// ……稍后将其导出
export { multiply };