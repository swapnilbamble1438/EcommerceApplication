

let regmsg = localStorage.getItem("regmsg")
if(regmsg != null || regmsg != "" || regmsg != undefined)
{
   document.getElementById("msg").innerHTML = regmsg;
}

function register()
{
    localStorage.removeItem("regmsg");
    let name = $('#name').val();
    let password = $('#password').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
  

    if(name == null || name == undefined || name == ""
    && password == null || name == undefined || password==""
    && email == null || email == undefined || email == ""
     && phone == 0   || phone == undefined || phone=="" || phone == null)
     {
        document.getElementById("msg").innerHTML = "All fields are required please enter all fields";
       
     }
     else
     {

            let customer = [name.trim(),password.trim(),email.trim(),phone.trim()];

            let customers = localStorage.getItem("customers");
            
            

            if(customers == null)
            {
                customersObj = [];
            }
            else{
                customersObj = JSON.parse(customers);
            }

            let b=0;
            customersObj.forEach(function(e,index)
            {
                if(e[2] == customer[2])
                {
                    b=1;
                   
                }
            });
           
             if(b==0)
            {
                customersObj.push(customer);
                location.reload();
                localStorage.setItem("regmsg","Registration Successful, You can login Now..");
            }
                localStorage.setItem("customers",JSON.stringify(customersObj));

            if(b==1)
            {
                document.getElementById("msg").innerHTML = "Registration Failed, Same EmailId already exist";
            }
            

        }     
}






