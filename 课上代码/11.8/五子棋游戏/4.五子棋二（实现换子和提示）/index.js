
//-------调整坐标出现的函数----------

//当点击一个小的div的，左边让img出现在该标签中，点击右半部分，出现在下一个div中

function getPods(pos){
     //每个格子=44 每张图片=44
     var x = pos%44;
     if(x<22){
          return pos-x;

     }else{
          return pos-x+44;
     }


}




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

     //将div区域化成四个部分考虑，我们先考虑横向的问题
     dx = getPods(dx);
     dy = getPods(dy);





     //创建棋子，棋子应该在wrapper上是一个绝对定位
     //（1）创建棋子
     var qizi = document.createElement("img");
     //（2）设置棋子的位置
     qizi.style.left = (dx-22) +"px";
     qizi.style.top = (dy-22)+"px";
     //(3)设置棋子的图片
     // qizi.setAttribute("src","images/q.png");


     //---这是本节课添加的新东西（2）--------------
     //------------------更改提示棋子----------------------
     //1.找到要更改的棋子
     var qizi_photo =  document.querySelector(".qizi-photo");

     //2.如何获得现在图片的信息呢
     var yanse =  qizi_photo.getAttribute("src");
     // alert(yanse);

     if (yanse == "images/q.png") {
          qizi.src = "images/q.png";
          qizi_photo.src = "images/w.png";
     }else{
          qizi.src ="images/w.png";
          qizi_photo.src ="images/q.png";
     }



     //把棋子放到棋盘上
     wrapper.appendChild(qizi);






 }
