/**
 * Created by bever on 2016/11/22.
 */
$(document).ready(function () {
   var index = 0;
    var timer;
   function sliderTimer() {
      timer  = setInterval(function () {
           if (index<6)
           {
               // $(".quan li").eq(index).addClass("backgroundcolor-red").siblings().removeClass("backgroundcolor-red");
               // $(".lunbotu").eq(index).show().siblings().hide();
               sliderIndex(index);
               index++;
           }
           else {
               index = 0;
           }
       },1000);
   }
   //函数需要调用才执行
   sliderTimer();


    $(".quan li").mouseenter(function () {
        //清除定时器
        clearInterval(timer);
        //获取当前被触摸的点的下标
        index = $(this).index();
        //将当前被触摸的点修改样式属性
        $(this).addClass("backgroundcolor-red").siblings().removeClass("backgroundcolor-red");
        //将被触摸点对应下标的图片显示
        $(".lunbotu").eq(index).show().siblings().hide();
    });
    //鼠标离开事件，将定时器重新启动
    $(".quan li").mouseleave(function () {
       sliderTimer();
    });
    $(".lunbotu").mouseenter(function () {
        clearInterval(timer);
    });
    $(".lunbotu").mouseleave(function () {
        sliderTimer();
    });
    //给轮播图上的按钮添加点击方法
    $(".btnleft").click(function () {
        clearInterval(timer);
        //跳到上一个
        if (index>0)
        {
            index--;
            sliderIndex(index);
        }
        else {
            index = 5;
            sliderIndex(index);
        }
    });
    $(".btnright").click(function () {
        clearInterval(timer);
        //跳到下一个
        if (index<5)
        {
            index++;
            sliderIndex(index);
        }
        else {
            index=0;
            sliderIndex(index);
        }
    });
    $(".btnleft").mouseenter(function () {
        clearInterval(timer);
    });
    $(".btnleft").mouseleave(function () {
        sliderTimer();
    });
    $(".btnright").mouseenter(function () {
        clearInterval(timer);
    });
    $(".btnright").mouseleave(function () {
        sliderTimer();
    });
    function sliderIndex(index) {
        $(".quan li").eq(index).addClass("backgroundcolor-red").siblings().removeClass("backgroundcolor-red");
        $(".lunbotu").eq(index).show().siblings().hide();
    }
})