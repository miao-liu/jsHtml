const fs=require('fs');
//promise 未决的
function readfile(filename){
	return new Promise((resolve,reject)=>{
		fs.readFile(filename,'utf-8',(err,contents)=>{
			if(err){
				reject(err);
				return;
			}
			resolve(contents)
		})
	})
}

let promise=readfile('./example.txt');
promise.then(data=>{
	console.log(data)
},err=>{
	console.log(err.message)
})