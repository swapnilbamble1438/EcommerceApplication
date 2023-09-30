
let popcontent = document.getElementById("popmodal");

let modal = `

		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header bg-dark text-white">
		        <h5 class="modal-title" id="exampleModalLabel">Ecommerce Application</h5>
		        
		        
		        
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      
		      	</div>
		    	
		    	<div class="modal-body">
					<div class="container text-center">
						
					
			
					
					<h1>It's a Javascript Version !</h1>
                                        <h3>It is just for presentation.</h3>
					<h3>For Java J2EE version of Application,</h3>
					<h3> you can import it from here:<h3>
					<h3><a href="https://github.com/swapnilbamble1438/EcommerceApp">Project Link</a></h3>
					<h3>Both Versions are same but J2EE version supports Add Product Feature</h3>
					
					
					
					
				</div>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
	


`;

popcontent.innerHTML = modal;



$(document).ready(function()
	{
		console.log("first function called")
		
		let editStatus= false;
		
		$('#profile-edit-btn').click(function()
		{
			
			console.log("second function called");
			
			if(editStatus == false)
				{
					$('#profile-details').hide();
					$('#profile-edit').show();
					editStatus = true;
					
					$(this).text("Back");
				}else
				{
					$('#profile-details').show();
					$('#profile-edit').hide();	
					editStatus= false;
					
					$(this).text("Edit");
				}
			
			
			
		});
	});
