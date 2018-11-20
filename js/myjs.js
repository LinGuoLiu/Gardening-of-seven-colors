/**
 * 首页js 
 */

 // smoove代码 
$('.block').smoove({
	offset: '40%'
});
// $('.produt_block').smoove({
// 	offset: '40%'
// });
$('.my_smoove').smoove({
	offset: '5%'
});

 // 音乐导航js代码 
$(function() {
	$('#musin_nav a li').last().css('border', 'none'); //last() 方法返回被选元素的最后一个元素。
	var ins = $('<ins></ins>');
	$('#musin_nav a li').append(ins);  //append() 方法在被选元素的结尾（仍然在内部）插入指定内容。
	var colorArr = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'purple', 'yellowgreen'];
	$('#musin_nav a li ins').each(function(index, el) {    //each() 方法为每个匹配元素规定要运行的函数。

		$(this).css('background-color', colorArr[index]);

	});
	
	$('#musin_nav a').hover(function() {
	
			var index = $(this).index();
	
			$(this).children('ins').stop().animate({    //children() 方法返回被选元素的所有直接子元素。
				'top': 25                               //stop() 方法为被选元素停止当前正在运行的动画。
			}, 500);
			$('audio').get(index).load(); //load() 方法从服务器加载数据，并把返回的数据放置到指定的元素中。
			$('audio').get(index).play(); //play() 方法开始播放当前的音频或视频。
	
		}, function() {
			$(this).children('ins').stop().animate({
				'top': 40
			}, 500);
		});
	
	$('#musin_nav a li').hover(function() {

		var index = $(this).index();

		$(this).children('ins').stop().animate({
			'top': 25
		}, 500);
	}, function() {
		$(this).children('ins').stop().animate({
			'top': 40
		}, 500);
	});
});

 // 首页轮播js代码 
var mySwiper = new Swiper('.swiper-container', {

	autoplay: {
		delay: 3000
	},
	direction: 'horizontal', // 垂直切换选项
	loop: true, // 循环模式选项

	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
	},

	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

})


/**
 * 关于我们
 */

/**
 * 产品中心
 */

/**
 * 新闻中心
 */

/**
 * 案例中心
 */

/**
 * 租摆预订
 */

/**
 * 绿化养护
 */

/**
 * 个人中心
 */