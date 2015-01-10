function bg_read(){
	var image_v = parseInt($('#bg_image_v').val());
	var max = parseInt($('#bg_image_max').val());
	var step = parseInt($('#image_step').val());
	document.querySelector('.bg_pop_span').innerHTML ='';
	for( i = image_v ; i < parseInt(image_v + step)  ; i++){
		if(i < max){
			document.querySelector('.bg_pop_span').innerHTML += '<a href="#"><img src="http://www2.pygxist.com/img/bg/bg' + padLeft(i,4) + '.png" onclick="myAddbgImage(this)" style="width: 33.33%; height: auto;"></a>';
		}
	}
}
function bg_next_p(){
	var image_v = parseInt($('#bg_image_v').val());
	var max = parseInt($('#bg_image_max').val());
	var step = parseInt($('#image_step').val());
	if( (image_v + step) < max){
		$('#bg_image_v').val(parseInt(image_v + step));
	}
	bg_read();
}
function bg_back_p(){
	var image_v = parseInt($('#bg_image_v').val());
	var step = parseInt($('#image_step').val());
	var min = parseInt($('#bg_image_min').val());
	if( image_v <= min){
		$('#bg_image_v').val('1');
	}else{
		$('#bg_image_v').val(parseInt(image_v - step));
	}
	bg_read();
}
function word_read(){
	var image_v = parseInt($('#word_image_v').val());
	var max = parseInt($('#word_image_max').val());
	var step = parseInt($('#image_step').val());
	document.querySelector('.word_pop_span').innerHTML ='';
	for( i = image_v ; i < parseInt(image_v + step)  ; i++){
		if(i < max){
			document.querySelector('.word_pop_span').innerHTML += '<a href="#"><img src="http://www2.pygxist.com/img/stamp-word/stamp_' + padLeft(i,4) + '.png" onclick="myAddImage(this)" style="width: 33.33%; height: auto;"></a>';
		}
	}
}
function word_next_p(){
	var image_v = parseInt($('#word_image_v').val());
	var max = parseInt($('#word_image_max').val());
	var step = parseInt($('#image_step').val());
	if( (image_v + step) < max){
		$('#word_image_v').val(parseInt(image_v + step));
	}
	word_read();
}
function word_back_p(){
	var image_v = parseInt($('#word_image_v').val());
	var step = parseInt($('#image_step').val());
	var min = parseInt($('#word_image_min').val());
	if( image_v <= min){
		$('#word_image_v').val('1');
	}else{
		$('#word_image_v').val(parseInt(image_v - step));
	}
	word_read();
}
function star_read(){
	var image_v = parseInt($('#star_image_v').val());
	var max = parseInt($('#star_image_max').val());
	var step = parseInt($('#image_step').val());
	document.querySelector('.star_pop_span').innerHTML ='';
	for( i = image_v ; i < parseInt(image_v + step)  ; i++){
		if(i < max){
			document.querySelector('.star_pop_span').innerHTML += '<a href="#"><img src="http://www2.pygxist.com/img/stamp-star/stamp_' + padLeft(i,4) + '.png" onclick="myAddImage(this)" style="width: 33.33%; height: auto;"></a>';
		}
	}
}
function star_next_p(){
	var image_v = parseInt($('#star_image_v').val());
	var max = parseInt($('#star_image_max').val());
	var step = parseInt($('#image_step').val());
	if( (image_v + step) < max){
		$('#star_image_v').val(parseInt(image_v + step));
	}
	star_read();
}
function star_back_p(){
	var image_v = parseInt($('#star_image_v').val());
	var step = parseInt($('#image_step').val());
	var min = parseInt($('#star_image_min').val());
	if( image_v <= min){
		$('#star_image_v').val('1');
	}else{
		$('#star_image_v').val(parseInt(image_v - step));
	}
	star_read();
}
function illust_read(){
	var image_v = parseInt($('#illust_image_v').val());
	var max = parseInt($('#illust_image_max').val());
	var step = parseInt($('#image_step').val());
	document.querySelector('.illust_pop_span').innerHTML ='';
	for( i = image_v ; i < parseInt(image_v + step)  ; i++){
		if(i < max){
			document.querySelector('.illust_pop_span').innerHTML += '<a href="#"><img src="http://www2.pygxist.com/img/stamp-illust/stamp_' + padLeft(i,4) + '.png" onclick="myAddImage(this)" style="width: 33.33%; height: auto;"></a>';
		}
	}
}
function illust_next_p(){
	var image_v = parseInt($('#illust_image_v').val());
	var max = parseInt($('#illust_image_max').val());
	var step = parseInt($('#image_step').val());
	if( (image_v + step) < max){
		$('#illust_image_v').val(parseInt(image_v + step));
	}
	illust_read();
}
function illust_back_p(){
	var image_v = parseInt($('#illust_image_v').val());
	var step = parseInt($('#image_step').val());
	var min = parseInt($('#illust_image_min').val());
	if( image_v <= min){
		$('#illust_image_v').val('1');
	}else{
		$('#illust_image_v').val(parseInt(image_v - step));
	}
	illust_read();
}
function heart_read(){
	var image_v = parseInt($('#heart_image_v').val());
	var max = parseInt($('#heart_image_max').val());
	var step = parseInt($('#image_step').val());
	document.querySelector('.heart_pop_span').innerHTML ='';
	for( i = image_v ; i < parseInt(image_v + step)  ; i++){
		if(i < max){
			document.querySelector('.heart_pop_span').innerHTML += '<a href="#"><img src="http://www2.pygxist.com/img/stamp-heart/stamp_' + padLeft(i,4) + '.png" onclick="myAddImage(this)" style="width: 33.33%; height: auto;"></a>';
		}
	}
}
function heart_next_p(){
	var image_v = parseInt($('#heart_image_v').val());
	var max = parseInt($('#heart_image_max').val());
	var step = parseInt($('#image_step').val());
	if( (image_v + step) < max){
		$('#heart_image_v').val(parseInt(image_v + step));
	}
	heart_read();
}
function heart_back_p(){
	var image_v = parseInt($('#heart_image_v').val());
	var step = parseInt($('#image_step').val());
	var min = parseInt($('#heart_image_min').val());
	if( image_v <= min){
		$('#heart_image_v').val('1');
	}else{
		$('#heart_image_v').val(parseInt(image_v - step));
	}
	heart_read();
}
function deco_read(){
	var image_v = parseInt($('#deco_image_v').val());
	var max = parseInt($('#deco_image_max').val());
	var step = parseInt($('#image_step').val());
	document.querySelector('.deco_pop_span').innerHTML ='';
	for( i = image_v ; i < parseInt(image_v + step)  ; i++){
		if(i < max){
			document.querySelector('.deco_pop_span').innerHTML += '<a href="#"><img src="http://www2.pygxist.com/img/stamp-deco/stamp_' + padLeft(i,4) + '.png" onclick="myAddImage(this)" style="width: 33.33%; height: auto;"></a>';
		}
	}
}
function deco_next_p(){
	var image_v = parseInt($('#deco_image_v').val());
	var max = parseInt($('#deco_image_max').val());
	var step = parseInt($('#image_step').val());
	if( (image_v + step) < max){
		$('#deco_image_v').val(parseInt(image_v + step));
	}
	deco_read();
}
function deco_back_p(){
	var image_v = parseInt($('#deco_image_v').val());
	var step = parseInt($('#image_step').val());
	var min = parseInt($('#deco_image_min').val());
	if( image_v <= min){
		$('#deco_image_v').val('1');
	}else{
		$('#deco_image_v').val(parseInt(image_v - step));
	}
	deco_read();
}
function st_read(){
	var image_v = parseInt($('#st_image_v').val());
	var max = parseInt($('#st_image_max').val());
	var step = parseInt($('#image_step').val());
	document.querySelector('.st_pop_span').innerHTML ='';
	for( i = image_v ; i < parseInt(image_v + step)  ; i++){
		if(i < max){
			document.querySelector('.st_pop_span').innerHTML += '<a href="#"><img src="http://www2.pygxist.com/img/stamp-codi/stamp_' + padLeft(i,4) + '.png" onclick="myAddImage(this)" style="width: 33.33%; height: auto;"></a>';
		}
	}
}
function st_next_p(){
	var image_v = parseInt($('#st_image_v').val());
	var max = parseInt($('#st_image_max').val());
	var step = parseInt($('#image_step').val());
	if( (image_v + step) < max){
		$('#st_image_v').val(parseInt(image_v + step));
	}
	st_read();
}
function st_back_p(){
	var image_v = parseInt($('#st_image_v').val());
	var step = parseInt($('#image_step').val());
	var min = parseInt($('#st_image_min').val());
	if( image_v <= min){
		$('#st_image_v').val('1');
	}else{
		$('#st_image_v').val(parseInt(image_v - step));
	}
	st_read();
}