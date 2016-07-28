$(function(){

'use strict';

/* age calcuration */
var birthday = new Date("1990-09-13T03:47:00").getTime();

var culc_age;
culc_age = function(){

    var current_time = Date.now();
    var distance = current_time - birthday;

    var current_age = distance/(365*24*60*60*1000);
    var after_dot = Math.pow(10,10);
    current_age = Math.round(current_age*after_dot)/after_dot;

    $(".age").html(current_age.toFixed(9));

    setTimeout(culc_age,100);
};

culc_age();

});

$(function(){

'use strict';

var copyright_to = document.getElementById('copyright-to-year');
copyright_to.innerHTML = (new Date()).getFullYear();

});
