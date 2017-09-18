$(function(){

	
    var $container = $('#masonry');
    $container.imagesLoaded(function() {
        $container.masonry({
                itemSelector: '.box',
                gutter: 20,
                isAnimated: true,
            });
     });




});

		












