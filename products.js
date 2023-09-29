item1 =["Acer","Laptop","Predator",40000,1,"Acer Predator.jpg"];
item2 =["Acer","Laptop","Aspire 7",50000,1,"acer aspire7.jpg"];
item3 =["Lenovo","Laptop","Legion",45000,1,"lenovo legion.jpg"];
item4 =["Sony","Laptop","VAIO",65000,1,"Sony Vaio.jpg"];
item5 =["Samsung","Laptop","GalaxyBook",61000,1,"samsunglaptop.jpg"];
item6 =["Lenovo","Laptop","Ideapad",45000,1,"lenovo ideapad.jpg"];
item7 =["Acer","Laptop","Aspire Green",55000,1,"acerlaptop.jpg"];

item11 =["Sony","Tv","Bravia",22000,1,"sonytv.jpg"];
item12 =["Sony","Tv","KDL",18000,1,"sony kdl.jpg"];
item13 =["Onida","Tv","Leo",21000,1,"onida leo.jpg"];
item14 =["Acer","Tv","Series A7",15000,1,"acer series a7.jpg"];
item15 =["Samsung","Tv","Neo QLED",16000,1,"Samsung neo Qled.webp"];
item16 =["Samsung","Tv","Crystal",15000,1,"samsung crystal.webp"];
item17 =["Onida","Tv","SmartTv",13000,1,"onidatv.jpg"];


item21 =["Samsung","Mobile","Galaxy S22",52000,1,"Samsung galaxy s22.webp"];
item22 =["Sony","Mobile","Xperia Z",38000,1,"sonyxperiaz.png"];
item23 =["Lenovo","Mobile","A850",16000,1,"lenovo a850.jpg"];
item24 =["Acer","Mobile","Liquid",19000,1,"Acer liquid.jpg"];
item25 =["Samsung","Mobile","Galaxy Z Fold3",52000,1,"Galaxy z fold3.jpg"];
item26 =["Sony","Mobile","Xperia 1v",45000,1,"sony xperia 1v.jpg"];
item27 =["Lenovo","Mobile","Smartphone",12000,1,"lenovomobile.webp"];


item31 =["Lenovo","Watch","Smart Fit",28000,1,"smart fit.jpg"];
item32 =["Sony","Watch","Smart",31000,1,"sonywatch.webp"];
item33 =["Samsung","Watch","Galaxy Watch",19000,1,"galaxy watch.jpg"];
item34 =["Sony","Watch","Smart2",35000,1,"sony smart2.webp"];
item35 =["Samsung","Watch","Galaxy Watch 2",32000,1,"galaxywatch.webp"];
item36 =["Samsung","Watch","Galaxy Watch 3",29000,1,"galaxy watch4.jpg"];

items=[item1,item2,item3,item4,item5,item6,item7,item11,item12,item13,item14,item15,item16,item17,item21,item22,item23,item24,item25,item26,item27,item31,item32,item33,item34,item35,item36];

showproducts();

function showproducts()
{
    let cat = localStorage.getItem("cat");

    let html3="";



    items.forEach(function(e,index){
    
    if(e[1] == cat)
    {
            html3 += 
            `
            <div class = "col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 border">
            <div class = "container" style="background-color: white">
            <center>
                <table>
                    <tr><th>
                        <a  onClick="passvalues('${e[0]}','${e[1]}','${e[2]}','${e[3]}','${e[4]}','${e[5]}')" id="ab"> <img src =' images/${e[5]}' height = 150px weight = 150px></a>
                    </th></tr><br>
                    <tr style='background-color: #ebe9eb'><th style='text-align: center'>
                        <a  onClick="passvalues('${e[0]}','${e[1]}','${e[2]}','${e[3]}','${e[4]}','${e[5]}')" id="ab">${e[0]} ${e[2]}</a>
                    </th></tr>
                </table>
            </center>
            </div>
            </div>
            
            `;
    }
    

   })
    
    
    let products = document.getElementById("products");
    
    products.innerHTML = html3;

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
