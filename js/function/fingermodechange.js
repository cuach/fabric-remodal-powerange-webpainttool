function fingermodechange(e){
	var fingermode = $('#fingermode_v').val();
	if ( fingermode == "1" ){
		$('#fingermode_v').val("0");
		 $('.footer').fadeOut(300);
	} else {
		$('#fingermode_v').val("1");
		$('.footer').fadeIn(300);
	}
}