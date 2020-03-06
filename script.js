$(document).ready(function () {
    $("input").on("keyup blur change", function () {
        var amount = $("#amount").val(); // amount
       // console.log(amount);
        var mpp = $("#mpp").val(); // Monthly profit percent
        var ytg = $("#ytg").val(); // years to grow
        var iic = $("#iic").val(); // Interest is Compounded
        function calc(x,y){
        // =B1*(1+((0.48*B4)/269))^(B4*269)
        var m = 1+x/269;
        var m = amount*m;
        var n = y*269;
        var n = Math.pow(m,n);
        //console.log(n);
        }
        function cal(){
            var k = amount*(1+(0.48/269));
            var m = 1*269;
            var cc = Math.pow(2,3);
            console.log(cc);
        }
        cal();
        if (amount !== 'undefined') {
            $("#showamount").text(amount);
            $("#showytg").text(ytg);
            $("#showmpp").text(mpp);
            $("#mnp").val(amount*0.04);
            $("#mgp").val(parseFloat(amount)+amount*0.04);
            //$("#ytgnp").val(cal());
        }
        
    });
});