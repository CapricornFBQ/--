<?php

	// 这句话要加，保持编码不会乱
	// 本函数用来测试变量是否已经配置。若变量已存在、非空字符串或者非零，则返回 false 值；反之返回 true。
	 header("Content-type:text/html;charset=utf-8");


	 echo "你的信息我们已经收到了";

	 if ($_SERVER['REQUEST_METHOD']=="POST") {
	 	if ($_POST['name']=='weiwei') {
	 		echo "欢迎魏伟";
	 	}
	 }



?>