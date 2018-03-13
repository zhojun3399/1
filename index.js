$(function(){

<!-- 公用模块 -->








<!-- 音乐 -->
$(function() {		
	$('button').click(function(e) {
        if( $('audio').get(0).muted==false ){
			$('audio').get(0).muted=true;	
			$(this).html('音乐开启')
		}else{
			$('audio').get(0).muted=false;
			$(this).html('音乐静音')
		}
		
    });
 });

//首页导航
$(function() {			
	<!-- 点击导航排他 -->
	$('.inHeader ul li').click(function(e) {
        $(this).addClass('current').siblings().removeClass('current')		

		var wh = $(window).height() //获取窗口的高度
		var index = $(this).index() //
		//为了全兼容，我们采用body,html
		$('html,body').stop().animate({ scrollTop: wh*index }, 500)
	});	

});





<!-- .banner -->
	//.banner自动播放模块
$(function() {		
		sx = 0;
		var gundong = null;
	gundong = setInterval(function(){
		sx++
		if( sx>4 ){ sx=0 }    // 虚拟索引值，取值 0~4，如果大于4，变成0
		$('#box ol li').eq(sx).addClass('current').siblings('').removeClass('current')
		$('#box ul').animate({ left:  sx*-100+'%'  },  500)   // 注意百分比和单位。  100%  是100 +  "%"	
	},3000)
	
	//////////////
	// 用户点击左右箭头 //
	//////////////
	
	$('#box .right').click(function(event) {
		sx++
		if(sx>4){ sx=0 }
		$('#box ol li').eq(sx).addClass('current').siblings('').removeClass('current')
		$('#box ul').stop().animate({ left: -100*sx+'%' }, 500)      // 注意百分比和单位。
	});
	$('#box .left').click(function(event) {
		sx--
		if(sx<0){ sx=4 }
		$('#box ol li').eq(sx).addClass('current').siblings('').removeClass('current')
		$('#box ul').stop().stop().animate({ left: -100*sx+'%' }, 500)       // 注意百分比和单位。
	});

	// 清除定时器

	$('#box .right,#box .left').hover(function() {
		clearInterval(gundong)
	}, function() {
		clearInterval(gundong)		
		gundong = setInterval(function(){
			sx++
			if( sx>4 ){ sx=0 }    // 虚拟索引值，取值 0~4，如果大于4，变成0
			$('#box ol li').eq(sx).addClass('current').siblings('').removeClass('current')
			$('#box ul').stop().animate({ left:  sx*-100+'%'  },  500)   // 注意百分比和单位。  100%  是100 +  "%"	
		},3000)



	});
});






<!-- ----- -->
// 作品展示,ui滚动作品
$(function() {	
	$('.case-nav ul li').click(function(event) {
		//作品展示导航 排他
		$(this).addClass('current').siblings().removeClass('current')
		
		var index = $(this).index()
		$('.works-title #box-main ul').eq(index).show().siblings().hide()
	});
	//ui作品
	num = 0;
	var timer = null;
	//启动定时器
	timer = setInterval(function(){
		num = num+5
		//$('title').html(num)
		if( num >=2540 ){ num = 0}
		$('.works-title .box .ic').css({ left:-num })
	},30);
	
	$('.works-title .box .ic li').hover(function(e) {
		//鼠标移上暂停滚播
		clearInterval(timer)  
		$(this).stop().fadeTo(300,1).siblings('li').stop().fadeTo(300,.2)

	},function(){
		//鼠标离开后自动滚播
		clearInterval(timer)  
		$('.works-title .box .ic li').stop().fadeTo(300,1)
		timer = setInterval(function(){
			num = num+5
			//$('title').html(num)
			if( num >=2540 ){ num = 0}
			$('.works-title .box .ic').css({ left:-num })
		},30);
	
	});
});



<!-- ----- -->
<!-- 关于我 -->
	//加工span里面的图标
$(function() {	
	$('.about-title .about_main ul li span').each(function(index, element) {
        //0 0		0*0
		//0 -43		1*43
		//0 -83		2*43
		//0 -123	3*43
		//0 -163	4*43
		//0 -203	5*43
		var num = index*(-52)
		$(element).css('background-position','0 '+num+'px');		
		
    });

});
<!-- 关于我.联系.手风琴 -->
$(function() {	
	$('.about-title .about_main ul li').mouseenter(function(event) {
		$(this).stop().animate({ width:300 },200).siblings().stop().animate({width:140},200)

	});
	$('.about-title .about_main ul li').mouseleave(function(event) {
		$('.about-title .about_main ul li').stop().animate({width:166.666}, 200)

	});
});



<!-- 点击返回顶部 -->
$(function() {	
	$(window).scroll(function(){
	
		var winSt = $(window).scrollTop()
		var winH = $(window).height()
		if( winSt >= winH ){
			//console.log('我进入第二屏了')
			$('#toTop').fadeIn();
		}else{
			$('#toTop').fadeOut();
		}
	
		//$('title').html(winSt)
	})
})
<!-- 点击返回顶部 -->
$(function() {	
	$('#toTop').click(function(event) {
		$('html,body').stop().animate({scrollTop:0}, 500)
	});
});	
	



































<!-- 代码分离 -->	
});
	
	
	
