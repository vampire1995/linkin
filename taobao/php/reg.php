<?php
	header('content-type:text/html;charset="utf-8"');
	$conn=@mysql_connect('localhost','root','123456');
	if(!$conn){
		die('数据库连接有问题:'.mysql_error());
	}
	mysql_select_db('chrissy');
	mysql_query('SET NAMES UTF8');
	
	if(isset($_POST['names'])||isset($_POST['submit'])){//判断用户名是否存在
		$name=@$_POST['names'];
	}else{
		exit('非法登录');
	}
	
	$query="select * from chester where user='$name'";
	$result=mysql_query($query);//执行
	if(mysql_fetch_array($result)){
		echo true;//返回1
	}else{
		echo false;//啥也没有
	}
	
	if(isset($_POST['submit'])&&$_POST['submit']=='同意协议并注册'){
		echo '11';
		$name=$_POST['username'];//表单的名称
		$password=md5($_POST['password']);
		echo $name;
//		$query="insert login (values(null,,'$phone',)");
		$query="insert login(user,pass) values('$name','$password')";
		mysql_query($query);
		header('location:../main.html');
	}
	
	
?>