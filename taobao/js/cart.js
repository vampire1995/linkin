define(["jquery","cookie"],function(){
	xiaoguo:(function(){
    //页面加载检测购物车中是否有数据，有的话创建商品列表
    if (getCookie('cartsid') && getCookie('cartnum')) {
        var s = getCookie('cartsid').split(',');
        var n = getCookie('cartnum').split(',');
        for (var i = 0; i < s.length; i++) {
            createcart(s[i], n[i]);//创建商品列表
        }
    }
//2.判断是否创建商品列表或者数量累加
var sidarr = [];
var numarr = [];

function cookieToArray() {//获取cookie转换成数组
    if (getCookie('cartsid')) {
        sidarr = getCookie('cartsid').split(','); //将cookie值通过逗号拆分为数组。
    } else {
        sidarr = [];//没有cookie就是空数组
    }

    if (getCookie('cartnum')) { //存放数量
        numarr = getCookie('cartnum').split(',');
    } else {
        numarr = [];
    }
}

//详情页面委托原理获取商品列表的添加购物车按钮
$('.carting_right').on('click', function() {
	console.log($('.compute_left input').val())
    var sid = $('.red_cart').attr('id');
    cookieToArray();
    if ($.inArray(sid, sidarr) != -1) { //确定第一个参数在数组中的位置，从0开始计数(如果没有找到则返回 -1 )
        $('.goods-item:visible').each(function() {//遍历可视的商品列表
            if (sid ==  $('.red_cart').attr('id')) {//添加购物车按钮的索引和购物车中商品列表的索引一致
                var $num = $('.compute_left input').val();//获取数量
                $num++;//数量累加
                $(this).find('.compute_left input').val($num);//数量赋值
                numarr[$.inArray(sid, sidarr)] = $num;//将数量存储到对应的cookie存放数量的数组中
                addCookie('cartnum', numarr.toString(), 7);//添加购物车
            }
        });
    } else {//当前商品列表没有进入购物车，创建商品列表
        sidarr.push(sid);
        addCookie('cartsid', sidarr.toString(), 7);
        numarr.push(1);
        addCookie('cartnum', numarr.toString(), 7);
        createcart(sid, 1);//调用创建商品列表的函数
    }
})
//详情页面数量的加价
$('.add').on('click', function() {
    var $count =  $('.compute_left input').val();
    $count++;
    if($count > 1) {
			$(".no_reduce").animate({
			backgroundPositionX: -124 + "px"
			})
}
    if ($count >= 99) {
    	
        $count = 99;
    }
    $('#product_amount').val($count);
    setcookie($(this));

});

//改变商品数量--
$('.no_reduce').on('click', function() {
    var $count =  $('.compute_left input').val();
    $count--;
    if ($count <= 1) {
        $count = 1;
        $(".add").animate({
		backgroundPositionX: -148 + "px"
		})
    }
     $('#product_amount').val($count);

    setcookie($(this));
});

//购物车页面数量的加减
$('.quantity-add').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));

});


//改变商品数量--
$('.quantity-down').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
    $count--;
    if ($count <= 1) {
        $count = 1;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});


//4.商品列表不存在显示购物车为空
kong()

function kong() {
    if (getCookie('cartsid')) {
        $('.empty-cart').hide();
    } else {
        $('.empty-cart').show();
    }
}


//5.计算总价
totalprice();

function totalprice() {//计算总价
    var total = 0;
    var countnum = 0;
    $('.goods-item:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            total += parseFloat($(this).find('.b-sum strong').html());
            countnum += parseInt($(this).find('.quantity-form').find('input').val());
        }
    });
    $('.totalprice').html('￥' + total.toFixed(2));
    $('.amount-sum em').html(countnum);
}



//6.全选
$('.allsel').on('change', function() {
    $('.goods-item:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
    $('.allsel').prop('checked', $(this).prop('checked'));
    totalprice();
});

var $inputchecked = $('.goods-item:visible').find('input:checkbox');//获取委托元素
$('.item-list').on('change', $inputchecked, function() {
    var $inputs = $('.goods-item:visible').find('input:checkbox'); //放内部
    if ($('.goods-item:visible').find('input:checked').length == $inputs.size()) {
        $('.allsel').prop('checked', true);
    } else {
        $('.allsel').prop('checked', false);
    }
    totalprice();
});


//7.删除商品列表
//删除cookie的函数
function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
    var index = -1;
    for (var i = 0; i < sidarr.length; i++) {
        if (sid == sidarr[i]) {
            index = i;
        }
    }
    sidarr.splice(index, 1);//删除数组对应的值
    numarr.splice(index, 1);//删除数组对应的值
    addCookie('cartsid', sidarr.toString(), 7);//添加cookie
    addCookie('cartnum', numarr.toString(), 7);
}

//删除单个商品的函数(委托)
$('.item-list').on('click', '.b-action a', function(ev) {
    cookieToArray(); //转数组
    $(this).first().parents('.goods-info').remove();
    delgoodslist($(this).first().parents('.goods-info').find('img').attr('sid'), sidarr);
    totalprice();
});


//删除全部商品的函数
$('.operation a:first').on('click', function() {
    $('.goods-item:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            $(this).remove();
            delgoodslist($(this).find('img').attr('sid'), sidarr);
        }
    });
    totalprice();
});

//8.修改数量的操作
//改变商品数量++
$('.quantity-add').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));

});


//改变商品数量--
$('.quantity-down').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
    $count--;
    if ($count <= 1) {
        $count = 1;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});


//直接输入改变数量
$('.quantity-form input').on('input', function() {
    var $reg = /^\d+$/g; //只能输入数字
    var $value = parseInt($(this).val());
    if ($reg.test($value)) {
        if ($value >= 99) {//限定范围
            $(this).val(99);
        } else if ($value <= 0) {
            $(this).val(1);
        } else {
            $(this).val($value);
        }
    } else {
        $(this).val(1);
    }
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});



//9.计算单个商品的价格
function singlegoodsprice(row) { //row:当前元素
    var $dj = parseFloat(row.parents('.goods-item').find('.b-price').find('strong').html());
    var $cnum = parseInt(row.parents('.goods-item').find('.quantity-form input').val());
    return ($dj * $cnum).toFixed(2);
}

////3.购物车页面创建详情列表
function createcart(sid, num) {
    $.ajax({
    	type: "get",
        url: 'php/php.php',
        dataType: 'json'
    }).done(function(data) {
    	for (var i = 0; i < data.length; i++) {
            if (sid == data[i].sid) {
                var $clone = $('.goods-item:hidden').clone(true);
                $clone.find('.goods-pic').find('img').attr('src', data[i].url);
                $clone.find('.goods-pic').find('img').attr('sid', data[i].sid);
                $clone.find('.goods-d-info').find('a').html(data[i].title);
                $clone.find('.b-price').find('strong').html(data[i].price);
                $clone.find('.quantity-form').find('input').val(num);
                var $dj1 = parseFloat($clone.find('.b-price strong').html());
                $clone.find('.b-sum strong').html(($dj1 * num).toFixed(2));
                $clone.css('display', 'block');
                $('.item-list').append($clone);
                kong();
                totalprice();
            }
        }
    	
 
    });
}
//10.将改变后的数量的值存放到cookie
function setcookie(obj) { //obj:当前操作的对象
    cookieToArray();
    var $index = obj.parents('.goods-item').find('img').attr('sid');
    numarr[sidarr.indexOf($index)] = obj.parents('.goods-item').find('.quantity-form input').val();
    addCookie('cartnum', numarr.toString(), 7);
}


	})()	
	
	
})
