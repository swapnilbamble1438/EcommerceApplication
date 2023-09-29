
function confirmPayment()
{
  let customeremail = localStorage.getItem("logincustomeremail");
//=======================================================

	let citems = localStorage.getItem("citems");

    if (citems == null) {
       document.getElementById("msg").innerHTML = "Your cart is Empty first select any product.";
    } 
    else {

        let date = new Date();
//=====================================================

      cartitemsObj = JSON.parse(citems);
    
    let orderslist = localStorage.getItem("orderslist")
    if(orderslist == null)
    {
        orderslistObj = [];
    }
    else{
        orderslistObj = JSON.parse(orderslist);
    }

    let totalamount = 0;
	cartitemsObj.forEach(function(e,index){
        totalamount += parseInt(e[3]);
    });

   
    for(let i=0; i<cartitemsObj.length; i++)
    {
        let  orderlist=[];
       for(let j= 0; j< cartitemsObj[i].length; j++)
       {
         orderlist.push(cartitemsObj[i][j]);
         
            if(j==5)
            {
            orderlist.push(date);  
            orderlist.push(customeremail);
            orderslistObj.push(orderlist);
            }
        
      }
    }

    localStorage.setItem("orderslist",JSON.stringify(orderslistObj));

    //===============================================================
    
let cusname= localStorage.getItem("pcname");
let cusemail=  localStorage.getItem("pemail");
let cusaddress=        localStorage.getItem("paddress");
 let cuscity=     localStorage.getItem("pcity");
let cusstate=      localStorage.getItem("pstate");
let cuscountry=       localStorage.getItem("pcountry");
 let cuspincode=      localStorage.getItem("ppincode");

  
  let orderdetail = [cusname,cusemail,cusaddress,cuscity,cuspincode,cusstate,cuscountry,totalamount,date];

  let orderdetails = localStorage.getItem("orderdetails");
  if(orderdetails == null)
  {
      orderdetailsObj =[];
  }
  else{
      orderdetailsObj = JSON.parse(orderdetails);
  }
  orderdetailsObj.push(orderdetail);
  localStorage.setItem("orderdetails",JSON.stringify(orderdetailsObj));

 //============================================================= 
  removeorderdetail();

    localStorage.removeItem("citems");

    localStorage.setItem("ordermsg","Your order is confirmed");
    window.location.href="orderslist.html";

    }

}

function removeorderdetail()
{
    localStorage.removeItem("pcname");
    localStorage.removeItem("pemail");
 localStorage.removeItem("paddress");
  localStorage.removeItem("pcity");
   localStorage.removeItem("pstate");
  localStorage.removeItem("pcountry");
    localStorage.removeItem("ppincode");
}