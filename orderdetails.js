
orderdetails();

function orderdetails()
{

    let orderdetails = localStorage.getItem("orderdetails");

    if(orderdetails == null)
    {
        orderdetailsObj = [];
    }
    else{
        orderdetailsObj = JSON.parse(orderdetails);
    }

    let html4 ="";
    let date = localStorage.getItem("date");

    let totalamt = 0;

    orderdetailsObj.forEach(function(e,index)
    {
        if(e[8] === date)
        {
            totalamt=e[7];

            html4 +=`

            			
							<tr>
                            <th>Customer Name: </th>
                            <th>${e[0]}</th>
                        </tr>
                        
                        <tr>
                            <th>City: </th>
                            <th>${e[3]}</th>
                        </tr>
                        
                        <tr>
                            <th>Date: </th>
                            <th>${e[8]}</th>
                        </tr>
                    
                        <tr>
                            <th>Total Price: </th>
                            <th>${e[7]}</th>
                        </tr>
                
                        <tr>
                            <th>Status: </th>
                            <th>Processing</th>
                        </tr>
            
            
            `;


        }

    });
    document.getElementById("ord").innerHTML=html4;



//========================================

let orderslist = localStorage.getItem("orderslist");

    if(orderslist == null)
    {
        orderslistObj = [];
    }
    else{
        orderslistObj = JSON.parse(orderslist);
    }

     let html5 ="";

     for(let i=0; i<orderslistObj.length; i++)
     {
            
            if(orderslistObj[i][6] === date)
            {
                html5 +=
                    `
                    <tr>
                    <td style='border: 1px solid ; text-align: center'>${orderslistObj[i][6]}</td>
                                
                    <td style='border: 1px solid ; text-align: center'>${orderslistObj[i][0]}</td>
                    
                    <td style='border: 1px solid ; text-align: center'>${orderslistObj[i][1]}</td>
                    
                    <td style='border: 1px solid ; text-align: center'>${orderslistObj[i][2]}</td>
                    
                    <td style='border: 1px solid ; text-align: center'>₹ ${orderslistObj[i][3]}</td>
                    
                    <td style='border: 1px solid ; text-align: center'>${orderslistObj[i][4]}</td>
                    
                    <td style='border: 1px solid ; text-align: center'><img src='images/${orderslistObj[i][5]}' height= 100px weight = 100px></td>
                            
        
        
                    </tr>
     
                    
                    `;
            }
         
     }


    html5 +=`
    <tr>
		<td></td>
		<td></td>
		<td></td>
		<td><h5>Total Price:</h5></td>
		<td><h5 style='color: firebrick'>₹<span id="totalamt"></span> </h5></td>
		<td></td>
		<td></td>
		
	</tr>
    `;

    document.getElementById("orl").innerHTML = html5;

    document.getElementById("totalamt").innerHTML = totalamt;



}