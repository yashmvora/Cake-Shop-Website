var data=initMenu();
var urlpara=new URLSearchParams(location.search);
function imagemenu(){
  var cakes="";
  for(var i=0;i<data.length;i++){
    cakes+= "<img src=\""+data[i].imagefile+"\" title=\""+data[i].description+"\" id= \""+data[i].description+"\" onclick= \"imgfunc('"+data[i].description+"')\">";
  }
  document.querySelector(".imgmenu").innerHTML=cakes;
}

imagemenu();

function getinfo(){
document.querySelector(".teleno").value=localStorage.getItem("Telephone_No");
document.querySelector(".datedel").value=localStorage.getItem("Pick_Up");
var button_del=urlpara.get("method");
if(button_del=="delivery"){
document.querySelector("#delbutton").checked= "true";}
else{
document.querySelector("#pickbutton").checked="true";}
}
window.onload=getinfo;

var totalcake=0;
function imgfunc(str){
  var qty = prompt("Enter the quantity", "1");
  if(qty==null){}
  else if(Number(qty)){
    var table=document.querySelector("#quantity");
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    cell1.innerHTML=str;
    cell2.innerHTML=qty;
    localStorage.setItem(str,qty);
    totalcake += Number(qty);
    document.querySelector(".totalofcakes").innerHTML=totalcake;
    localStorage.setItem("Total", totalcake);
  }
  else{
    imgfunc(str);
  }
}

function changePhone(){
    document.querySelector("#ordno").innerHTML=document.querySelector(".teleno").value;
}
function assign(){
    document.querySelector("#ordno").innerHTML=localStorage.getItem("Telephone_No");
}
assign();
document.querySelector("#form").addEventListener('submit',error);
function error(e){
  var x = document.querySelector(".teleno").value;
  var counter=0;
  var er_str ="Please check the following errors:<br><br>";

    if(x.length==0){
      counter++;
      er_str+="The telephone number is required.<br>";
    }
    else if(Number(x)){}
    else{
        counter++;
        er_str+="The telephone no. is not a number.<br>";}



  var y=document.querySelector(".datedel").value;
  if(y.length==0){
    counter++;
    er_str+="The Pick up Date is empty. <br>";
  }
  else{
    var flag=0;
    for(var j=0;j<y.length;j++){
      if(y.charAt(j)==" "){}
      else{flag=1;}
      }

    if(flag==0){
      counter++;
      er_str+="The Pick Up Date is only spaces.<br>";
    }
  }

  if(counter>0){
    document.querySelector(".er_block").innerHTML="<h3>Error</h3><br>"+er_str;
    document.querySelector(".er_block").style.display="block";
    document.querySelector(".clickGo").style.opacity="0.45";
    e.preventDefault();
  }
}

document.querySelector(".clickGo").addEventListener('click',errorGo);
function errorGo(){
  document.querySelector(".er_block").style.display="none";
  document.querySelector(".clickGo").style.opacity="1";
}

function dataclr(){
    localStorage.clear();
}