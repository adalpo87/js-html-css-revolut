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
  

    $('.with-dropdown').mouseenter(function(){
      $('.drop_down.active').toggleClass('active');
      $(this).find('.drop_down').toggleClass('active');
    });
  

    $('.with-dropdown').click(function(){
      $(this).find('.drop_down').toggleClass('active');
    });
  
  
  });