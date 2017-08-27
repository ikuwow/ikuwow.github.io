(function(){

'use strict';

document.querySelector('.nav-hamburger').addEventListener('click', function(){
    document.querySelector('.nav-hamburger-content').classList.toggle('visible');
});

document.querySelector('.nav-hamburger-content ul').addEventListener('click', function(){
    document.querySelector('.nav-hamburger-content').classList.toggle('visible');
});

})();
