let p1=new Promise((resolve,reject)=>{
	resolve(42);
})

//Promise 串联
/*p1.then(val=>{
	console.log(val)
}).then(()=>{
	console.log('over');
	throw new Error('error')
}).catch(err=>{
	console.log(err.message)
})*/

//在Promise链中返回值
/*p1.then(val=>{
	console.log(val)
	throw new Error('error')	
}).catch(err=>{
	console.log(err.message)
})*/

//在Promise中返回Promise
/*let p2=new Promise((resolve,reject)=>{
	reject('err');
})
p1.then(val=>{
	console.log(val)
	return p2;
}).catch(err=>{
	console.log(err)
})*/

/*let p2=new Promise((resolve,reject)=>{
	resolve(43);
})
let p3=new Promise((resolve,reject)=>{
	//resolve(44);
	reject('error')
})*/

//Promise.all
/*let p4=Promise.all([p1,p2,p3]);
p4.then(val=>{
	console.log(Array.isArray(val));
	console.log(...val)
},err=>{	
	console.log(err)
})*/

//Promise.race
/*let p4=Promise.race([p1,p2,p3]);
p4.then(val=>{
	console.log(val)
})*/

//继承Promise
class myPromise extends Promise{
	success(resolve,reject){
		return this.then(resolve,reject)
	}
	failure(reject){
		return this.catch(reject)
	}
}
let promise=new myPromise((resolve,reject)=>{
	resolve(42);
})
promise.success(val=>{
	console.log(val)
}).failure(err=>{
	console.log(err)
})