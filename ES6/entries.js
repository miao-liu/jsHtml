let colors=['red','blue','green'],
	tracking=new Set([1234,5678,9012]),
	data=new Map();

data.set('title','vue');
data.set('body','vuex');

//entries
/*for(let entry of colors.entries())
	console.log(entry);
for(let entry of tracking.entries())
	console.log(entry);
for (let entry of data.entries()) 
	console.log(entry)*/

//values()
/*for (let value of tracking.values()) 
	console.log(value)
for (let value of data.values()) 
	console.log(value)
for (let value of colors[Symbol.iterator]()) 
	console.log(value)*/

//keys
/*for(let key of colors.keys())
	console.log(key);
for(let key of tracking.keys())
	console.log(key);
for (let key of data.keys()) 
	console.log(key)*/

//map for-of
for(let [key,value] of data){
	console.log(key+'='+value)
}