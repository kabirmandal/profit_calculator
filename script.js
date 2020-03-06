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
        function cal(x,y){
           var dd = amount*(1+x/269) ** (y*269);
           //console.log(dd);
           var dd = parseInt(dd.toFixed(2));
           return dd;
        }
       // cal(0.48,1);
        if (amount !== 'undefined') {
            $("#showamount").text(amount);
            $("#showytg").text(ytg);
            $("#showmpp").text(mpp);
            $("#mnp").val(amount*0.04);
            $("#mgp").val(parseFloat(amount)+amount*0.04);
            
            $("#npy1").val(cal(0.48,1));
            $("#npy2").val(cal(0.96,2));
            $("#npy3").val(cal(1.48,3));

            $("#gpy1").val(cal(0.48,3)+0.04);
            $("#gpy2").val(cal(0.96,3)+0.04);
            $("#gpy3").val(cal(1.48,3)+0.04);


        }
        
    });
});