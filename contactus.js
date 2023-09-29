

let cmsg = localStorage.getItem("cmsg");
if(cmsg != null || cmsg != "" || cmsg != undefined)
{
   document.getElementById("msg").innerHTML = cmsg;
}

function sendMsg()
{
    let name = $('#name').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let message = $('#message').val();



    if(name == null || name == undefined || name == ""
    && email == null || name == email || email==""
    && phone == null || phone == undefined || phone == ""
     && message == 0   || message == undefined || message=="" || message == null)
     {
        document.getElementById("msg").innerHTML = "All fields are required please enter all fields";
       
     }
     else{

        let contusmsg = [name.trim(),email.trim(),phone.trim(),message.trim()];

        let contusmsgs = localStorage.getItem("contusmsgs");

        if(contusmsgs == null)
        {
            contusmsgsObj = [];
        }
        else{
            contusmsgsObj = JSON.parse(contusmsgs);
        }
        contusmsgsObj.push(contusmsg);
        localStorage.setItem("contusmsgs",JSON.stringify(contusmsgsObj));
        
        localStorage.setItem("cmsg","Thankyou for contacting us, we will reply you soon");
        location.reload();


     }


}