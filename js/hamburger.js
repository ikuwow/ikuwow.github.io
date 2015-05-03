$(function(){

$(".nav-hamburger-content").addClass("dn");
$(".nav-cross").addClass("dn");
$('#main').prepend('<div class="overlay"></div>');

// display menu
$(".nav-hamburger").click(function(){
    $('.overlay').toggle(); // オーバーレイ表示切替
    $(".nav-hamburger-content").slideToggle("fast",function(){
            $(".nav-hamburger").addClass("dn");
            $(".nav-cross").removeClass("dn");
    });
});

// close menu when overlay tapped
$('.overlay').click(function(){
	$(this).toggle(); // オーバーレイ非表示
    $(".nav-hamburger-content").slideToggle("fast");
});

/* fast scroll */
$(".to-about").click(function(){
    $('.overlay').toggle(); // オーバーレイ表示切替
    $('.nav-hamburger-content').toggle();
    var i = $(".to-about").index(document);
    var p = $("#about").eq(i).offset().top;
    $('html,body').animate({ scrollTop: p }, 'fast');
});
$(".to-accounts").click(function(){
    $('.overlay').toggle(); // オーバーレイ表示切替
    $('.nav-hamburger-content').toggle();
    var i = $(".to-accounts").index(document);
    var p = $("#accounts").eq(i).offset().top;
    $('html,body').animate({ scrollTop: p }, 'fast');
});

});
