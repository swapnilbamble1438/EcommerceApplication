
let contentheader = document.getElementById("header");
let header ="";

let loginadmin = localStorage.getItem("loginadminemail");
let logincustomer = localStorage.getItem("logincustomeremail");
if(logincustomer != null)
{

    header +=
	`
	<div style='margin-left:50% '>
	
<b>	<a href="cart.html" class="w3-bar-item w3-button" ><img src = images/cart.png height=40px alt=Cart></a>

	<b style="position: relative;
  top: 16px;
  right: 37px;"><span style="height: 25px;
  width: 25px;
  background-color: red;
  border-radius: 50%;
  display: inline-block"><b style="color:white"><center><span id="ctotal"></span></center></b></span></b>
	</b>	
	
	<a href="index.html" class="w3-bar-item w3-button"><b style="color:firebrick">Welcome <span id="cusname"></span></b></a>
	
	<a href="orderslist.html" class="w3-bar-item w3-button"><b>Orders List</b></a>
	
	<a href="contactus.html" class="w3-bar-item w3-button"><b>Contact Us</b></a>

	<a onClick="customerlogout()" class="w3-bar-item w3-button"><b>Logout</b></a>
	
	
	</div>
	
	<center>
	
	<b class="w3-wide" style="width:250px"> <h3><b>Online Electronic Shopping</b></h3></b>
	
	<div class=" w3-large w3-text-grey" style="font-weight:bold">
	
	<a href="index.html" class="w3-bar-item w3-button"  >Home</a>&ensp;
	
	<a href="category.html" class="w3-bar-item w3-button">Categories</a>&ensp;
	
	<a onClick="passcatval('Tv')" class="w3-bar-item w3-button">Tv</a>&ensp;
	<a onClick="passcatval('Laptop')" class="w3-bar-item w3-button">Laptop</a>&ensp;
	<a onClick="passcatval('Mobile')" class="w3-bar-item w3-button">Mobile</a>&ensp;
	<a onClick="passcatval('Watch')" class="w3-bar-item w3-button">Watch</a>&ensp;
	
	<a href="allproducts.html" class="w3-bar-item w3-button">View All Product</a>&ensp;
	
	<a href="aboutus.html" class="w3-bar-item w3-button">About Us</a>&ensp;
	
	</div>
	<hr>
		`;



	}
