(function(){

var hamburger_content = document.getElementsByClassName("nav-hamburger-content")[0];
hamburger_content.classList.add("dn");

var overlay = document.createElement("div");
overlay.className = "overlay";
document.getElementById("main").appendChild(overlay);

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

/* fast scroll */
["about","accounts","feeds","directories"].forEach(function(somepoint){
    $(".to-"+somepoint).click(function(){
        var i = $(".to-"+somepoint).index(document);
        var p = $("#"+somepoint).eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 'fast');
    });
});

$(".nav-hamburger-content li").click(function(){
    $('.overlay').toggle(); // オーバーレイ表示切替
    $('.nav-hamburger-content').toggle();
});

})();
