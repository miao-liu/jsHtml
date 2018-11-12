function Person(name){
	//if(typeof new.target!=='undefined')
	if(new.target===Person)
		this.name=name;
	else
		throw new Error('You must use new with Person');
}

let  p2=new Person('monica').name,
	 p1=Person('monica').name;//err;
