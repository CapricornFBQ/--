

  //1.获得所有的li标签，给这些标签设置onmouseover
  var tabs = document.querySelectorAll(".li1");
  //for循环设置onmouseover
  for(var i =0;i<tabs.length;i++){

  		tabs[i].onmouseover =function(){
			//设置所有的标签的类为空
			var arrays = this.parentNode.childNodes;
			for(var j =0;j<arrays.length;j++){
				arrays[j].className ="li1";
			}

			//给当前标签设置selected
			this.className = "selected li1";


  		}
  }
