


//-------------------创建一个棋盘-----------------------
//1.获得wrapper
   var wrapper =  document.querySelector(".wrapper");
//2.往棋盘中循环创建div标签，设置成.gezi
	for(var i =0 ;i< 196;i++){

		//创建新的div标签
		var newDiv = document.createElement("div");
		//设置属性
		// newDiv.setAttribute("class","gezi");
		newDiv.className = "gezi";
		newDiv.style.background ="orange";

		//往父标签上增加
		wrapper.appendChild(newDiv);

	}


//------------落子--------------------------------------------
//点击屏幕，让图片落到我们想要的位置上去
//1.计算点击事件的点在wrapper上的位置坐标
	//点击wrapper，给函数传一个参数event进去，evnet包含点击的点相对于页面的位置
 wrapper.onclick = function(event){
 
 	//1.获得wrapper相对于页面的位置 offset指的是标签相对于page的偏移量
     var wrapperOffsetLeft =  wrapper.offsetLeft;
     // console.log(wrapperOffsetLeft);
     var wrapperOffsetTop =  wrapper.offsetTop;
     // console.log(wrapperOffsetTop);

     //2.点击事件相对于page的距离
     var eventOffsetLeft = event.pageX;
     // console.log(eventOffsetLeft);
     var eventOffsetTop = event.pageY;
     // console.log(eventOffsetTop);

     //3.让点击事件相对于page的距离-wrapper相对于page的距离 == 点在wrapper的实际距离
     var dx = eventOffsetLeft - wrapperOffsetLeft;
     var dy = eventOffsetTop - wrapperOffsetTop;

     //创建棋子，棋子应该在wrapper上是一个绝对定位
     //（1）创建棋子
     var qizi = document.createElement("img");
     //（2）设置棋子的位置
     qizi.style.left = dx +"px";
     qizi.style.top = dy+"px";
     //(3)设置棋子的图片
     qizi.setAttribute("src","images/q.png");


     //把棋子放到棋盘上
     wrapper.appendChild(qizi);


 }
