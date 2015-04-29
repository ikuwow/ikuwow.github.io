$(function(){

$(".nav-hamburger-content").hide();
$(".nav-cross").hide();

$(".nav-hamburger").click(function(){
    $(".nav-hamburger-content").slideToggle("fast",function(){
            $(".nav-hamburger").hide();
            $(".nav-cross").show();
    });
});

$(".nav-cross").click(function(){
    $(".nav-hamburger-content").slideToggle("fast",function(){
            $(".nav-hamburger").show();
            $(".nav-cross").hide();
    });
});

});
