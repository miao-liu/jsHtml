//find,findIndex
/*let numbers = [25, 30, 35, 40, 45];
console.log(numbers.find(n => n > 33)); //返回元素 35
console.log(numbers.findIndex(n => n > 33)); //返回索引 2*/

//fill  arg1:值 arg2:开始位置 arg3:结束位置
/*let numbers=[1,2,3,4];

//numbers.fill(1);//[ 1, 1, 1, 1 ]

//numbers.fill('a',0);//[ 'a', 'a', 'a', 'a' ]

numbers.fill('b',1,3);//[ 1, 'b', 'b', 4 ]
console.log(numbers)*/

//copyWithin arg1:开始填充位置 arg2:用来复制起始位置 arg3:复制停止位置
let numbers=[1,2,3,4];

//numbers.copyWithin(2,1);//[ 1, 2, 2, 3 ]

numbers.copyWithin(2,0,1);//[ 1, 2, 1, 4 ]
console.log(numbers)