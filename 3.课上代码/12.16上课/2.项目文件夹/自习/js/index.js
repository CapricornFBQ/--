
$(function () {

	function resize(){
		// (1)我们可以获得当前屏幕的大小
		var viewWidth = $("body").width();

		// (2)如果是 屏幕是超过ls的话使用的是大图，给div设置成date-image-lg
		var isSmallScreen = viewWidth< 768;
		// console.log(isSmallScreen);

		
		if (isSmallScreen) {

			
			// ---------------------------新增加的东西------------------
			// （1）如果是小窗口的话，那么增加一个img标签
			// 获得要操作的对象
			$("#main-ad > .carousel-inner >.item").each(function(){

			var string =$(this).data("image-xs");
			
			// 为什么找不到??????????
			$(this).html('<img src = "' + string+'">');
			



			
			// （2） 然后这个时候就要去CSS中设置，当768以下的时候，img的宽度为100%，因为本来就比
			// 父标签小，然后高度取消
			
			// (3)设置当大屏幕的时候html为空
			});

		}else{

			$("#main-ad > .carousel-inner >.item").each(function(){


							var string =$(this).data("image-lg");

							string = "url('" + string+"')";
							$(this).css("backgroundImage",string);
							$(this).html("");

			});

		}

		
	
	}

	resize();
	// 当窗口变化的时候触发
	$(window).on('resize',resize);


})