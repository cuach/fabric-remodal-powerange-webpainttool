function myFont(e){
	$("#fontfamily").val(e.style.fontFamily.replace(/'/, "").replace(/'/, ""));
	setActiveProp('fontFamily', $("#fontfamily").val());
}
document.getElementById('imgLoader').onchange = function handleImage(e) {
	var reader = new FileReader();
	reader.onload = function (event) {
		var imgObj = new Image();
		imgObj.src = event.target.result;
		imgObj.onload = function () {
			// start fabricJS stuff
			
			var image = new fabric.Image(imgObj);
			image.set({
				left: 0,
				top: 0,
				angle: 0,
				padding: 0,
				cornerSize: 30,
				transparentCorners: true
			});
			//image.scale(getRandomNum(0.1, 0.25)).setCoords();
			canvas.add(image);
			
			// end fabricJS stuff
		}
		
	}
	reader.readAsDataURL(e.target.files[0]);
}
function myPreView(e){
	var img = canvas.toDataURL({format: 'jpeg', quality: 0.8});

	$('#Block').css("display", 'block');
	document.querySelector('.cropped').innerHTML = '';
	document.querySelector('.cropped').innerHTML += '<img id="send" onclick="sendImage(this)" src="'+img+'">';
}
function sendImage(e){
	var img = e.src;
	var data = img;
		    data = data.replace('data:image/png;base64,', '');
		    $('<form/>', {action: 'url', method: 'post'})
			            .append($('<input/>', {type: 'hidden', name: 'image', value: data}))
			            .appendTo(document.body)
			            .submit();
}


function myAddImage(e){
	var imgObj = new Image();
	imgObj.src = e.src;
	imgObj.onload = function () {
		var image = new fabric.Image(imgObj);
		image.set({
			left: 0,
			top: 0,
			angle: 0,
			padding: 0,
			cornerSize: 30,
			transparentCorners: true
		});
		canvas.add(image);
		
		// end fabricJS stuff
	}
}

function myAddbgImage(e){
	var imgObj = new Image();
	imgObj.src = e.src;
	imgObj.onload = function () {
		var image = new fabric.Image(imgObj);
		
		canvas.setBackgroundImage(image, canvas.renderAll.bind(canvas));
		// end fabricJS stuff
	}
}

function myAddText(){
	var text='新しい文字';
	var textSample=new fabric.Text(
		text,
		{
			left:0,
			top:0,
			fontFamily:'helvetica',
			angle:0,
			fill:'#000',
			scaleX:1.0,
			scaleY:1.0,
			fontWeight:'',
			originX:'left',
			hasRotatingPoint:true,
			centerTransform:true,
			cornerSize: 30,
			transparentCorners: true
		});
	canvas.add(textSample);
}

function noback_js(e){
	location.replace(e.href);
	return false;
}