<?php

	// 保证编码格式不会乱
	header("Content-type:text/html;charset=utf-8");

	echo "你的数据我已经收到了";
	
	if ($_SERVER['REQUEST_METHOD']=='GET') {
		if ($_GET['name']=="weiwei") {
			echo "你请求的是weiwei的数据";
		}

	}

	if($_SERVER['REQUEST_METHOD']=='POST'){
		if($_POST['city']=='qingdao'){
			echo "青岛天气良好";
		}
	}


?>