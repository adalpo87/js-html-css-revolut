

$(function(){
  

    $('.with-dropdown').mouseenter(function(){
      $('.drop_down.active').toggleClass('active');
      $(this).find('.drop_down').toggleClass('active');
    });

    $('.with-dropdown').click(function(){
      $(this).find('.drop_down').toggleClass('active');
    });

    $('.with-dropdown').mouseleave(function(){
        $(this).find('.drop_down').toggleClass('active');
    });
  
  
  });