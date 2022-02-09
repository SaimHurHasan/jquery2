var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];
$(document).ready(function () { 
 display(products);

 $("#menu2").on("change", function () {
    var temp=" ";
    var value1=$("#menu2").val();
    dispbrand(temp,value1,products);
 })

 $("#menu1").on("change",function(){
    var temp=" ";
     var value2=$("#menu1").val();
    os1(temp,value2,products);

 })
 $("#f2").on("click",function(){
    var temp=" ";
    var value3=$("#f1").val();
   search(temp,value3,products);

})
 $("#delete").on("click",function () {
    var del = $(this).parent("tr").siblings("#rem").html();
    remove(del);

  });
    
});


function display(products){
    var html1=" ";
    for(var i=0;i<products.length;i++){
        html1+='<tr id="rem"><td>'+products[i].id+'</td>'+'<td id="name">'+products[i].name+'</td><td id="brand">'+products[i].brand+'</td><td id="os">'+products[i].os +'</td><td><input type="button" name="Delete" id="delete" value="Delete"></td></tr>';
    }
    $("#b1").html(html1);
}

function dispbrand(temp,value1,products){

for(var i=0;i<products.length; i++){
    if(value1 == product[i].brand){
   temp+='<tr id="rem"><td>'+products[i].id+'</td>'+'<td>'+products[i].name+'</td><td>'+products[i].brand+'</td><td>'+products[i].os +'</td><td><input type="button" name="Delete" id="delete" value="Delete"></td></tr>';
}
}

 $("#b1").html(temp);
}
function os1(temp,value2,products){

    for(var i=0;i<products.length; i++){
        if( value2 == product[i].os){
       temp+='<tr id="rem"><td>'+products[i].id+'</td>'+'<td>'+products[i].name+'</td><td>'+products[i].brand+'</td><td>'+products[i].os +'</td><td><input type="button" name="Delete" id="delete" value="Delete"></td></tr>';
    }
    }
        $("#b1").html(temp);
    }
    function search(temp,value3,products){
        for(var i=0;i<products.length; i++){
            if(value3 == product[i].id){
           temp+='<tr id="rem"><td>'+products[i].id+'</td>'+'<td>'+products[i].name+'</td><td>'+products[i].brand+'</td><td>'+products[i].os +'</td><td><input type="button" name="Delete" id="delete" value="Delete"></td></tr>';
        }
        
    }

            $("#b1").html(temp);
        }
        

function remove(data) {
    newArray = [];
    for (var i = 0; i < products.length; i++) {
      if (products[i].id != data) {
        newArray.push(products[i]);
      }
    }
    products = newArray;
    display(products);
  }
  