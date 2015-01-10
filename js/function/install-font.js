window.onload = function(){
	if ($.browser.android){
		/*document.querySelector('.font_popup_div').innerHTML += 'Android<br>';*/
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:Adobe Arabic;">android<br></p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:Droid Sans Japanese;">Droid Sans Japanese</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:モトヤLシーダ3等幅;">モトヤLシーダ3等幅</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:モトヤLマルベリ3等幅;">モトヤLマルベリ3等幅</p></a>';
		
	} else if($.browser.iphone || $.browser.ipod || $.browser.ipad || $.browser.ios){
		/*document.querySelector('.font_popup_div').innerHTML += 'IOS<br>';*/
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:Adobe Arabic;">IOS<br></p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:黒体-簡(Heiti SC);">黒体-簡(Heiti SC)</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:黒体-繁(Heiti TC);">黒体-繁(Heiti TC)</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:ヒラギノ角ゴ ProN W3;">ヒラギノ角ゴ ProN W3</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:ヒラギノ角ゴ ProN W6;">ヒラギノ角ゴ ProN W6</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:ヒラギノ明朝 ProN W3;">ヒラギノ明朝 ProN W3</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:ヒラギノ明朝 ProN W6;">ヒラギノ明朝 ProN W6</p></a>';
	} else {
		/*document.querySelector('.font_popup_div').innerHTML += 'PC<br>';*/
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:ＭＳ ゴシック;">ＭＳ ゴシック</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:ＭＳ Ｐゴシック;">ＭＳ Ｐゴシック</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:MS UI Gothic;">MS UI Gothic</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:メイリオ;">メイリオ</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:Meiryo UI;">Meiryo UI</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:ＭＳ 明朝;">ＭＳ 明朝</p></a>';
		document.querySelector('.font_popup_div').innerHTML += '<a href="#"><p onclick="myFont(this);" style="font-family:ＭＳ Ｐ明朝;">ＭＳ Ｐ明朝</p></a>';
	}
}