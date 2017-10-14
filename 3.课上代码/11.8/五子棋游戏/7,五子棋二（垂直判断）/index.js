//--------垂直方向的判断，判断是否相连的同样颜色为5个

function chuizhi(x,y){

     //X,Y是外面传来的二位数组上的一个点arrays[x][y] 2,2

     //现在至少有一个子，而且位置为 [x][y]

     var count = 1;
     var value = arrays[x][y];//2 2  -----1
     var c =y;
     while(true){
          c--;
          //2 1----2
          if (arrays[x][c]!=value) {
               // break是结束循环，return是就结束函数
               break;
          }else{

               count++;
          }

     }
     c=y;
     while(true){
          c++;
          if (arrays[x][c]!=value) {
               
                break;
          }else{

               count++;
          }


     }



     return count;




}

//---------坐标系统的建立：二维数组------------------------
//1.创建一个数组
     var arrays =[];

      for (var i =0;i<15;i++) {
          //每次循环都创建一个新的一位数组
          var array =[];
          for (var j=0;j<15;j++) {
               array[j]=0;
          }
          arrays.push(array);


     }








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

//---------------------------------------------------------------------------------
     //dx\dy都是44的倍数，都代表了img的实际位置，将他们和数组对应起来
     // x   0 44  88    132    176    220
     //数组 0 1  2     3       4      5

     // y   0 44  88   132     176    220
     //     0 1   2    3       4      5

     if (arrays[dx/44][dy/44]) {


          alert("请勿重复落子");
          return;






     }else{

          //如果是第一次落子  存的是默认0
          //1.判断这次落子的颜色，获得提示的颜色
       
          var qizi_photo =  document.querySelector(".qizi-photo");
          var yanse =  qizi_photo.getAttribute("src");
          // 若果这次下的颜色为黑色
          if (yanse == "images/q.png") {
               //1代表黑棋
               arrays[dx/44][dy/44] = 1;
          }else{
               //2代表白起
                arrays[dx/44][dy/44] = 2;
          }




     }

//-------------------------------------------------------------------------------




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


      //要判断输赢
     //只做垂直方向的判断
     var count1 = chuizhi(dx/44,dy/44);

     if(count1 >=5){
           if(arrays[dx/44][dy/44] == 1){
               alert("黑棋赢");
           }else{
               alert("白棋赢");
           }



     }




 }
