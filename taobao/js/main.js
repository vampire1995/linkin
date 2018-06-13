define(['jquery'], function($) {
	return {
		firstlun: (function() {
			//轮播图

			//第一个轮播图
			var $index = 0; //当前索引
			var $qindex = 0; //前一个索引
			var $btn = $('#toppart .btn span');
			var $img = $('#toppart .scroll img');

			$btn.on('click', function(ev) {
				$index = $(this).index();
				imgscroll(ev);
				$qindex = $index;
			});

			$('#toppart .banner').hover(function() {
				$('#toppart .prev').show();
				$('#toppart .next').show();
			}, function() {
				$('#toppart .prev').hide();
				$('#toppart .next').hide();
			})

			$('#toppart .next').on('click', function(ev) {
				$index++;
				if($index > 5) {
					$index = 0;
					$qindex = 5;
				}
				imgscroll(ev);
				$qindex = $index;
			});

			$('#toppart .prev').on('click', function(ev) {
				$index--;
				if($index < 0) {
					$index = 5;
					$qindex = 0;
				}
				imgscroll(ev);
				$qindex = $index;
			});

			function imgscroll(ev) {
				$btn.eq($index).addClass('hover').siblings('span').removeClass('hover');
				if($index == 0 && $qindex == 5) {
					if(ev.target.nodeName == 'A') {
						$img.eq($qindex).animate({
							left: -820
						});
						$img.eq($index).css('left', '820px').animate({
							left: 0
						})
					} else if(ev.target.nodeName == 'SPAN') {
						$img.eq($qindex).animate({
							left: 820
						});
						$img.eq($index).css('left', '-820px').animate({
							left: 0
						})
					}

				} else if($index == 5 && $qindex == 0) {
					if(ev.target.nodeName == 'A') {
						$img.eq($qindex).animate({
							left: 820
						});
						$img.eq($index).css('left', '-820px').animate({
							left: 0
						})
					} else if(ev.target.nodeName == 'SPAN') {
						$img.eq($qindex).animate({
							left: -820
						});
						$img.eq($index).css('left', '820px').animate({
							left: 0
						})
					}

				} else if($index > $qindex) {
					$img.eq($qindex).animate({
						left: -820
					});
					$img.eq($index).css('left', '820px').animate({
						left: 0
					})
				} else if($index < $qindex) {
					$img.eq($qindex).animate({
						left: 820
					});
					$img.eq($index).css('left', '-820px').animate({
						left: 0
					})
				}
			}

			var stop = setInterval(function() {
				$('#toppart .next').trigger('click')
			}, 5100)

		})(),
		secondlun:(function(){
			//第二个轮播图
function zrc() {
	var $index = 0; //当前索引
	var $qindex = 0; //前一个索引
	var $btn = $('#bottompart .btn span');
	var $img = $('#bottompart .scroll img');

	$btn.on('click', function(ev) {
		$index = $(this).index();
		imgscroll(ev);
		$qindex = $index;
	});

	$('#bottompart .banner').hover(function() {
		$('#bottompart .prev').show();
		$('#bottompart .next').show();
	}, function() {
		$('#bottompart .prev').hide();
		$('#bottompart .next').hide();
	})

	$('#bottompart .next').on('click', function(ev) {
		$index++;
		if($index > 5) {
			$index = 0;
			$qindex = 5;
		}
		imgscroll(ev);
		$qindex = $index;
	});

	$('#bottompart .prev').on('click', function(ev) {
		$index--;
		if($index < 0) {
			$index = 5;
			$qindex = 0;
		}
		imgscroll(ev);
		$qindex = $index;
	});

	function imgscroll(ev) {
		$btn.eq($index).addClass('hover').siblings('span').removeClass('hover');
		if($index == 0 && $qindex == 5) {
			if(ev.target.nodeName == 'A') {
				$img.eq($qindex).animate({
					left: -820
				});
				$img.eq($index).css('left', '820px').animate({
					left: 0
				})
			} else if(ev.target.nodeName == 'SPAN') {
				$img.eq($qindex).animate({
					left: 820
				});
				$img.eq($index).css('left', '-820px').animate({
					left: 0
				})
			}

		} else if($index == 5 && $qindex == 0) {
			if(ev.target.nodeName == 'A') {
				$img.eq($qindex).animate({
					left: 820
				});
				$img.eq($index).css('left', '-820px').animate({
					left: 0
				})
			} else if(ev.target.nodeName == 'SPAN') {
				$img.eq($qindex).animate({
					left: -820
				});
				$img.eq($index).css('left', '820px').animate({
					left: 0
				})
			}

		} else if($index > $qindex) {
			$img.eq($qindex).animate({
				left: -820
			});
			$img.eq($index).css('left', '820px').animate({
				left: 0
			})
		} else if($index < $qindex) {
			$img.eq($qindex).animate({
				left: 820
			});
			$img.eq($index).css('left', '-820px').animate({
				left: 0
			})
		}
	}

	var stop = setInterval(function() {
		$('#bottompart .next').trigger('click')
	}, 3600)
}
zrc()
		})(),
		
xiaoxiaoguo:(function(){
	//商品下拉列表
$(".list ul li").hover(function() {
		$(this).css({ 'background': '#ffe4dc', 'color': '#ff5000' })
		$(this).next().css({ 'display': 'block' })
	},
	function() {
		$(this).css({ 'background': 'white', 'color': '#666' })
		$(this).next().css({ 'display': 'none' })

	}
);

$(".list ul li").hover(function() {
		$(this).find('a').css({ 'color': '#ff5000' })
	},
	function() {
		$(this).find('a').css({ 'color': '#666' })
	}
);

//轮播图右侧的TAB切换
$(".tab .tabul li").hover(function() {
		var index = $(this).index();
		$(this).children().css({ 'border-bottom': '2px solid red', 'color': 'red', 'font-weight': 'bold', 'transition-delay': '0.15s' })
		$('.tab .content ul').eq(index).css({ 'display': 'block' }).siblings().css({ 'display': 'none' })

	},
	function() {
		var index = $(this).index();
		$(this).children().css({ 'border-bottom': '0px solid red', 'color': '#666', 'font-weight': 'normal', 'transition-delay': '0.15s' })
		$('.tab .content ul').eq(index).css({ 'display': 'none' }).next().css({ 'display': 'block' })

	}
);
//精灵图
$(".iconfont ul li").hover(function() {
		$(this).find('p').css({ 'color': 'red' })
	},
	function() {
		$(this).find('p').css({ 'color': '#333' })
	}
);
$(".iconfont ul .special").hover(function() {
		$(this).css({ 'border-bottom': '1px transparent solid' })
		$(this).find('.jlt').css({ 'display': 'block' })
		$(this).siblings().css({ 'border-bottom': '1px red solid' })
		$(this).css({ 'border-right': '1px red solid', 'border-left': '1px red solid', 'border-top': '1px red solid' })
	},
	function() {
		$(this).css({ 'border-bottom': '1px #f4f4f4 solid' })
		$(this).find('.jlt').css({ 'display': 'none' })
		$(this).siblings().css({ 'border-bottom': '1px #f4f4f4 solid' })
		$(this).css({ 'border-right': '1px #f4f4f4 solid', 'border-left': '1px #f4f4f4 solid', 'border-top': '1px #f4f4f4 solid' })
	}
);

//阿里APP
$(".app ul li").hover(function() {
		$(this).find('.sys').css({ 'display': 'block' })
	},
	function() {
		$(this).find('.sys').css({ 'display': 'none' })
	}
);
//生活研究所
$('.research-in li').hover(function() {
		$(this).find('.circle').css({ "border-color": "orange" });
		$(this).find('img').css({ "opacity": ".8" });
		$(this).find('h4').css({ "color": "red" })
	},
	function() {
		$(this).find('.circle').css({ "border-color": "#13d0a1" });
		$(this).find('img').css({ "opacity": "1" });
		$(this).find('h4').css({ "color": "#666" })
	}
)

//有好货

$("#gorgeous a").hover(function() {
		$(this).css({ 'color': 'red' })
	},
	function() {
		$(this).css({ 'color': '#333' })
	}
);

$('#gorgeous a img').hover(function() {
		$(this).animate({
			opacity: .75
		}, 200);
	},
	function() {
		$(this).animate({
			opacity: .95
		}, 200);
	}
)

//品质生活家
$('#quality .left-top').hover(function() {
		$(this).css({ "border": "1px red solid" })

	},
	function() {
		$(this).css({ "border": "1px lightgray solid", 'border-right-color': 'transparent' })
	}
)

$('#quality .left-bottom').hover(function() {
		$(this).css({ "border": "1px red solid" })
	},
	function() {
		$(this).css({ "border": "1px lightgray solid", 'border-right-color': 'transparent', 'border-bottom-color': 'transparent' })

	}
)
$('#quality .left-right-son').hover(function() {
		$(this).css({ "border": "1px red solid" })
	},
	function() {
		$(this).css({ "border": "1px lightgray solid", 'border-bottom-color': 'transparent', 'border-right-color': 'transparent' })

	}
)

//实惠专业户
$('#cheap li').hover(function() {
		$(this).css({ "border": "1px red solid" })

	},
	function() {
		$(this).css({ "border": "1px lightgray solid", 'border-right-color': 'transparent' })

	}
)
$('#cheap li h4 a').hover(function() {
		$(this).css({ "color": "red" })

	},
	function() {
		$(this).css({ "color": "#333" })
	}
)

//时尚爆料
$('#fanshion .part').hover(function() {
		$(this).css({ "border": "1px red solid" })

	},
	function() {
		$(this).css({ "border": "1px lightgray solid", 'border-right-color': 'transparent' })

	}
)
$('.fa-right').hover(function() {
		$(this).css({ "border": "1px red solid" })

	},
	function() {
		$(this).css({ "border": "1px lightgray solid", 'border-right-color': 'transparent' })

	}
)
$('#fanshion .part h4 a').hover(function() {
		$(this).css({ "color": "red" })

	},
	function() {
		$(this).css({ "color": "#333" })
	}
)

//每日好店
$('#everyday li').hover(function() {
		$(this).find('span').css({ "color": "red" })
	},
	function() {
		$(this).find('span').css({ "color": "#333" })
	}
)
$('#everyday li img').hover(function() {
		$(this).animate({
			opacity: .7
		}, 200);

	},
	function() {
		$(this).animate({
			opacity: 1
		}, 200);
	}
)

//淘抢购
$('#flashbuy li').hover(function() {
		$(this).find('h4').css({ "color": "red" })
	},
	function() {
		$(this).find('h4').css({ "color": "#333" })
	}
)
$('#flashbuy li img').hover(function() {
		$(this).animate({
			opacity: .7
		}, 200);

	},
	function() {
		$(this).animate({
			opacity: 1
		}, 200);
	}
)
})(),
gunaggao:(function(){
	//浮动搜索栏和在两侧浮动广告
$(window).scroll(function() {

	var top = $(window).scrollTop();
	if(top >= 380) {
		$('.xixi').css({ 'position': 'fixed', 'top': 0, 'z-index': 23, 'display': 'block' })
	} else {
		$('.xixi').css({ 'display': 'none' })
	}

	if(top > 800) {
		$('.hide-left').css({ 'display': 'block' })
		$('.hide-right').css({ 'display': 'block' })
	} else {
		$('.hide-left').css({ 'display': 'none' })
		$('.hide-right').css({ 'display': 'none' })
	}
})

})(),

luoti:(function(){
	$('#upstair .ub').hover(
	function() {
		$(this).css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
	},
	function() {
		$(this).css({ 'font-weight': '400', 'background': 'white', 'color': 'red' })
	}
);
$('#upstair .uc').hover(
	function() {
		$(this).css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
	},
	function() {
		$(this).css({ 'font-weight': '400', 'background': 'white', 'color': '#8d7afb' })
	}
);
$('#upstair .ud').hover(
	function() {
		$(this).css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
	},
	function() {
		$(this).css({ 'font-weight': '400', 'background': 'white', 'color': '#A8C001' })
	}
);
$('#upstair .ue').hover(
	function() {
		$(this).css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
	},
	function() {
		$(this).css({ 'font-weight': '400', 'background': 'white', 'color': 'orange' })
	}
);
$('#upstair .uf').hover(
	function() {
		$(this).css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
	},
	function() {
		$(this).css({ 'font-weight': '400', 'background': 'white', 'color': 'deepskyblue' })
	}
);
$('#upstair .ug').hover(
	function() {
		$(this).css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
	},
	function() {
		$(this).css({ 'font-weight': '400', 'background': 'white', 'color': 'gold' })
	}
);
$('#upstair .uh').hover(
	function() {
		$(this).css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
	},
	function() {
		$(this).css({ 'font-weight': '400', 'background': 'white', 'color': 'darkred' })
	}
);

$(window).scroll(function() {
	var top = $(window).scrollTop();
	if(top >= 380) {
		$('#upstair').css({ 'top': 67 })

	} else {
		$('#upstair').css({ 'top': 600 })
	}
})
//楼层和右侧导航条进行匹配
$(window).scroll(function() {
	var $scrolltop = $(window).scrollTop();
	if($scrolltop<=2200){
		$('.ua').css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
		$('.ub').css({ 'font-weight': '400', 'background': 'white','color':'red'})
	}else if($scrolltop >2200&&$scrolltop<=3150) {
		$('.ub').css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
		$('.ua').css({ 'font-weight': '400', 'background': 'white','color':'red'})
		$('.uc').css({ 'font-weight': '400', 'background': 'white','color':'#8d7afb'})
		$('.ud').css({ 'font-weight': '400', 'background': 'white','color':'#A8C001'})
		$('.ue').css({ 'font-weight': '400', 'background': 'white','color':'orange'})
	}else if ($scrolltop >= 3150&&$scrolltop<=3950) {
		$('.uc').css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
		$('.ub').css({ 'font-weight': '400', 'background': 'white', 'color': 'red' })
		$('.ud').css({ 'font-weight': '700', 'background': 'white', 'color': '#A8C001' })
		$('.ua').css({ 'font-weight': '400', 'background': 'white','color':'red'})
		$('.ue').css({ 'font-weight': '400', 'background': 'white','color':'orange'})
	}else if ($scrolltop >= 3950&&$scrolltop<=5120) {
		$('.ud').css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
		$('.uc').css({ 'font-weight': '400', 'background': 'white', 'color': '#8d7afb' })
		$('.ub').css({ 'font-weight': '400', 'background': 'white', 'color': 'red' })
		$('.ua').css({ 'font-weight': '400', 'background': 'white','color':'red'})
		$('.ue').css({ 'font-weight': '400', 'background': 'white','color':'orange'})
	}
	else if ($scrolltop >= 5120) {
		$('.ue').css({ 'font-weight': '700', 'background': 'linear-gradient(135deg,#ff971b,#ff5000)', 'color': 'white' })
		$('.uc').css({ 'font-weight': '400', 'background': 'white', 'color': '#8d7afb' })
		$('.ub').css({ 'font-weight': '400', 'background': 'white', 'color': 'red' })
		$('.ua').css({ 'font-weight': '400', 'background': 'white','color':'red'})
		$('.ud').css({ 'font-weight': '400', 'background': 'white','color':'#A8C001'})
	}
})
	$('#upstair .lt').on('click',function(){
			var index=$(this).index();
			var top=$('.mark').eq(index).offset().top
			$('html,body').animate({
				scrollTop:top
			},200);
		}); 
	$('#upstair .ug').on('click',function(){
		$('html,body').scrollTop(0)
	})
	

})(),
shuju:(function(){
	
$.ajax({
				type: "get",
				url: "http://localhost:8080/tb/php/php.php",
				async: true,
				dataType: 'json'
			}).done(function(d) {
				var $html='<ul>';
				for(var i=38;i<46;i++){
					$html+='<li id="' + d[i].sid + '" class="t">'+'<img src="'+d[i].url+'" />'
					+'<h3 class="grid-title">'+d[i].title+'</h3>'
					+'<p class="grid-price">'+d[i].price+'</p>'
					+'</li>'
					console.log('zrc')
				}
				$html+='</ul>'
				$('#hot').html($html);
				$('.t').on('click', function() {
//					alert(1)
					//	获取idalert($(this).attr("id"));
					var txt = $(this).attr("id")
					//console.log(txt);
					//console.log($(this).attr("id").val())
					location.href = "goods.html?id="+txt
				})
			})


$.ajax({
				type: "get",
				url: "http://localhost:8080/tb/php/php.php",
				async: true,
				dataType: 'json'
			}).done(function(d) {
				var $html='<ul>';
				for(var i=0;i<36;i++){
					$html+='<li>'+'<img src="'+d[i].url+'" />'
					+'<h3 class="grid-title">'+d[i].title+'</h3>'
					+'<p class="grid-price">'+d[i].price+'</p>'
					+'<div class="dd"><img src="img/dd.png"/><div/>'
					+'</li>'
				}
				$html+='</ul>'
				$('#like').html($html);
			})
	
	
	
$('#hot').on('mouseover','li',function () {
		$(this).css({'border':'1px red solid'})
})
$('#hot').on('mouseout','li',function () {
		$(this).css({'border':'1px transparent solid'})
})	
	
	
	
	
$('#like').on('mouseover','li',function () {
		$(this).css({'border':'1px red solid'})
		$(this).find('.dd').css({'display':'block'})		
})
$('#like').on('mouseout','li',function () {
		$(this).css({'border':'1px transparent solid'})
		$(this).find('.dd').css({'display':'none'})		
})


$('#head .mid .top span').not('span:first').hover(function  () {
	$(this).css({'background':'orange','opacity':'0.5'})
},function () {
	$(this).css({'background':'white','opacity':'1'})
}
)

$('#head .mid .bottom span a').hover(function  () {
	$(this).css({'color':'red'})
},function () {
	$(this).css({'color':'#666'})
}
)

$('#secondnav li').append('<div class="hat"></div>')
$('#secondnav li').hover(function () {
	$(this).find('.hat').show()
},function () {
	$(this).find('.hat').hide()
}
)
		

//头部导航条字体变色
$('#nav .left li').hover(function () {
	$(this).children().css({'color':'red'})
},function () {
	$(this).children().css({'color':'#666'})
})
$('#nav .left li:nth-of-type(2)').hover(function () {
	$(this).children().css({'color':'red'})
},function () {
	$(this).children().css({'color':'red'})
})


$('#nav .right li').hover(function () {
	$(this).children().css({'color':'red'})
	$(this).css({'background':'white'})
},function () {
	$(this).children().css({'color':'#666'})
	$(this).css({'background':'#f5f5f5'})
})

$('#nav .right li').hover(function () {
	$(this).find('img').show()
},function () {
		$(this).find('img').hide()
})
})(),
daojishi:(function(){
	//天数倒计时

var timedate = new Date("December 12,2017");
			var now = new Date();
			var date = timedate.getTime() - now.getTime();
			var time = Math.floor(date / (1000 * 60 * 60 * 24));
			if(time >= 0);
			

$('.timer-meter span').html('聚双12还有 '+'<b style="color:white;background:black; font-weight:bolder">'+time+'</b>'+' 天')
		    
})()
	}
})