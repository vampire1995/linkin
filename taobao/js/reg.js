define(['jquery'], function($) {
	return {
		//点击出现提示信息
		register: (function() {
			$('#username').on('focus', function() {
				$('.a1').fadeIn();
				$(this).next('span').animate({
					left: '-70px'
				}, "slow");
			});
			$('#phone').on('focus', function() {
				$('.a2').fadeIn();
				$(this).next('span').animate({
					left: '-70px'
				}, "slow");
			});
			$('#email').on('focus', function() {
				$('.a3').fadeIn();
				$(this).next('span').animate({
					left: '-70px'
				}, "slow");
			});
			$('#password').on('focus', function() {
				$('.a4').fadeIn();
				$(this).next('span').animate({
					left: '-70px'
				}, "slow");
			});
			$('#repassword').on('focus', function() {
				$('.a5').fadeIn();
				$(this).next('span').animate({
					left: '-70px'
				}, "slow");
			});

		})(),
		//失去焦点，出现提示信息
		//表单验证
		bdyz: (function() {
			var bstop = true;
			var usereg = /^([\u4e00-\u9fa5]|[a-zA-Z0-9\_\-]){4,20}$/;
			$('#username').blur(function() {
				var username = $(this).val();
				if($(this).val() !== '') {
					if(usereg.test($(this).val())) {
						$.ajax({
							type: 'post',
							url: 'http://localhost/one%20shop/php/reg.php?__hbt=1512901219206',
							data: {
								names: username
							},
							success: function(data) {
								if(data) {
									$('.a1').css('background', 'pink').html('用户名已存在');
									bstop = true;
								} else {
									$('.a1').css('background', 'greenyellow').html('填写成功√');
									bstop = false;
								}
							}
						})
					} else {
						$('.a1').css('background', 'pink').html('请输入正确的用户名,用户名应为4-20位字符');
						bstop = true;
					}
				} else {
					//alert(1)
					$('.a1').css('background', 'pink').html('请输入正确的用户名,用户名应为4-20位字符');
					bstop = true;
				}
			});
			var emailreg = /^([\w][\w\-]+)@([\w][\w\-]+)\.([\w][\w\-]+)$/;
			$('#email').blur(function() {
				if($(this).val() !== '') {
					if(emailreg.test($(this).val())) {
						$('.a3').css('background', 'greenyellow').html('填写成功√');
						bstop = false;
					} else {
						$('.a3').css('background', 'pink').html('格式不正确');
						bstop = true;
					}
				} else {
					$('.a3').css('background', 'pink').html('亲，邮件不能为空哦~');
					bstop = true;
				}
			});
			var passwordreg = /^[a-zA-Z\d\_\-]{6,20}$/;
			$('#password').blur(function() {
				var password = $(this).val();
				if($(this).val() !== '') {
					if(passwordreg.test($(this).val())) {
						$('.a4').css('background', 'greenyellow').html('填写成功√');
						bstop = false;
					} else {
						$('.a4').css('background', 'pink').html('6到20个大小写英文字母，符号或数字组合');
						bstop = true;
					}
				} else {
					$('.a4').css('background', 'pink').html('亲，密码不能为空哦~');
					bstop = true;
				}
			});
			$('#repassword').blur(function() {
				if($(this).val() != '') {
					if($(this).val() == $('#password').val()) {
						$('.a5').css('background', 'greenyellow').html('填写成功√');
						bstop = false;
					} else {
						$('.a5').css('background', 'pink').html('两次输入不一致');
						bstop = true;
					}
				} else {
					$('.a5').css('background', 'pink').html('亲，再次输入密码不能为空哦~');
					bstop = true;
				}
			});
			$('#form').submit(function() {
				if($('#username').val() != '') {
					$('.a1').css('background', 'pink').html('请输入正确的用户名,用户名应为4-20位字符');
				}
				if(bstop) {
					return false;
				}
			})

		})(),
		
		
		//cookie
		cookie: (function() {
			//添加cookie
			function setcookie(key, value, day) {
				var date = new Date();
				date.setDate(date.getDate() + day); //设置过期时间
				document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
			};
			//获取cookie
			function getcookie(key) {
				var arr = decodeURI(document.cookie).split('; '); //编码后拆分成数组
				for(var i = 0; i < arr.length; i++) {
					var newarr = arr[i].split('='); //对数组的每一项再次拆分
					if(newarr[0] == key) { //比较key值
						return newarr[1]; //输出key对应的value
					}
				}
			};
			//删除cookie
			function delcookie(key) {
				setcookie(key, 'value', -1); //-1:代表过去时间
			};
		})(),
		//login登录	
		login:(function(){
			function setcookie(key, value, day) {
				var date = new Date();
				date.setDate(date.getDate() + day); //设置过期时间
				document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
			};
			
			$('#login_button').click(function(){
					var name=$('.login_username').val();
					var pass=$('.login_password').val();//写在里面
					
					
					$.ajax({
					type:"post",
					url:"http://localhost/taobao/php/reg.php?__hbt=1513237016946",
					data:{
						name:name,
						pass:pass
					}
					}).done(function(data){
						if(!data){//用户名或者密码错误
							
							$('.error_tips').css({
								"display":"block"
							});
//							$('.login_password').val()='';
						}else{
							location.href='../html/index.html';
							setcookie('guest',$('.login_username').val(),7)
						}
					})
			})
		}
		)(),
		changevalue:(function(){
			function getcookie(key) {
				var arr = decodeURI(document.cookie).split('; '); //编码后拆分成数组
				for(var i = 0; i < arr.length; i++) {
					var newarr = arr[i].split('='); //对数组的每一项再次拆分
					if(newarr[0] == key) { //比较key值
						return newarr[1]; //输出key对应的value
					}
				}
			};
			if(getcookie('guest')){
				
				$('.hd_login_link').html(getcookie('guest'))
			}
		})(),
}});