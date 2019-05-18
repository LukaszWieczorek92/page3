$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $("nav").addClass("black");

    }else{
        $("nav").removeClass("black");
    }
})
// slide to sections
$(".about-nav").on("click", () => {
    $("html,body").animate({
        scrollTop: $(".about-us").offset().top - $("nav").innerHeight()
    },500);
});

$(".offer-nav").on("click", () => {
    $("html,body").animate({
        scrollTop: $(".offer").offset().top - $("nav").innerHeight()
    },500);
});

$(".gallery-nav").on("click", () => {
    $("html,body").animate({
        scrollTop: $(".gallery").offset().top - $("nav").innerHeight()
    },500);
});

$(".contact-nav").on("click", () => {
    $("html,body").animate({
        scrollTop: $(".contact").offset().top - $("nav").innerHeight()
    },500);
});

$(".question-nav").on("click", () => {
    $("html,body").animate({
        scrollTop: $(".question").offset().top - $("nav").innerHeight()
    },500);
});

$(".button").on("click", () => {
    $("html,body").animate({
        scrollTop: $(".about-us").offset().top - $("nav").innerHeight()
    },500);
});

$(".logo").on("click", () => {
    $("html,body").animate({
        scrollTop: $("body").offset().top - $("nav").innerHeight()
    },500);
});

// hiding menu-mobile
$("ul li").on("click", () => {
$("nav ul").toggleClass("active");
$(".menu-mobile").toggleClass("active");

}) 