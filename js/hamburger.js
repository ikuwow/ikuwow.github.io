(function(){

'use strict';

var hamburger_content = document.querySelector('.nav-hamburger-content');
hamburger_content.classList.add('dn');

// display menu
document.querySelector('.nav-hamburger').addEventListener('click', function(){
    $('.nav-hamburger-content').slideToggle('fast');
});

document.querySelector('.nav-hamburger-content ul').addEventListener('click', function(){
    $('.nav-hamburger-content').toggle();
});

})();
