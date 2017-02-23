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
      
    $(".marketing-logo-ul li:last-child").hover(function(){
        $(".info-div").hide();
        $(".info-div-2").show();
    },function(){
        $(".info-div").show();
        $(".info-div-2").hide();
    })
    $(".back-hover-div").click(function(){
       var par=$(this).parent();
       $(par).children(".front-hover-div").children(".myImg").css("background-color","red");
       
    });
    $(".down-arrow").click(function(){
        $(this).hide();
        $(".up-arrow").toggle();
        $(".lower-div-1").animate({
            "padding-top":"350px"
        })
    })
    $(".up-arrow").click(function(){
        $(this).hide();
         $(".down-arrow").toggle();
         $(".lower-div-1").animate({
            "padding-top":"50px"
        })
    })
    $(".vertica-logo-ul li:first-child img").hover(function(){
         $("#logo1").show();
         $("#logo1").siblings().hide();
         $(".logo-pointer").css({"left":"80px"})
    })
    $(".vertica-logo-ul li:nth-child(2) img").hover(function(){

        $("#logo2").show();
        $("#logo2").siblings().hide();
        $(".logo-pointer").css({"left":"350px"});
    });
    $(".vertica-logo-ul li:nth-child(3) img").hover(function(){
        $("#logo3").show();
        $("#logo3").siblings().hide();
         $(".logo-pointer").css({"left":"650px"});
       
    });
     $(".vertica-logo-ul li:last-child img").hover(function(){
        $("#logo4").show();
        $("#logo4").siblings().hide();
       $(".logo-pointer").css({"left":"890px"});
       
    });

/*    $(".animation-logo").hover(function(){
        var animparent=$(this).parent();
        $(animparent).children("animation-text-div").animate({
            "left":"20px"
        });
    },function(){
         var animparent=$(this).parent();
        $(animparent).children("animation-text-div").animate({
            "left":"-250px"
        });
    });*/


    $(".play-border").click(function(){
        var video=$(".video-player").attr('data-src');
        console.log("Source::::::::::::::::::::",video);
        $(".video-player-div").fadeIn("fast");
        $(".crane-div").css({"z-index":"1"});
        $(".video-player").attr('src',video);
        $(".video-player")[0].play();
        $(".crane-img").css({"z-index":"1"});
        $(".video-backdrop").show();

    });
    $(".close-player").click(function(){
        $(".video-player-div").fadeOut("fast");
        $(".crane-div").css({"z-index":"2"});  
        $(".video-backdrop").hide();   
        $(".crane-img").css({"z-index":"2"});  
    })
   



    $(".anim-ul li:nth-child(odd)").hover(function(){
        var id=$(this).attr("id");
        console.log(id);
    });
    $(".anim-ul li:nth-child(even)").hover(function(){
        var id=$(this).attr("id");
         console.log(id);
   
    });
    $("#anim1").hover(function(){
        $("#anim-text1").animate({
            "left":"33px"
        });
       
    },function(){
         $("#anim-text1").animate({
            "left":"-390px"
        });
         
    });
    $("#anim2").hover(function(){
        $("#anim-text2").animate({
            "right":"30px"
        });
        
    },function(){
         $("#anim-text2").animate({
            "right":"-390px"
        });
          
    });
    $("#anim3").hover(function(){
        $("#anim-text3").animate({
            "left":"26px"
        });
        

    },function(){
         $("#anim-text3").animate({
            "left":"-390px"
        });
         
    });
    $("#anim4").hover(function(){
        $("#anim-text4").animate({
            "right":"35px"
        });
       
    },function(){
         $("#anim-text4").animate({
            "right":"-390px"
        });
         
    });
});