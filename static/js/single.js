document.addEventListener('DOMContentLoaded', function(){
	
	sidebarControl();
	document.querySelector(".navClose").style.display = "none";
	window.addEventListener("resize", sidebarControl);
	document.querySelector(".navOpen").onclick = navOpen;
	document.querySelector(".navClose").onclick = navClose;
	
});
function sidebarControl(){
	var nav = document.querySelector(".sidenav");
    var main = document.querySelector("main");
	var op = document.querySelector(".navOpen");
	var cl = document.querySelector(".navClose");
	if (window.innerWidth > 900) {
		nav.style.display = "block";
		nav.style.width = "20%";
		main.style.marginLeft = "20%";
		op.style.display = "none";
		cl.style.display = "none";
		
	}
	else {
		nav.style.display = "none";
		main.style.marginLeft = "0px";
		op.style.display = "block";
	}
}

function navOpen(){
	var op = document.querySelector(".navOpen");
	var cl = document.querySelector(".navClose");
	var nav = document.querySelector(".sidenav");
	op.style.display = "none";
	cl.style.display = "block";
	nav.style.width = "200px";
	nav.style.display = "block";
}

function navClose(){
	var cl = document.querySelector(".navClose");
	var op = document.querySelector(".navOpen");
	var nav = document.querySelector(".sidenav");
	cl.style.display = "none";
	op.style.display = "block";
	nav.style.width = "0px";
	nav.style.display = "none";
}