//window.onload = function () {}

showitemDetails();

function showitemDetails() {
		
    var bname = localStorage.getItem("a"); 
    document.getElementById("bname").innerHTML = bname;

    var cname = localStorage.getItem("b"); 
    document.getElementById("cname").innerHTML = cname;

    var pname = localStorage.getItem("c"); 
    document.getElementById("pname").innerHTML = pname;

    var pprice = localStorage.getItem("d"); 
    document.getElementById("pprice").innerHTML = pprice;

    var pquantity = localStorage.getItem("e"); 
    document.getElementById("pquantity").innerHTML = pquantity;

    var pimage = localStorage.getItem("f"); 
    document.getElementById("pimage").innerHTML = 
    `<th colspan='2' align='center'><img src='images/`+ pimage +`'height= 250px></th>`;

    document.getElementById("pname2").innerHTML = pname;

    document.getElementById("pprice2").innerHTML = pprice;

    document.getElementById("addtocart").innerHTML =
    `<th style='text-align: center' colspan='2' align='center' bgcolor='#D6EEEE'><a onClick="addtocart('`+bname+`','`+cname+`','`+pname+`','`+pprice+`','`+pquantity+`','`+pimage+`')">Add To Cart</th>`;
}

function addtocart(a,b,c,d,e,f)
{

localStorage.setItem("ac",a);
localStorage.setItem("bc",b);
localStorage.setItem("cc",c);
localStorage.setItem("dc",d);
localStorage.setItem("ec",e);
localStorage.setItem("fc",f);

window.location.href = "cart.html";
return false;
}