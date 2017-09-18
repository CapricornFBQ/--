$(document).ready(function () {
	
	$(".header li").mouseenter(function(){

		//花到谁，设置自己为selected，其他的删除
		$(this).addClass("selected").siblings().removeClass("selected");

		//活动这个对象的index
		var index = $(this).index();

		//相对应的不变，其他的hide

		$(".content div").eq(index).show().siblings().hide();


	});




});