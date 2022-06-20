const hostDomain = "https://elia-doumerc.herokuapp.com"
// const hostDomain = "http://127.0.0.1:5000";

document.addEventListener('DOMContentLoaded', function(){
	window.onscroll = scroll;
	document.querySelector('.icon').onclick = collapse;
	try{
		buttons = document.querySelectorAll('.submitter');
		for (let i = 0; i < buttons.length; i++) buttons[i].disabled = "true";
		var fields = document.querySelectorAll('.form-control');
		for (let i = 0; i < fields.length; i++) fields[i].oninput = inputControl;
	}catch{}
	
	try{
	  document.querySelector('.aftVer').style.display = "none";
	  document.querySelector('#verify').onclick = verifyEmail;
	}catch{}

	// Shows the contact overlay when a contact button is clicked.
	var con = document.querySelectorAll(".contact");
    for (let i = 0; i < con.length; i++){
        con[i].addEventListener("click", function(){
            overlay.style.display = "block";
            overlayContent.innerHTML = overlayContact.innerHTML;
        });
    }
	
	// Overlay-Button that closes the overlay
    overlayButton = document.getElementById("overlayButton");
    overlayButton.addEventListener("click", function(){
       overlay.style.display = "none";
       overlayContact.style.display = "none";
    });
});


function scroll()
{
	var navbar = document.querySelector('.navigation');
	var imgHeight;
	try {imgHeight = document.querySelector('.mainImg').offsetHeight + navbar.offsetHeight;}
	catch{imgHeight = navbar.offsetHeight;}
	
	if (document.documentElement.scrollTop > imgHeight - navbar.offsetHeight)
	{
		elm = document.elementFromPoint(1, navbar.offsetHeight)
		navbar.style.backgroundColor = getComputedStyle(elm).backgroundColor;
		navbar.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
		if (getComputedStyle(navbar).backgroundColor === "rgba(0, 0, 0, 0)")
		{
			navbar.style.backgroundColor = "#ddd";
		}
	}
	else
	{
		navbar.style.backgroundColor = "#000";
		navbar.style.boxShadow = "none";
	}
	
	navLinks = document.querySelectorAll(".navigation a");
	if (getComputedStyle(navbar).backgroundColor === "rgb(0, 0, 0)"){
		for (let i = 0; i < navLinks.length; i++){
			navLinks[i].style.color="#fff";
		}
	}
	else{
		for (let i = 0; i < navLinks.length; i++){
			navLinks[i].style.color="#000";
		}
	}
}

function collapse()
{
	var navigation = document.querySelector('#navigationid')
	if (navigation.className === "navigation") 
	{
		navigation.className += " responsive";
	}
	else
	{
		navigation.className = "navigation";
	}
	scroll();
}

function inputControl(){
	form = this.parentElement.parentElement;
	var submit = form.querySelector('.submitter');
	var fields = form.querySelectorAll('.form-control');
	for (let i = 0; i < fields.length; i++)
	{
		if (fields[i].value.length > 0) 
		{
			submit.disabled = false;
			continue;
		}	
		submit.disabled = true;
		break;
	}
}

var code;
function verifyEmail()
{
	if (document.querySelector("#accept").checked === false){
		alert("You need to accept the privacy policy.");
		return;
	}
	code = 100000 + Math.floor(Math.random() * 899999);
	
	const request = new XMLHttpRequest();
	request.open('POST', '/verifyEmail');
	const outData = new FormData();
	outData.append('mail', document.querySelector('#mail').value);
	outData.append('code', code);
	request.send(outData);
	
	document.querySelector('.befVer').style.display = "none";
	document.querySelector('.aftVer').style.display = "block";
	
	document.querySelector('#mailCode').onkeyup = function(){
		var button = document.querySelector('#verifyCode');
		if (this.value != code) button.disabled = true;
		else button.disabled = false;
	}
}