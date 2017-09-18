
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
			
			}

		}


