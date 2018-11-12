//ES9
function Type(type){
	return Reflect.metadata('design:type',type);
}
function ParamTypes(...types){
	return Reflect.metadata('design:ParamTypes',types)
}
function ReturnType(type){
	return Reflect.metadata('design:returnType',type)
}
@ParamTypes(String,Number)
class C{
	constructor(text,i){

	}
	@Type(Function)
	get name(){return 'text'}
	@ParamTypes(Number,Number)
	@ReturnType(Number)
	add(x,y){
		return x+y;
	}
let obj=new C('a',1);
let ParamTypes=Reflect.getMetadata('design:ParamTypes',inst)




@Reflect.metadata('name','world')
class yideng{
	@Reflect.metadata('name','hello')
	hello(){}
}
const objs=[yideng,new yideng,yideng.prototype];
const res=objs.mpa(obj=>{
	Reflect.getMetadata('name',obj);
	Reflect.getMetadata('name',obj,'hello');
	Reflect.getOwnMetadata('name',obj);
	Reflect.getOwnMetadata('name',obj,'hello')
})