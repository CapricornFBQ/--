// $.fn.changeStyle = function() { 
// 	this.css("color","red");   //定义方法，在代码中进行调用  直接调用可以实现功能
// }

$.fn.changeStyle = function(str) { 
	this.css("color", str);   //定义方法，在代码中进行调用  添加参数
	return this;   //使方法可以连续调用
}