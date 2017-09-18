// 首先获得所有的a标签，给他们设置onmouseover-设置selected
//(1)获得所有的div标签
 
 var array = document.getElementsByClassName('buttons')[0].children;
 console.log(array);
 for (var i = 0; i < array.length; i++) {


 	array[i].onmouseover = function (argument) {

		//(2)将所有的div还原
		for (var j = 0; j < array.length; j++) {
			array[j].className = "";
		}

 		
 		// (1)让该按钮获得.selected
 		this.className = "selected";


 		// (3)改变所对应的panel
 		var index = this.getAttribute("number");

 		var panel = document.getElementsByClassName("panel");

 		for (var k = 0; k < panel.length; k++) {
 			panel[k].className = "panel";
 		}



 		panel[index].className = "panel show";
 	






 	}
}

