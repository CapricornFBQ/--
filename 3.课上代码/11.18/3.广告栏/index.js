$(document).ready(function () {

	//获得所有的p标签，给每一个p标签增加一个span标签
	// 便利
	$("p").each(function(index){
		//1.创建新的标签

		// var element = "<span></span>";
		var element = document.createElement("span");

		//0 25 50  INDEX * -25
		 var a = "0px "+"-"+index*25+"px";
		 $(element).css("background-position",a);
		$(this).prepend($(element));


	});



	// 动画
	// stop()可以用来停止动画和滑动、检入检出
	$(".wrapper li").hover(function(){
		$(this).children("p").stop().animate({

			bottom:"0px"

		},150);

	},function(){
		$(this).children("p").stop().animate({
			bottom:"-25px"
		},150);


	});
});