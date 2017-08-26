(function(){

'use strict';

var overlay = document.createElement("div");
overlay.className = "overlay";
document.getElementById("main").appendChild(overlay);

var hamburger_content = document.querySelector('.nav-hamburger-content');
hamburger_content.classList.add("dn");

// display menu
$(".nav-hamburger").click(function(){
    $('.overlay').toggle(); // オーバーレイ表示切替
    $(".nav-hamburger-content").slideToggle("fast",function(){
        $(".nav-hamburger").addClass("dn");
    });
});

// close menu when overlay tapped
$('.overlay').click(function(){
	$(this).toggle(); // オーバーレイ非表示
    $(".nav-hamburger-content").slideToggle("fast");
});

$(".nav-hamburger-content li").click(function(){
    $('.overlay').toggle(); // オーバーレイ表示切替
    $('.nav-hamburger-content').toggle();
});

})();
