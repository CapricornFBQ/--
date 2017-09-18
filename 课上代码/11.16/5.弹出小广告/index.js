$(document).ready(function() {


			$(".gg").slideDown(1000)
			.slideUp("slow")
			.fadeIn(1500)
			.children("span").click(function(){

				$(this).parent().fadeOut(1000);
			});


});