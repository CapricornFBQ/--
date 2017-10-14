	function lubo(){



    	//大概的想法
    	//每3秒找到当前设置selected的span对象，然后设置所有的span标签class为空，
    	//设置下一个标签兄弟的class 为selected.
    	//然后设置相应的背景颜色

    	// （1）获得当前selected对象
    	var selected = document.querySelector(".selected");
    	// console.log(selected);
    	//(2）所有的span标签都设置为class =""
    	var childArray =selected.parentNode.childNodes;
    	for(var i =0 ;i<childArray.length;i++){

    		childArray[i].className = "";
    	}

    	//(3)给他的下一个标签兄弟节点设置class
    	// selected.nextElementSibling.className = "selected";

    	if (selected.nextElementSibling) {
    		selected.nextElementSibling.className = "selected";

    		//设置背景颜色，得到下一个标签的attr
    		father.style.background = selected.nextElementSibling.getAttribute("myAttr");



    	}else{

    		selected.parentNode.firstElementChild.className = "selected";
    		
    		father.style.background = selected.parentNode.firstElementChild.getAttribute("myAttr");

    	}




}

	//-------------------------------------------------------------
		 //1.找到要改变的对象
		 var father =document.querySelector(".father");
		 //2.找到span标签设置颜色修改
		 var spanArrays = document.getElementsByTagName("span");
		 //3.使用for循环
		 for(var i =0;i<spanArrays.length;i++){
		 	
			spanArrays[i].onclick =function(){
				// //-------------在这里把定时器关上------------------
				// clearInterval(timer);

				//设置颜色
				father.style.background = this.getAttribute("myAttr");

			
				//2.吧其他的span标签变成黑的，把别人的selected类给删除

				var array = this.parentNode.childNodes;
				// console.log(array);
				for(var i=0;i<array.length;i++){
					array[i].className = "";

				}

				//1.把自己设置成黑色
				this.className = "selected";
				

				// //重新开启定时器
				// timer = setInterval(lubo,3000);

			}

		}

//---------------实现自动轮播----------------------------------

//1.设置一个定时器   
    var timer = setInterval(lubo,3000);
		
