contactus();

function contactus()
{
    let contactusmsgs = localStorage.getItem("contusmsgs");

    if(contactusmsgs == null)
    {
        contactusmsgsObj = [];
    }
    else{
        contactusmsgsObj = JSON.parse(contactusmsgs);
    }

    let html6="";

 contactusmsgsObj.forEach(function(e,index)
{

    html6 +=
    `
    <tr>
    <td style='border: 1px solid ; text-align: center'>${e[0]}</td>
    <td style='border: 1px solid ; text-align: center'>${e[1]}</td>
    <td style='border: 1px solid ; text-align: center'>${e[2]}</td>

    
        <td style='border: 1px solid ; text-align: center'> ${e[3]}</td>
        
    
        <td style='border: 1px solid ; text-align: center'><a onClick="delmsg('${e[index]}')"><img src = "images/delete.jpg" alt="Remove" height= 25px></a></td>
    
    
</tr>

    
    `;

});


document.getElementById("ctab").innerHTML = html6;


}




function delmsg(index)
{
    let contactusmsgs = localStorage.getItem("contusmsgs");

    if(contactusmsgs == null)
    {
        contactusmsgsObj = [];
    }
    else{
        contactusmsgsObj = JSON.parse(contactusmsgs);
    }

    contactusmsgsObj.splice(index,1);
    localStorage.setItem("contusmsgs",JSON.stringify(contactusmsgsObj));
    location.reload();


}