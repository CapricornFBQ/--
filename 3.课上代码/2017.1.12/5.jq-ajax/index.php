<?php
	
	header("Content-type:text/html;charset=utf-8");
	echo "发送的请求已经收到";

	// if($_GET['name']=='kuohao'){
	// 	echo "kuohao";
	// }

	if ($_POST['age']==21) {
		echo "21";
	}
?>