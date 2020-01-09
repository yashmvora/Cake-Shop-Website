var myIndex = 0;
var index=0;
var data=initMenu();
function slideshow() {
  var i;
  var x = document.querySelector(".slide");

  if (data.length<=myIndex) {myIndex = 0}
  x.src=data[myIndex].imagefile;
  x.style.display = "block";
  document.querySelector(".imgname").innerHTML=data[myIndex].description;
  document.querySelector(".carbohydrate").innerHTML=data[myIndex].nutrition[0].percentage;
  document.querySelector(".protein").innerHTML=data[myIndex].nutrition[1].percentage;
  document.querySelector(".fat").innerHTML=data[myIndex].nutrition[2].percentage;
  document.querySelector(".cholestrol").innerHTML=data[myIndex].nutrition[3].percentage;
  var sum=0;
  for(var k=0;k<data.length;k++){
    sum+=parseInt(data[myIndex].nutrition[k].percentage);
  }
  document.querySelector(".total").innerHTML=sum;

  myIndex++;
  setTimeout(slideshow, 3000);
}

window.onload=slideshow;

document.querySelector("#infohome").addEventListener("submit", dataTransfer);
function dataTransfer(e){
    var phoneNo= document.querySelector("#tno").value;
    var pick= document.querySelector("#pickupdate").value;
    localStorage.setItem("Telephone_No",phoneNo);
    localStorage.setItem("Pick_Up", pick);
    var delorpick=document.querySelector(".delhome").value;
    var pickordel=document.querySelector(".pickuphome").value;
    localStorage.setItem("del_button",delorpick);
    localStorage.setItem("pick_button",pickordel);
    console.log(localStorage);
}

var sources=["https://courses.cs.cityu.edu.hk/cs2204/cakemaking-s.mp4","https://courses.cs.cityu.edu.hk/cs2204/chocolate.mp4"];
var count=0;
var vid= document.querySelector("video");
vid.addEventListener("ended", videochange);
function videochange(){
    setTimeout(function () {
        if(count>1){count=0;}
        vid.src=sources[count];
        count++;
        vid.play;
    },5000);
}