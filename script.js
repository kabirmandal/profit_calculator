$(document).ready(function(){
    $("input").on('keyup blur',function(){
       var deposit = $("#deposit").val(); //B1
       var minterest = $("#minterest").val();
       var dinterest = $("#dinterest").val();
       var mothly_profit = deposit*minterest/100+parseFloat(deposit); $("#monthly_profit").text(mothly_profit);
       var P1Y = deposit*(1+0.48/269)^(1*269); $("#1YP").text(P1Y);
    });
});