
custable();

function custable(){


    let customers = localStorage.getItem("customers");
            
    if(customers == null)
    {
        customersObj = [];
    }
    else{
        customersObj = JSON.parse(customers);
    }

    let html7 ="";

    customersObj.forEach(function(e,index)
    {
       html7 += `
       <tr>
				<td style='border: 1px solid ; text-align: center'>${e[0]}</td>
				<td style='border: 1px solid ; text-align: center'>${e[1]}</td>
				<td style='border: 1px solid ; text-align: center'>${e[2]}</td>
				<td style='border: 1px solid ; text-align: center'>${e[3]}</td>
				<td style='border: 1px solid ; text-align: center; color: firebrick'> <a onClick="delCus('${e[index]}','${e[2]}')"><img src = "images/delete.jpg" alt="Remove" height= 25px></a></td>
			</tr>
		
       
       `;
    });

    document.getElementById("custab").innerHTML = html7;



}


function delCus(index,email)
{
   
    let customers = localStorage.getItem("customers");
            
    if(customers == null)
    {
        customersObj = [];
    }
    else{
        customersObj = JSON.parse(customers);
    }

    customersObj.splice(index,1);
    localStorage.setItem("customers",JSON.stringify(customersObj));
   

    //================= delete orderdetails================

    let cemail= email;
    deleteorderdetails(cemail);

  //============== delete order list===============
  

}



function deleteorderdetails(email)
{
    let orderdetails = localStorage.getItem("orderdetails");

    if(orderdetails == null)
    {
        orderdetailsObj = [];
    }
    else{
        orderdetailsObj = JSON.parse(orderdetails);
    }

    let indexArr = [];
    for(let i=0; i< orderdetailsObj.length; i++)
    {
           
           if(orderdetailsObj[i][1] === email)
           {
               indexArr.push(i);
           }

       }  

       for(i = indexArr.length-1; i>= 0; i--)
       {
        orderdetailsObj.splice(indexArr[i],1);
       }  
       localStorage.setItem("orderdetails",JSON.stringify(orderdetailsObj));

       let cemail=email;

      deleteorderslist(cemail);

}

function deleteorderslist(email)
{

    let orderslist = localStorage.getItem("orderslist");

  if(orderslist == null)
  {
      orderslistObj = [];
  }
  else{
      orderslistObj = JSON.parse(orderslist);
  }

  let indexArr2=[];

  for(let i=0; i< orderslistObj.length; i++)
   {
          
          if(orderslistObj[i][7] === email)
          {
              indexArr2.push(i);
          }

      }       
     
     
      for(i=indexArr2.length-1;i >=0;i--)
      {        
           orderslistObj.splice(indexArr2[i],1); 
      }

      localStorage.setItem("orderslist",JSON.stringify(orderslistObj));
      
     location.reload();
  

     
}