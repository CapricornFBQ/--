$(document).ready(function(){
	
	$(".left li").mouseenter(function(){
		//获得
		$(".center li").eq($(this).index()).show().siblings().hide();



	});

	$(".right li").mouseenter(function(){
		//获得
		$(".center li").eq($(this).index()+9).show().siblings().hide();



	});


});