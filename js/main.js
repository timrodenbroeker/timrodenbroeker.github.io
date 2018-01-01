
	function mapRange(value, low1, high1, low2, high2) {
    	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
	}

	function getScrollPercent() {
    	var h = document.documentElement, 
        	b = document.body,
        	st = 'scrollTop',
        	sh = 'scrollHeight';
    	return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
	}


	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var mode = getRandomInt(1, 3);

	var a = getRandomInt(1,8);

	// Scrolling

	$(window).scroll(function() {
		var rotation = mapRange(getScrollPercent(), 0,100,0,360);
		var scaling = mapRange(getScrollPercent(), 0,100,1,0.3);
		var tone = Math.floor(mapRange(getScrollPercent(), 0,100,10,240));

		var string = 'background:rgb(' + tone + ', '+tone+','+ tone +')';

		$('.left').attr('style',string);

		if (mode == 1) {
			$('.leftInner').css({
				'-webkit-transform' : 'scale(' + scaling + ') rotateY(' + rotation/2 + 'deg)',
	  			'-moz-transform'    : 'scale(' + scaling + ') rotateY(' + rotation/2 + 'deg)',
	  			'-ms-transform'     : 'scale(' + scaling + ') rotateY(' + rotation/2 + 'deg)',
	  			'-o-transform'      : 'scale(' + scaling + ') rotateY(' + rotation/2 + 'deg)',
	  			'transform'         : 'scale(' + scaling + ') rotateY(' + rotation/2 + 'deg)'
	  		});
  		} else if (mode == 2) {
			$('.leftInner').css({
				'-webkit-transform' : 'scale(' + scaling + ') rotateX(' + rotation + 'deg)',
	  			'-moz-transform'    : 'scale(' + scaling + ') rotateX(' + rotation + 'deg)',
	  			'-ms-transform'     : 'scale(' + scaling + ') rotateX(' + rotation + 'deg)',
	  			'-o-transform'      : 'scale(' + scaling + ') rotateX(' + rotation + 'deg)',
	  			'transform'         : 'scale(' + scaling + ') rotateX(' + rotation + 'deg)'
	  		});  			
  		} else if (mode == 3) {
			$('.leftInner').css({
				'-webkit-transform' : 'scale(' + scaling + ') rotateY(' + rotation/2 + 'deg) rotateX(' + rotation + 'deg)',
	  			'-moz-transform'    : 'scale(' + scaling + ') rotateY(' + rotation/2 + 'deg) rotateX(' + rotation + 'deg)',
	  			'-ms-transform'     : 'scale(' + scaling + ') rotateY(' + rotation/2 + 'deg) rotateX(' + rotation + 'deg)',
	  			'-o-transform'      : 'scale(' + scaling + ') rotateY(' + rotation/2 + 'deg) rotateX(' + rotation + 'deg)',
	  			'transform'         : 'scale(' + scaling + ') rotateY(' + rotation/2 + 'deg) rotateX(' + rotation + 'deg)'
	  		});  			
  		}

  		
	});

var images = [];

for (var i = 0; i < 13; i++){
	images.push(i);

	$('.leftInner').append('<div class="child img" id="img'+i+'" style="background-image: url(img/1/'+images[i]+'.gif"></div>');
}

$('.left').append('<div class="logo"><h1>tim rodenbröker creative coding</h1></div>');


$( "#img11").css( "display", "block");




// Interval

	setInterval(function(){ 

		if (a < images.length-1){
			a++;
		} else {
			a = 0;
		}
		
		$( ".left .img" ).css( "display", "none");
	    

	    $( "#img"+a).css( "display", "block");
	 console.log(a);

}, 1000);