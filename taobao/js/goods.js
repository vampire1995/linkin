define(['jquery'], function($) {
	return {
		//获取id值
		get_id: (function() {
			$(document).ready(function() {
				function GetQueryString(name) {
					var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
					var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
					var context = "";
					if(r != null)
						context = r[2];
					reg = null;
					r = null;
					return context == null || context == "" || context == "undefined" ? "" : context;
				}

				$("#p").text(GetQueryString("txt"))
			})
		})(),

		//取数据
		shuju_top: (function() {
			$.ajax({
				type: "get",
				url: "php/php.php",
				async: true,
				dataType: 'json'
			}).done(function(d) {
				var a = document.location.href;
				var test = a.indexOf("=");
				var changdu = a.length;
				var jieguo = a.substr(test + 1, changdu);
				console.log(jieguo); //	获取图片的id值

				for(var i = 0; i < d.length; i++) {
					var $html = '';
					var $d = " ";
					var $f=" ";
					var pic3 = document.getElementsByClassName('small')[0];
					var pic1 = document.getElementsByClassName('pp')[0];
//					console.log(d[i].sid == jieguo)
					if(d[i].sid == jieguo) {
						pic3.src = d[i].url;
						pic1.src = d[i].url;
						$html += '<h1 class="mh">' + d[i].title + '</h1>'
						$('.detailInfo_proName').append($html);

						$d += '<li class="number inte_check">' +
							'<span id="current_price">' + d[i].price + '</span>' +
							'</li>'
						$('.d_price ul').append($d);
						
						$f +='<a class="red_cart" id="'+jieguo+'" href="cart.html">'+"jiaaaa"
						+'</a>'
						$('.carting_right ').append($f);
					

					}
				}
			})
		})(),
		shuju_bot: (function() {
			$.ajax({
				type: "get",
				url: "php/php.php",
				async: true,
				dataType: 'json'
			}).done(function(d) {
				var $html = '';
				for(var i = 0; i <= 8; i++) {
					$html += '<li class="active3">' +
						'<img src="' + d[i].url + '"/>' +
						'</h1>'
				}
				$('#list ul').append($html);

			})
		})(),
		//放大镜
		magnify: (function() {
			var mouseX = 0; //鼠标移动的位置X
			var mouseY = 0; //鼠标移动的位置Y
			var maxLeft = 0; //最右边
			var maxTop = 0; //最下边
			var markLeft = 0; //放大镜移动的左部距离
			var markTop = 0; //放大镜移动的顶部距离
			var perX = 0; //移动的X百分比
			var perY = 0; //移动的Y百分比
			var bigLeft = 0; //大图要移动left的距离
			var bigTop = 0; //大图要移动top的距离
			//改变放大镜的位置
			function updataMark($mark) {
				//通过判断，让小框只能在小图区域中移动
				if(markLeft < 0) {
					markLeft = 0;
				} else if(markLeft > maxLeft) {
					markLeft = maxLeft;
				}
				if(markTop < 0) {
					markTop = 0;
				} else if(markTop > maxTop) {
					markTop = maxTop;
				}
				//获取放大镜的移动比例，即这个小框在区域中移动的比例
				perX = markLeft / $("#spic").outerWidth();
				perY = markTop / $("#spic").outerHeight();
				bigLeft = -perX * $("#bpic").outerWidth();
				bigTop = -perY * $("#bpic").outerHeight();
				//设定小框的位置
				$mark.css({
					"left": markLeft,
					"top": markTop,
					"display": "block"
				});
			}
			//改变大图的位置
			function updataBig() {

				$("#bpic").css({
					"display": "block",
					"left": bigLeft,
					"top": bigTop
				});
			}
			
			
	       
	        function text(){
	        	
	        }
	        
	
	
	
			//鼠标移出时
			function cancle() {
				$("#bf").css({
					"display": "none"
				});
				$("#sf").css({
					"display": "none"
				});
			}
			//鼠标小图上移动时
			function imgMouseMove(event) {
				var $this = $(this);
				var $mark = $(this).children("#sf");
				//鼠标在小图的位置
				mouseX = event.pageX - $this.offset().left - $mark.outerWidth() / 2;
				mouseY = event.pageY - $this.offset().top - $mark.outerHeight() / 2;
				//最大值
				maxLeft = $this.width() - $mark.outerWidth();
				maxTop = $this.height() - $mark.outerHeight();
				markLeft = mouseX;
				markTop = mouseY;
				updataMark($mark);
				updataBig();
				$("#bf").css({
					"display": "block"
				});
				
//				$(".active3").on("click",function(){
//	        	alert("lllllllll");
//	        	});
               $("ul li").find("img").on("click",function(){
          	 	//var $bigimg=$(this).html();//获取当前点击的li下面每张图片对应的src属性
    			var $bigimg=$(this)[0].src//
//  			var $smallimg=$("#spic")find("img")
                $("#spic").find("img")[0].src=$bigimg
			    $("#bpic")[0].src=$bigimg
			    console.log($("#spic").find("img")[0].src)
          	 	console.log($("#bpic")[0].src)   	 	
 })		
}
			$("#spic").bind("mousemove", imgMouseMove).bind("mouseleave", cancle);
		})(),
		//对应图片

		//放大镜轮播
		fdj_animate: (function() {
			/*步骤：
			 * 1.鼠标滑过，左右显示
			 * 2.点击滑动
			 * 3.判断
			 */
			var $oul = $('#list ul');
			var $pre = $('.qian');
			var $next = $('.hou');
			var $vol = $oul.position;

			$('#list ul li').mouseenter(function() {
				var $src = $(this).find('img').attr("src");
				$('.small').attr({
					src: $src
				});
				$('#bpic').attr({
					src: $src
				});

			})

			$next.click(function() {
				if($('#list ul').position().left <= -54) {

				} else {
					$oul.stop(true).animate({
						left: '-=54'
					});
				}
			})
			$pre.click(function() {
				if($('#list ul').position().left >= 0) {

				} else {
					$oul.stop(true).animate({
						left: '+=54'
					});
				}
			})
		})(),
	}
})