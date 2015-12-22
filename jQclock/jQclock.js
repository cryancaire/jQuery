(function($){
	//initialize some variables
	var col;
	
	//function to change bgColor
	var setBG = function (code) {
		$('body').css('background', '#'+code);
	};
	
	//function to get the time
	var getTime = function (milClock){
		//set time variables
		var currentDate = new Date();
		var hrs = currentDate.getHours();
		var min = currentDate.getMinutes();
		var sec = currentDate.getSeconds();
		var time;
		
		if (milClock !== 'on') {
			if (hrs > 12) {
				hrs = hrs-12;
			}
		}
		
		//if hr is 9 or less pad a 0 on
		if (hrs < 10) {
			hrs = '0'+hrs;
		}
		//if min is 9 or less pad a 0 on
		if (min < 10) {
			min = '0'+min;
		}
		//if sec is 9 or less pad a 0 on
		if (sec < 10) {
			sec = '0'+sec;
		}
		
		//set up time to look right.
		time = hrs+':'+min+':'+sec;
		
		//set up color for the bg
		col = hrs+''+min+''+sec;
		
		//finally, return time
		return time;
	};
	
	$.fn.clock = function(settings) {
		//get settings
		var config = $.extend ({
			size : '20',
			textcolor : 'black',
			clockbg : '',
			border : '1',
			bordercolor : 'white',
			bgRotate : 'off',
			mClock: 'off'
		}, settings);
		
		//set up some variables
		var doWidth = config.size*3.6;
		var $that = this;
		
		//set time intially and set bg if neccessary
		$that.html(getTime(config.mClock));
		if (config.bgRotate === 'on') {
			setBG(col);
		}
		
		//styling
		$that.css('font-size', config.size+'px').css('color', config.textcolor).css('background', config.clockbg).css('width', doWidth);
		$that.css('border-style','solid').css('border-width', config.border).css('border-color',config.bordercolor);
		
		//keep updating the time and bgcolor
		setInterval(function(){
			$that.html(getTime(config.mClock));
			if (config.bgRotate === 'on') {
				setBG(col);
			}
		},1000);
		
	};
	
}(jQuery));