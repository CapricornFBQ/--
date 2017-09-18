

	//-----------------------------------------------------------
	
		
		 //1.找到要改变的对象
		 var father =document.querySelector(".father");
		 //2.找到span标签设置颜色修改
		 var spanArrays = document.getElementsByTagName("span");
		 //3.使用for循环
		 for(var i =0;i<spanArrays.length;i++){
		 	
			spanArrays[i].onclick =function(){
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
				
			}

		}

	

		// （1）封装了一个selected类
		// （2）当点击标签的时候，首先把所有的兄弟节点都取消selected类
		// （3）再给被点击的标签设置selected