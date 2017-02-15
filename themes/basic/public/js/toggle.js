$(document).ready(function(){
    $(".saf").click(function(){
        $(".red-border").toggle();
        $(".triangle-up").toggle();
        $(".triangle-down").toggle();
    });
    $(".grid-bottom-text").click(function(){
    	var parentElm = $(this).parent().parent();
    	$(parentElm).children(".back-div").fadeIn();

    })
    $(".close-text").click(function(){
    	var parentElm = $(this).parent().parent();
    	$(parentElm).children(".back-div").fadeOut();
    })
    $(".marketing-logo-ul li").hover(function(e){
        $(".info-div").toggle();
    	$(".info-div-2").toggle(); 
    });
   
});