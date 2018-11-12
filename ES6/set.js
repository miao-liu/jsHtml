//创建
//example-1
/*let set=new Set();

//out=>2 不会使用强制类型转换判断重复
// set.add(5);
// set.add('5');

//=>2 不会被转换为字符串，默认为不同
set.add({})
set.add({})
console.log(set.size)*/
//example-2
/*let [...set]=new Set([1,2,3,4,5,5,5,5]);
console.log(set)*/

//删除 delete 
/*let set = new Set();
	set.add(5);
	set.add("5");
console.log(set.has(5)); // true
	set.delete(5);
console.log(set.has(5)); // false
console.log(set.size); // 1
	set.clear();
console.log(set.has("5")); // false
console.log(set.size); // 0*/

//forEach
let set=new Set([1,3,4,4,4,5,6]);
set.forEach((val,key,ownerSet)=>{
	console.log(val)
	//console.log(ownerSet)//=>Set { 1, 3, 4, 5, 6 }
})

