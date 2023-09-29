

let clogoutmsg = localStorage.getItem("clogoutmsg")
if(clogoutmsg != null || clogoutmsg != "" || clogoutmsg != undefined)
{
   document.getElementById("msg").innerHTML = clogoutmsg;
}
let shiplogoutmsg = localStorage.getItem("shiplogoutmsg")
if(shiplogoutmsg != null || shiplogoutmsg != "" || shiplogoutmsg != undefined)
{
   document.getElementById("msg").innerHTML = clogoutmsg;
}

function customerlogin()
{
    
    localStorage.removeItem("clogoutmsg");
    let email = $('#email').val().trim();
    let password = $('#password').val().trim();

    if(email == null || email == undefined || email == ""
    && password == null || password == undefined || password=="" )
     {
        document.getElementById("msg").innerHTML = "All fields are required please enter all fields";
       
     }
     else{
           
            let customers = localStorage.getItem("customers");
            if(customers == null)
            {
                customersObj=[];
            }
            else{
                customersObj = JSON.parse(customers);
            }
            let b = 0;
            customersObj.forEach(function(e,index){

                if(e[1] === password.trim() && e[2] === email.trim())
                {
                    b = 1;
                }
            })

            if(b == 1)
            {
                localStorage.setItem("logincustomeremail",email);
                localStorage.setItem("logincustomrpassword",password);

                if(shiplogoutmsg != null)
                {
                    window.location.href = "shippingaddress.html";
                }
                else{
                window.location.href = "index.html";
                }
            }
            else{
                document.getElementById("msg").innerHTML = "Please enter correct credentials";

            }


     }

}