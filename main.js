window.onscroll = function(e){
var els = document.getElementsByClassName("els");
els[1].style.marginBottom = window.scrollY+"px";

if(window.scrollY >= 460){
	els[3].style.padding = "100px 0 0 10px";
	els[4].style.paddingBottom = "0";
	els[4].style.color = "#fff9";
}else {
	els[3].style.padding = "10px 0 0 10px";
	els[4].style.paddingBottom = "50px";
	els[4].style.color = "#fff0";
}
if(window.scrollY >= 900){
	els[5].style.backgroundPosition = "right";
  
}else {
	els[5].style.backgroundPosition = "left";
}
if(window.scrollY >= 160){
	els[0].style.background = "#0009";
}else {
	els[0].style.background = "#0000";
}
if(window.scrollY >= 100){
	els[2].style.opacity = "0";
}else {
	els[2].style.opacity = "1";
}
}
var countM = 0;
function openM(){
if(countM == 0){
	var dd = document.getElementById("dd");
	dd.style.left = "0";
	countM = 1;
	}else {
	var dd = document.getElementById("dd");
	dd.style.left = "-60%";
	countM = 0;
	}
}
