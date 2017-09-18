$(function() {
	//.box-->绝对定位， 相对于#waterfull  进行定位
	//规划好 每一列的宽度，左右间距， 每一个box的上下间距， 文字区域的高度        没法确定的是每一个图片的高度
	//没一个图片挨个放上去，放的时候！！！判断！！！最短的列， 每次放置完，可以继续判断
	

	//定义边距
	var WidthDistance = 15;
	var HeightDistance = 30;
	//列的宽度
	var lineWidth = 230;
	$(".box").width(lineWidth);
	//加载时调用
	waterFull();
	//窗口改变时在调用
	$(window).resize(function() {
		waterFull();
	})





	function waterFull() {
		//判断放置多少列
		var windowWidth = $(window).width();
		var lineNumber = Math.floor(windowWidth/(lineWidth+WidthDistance));


	    //设置最大容器的位置
		$("#waterfull").width(lineNumber*(lineWidth+WidthDistance)- WidthDistance);
		$("#waterfull").css("margin","50px auto");

		//顶一个数组，用于存储列的高度
		var boxList = [];
		//向#waterfull 里面放置.box
		$(".box").each(function(index) {
			console.log($(this).height())
			if(index < lineNumber) {
				//获取.box的left值
				var boxLeft = index * (lineWidth+WidthDistance) + "px";
				//设置.box的位置
				$(this).css({"top":"0px","left":boxLeft});
				//把信息存入数组中
				boxList[index] = $(this).height() + HeightDistance;
			}else{
				console.log(boxList)
				//获取所有列（数组）的最小值
				var minHeight = Math.min.apply(null,boxList);
				//定义一个变量存储最小的列数
				var positionNumber;
				for (var i in boxList){
					if(boxList[i] == minHeight) {
						positionNumber = i;
					}
				}
				//确定.box要放的位置
				$(this).css({"top":minHeight,"left":positionNumber*(lineWidth+WidthDistance)})//  没有加单位

				//把改变的信息存入数组
				boxList[positionNumber] = minHeight + $(this).height() + HeightDistance;
			}
		})
	}

})