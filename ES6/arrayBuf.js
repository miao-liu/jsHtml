//ArrayBuffer DataView
//example-1
/*let buf=new ArrayBuffer(10),

//new DataView() arg1:对象 arg2:偏移位置(默认0) arg3:字节长度
	view=new DataView(buf,0,3);
console.log(buf,view)*/
//example-2
/*let buf=new ArrayBuffer(10),
	view1=new DataView(buf),
	view2=new DataView(buf,5,2);
	console.log(view1.buffer==buf)
	console.log(view2.byteOffset)
	console.log(view2.byteLength)*/

//getxxx() arg1:存储位置 
//setxxx() arg1:存储位置 arg2:值
//example-1
/*let buf=new ArrayBuffer(5),
	view=new DataView(buf);
	view.setInt8(0,5);
	view.setInt8(1,-1);
	console.log(view.getInt8(0));
	console.log(view.getInt8(1));*/
//example-2
let buf=new ArrayBuffer(5),
	view=new DataView(buf);
	view.setInt8(0,5);
	view.setInt8(1,-1);
console.log(view.getInt16(0));