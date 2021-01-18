/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
var subtotal=0;
   for(var i=0; i<3; i++){
      outputCartRow(filenames[i],titles[i],quantities[i],prices[i], calculateTotal(quantities[i], prices[i]));
      subtotal += calculateTotal(quantities[i], prices[i]);
   }

var tax=0.1*subtotal;
var shipping = 0;
if(subtotal < 1000){
	shipping=40;
}
var grandtotal= subtotal + tax + shipping;

        
window.onload = function(){
   document.getElementById('subtotal').innerHTML = '$'+subtotal.toString();
   document.getElementById('tax').innerHTML = '$'+tax.toString();
   document.getElementById('shipping').innerHTML = '$'+shipping.toString();
   document.getElementById('grandtotal').innerHTML = '$'+grandtotal.toString();
}