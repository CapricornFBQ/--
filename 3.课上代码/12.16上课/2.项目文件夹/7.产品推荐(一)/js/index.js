

$(document).ready(function () {
	
	// （0）判断当前屏幕大小--》（1）获得所有.item --》（2）根据屏幕大小，选择合适的图片---》
	// （3）如果是小图则，给 item添加一个img   (4)如果是大图,设置成背景 （5）大图的时候高度为410，小图auto（自动）
	//封装函数
	function my(){
		// （1）获得当前body的大小（img和body有关）
		var viewWidth = $("body").width();
		// console.log(viewWidth);
		//  (2)判断当前是大屏幕还是小屏幕
		var isSmallScreen = viewWidth < 640;

		// (3)设置分支，小屏幕和大屏幕不同的代码
		if(isSmallScreen){
			// 小屏幕
			$("#main-ad .item").each(function(){
				//(1)获得小图片
				var string = $(this).data("image-xs");
				//(2)给.item增加图片
				$(this).html('<img src= "'+ string+'">');


			});



		}else{
			//大屏幕

			// 获得所有的item,并且给 每一个都增加函数内容
			$("#main-ad .item").each(function(){
				// (1)获得该item上的大图
				var string = $(this).data("image-lg");
				// "url( img/slide_01_2000x410.jpg )";
				string = "url(" + string + ")";
				// (2)设置成背景
				$(this).css("backgroundImage",string);

				// 删除img
				$(this).html("");


			});

		}

	}
	//调用函数
	my();

	// $().click(my);
	// $().click(function(){

	// });
	//当window改变大小的时候就出发my函数
	$(window).resize(my);


	


});