/* $(function(){

    //funzionalità
	$('.funz').mouseenter(function(){
		//$('.dropdown-menu').toggleClass('active');
		$(this).find('.drop-funz').toggleClass('active');
	});




    //abbonamenti
    $('.abb').mouseenter(function(){

        $(this).find('.drop-abb').toggleClass('active');
    })
    //chi siamo
    $('.who').mouseenter(function(){
        $(this).find('.drop-who').toggleClass('active');
    })
    //aiuto
    $('.help').mouseenter(function(){
        $(this).find('.drop-help').toggleClass('active');
    })

});
 */


$(function(){

    $('.with-dropdown').on('click',function(){
        var index = $(this).index();
        
        console.log(index);
        $('.drop-down.active').removeClass('active');
        $('.drop-down').eq(index).addClass('active');
        
    })

});