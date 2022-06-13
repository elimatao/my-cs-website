document.addEventListener('DOMContentLoaded', function(){
	
	document.querySelector(".navOpen").onclick = navOpen;
	document.querySelector(".navClose").onclick = navClose;
	
});

function navOpen(){
	document.querySelector(".navOpen").style.display = "none";
	document.querySelector(".navClose").style.display = "block";
	document.querySelector(".sidenav").style.display = "block";
}

function navClose(){
	document.querySelector(".navOpen").style.display = "block";
	document.querySelector(".navClose").style.display = "none";
	document.querySelector(".sidenav").style.display = "none";
}