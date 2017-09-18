

// JQ的使用的方法
//文档就绪：只有确定JQ安装完成的情况下，使用JQ代码才是安全的
// $(document).ready();
$(document).ready(function(){
	//JQ语法的基本介绍
	// $(selector).action();  selector指的是选择器  action值得是函数、事件、方法

	//传统的JS修改p标签
	// document.querySelector("p").style.color ="red";

	//用JQ的方法来写
	// $("p").css("color","green");

	//用JS来写给p标签改变文本内容
	// document.querySelector("p").innerText = "我是一个div标签";

	//用JQ来写
	$("p").text("我是一个avi安抚卡号卡 ");




});