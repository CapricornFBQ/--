


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