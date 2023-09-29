checkCustomer();
function checkCustomer()
{
  

	let email = localStorage.getItem("logincustomeremail");
	
    if(email == null)
    {
        localStorage.setItem("shiplogoutmsg","Login Required");
        window.location.href = "customerlogin.html";
    }


}

function cashondel()
{
    let cname = $('#cname').val().trim();
    let email = $('#email').val().trim();
    let  address= $('#address').val().trim();
    let city = $('#city').val().trim();
    let state = $('#state').val().trim();
    let country = $('#country').val().trim();
    let pincode = $('#pincode').val().trim();

    if(cname == null || cname == undefined || cname == ""
    && email == null || email == undefined || email==""
    && address == null || email == address || address==""
    && city == null || email == city || city==""
    && state == null || email == state || state=="" 
    && country == null || country == undefined || country==""
    && pincode == null || pincode == undefined || pincode==""   )
     {
        document.getElementById("msg").innerHTML = "All fields are required please enter all fields";
       
     }
     else{
        localStorage.setItem("pcname",cname);
         localStorage.setItem("pemail",email);
        localStorage.setItem("paddress",address);
        localStorage.setItem("pcity",city);
        localStorage.setItem("pstate",state);
         localStorage.setItem("pcountry",country);
         localStorage.setItem("ppincode",pincode);
 
    window.location.href = "confirmpayment.html";
     }
}


function onlinepay()
{
    let cname = $('#cname').val().trim();
    let email = $('#email').val().trim();
    let  address= $('#address').val().trim();
    let city = $('#city').val().trim();
    let state = $('#state').val().trim();
    let country = $('#country').val().trim();
    let pincode = $('#pincode').val().trim();

    if(cname == null || cname == undefined || cname == ""
    && email == null || email == undefined || email==""
    && address == null || email == address || address==""
    && city == null || email == city || city==""
    && state == null || email == state || state=="" 
    && country == null || country == undefined || country==""
    && pincode == null || pincode == undefined || pincode==""   )
     {
        document.getElementById("msg").innerHTML = "All fields are required please enter all fields";

       
     }
     else{
         localStorage.setItem("pcname",cname);
         localStorage.setItem("pemail",email);
        localStorage.setItem("paddress",address);
        localStorage.setItem("pcity",city);
        localStorage.setItem("pstate",state);
         localStorage.setItem("pcountry",country);
         localStorage.setItem("ppincode",pincode);
    window.location.href = "onlinepayment.html";
     }
}