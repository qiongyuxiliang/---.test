$(document).ready(function(){
		function code () {	
	var url=window.location.href;
	var qrcode = new QRCode($('.qrcode')[0], {
	width : 100,
	height : 100
});
	
	if (!url) {
		return;
	}
	else
	{
		qrcode.makeCode(url);
	}
	
}
 // var q=document.getElementsByClassName('qrcode');
 $('.create_qrcode').one('click', function(e){
        code();
        // 把生成二维码的函数只绑定一次
        e.preventDefault(); 
        
		// $('.x').show();
		// return  $('.create_qrcode');
 }).on('click', function(event) {
 	event.preventDefault();
 	$('.qrcode').show();
	$('.q-code').show();
 	/* Act on the event */
 });
 $('.q-code').on('click',function(){
 	$('.qrcode').hide();
	$('.q-code').hide();
 })
 
})



