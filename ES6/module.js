module module_test{
	//公开导出
	export let person={name:'monica'};
	export function show(){console.log('hi')}

	function hide(){
		console.log('you can not import this')
	}
}