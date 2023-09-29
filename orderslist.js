
let ordermsg = localStorage.getItem("ordermsg");
if(ordermsg != null || ordermsg != "" || ordermsg != undefined)
{
   document.getElementById("msg").innerHTML = ordermsg;
}

orderslist();
function orderslist()
{

    let orderdetails = localStorage.getItem("orderdetails");

    if(orderdetails == null)
    {
        orderdetailsObj = [];
    }
    else{
        orderdetailsObj = JSON.parse(orderdetails);
    }

    let html3 ="";
    let email = localStorage.getItem("logincustomeremail");

    orderdetailsObj.forEach(function(e,index)
    {
       if(e[1] === email)
        {
        html3 +=`
    
        
				<tr>
                <td style='border: 1px solid ; text-align: center'>${e[0]}</td>
                <td style='border: 1px solid ; text-align: center'>${e[3]}</td>
                <td style='border: 1px solid ; text-align: center'>${e[8]}</td>

                
                    <td style='border: 1px solid ; text-align: center'>₹ ${e[7]}</td>
                    
                    <td style='border: 1px solid ; text-align: center'>Processing</td>
                    
                <td style='border: 1px solid ; text-align: center'><a onClick="goorderdetails('${e[8]}')" style='color: firebrick'>Order Details</a></td>
                
                
                    <td style='border: 1px solid ; text-align: center'><a onClick="deleteitem(${index},'${e[8]}')"><img src = "images/delete.jpg" alt="Remove" height= 25px></td>
                
                
            </tr>
    
    
        `;
        }
    })
   document.getElementById("od").innerHTML=html3;


}

function goorderdetails(date)
{
    localStorage.setItem("date",date);
window.location.href="orderdetails.html";
}



function deleteitem(index,date)
{
   
    let orderdetails = localStorage.getItem("orderdetails");

    if(orderdetails == null)
    {
        orderdetailsObj = [];
    }
    else{
        orderdetailsObj = JSON.parse(orderdetails);
    }

    
     orderdetailsObj.splice(index,1);
    localStorage.setItem("orderdetails",JSON.stringify(orderdetailsObj));
    
    let orderslist = localStorage.getItem("orderslist");

    if(orderslist == null)
    {
        orderslistObj = [];
    }
    else{
        orderslistObj = JSON.parse(orderslist);
    }

    let indexArr=[];

    for(let i=0; i< orderslistObj.length; i++)
     {
            
            if(orderslistObj[i][6] === date)
            {
                indexArr.push(i);
            }

        }       
       
      
        for(i=indexArr.length-1;i >=0;i--)
        {        
             orderslistObj.splice(indexArr[i],1); 
        }

        localStorage.setItem("orderslist",JSON.stringify(orderslistObj));
        localStorage.setItem("ordermsg","Your order is deleted");
       location.reload();

}