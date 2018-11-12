//查找一个字符串中各个字符出现的次数		
		let str='abiagajiofsa';
		//reduce
		/*let res=str.split('')
				   .reduce((x,y)=>((x[y]++||x[y]=0),x),{});
		console.log(res)*/

		//map
		let res=str.split('')
					.map(x=>{
						obj[x]++||(obj[x]=1)
					})
		console.log(res)

	 //数组降一维
	 let arr=[[1,2,3],[4,5,6]],
	 	 arr1=arr.join(' ')//1,2,3 4,5,6
	 	 	 .replace(/\s/g,',')//1,2,3,4,5,6
	 	 	 .split(',');//['1','2','3','4','5','6']
	 //数组升二维
	 let arr=[1,2,3,4,5,6],
	 	step=2,
	 	arr1=[];
	 while(arr.length){
	 	arr1.push(arr.splice(0,step))
	 }
	 	console.log(arr1)

//数组去重
let [...set]=new Set([1,2,3,4,5,5,5,5]);
console.log(set)

//合并多个数组
//example-1
let one=[1,2,3],
	two=[100,200,300],
	all=[...one,...two];
console.log(all.length)
console.log(all)
//example-2
let one=[1,2,[3,4],5,[7,8]];
console.log(one.toString().split(','))