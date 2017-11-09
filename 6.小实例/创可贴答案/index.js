$(function() {
	//定义边距
	var distance = 20;
	//定义图片宽度
	var imgWidth = 200;
	//定义文字区高度
	var textHeight = 80;
	$("img").width(180);
	//定义列宽
	var lineWidth = distance + imgWidth;
	//设置列宽
	$(".box").width(lineWidth);

	//调用函数
	waterFull();
	//当窗口改变大小时，重新调用函数
	$(window).resize(function() {
		waterFull();
	})

	//封装为一个函数
	function waterFull() {
		//获取窗口宽度
		var windowWidth = $(window).width();
		//获取页面中图片列数
		var lineNumber = Math.floor(windowWidth/lineWidth);
		//获取图片容器的整体宽度  去掉一个多余的distance
		var waterfullWidth = lineWidth*lineNumber - distance;
		//获取waterfull容器左侧的大小
		var waterfullLeft = (windowWidth-waterfullWidth)/2 + "px";
		//设置容器的位置（居中）
		$("#waterfull").css("left",waterfullLeft)
		//设置图片下面介绍文字的高度
		$(".template_content_text").height(textHeight);
		//设置图片下面介绍文字的宽度
		$(".template_content_text").width(imgWidth);



		//定义一个数组，用以存储该box的高度
		var boxList = [];
		//获取所有的box，然后进行遍历处理，每一个挨个处理
		$(".box").each(function(index) {
			//获取这个元素
			var boxObj = $(this);
			// //获取这个box在所有的box中的数值
			// var index = boxObj.index();
			// console.log(index);
			//获取这个box中图片的高度
			var imgHeight = boxObj.find("img").height();
			//获取该box的整体高度
			var boxHeight = imgHeight + textHeight + distance;
			//判断是否为第一行
			if(index < lineNumber) {  
				//获取该box用于定位的left值
				var boxLeft = lineWidth*index
				//对第一行的box进行定位
				boxObj.css({"top":0,"left":boxLeft})
				//把信息存入数组
				boxList[index] = boxHeight;
			}else {
				//获取数组中的最小值
				var minHeight = Math.min.apply(null, boxList);
				//获取最小值对应的索引值
				var positionNumber;
				for(var i in boxList) {
					if (boxList[i] == minHeight) {
						positionNumber = i;
					}
				}
				//设置该遍历对象的位置
				boxObj.css({"top":minHeight,"left":positionNumber*lineWidth});
				//把先添加的元素添加到数组中
				boxList[positionNumber] =  minHeight + boxHeight;
			}
		})
	












	}
})