//添加invalid监听事件
function invalid(e) {
	let validity=(e.srcElement||e.target).validity;
	if(validity.valueMissing){
		//提示用户required字段没有填写
	}
	e.stopPropagation();
	//取消浏览器默认反馈
	e.preventDefault();
}
