$(function(){
	alert("jdttyjhtyjhjt");
	
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " Day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " Hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " Minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " Second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			note.html(message);
		}
	});
	
});
