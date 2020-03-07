$(document).ready(function () {
    $("input").on("keyup blur change", function () {
        var amount = parseFloat($("#amount").val()); // amount
        var mpp = parseFloat($("#mpp").val()); // Monthly profit percent
        var ytg = parseFloat($("#ytg").val()); // years to grow
        var iic = $("#iic").val(); // Interest is Compounded
        function calc(x,y){
        
        var m = 1+x/269;
        var m = amount*m;
        var n = y*269;
        var n = Math.pow(m,n);
        }
        function cal(x,y){
           var dd = amount*(1+x/269) ** (y*269);           
           var dd = parseInt(dd.toFixed(2));
           return dd;
        }
        function ca(B1,B4){
            var dd = B1*(1+((0.48*B4)/269)) ** (B4*269);
            return parseInt(dd);
         }
        function ytgcal(B1,B4){
            var dd = B1*(1+((0.48*B4)/269)) ** (B4*269)+B1;  console.log(dd);
            return parseInt(dd);
           
        }
       
        if (amount !== 'undefined') {
            $("#showamount").text(amount);
            $("#showytg").text(ytg);
            $("#showmpp").text(mpp);
            $("#mnp").val(amount*0.04);
            $("#mgp").val(parseFloat(amount)+amount*0.04);
            
            var np1 = cal(0.48,1);
            $("#npy1").val(np1);
            var np2 = cal(0.96,2);
            $("#npy2").val(np2);
            var np3 = cal(1.48,3);
            $("#npy3").val(np3);

            $("#gpy1").val(np1);
            $("#gpy2").val(Number(amount)+Number(np2));
            $("#gpy3").val(Number(amount)+Number(np3));


            $("#ytgnp").val(ca(amount,ytg));
            $("#ytggp").val(ytgcal(amount,ytg));
        }        
    });
});