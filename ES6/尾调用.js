/*
*1.尾调用不能引用当前栈帧中的变量(不能是闭包)
*2.进行尾调用的函数在尾调用返回结果后不能做额外操作
*3.尾调用的结果作为当前函数的返回值
*/
'use strict'
function doSomething(){
	//doSomethingElse()
	//如果少了return就不是尾调用了

	//return 1+doSomethingElse();
	//返回结果后还要+1

	//let result=doSomethingElse();
	//return result;
	//不在尾部,同义:返回值是一个函数

	//let num=1,func=()=>num;
	//return func();
	//引用了局部变量num

	return doSomethingElse();
}

//exapmle1
function factorial(n,p=1){
	if(n<=1){
		return 1*p;
	}
	else{
		let result=n*p;
		//被优化  result作为参数传入
		return factorial(n-1,result);
	}
}