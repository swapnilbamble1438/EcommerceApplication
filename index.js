
    


//localStorage.clear();

let slideIndex = 0;

item1 =["Acer","Laptop","Predator",40000,1,"Acer Predator.jpg"];
item2 =["Acer","Laptop","Aspire 7",50000,1,"acer aspire7.jpg"];
item3 =["Lenovo","Laptop","Legion",45000,1,"lenovo legion.jpg"];
item4 =["Sony","Laptop","VAIO",65000,1,"Sony Vaio.jpg"];

item11 =["Sony","Tv","Bravia",22000,1,"sonytv.jpg"];
item12 =["Sony","Tv","KDL",18000,1,"sony kdl.jpg"];
item13 =["Onida","Tv","Leo",21000,1,"onida leo.jpg"];
item14 =["Acer","Tv","Series A7",15000,1,"acer series a7.jpg"];

item21 =["Samsung","Mobile","Galaxy S22",52000,1,"Samsung galaxy s22.webp"];
item22 =["Sony","Mobile","Xperia Z",38000,1,"sonyxperiaz.png"];
item23 =["Lenovo","Mobile","A850",16000,1,"lenovo a850.jpg"];
item24 =["Acer","Mobile","Liquid",19000,1,"Acer liquid.jpg"];

item31 =["Lenovo","Watch","Smart Fit",28000,1,"smart fit.jpg"];
item32 =["Sony","Watch","Smart",31000,1,"sonywatch.webp"];
item33 =["Samsung","Watch","Galaxy",19000,1,"emptycart.png"];
item34 =["Sony","Watch","Smart2",35000,1,"sony smart2.webp"];




items=[item1,item11,item21,item31,item2,item12,item22,item32];

showSlides();
showitems();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}




  
  
  function showitems(){

    let html="";
    items.forEach(function(e,index){
        html +=
        `
        <b>
        <div class = "container border" style="background-color: white">
        <center>
          <table>
            <tr><th>
              <a onClick="passvalues('${e[0]}','${e[1]}','${e[2]}','${e[3]}','${e[4]}','${e[5]}')"  id="ab"> <img src ='images/${e[5]}' height = 150px weight = 150px></a>
            </th></tr><br>
            <tr style='background-color: #ebe9eb'><th style='text-align: center'>
              <a onClick="passvalues('${e[0]}','${e[1]}','${e[2]}','${e[3]}','${e[4]}','${e[5]}')" id="ab"> ${e[2]}</a>
            </th></tr>
          </table>	
        </center>
        </div> 
        </b>`;
    });
    let allitems = document.getElementById("items");
    if (items.length != 0) {
    allitems.innerHTML = html;
    }
    else{
        allitems.innerHTML =   `No items present`;
    }

  }
   


function passvalues(a,b,c,d,e,f)
{

localStorage.setItem("a",a);
localStorage.setItem("b",b);
localStorage.setItem("c",c);
localStorage.setItem("d",d);
localStorage.setItem("e",e);
localStorage.setItem("f",f);

window.location.href = "selecteditem.html";
return false;

}



