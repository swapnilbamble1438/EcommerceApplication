checkAdmin();
function checkAdmin()
{
  

	let aemail = localStorage.getItem("loginadminemail");
	
    if(aemail == null)
    {
        localStorage.setItem("alogoutmsg","Login Required");
        window.location.href = "adminlogin.html";
    }

}
