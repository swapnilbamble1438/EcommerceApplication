checkCustomer();
function checkCustomer()
{
  

	let email = localStorage.getItem("logincustomeremail");
	
    if(email == null)
    {
        localStorage.setItem("clogoutmsg","Login Required");
        window.location.href = "customerlogin.html";
    }

}
