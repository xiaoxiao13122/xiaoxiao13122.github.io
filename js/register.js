/*
	 要求：
	 	1 在输入用户名的过程中,实时监测你的用户名是否符合条件
		2 在输入密码的的过程中,实时监测你的密码是否符合条件
		3 当表单提交的时候,再次监测你的用户和密码是否符合条件,如果符合条件,就跳转页面,如果不符合,不能跳转页面
	 */
	var mima = null;
	var zhangqi = null;
    var  spanArr = document.getElementsByTagName('span');
	//1 书写监测用户名的函数
	function checkUsername(){
		//测试用户名的正则
		var reg = /^\w{6,13}$/;
		//获取的输入的用户名
		var username = document.querySelector('#username').value;
		if(reg.test(username)){
			//如果输入的用户名符合正则,正确
			spanArr[0].innerHTML = "用户名可以使用";
			return true;
		}else{
			//如果输入的用户名不符合正则,错误
			spanArr[0].innerHTML = '用户名必须是6-13位的字母数字或者下划线';
			return false;
		}
	}

	//2 书写监测密码的函数
	// 	//测试密码的正则
        var reg = /^[\w~!@#]{8,16}$/;
    //获取输入的密码
	
	//2 书写监测密码强度的函数
	function checkPassword(){
		/* 
			定义一个高强度密码的标准
				1 8到12位:/^[\w~!@#$%^&*]{8,12}$/
				2 有数字
				3 有大写字母
				4 有小写字母
				5 有特殊符号
			定义一个低强度密码的标准
				密码必须是8-12的字母,数字或者特殊符号:/^[\w~!@#$%^&*]{8,12}$/
		*/
		//获取输入的密码
		var password = document.querySelector('#password').value;
		//监测密码
		if(/^[\w~!@#]{8,16}$/.test(password)&&/\d+/.test(password)&&/[A-Z]+/.test(password)&&/[a-z]+/.test(password)&&/[~!@#]+/.test(password)){
			spanArr[1].innerHTML = "密码强度高";
			return true
		}
		if(/^[\w~!@#]{8,16}$/.test(password)){
			spanArr[1].innerHTML = "密码强度低";
			return true
		}else{
			spanArr[1].innerHTML = '密码必须是8-16的字母,数字或者特殊符号';
			return false;
		}		

	}
//监测账号

$('.un').on('input', function () {
	if (reg.test($('.un').val())) {
		$('.hint').html('用户名合格')
		$('.hint').removeClass('red').addClass('green')
		zhangqi = true;
	} else {
		$('.hint').html('用户名必须字母或数字开头且长度为6-11位字母数字下划线')
		$('.hint').removeClass('green').addClass('red')
		zhangqi = false;
	}
})

$('.btn-lj').click(function () {
	if (mima && zhangqi) {
		$.ajax({
			url: '../api/register.json',
			dataType: 'json',
			success: function (res) {
				if (res.code == 1) {
					if (!localStorage.getItem($('.un').val())) {
						localStorage.setItem($('.un').val(), $('.pw').val());
						alert('注册成功!');
						location.href = './login.html';
					} else {
						$('.hint').html('用户名已存在！')
						$('.hint').removeClass('green').addClass('red')
					}
				} else {
					$('.hint').html('未知错误')
					$('.hint').removeClass('green').addClass('red')
				}
			}
		})
	} else {
		// $('.hint').html('用户名必须字母开头且长度为6-10位字母数字下划线')
		// $('.hint1').html('密码必须是8-12的字母,数字或者特殊符号');
		return;
	}

})
	 

	 
