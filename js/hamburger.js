(function(){

'use strict';

var hamburger_content = document.querySelector('.nav-hamburger-content');
hamburger_content.classList.add('dn');

// display menu
$('.nav-hamburger').click(function(){
    $('.nav-hamburger-content').slideToggle('fast', function(){
        $('.nav-hamburger').addClass('dn');
    });
});

$(".nav-hamburger-content ul").click(function(){
    $('.nav-hamburger-content').toggle();
});

})();
