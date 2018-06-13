<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/6
 * Time: 15:18
 */
//跨域处理
//header("Access-Control-Allow-Origin:*");
//if($_SERVER["REQUEST_METHOD"]=="POST"){
//  $uname=$_REQUEST["username"];
//  $upwd=$_REQUEST["password"];
//}
//
////连接数据库
//$serverName="127.0.0.1";
//$dbuser="root";
//$dbpwd="123456";
//$dbName="1706";
////创建连接数据库对象
//$conn=new mysqli($serverName,$dbuser,$dbpwd,$dbName);
////mysqli_query($conn,'set names utf8');//给的$conn的字符串设置字符集
////检测连接数据库是否成功
//if($conn->connect_error){
//  $arr=array();
//  $arr["status"]=0;
//  $arr["msg"]="数据库连接失败";
//  print_r(json_encode($arr));
//}
//
//
////连接成功的话：执行sql语句
//$sql="SELECT * FROM login WHERE username='".$uname."' AND upwd='".$upwd."'";
//$result=$conn->query($sql); // 返回一个对象集合
////print_r(($result));   //'{uname:"123"}[{}]'
//if($result->num_rows>=1){
//  $arr=array("status"=>"1","msg"=>"登录成功");
//
////    $arr["status"]=1;
////    $arr["msg"]="登录成功";
//  print_r(json_encode($arr));
//}else{
//  $arr=array("status"=>"0","msg"=>"登录失败");
////    $arr["status"]=0;
////    $arr["msg"]="登录失败,用户名或密码错误";
//  print_r(json_encode($arr));
//}
//?>
<?php

header('Access-Control-Allow-Origin: *');//跨域

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_REQUEST["user"];
    $upwd = $_REQUEST["pass"];
//1.连接数据量 ,ip地址、用户名 、密码、 库名称
    $serverName = '127.0.0.1';// 数据库的名称 ip地址
    $dbUser = 'root';//用户名
    $dbPwd = '123456';//密码
    $dbName = 'chrissy';//库名称

    $conn = new mysqli($serverName, $dbUser, $dbPwd, $dbName); //创建连接对象
//mysqli_query($conn, "set names utf8");//给的$conn的字符串设置字符集
// -> 相当于 js的 .  点属性
    if($conn->connect_error){
        $arr = array();
        $arr["status"] = 0;
        $arr["msg"] = "连接数据库失败";
        print_r(json_encode($arr));//就以json的方式告诉客户端（前端）
    }
//执行sql语句
    $sql = "select * from login where user='$username' and pass='$upwd'";  //  WHERE username='".$uname."' AND upwd='".$upwd."'
    $result = $conn->query($sql);//返回一个对象 query 查询
	if(mysqli_fetch_array($result)){
		echo 'true';
	}else{
		echo 'false';
	}

    $conn->close();
}