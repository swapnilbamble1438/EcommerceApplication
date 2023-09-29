
function passcatval(a)
{

localStorage.setItem("cat",a);


window.location.href = "products.html";
return false;
}


cartdetails();
function cartdetails()
{
	let citems = localStorage.getItem("citems");

    if (citems == null) {
       cartitemsObj = [];
    } else {
      cartitemsObj = JSON.parse(citems);
    }

	let totalcartitems = 0;
	let totalprice = 0;
	cartitemsObj.forEach(function(e,index){
		totalcartitems += parseInt(e[4]);
        
        totalprice += parseInt(e[3]);
    });

	document.getElementById("ctotal").innerHTML = totalcartitems;
	document.getElementById("camount").innerHTML = 
	`
	<h2><input type ="text"  value= "${totalprice}" id="creditamount" class="c" disabled selected required></h2>

	`;

}







