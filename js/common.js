$(function(){

/*
$(".top-portrait").click(function(){
    alert("Thank you for tapping me!");
});
*/

var birthday = new Date("1990-09-13T03:47:00").getTime();

culc_age = function(){

    var current_time = Date.now();
    var distance = current_time - birthday;
    
    current_age = distance/(365*24*60*60*1000);
    after_dot = Math.pow(10,8);
    current_age = Math.round(current_age*after_dot)/after_dot;
    
    $(".age").html(current_age.toFixed(8));

    setTimeout(culc_age,200);
};

culc_age();


});
