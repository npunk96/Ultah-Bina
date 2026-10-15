$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$(document).ready(function(){
		function arrangeFinalBalloons() {
			if (!$('#b11').length) return;
			var width = $(window).width();
			var height = $(window).height();
			var balloonWidth = width < 768 ? 62 : (width < 992 ? 80 : 100);
			var gap = Math.min(balloonWidth + 8, (width - 20) / 8);
			var start = Math.max(5, (width - gap * 8) / 2);
			var top = Math.max(120, Math.min(240, height * 0.42));
			for (var i = 1; i <= 8; i++) {
				$('#b' + i + i).stop(true).animate({top: top, left: start + gap * (i - 1)}, 300);
			}
		}

		$(window).on('resize orientationchange', function(){
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
			arrangeFinalBalloons();
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function randomPosition() {
		var maxLeft = Math.max(20, $(window).width() - 90);
		var maxBottom = Math.max(120, $(window).height() - 120);
		return { left: Math.random() * maxLeft, bottom: Math.random() * maxBottom };
	}

	function loopOne() {
		var pos = randomPosition();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var pos = randomPosition();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var pos = randomPosition();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var pos = randomPosition();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var pos = randomPosition();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var pos = randomPosition();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var pos = randomPosition();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var pos = randomPosition();
		var randleft = pos.left;
		var randtop = pos.bottom;
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		// $('#b8').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		arrangeFinalBalloons();
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		// Keep the birthday cake visible while the message appears.
		// The message is layered below/around the cake instead of hiding it.
		$('.message').fadeIn('slow');
		
		var i;


	function msgLoop(i) {

		var totalMessage = $(".message p").length;

		if (i >= totalMessage) {
			return;
		}

		$(".message p").eq(i)
			.fadeIn('slow')
			.delay(3000)
			.fadeOut('slow', function() {
				msgLoop(i + 1);
			});
	}

	msgLoop(0);
		
	});
});




//alert('hello');