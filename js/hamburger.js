$(function(){

$(".nav-hamburger-content").addClass("dn");
$(".nav-cross").addClass("dn");

$(".nav-hamburger").click(function(){
    $(".nav-hamburger-content").slideToggle("fast",function(){
            $(".nav-hamburger").addClass("dn");
            $(".nav-cross").removeClass("dn");
    });
});

$(".nav-cross").click(function(){
    $(".nav-hamburger-content").slideToggle("fast",function(){
            $(".nav-hamburger").removeClass("dn");
            $(".nav-cross").addClass("dn");
    });
});

});
