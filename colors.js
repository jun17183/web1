var body = {
	setColor : function(color) 
		{$('body').css('color', color)},
		/*{document.querySelector('body').style.color 		= color;},*/
	setBackgroundColor : function(color) 
		{$('body').css('backgroundColor', color)}
		/*{document.querySelector('body').style.background 	= color;}*/
}

var links = {
	setColor : function(color) {
		/*var aList = document.querySelectorAll('a');
		
		for(i = 0; i < aList.length; i++) {
			aList[i].style.color = color;
		}*/
		$('a').css('color', color);
	}
}

function dayNightHandler(self) {
	if (self.value === 'night') {
		body.setBackgroundColor('#222423');
		body.setColor('white');
		
		if (self.id === 'night_day_button') {
			$('#night_day_button').val('day');
			$('#night_day_button2').val('day');
			/*document.querySelector('#night_day_button').value = 'day';
			document.querySelector('#night_day_button2').value 	= 'day';*/
		} else if (self.id === 'night_day_button2') {
			$('#night_day_button').val('day');
			$('#night_day_button2').val('day');
			/*document.querySelector('#night_day_button').value	= 'day';
			document.querySelector('#night_day_button2').value 	= 'day';*/
		}
		
		links.setColor('powderblue');
	} else {
		body.setBackgroundColor('white');
		body.setColor('black');
		
		if (self.id == 'night_day_button') {
			$('#night_day_button').val('night');
			$('#night_day_button2').val('night');
			/*document.querySelector('#night_day_button').value 	= 'night';
			document.querySelector('#night_day_button2').value 	= 'night';*/
		} else if (self.id == 'night_day_button2') {
			$('#night_day_button').val('night');
			$('#night_day_button2').val('night');
			/*document.querySelector('#night_day_button').value 	= 'night';
			document.querySelector('#night_day_button2').value 	= 'night';*/
		}
		
		links.setColor('black');
	}
}