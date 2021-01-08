<?php

 // 处理中文乱码问题
 include "./base.php";
    
 // 接收到前端传递来的用户名和密码
 $username = $_POST['username'];
 $password = $_POST['pw'];

 // 1 连接数据库
 $conn = mysqli_connect('127.0.0.1','root','root','uuser');
 // 2 执行sql语句
 $sql = "SELECT * FROM `info` WHERE `username`='$username' AND `password`='$pw'";
 $res = mysqli_query($conn,$sql);// $res:sql语句出现错误，才是false
 
 // 3 解析查询结果
 $data = mysqli_fetch_all($res);
 if($data){
     // echo "登录成功";
     // 直接返回数据给前端
     $arr = array('code'=>1);
     echo json_encode($arr);
     setcookie('un',$un,time()+60*60);
     // 跳转页面——页面重定向
     header('location:../pages/index.html');

 }else{
     // echo "登录失败";
     // 直接返回数据给前端
     $arr = array('code'=>0);
     echo json_encode($arr);

     // 跳转页面——页面重定向
     header('location:../pages/login.html');
 }
 // 4 断开连接
 mysqli_close($conn);
?>