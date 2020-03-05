$(document).ready(function () {
    $("input").on('keyup blur', function () {
        var deposit = $("#deposit").val(); //B1
        var minterest = $("#minterest").val();
        var dinterest = $("#dinterest").val();
        var mothly_profit = deposit * minterest / 100 + parseFloat(deposit);
        $("#monthly_profit").text(mothly_profit.toFixed(2));

        function calc(x, y) {
            var pw1 = 1 + x / 269;
            var pw2 = y * 269;
            var pw = Math.pow(pw1, pw2);
            return deposit*pw;
        }

        var P1Y = calc(0.48,1);$("#1YP").text(P1Y.toFixed(2));
        var P2Y = calc(0.96,2);$("#2YP").text(P2Y.toFixed(2));
        var P3Y = calc(1.48,3);$("#3YP").text(P3Y.toFixed(2));
        var P4Y = calc(1.92,4);$("#4YP").text(P4Y.toFixed(2));
        var P5Y = calc(2.4,5);$("#5YP").text(P5Y.toFixed(2));
        
    });
});