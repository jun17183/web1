var body = {
	setColor : function(color) 
		{$('body').css('color', color)},
	setBackgroundColor : function(color) 
		{$('body').css('backgroundColor', color)}
}

var links = {
	setColor : function(color) {
		$('a').css('color', color);
	}
}

function dayNightHandler(self) {
	if (self.value === 'night') {
		body.setBackgroundColor('#222423');
		body.setColor('white');
		
		$('.daynightbutton').val('day');
		
		links.setColor('powderblue');
	} else {
		body.setBackgroundColor('white');
		body.setColor('black');
		
		$('.daynightbutton').val('night');
		
		links.setColor('black');
	}
}