else if(loginadmin != null )
{
    header +=
	`
	<div style='margin-left:50% '>
	
<b>	<a href="cart.html" class="w3-bar-item w3-button" ><img src = images/cart.png height=40px alt=Cart></a>

	<b style="position: relative;
  top: 16px;
  right: 37px;"><span style="height: 25px;
  width: 25px;
  background-color: red;
  border-radius: 50%;
  display: inline-block"><b style="color:white"><center><span id="ctotal"></span></center></b></span></b>
	</b>	
	
	<a href="index.html" class="w3-bar-item w3-button"><b style="color:firebrick">Welcome Admin</b></a>
	
	<a href="tablecustomers.html" class="w3-bar-item w3-button"><b>Manage Customers</b></a>
	
	<a href="tablecontactus.html" class="w3-bar-item w3-button"><b>Messages</b></a>
	
	<a data-toggle="modal" data-target="#exampleModal" class="w3-bar-item w3-button"><b>Add Product</b></a>


	<a style='margin-left:15%; ' onClick="adminlogout()" class="w3-bar-item w3-button"><b>Logout</b></a>
	
	
	</div>
	
	<center>
	
	<b class="w3-wide" style="width:250px"> <h3><b>Online Electronic Shopping</b></h3></b>
	
	<div class=" w3-large w3-text-grey" style="font-weight:bold">
	
	<a href="index.html" class="w3-bar-item w3-button"  >Home</a>&ensp;
	
	<a href="category.html" class="w3-bar-item w3-button">Categories</a>&ensp;
	
	<a onClick="passcatval('Tv')" class="w3-bar-item w3-button">Tv</a>&ensp;
	<a onClick="passcatval('Laptop')" class="w3-bar-item w3-button">Laptop</a>&ensp;
	<a onClick="passcatval('Mobile')" class="w3-bar-item w3-button">Mobile</a>&ensp;
	<a onClick="passcatval('Watch')" class="w3-bar-item w3-button">Watch</a>&ensp;
	
	<a href="allproducts.html" class="w3-bar-item w3-button">View All Product</a>&ensp;
	
	<a href="aboutus.html" class="w3-bar-item w3-button">About Us</a>&ensp;
	
	</div>
	<hr>
		`;

		
}
else {
  header +=
	`
	<div style='margin-left:50% '>
	
<b>	<a href="cart.html" class="w3-bar-item w3-button" ><img src = images/cart.png height=40px alt=Cart></a>

	<b style="position: relative;
  top: 16px;
  right: 37px;"><span style="height: 25px;
  width: 25px;
  background-color: red;
  border-radius: 50%;
  display: inline-block"><b style="color:white"><center><span id="ctotal"></span></center></b></span></b>
	</b>	
	
	<a href="customer_reg.html" class="w3-bar-item w3-button"><b>Customer Registration</b></a>
	
	<a href="customerlogin.html" class="w3-bar-item w3-button"><b>Customer Login</b></a>
	
	<a href="adminlogin.html" class="w3-bar-item w3-button"><b>Admin Login</b></a>
	
	<a href="contactus.html" class="w3-bar-item w3-button"><b>Contact Us</b></a>
	
	
	</div>
	
	<center>
	
	<b class="w3-wide" style="width:250px"> <h3><b>Online Electronic Shopping</b></h3></b>
	
	<div class=" w3-large w3-text-grey" style="font-weight:bold">
	
	<a href="index.html" class="w3-bar-item w3-button"  >Home</a>&ensp;
	
	<a href="category.html" class="w3-bar-item w3-button">Categories</a>&ensp;
	
	<a onClick="passcatval('Tv')" class="w3-bar-item w3-button">Tv</a>&ensp;
	<a onClick="passcatval('Laptop')" class="w3-bar-item w3-button">Laptop</a>&ensp;
	<a onClick="passcatval('Mobile')" class="w3-bar-item w3-button">Mobile</a>&ensp;
	<a onClick="passcatval('Watch')" class="w3-bar-item w3-button">Watch</a>&ensp;
	
	<a href="allproducts.html" class="w3-bar-item w3-button">View All Product</a>&ensp;
	
	<a href="aboutus.html" class="w3-bar-item w3-button">About Us</a>&ensp;
	
	</div>
	<hr>
		`;
}	

		contentheader.innerHTML = header;


		function adminlogout()
		{
			localStorage.removeItem("loginadminemail");
			localStorage.removeItem("loginadminpassword");
			window.location.href = "adminlogin.html";
			localStorage.setItem("alogoutmsg","Logout Successfully");
		
		}

		function customerlogout()
{
    localStorage.removeItem("logincustomeremail");
    localStorage.removeItem("logincustomerpassword");
    window.location.href = "customerlogin.html";
    localStorage.setItem("clogoutmsg","Logout Successfully");

}

if(logincustomer != null)
{
	showCustomer();
}

function showCustomer()
{
	let customers = localStorage.getItem("customers");
	if(customers == null)
	{
		customersObj=[];
	}
	else{
		customersObj = JSON.parse(customers);
	}
	let email = localStorage.getItem("logincustomeremail");
	let password= localStorage.getItem("logincustomerpassword");
	let name = "";
	customersObj.forEach(function(e,index){
		if(e[2] === email.trim())
		{
			name = e[0];
		}
	});
	document.getElementById("cusname").innerHTML = name;

	document.getElementById("cusnamefield").innerHTML = 
	`
	<h2><input type ="text" id="cname"  value ="${name}" class="c" disabled selected required></h2>
	
	<input type="hidden" id="email" value="${email}">
	`;

}
