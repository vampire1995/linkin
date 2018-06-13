<?php
header('content-type:text/html;charset="utf-8"');
	$conn=@mysql_connect('localhost','root','123456');
	if(!$conn){
		die('数据库连接有问题:'.mysql_error());
	}
	mysql_select_db('chrissy');
	mysql_query('SET NAMES UTF8');
	$query='select * from chester ';
	$result=mysql_query($query);
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result);
	}
	echo json_encode($arr);
?>