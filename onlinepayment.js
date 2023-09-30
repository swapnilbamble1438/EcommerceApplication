
let html8 = `<option value="" disabled selected>Year</option>`;

for(let i = 2022;i <= 2040; i ++)
{
    html8 +=    `
    <option>${i}</option>
    `;
}

document.getElementById("credityear").innerHTML = html8;


function cancelPay()
{
    window.location.href= "index.html";
}

function proceedPay()
{
    let creditname = $('#creditname').val().trim();
    let creditnumber = $('#creditnumber').val().trim();
  
    let creditcvvno = $('#creditcvvno').val().trim();
    let creditamount = $('#creditamount').val().trim();

     if(creditname == null || creditname == undefined || creditname == ""
    && creditnumber == null || creditnumber == undefined || creditnumber==""
    && creditcvvno == null || creditcvvno == undefined || creditcvvno==""
    && creditamount == null || creditamount == undefined || creditamount==""   )
    {
        document.getElementById("msg").innerHTML = "All fields are required please enter all fields";
    }
    else{
        window.location.href= "confirmpayment.html";
    }
}
