$(function(){

    // Fixed header

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    })
 
    // Smooth scroll

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        menu.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 65
        }, 700);
    });


    //Nav Toggle
    let menu = $("#menu");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event){
        event.preventDefault();

        menu.toggleClass("show");
    });


});