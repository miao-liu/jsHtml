//Weak Set 与正规 Set 之间最大的区别是对象的弱引用。
let set=new WeakSet(),
	key={};
set.add(key);
console.log(set.has(key))
console.log(set)
key=null;//移除引用