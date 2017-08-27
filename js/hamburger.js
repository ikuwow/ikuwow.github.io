(function(){

'use strict';

// display menu
document.querySelector('.nav-hamburger').addEventListener('click', function(){
    $('.nav-hamburger-content').slideToggle('fast');
});

document.querySelector('.nav-hamburger-content ul').addEventListener('click', function(){
    $('.nav-hamburger-content').toggle();
});

})();
