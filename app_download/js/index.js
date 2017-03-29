$(document).ready(function(){
	var url=window.location.href;
	var qrcode = new QRCode($('.qrcode')[0], {
	width : 100,
	height : 100
});

function makeCode () {		
	
	if (!url) {
		return;
	}
	qrcode.makeCode(url);
}

$('.create_rqcode').on({
	click:function(){
		$('.rqcode')[0].makecode().show();

	},
	touchend:function(){
		$('.rqcode')[0].makecode().show();

	}

})
if($('.create_rqcode').show()){
	$('body').on({
	click:function(){
		$('.rqcode').hide();

	},
	touchend:function(){
		$('rqcode').hide();

	}
})
}


})