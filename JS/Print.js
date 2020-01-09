var data=initMenu();
function tableprint(){
  var urlparas=new URLSearchParams(location.search);
  document.querySelector("#telp").innerHTML=urlparas.get("number");
  document.querySelector("#pickp").innerHTML=urlparas.get("date");
  document.querySelector("#odno").innerHTML=urlparas.get("number");
  document.querySelector("#totqty").innerHTML=localStorage.getItem("Total");
  var button_del=urlparas.get("method");
  if(button_del=="delivery"){
  document.querySelector("#delbutton").checked= "true";
  document.querySelector("#pickbutton").disabled="true";}
  else{
  document.querySelector("#pickbutton").checked="true";
  document.querySelector("#delbutton").disabled= "true";}

  var x,y,row,cell1,cell2,cell3;
  var table=document.querySelector("#printtable");
  var price_tot=0;
  for(var i=0;i<localStorage.length;i++){
    x=localStorage.key(i);
    for(j=0;j<data.length;j++){
      y=data[j].description;
      if(x===y){
        row=table.insertRow(1);
        cell1=row.insertCell(0);
        cell2=row.insertCell(1);
        cell3=row.insertCell(2);
        cell1.innerHTML=y;
        cell2.innerHTML=localStorage.getItem(data[j].description);
        cell3.innerHTML=data[j].price;
        price_tot+=(Number(cell2.innerHTML))*(Number(cell3.innerHTML));
      }
    }
  }
  document.querySelector("#totprice").innerHTML=price_tot;
}
window.onload=tableprint;
function clrdata(){
  localStorage.clear();
  window.location.href="../html/Home.html";
}
