"use strict";

const hostDomain = "http://127.0.0.1:5000"

document.addEventListener("DOMContentLoaded", function(){

	var composerSelect = document.getElementById("composerSelect");
    
	composerSelect.onchange = composerHandler;
    
	renderComposers();

	// Resizes the viedo frames
	window.onload = modContent;
	window.onresize = modContent;
});

// Calls fetchComposers and waits for it to finish, then renders them.
async function renderComposers() {
	try{
		const inData = await fetchComposers();

		// If the composers can be fetched, add them to the select.
		for (let i = 0; i < inData.length; i++) {
			composerSelect.innerHTML += `<option value="${inData[i].composer}">${inData[i].composer}</option>`;
		}
	} catch(error){
		console.log(`Error: ${error}`);
	}
	
	checkQuery(); // Checks if a specific composer has been requested in the http call.
};

// I might as well just use the fetch function
function fetchComposers(){
	return new Promise((resolve, reject) => {
		var request = new XMLHttpRequest();
		request.open("GET", `${hostDomain}/fetchComposers`);
		
		request.onload = () => {
			if (request.status == 200){
				console.log("Success");
				resolve(JSON.parse(request.responseText));
			} else{
				console.log("failure");
				reject(request.status);
			}
		};
		request.onerror = () => {
			console.log("failure");
			reject(request.statusText);
		}
		request.send();
	});
}

function checkQuery(){
	const params = new URLSearchParams(window.location.search);
	const composer = params.get("composer");

	// Überprüft, ob der in der URL angegebene Komponist eine Option ist und ändert sie gegebenenfalls.
	for (let i = 0; i<composerSelect.options.length; i++){
		if (composerSelect.options[i].value === composer){
			composerSelect.selectedIndex = i;
			composerSelect.onchange(); // Muss man noch extra aufrufen, weil das darüber anscheinend nicht ausreicht.
		}
	}
}

function composerHandler()
{
	const language = document.documentElement.attributes.lang.value;
	
    const request = new XMLHttpRequest();
	request.open('POST', `${hostDomain}/specificMusic`)
	const outData = new FormData();
	outData.append('composer', this.value);
	outData.append('language', language);
	request.send(outData);
	
	request.onload = function() {
		const inData = JSON.parse(request.responseText);
		var tipp1, tipp2;
		let i = 0;
		var main = document.getElementById('recordings');
		main.textContent = "";
		
		if (inData[i].language === "es"){
			tipp1 = "Si quieren ver otra versión recomendada, sigan ";
			tipp2 = "este enlace";
		}
		else if (inData[i].language === "de"){
			tipp1 = "Falls ihr eine andere empfohlene Version sehen wollt, folgt ";
			tipp2 = "diesem Link";
		}
		else {
			tipp1 = "If you want to see another recomended version, follow ";
			tipp2 = "this link";
		}
			
		for (i = 0; i < inData.length; i += 2)
		{
			main.innerHTML += 
			`
			<div class="container-fluid sec2" style="text-align: left;">
				<div class="row p-3">
					<div class="col-md-6 sec3">
						<iframe width="100%" height="300px" src="${inData[i].url}"
							frameborder="0" allow="accelerometer; autoplay; 
							encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
						</iframe>
					</div>
					<div class="col-md-6 px-4 py-3">
						<h4>${inData[i].title}</h4><br>
						<p>${inData[i].recDate}</p>
						<p>${inData[i].description}</p>
						<p>${tipp1}
						<a href="${inData[i].proVersion}" target="_blank">${tipp2}</a>.
						</p>
					</div>
				</div>
			</div>
			`;
			if (i + 1 < inData.length)
			{
				main.innerHTML += 
				`
				<div class="container-fluid sec1" style="text-align: left;">
					<div class="row p-3">
						<div class="col-md-6 sec3 order-1 order-md-2">
							<iframe width="100%" height="300px" src="${inData[i + 1].url}"
								frameborder="0" allow="accelerometer; autoplay; 
								encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
							</iframe>
						</div>
						<div class="col-md-6 order-2 order-md-1 px-4 py-3">
							<h4>${inData[i + 1].title}</h4><br>
							<p>${inData[i + 1].recdate}</p>
							<p>${inData[i + 1].description}</p>
							<p>${tipp1}
							<a href="${inData[i + 1].proversion}" target="_blank">${tipp2}</a>.
							</p>
						</div>
					</div>
				</div>
				`;
			}
		}
		modContent(); //passt die neuen Inhalte an Fenstergröße an
	}
	return false;
}

const xs = 576;
const sm = 768;
const md = 992;
const lg = 1200;
const xl = 1500;

function modContent() 
{
	var iframes = document.querySelectorAll('iframe')
	for (let i = 0; i < iframes.length; i++) 
	{
		if (window.innerWidth < xs){
			iframes[i].height = "200px";
		} else if (window.innerWidth < sm){
			iframes[i].height = "350px";
		} else if (window.innerWidth < md){
			iframes[i].height = "250px";
		} else if (window.innerWidth < lg){
			iframes[i].height = "300px";
		} else {
			iframes[i].height = "470px";
		}
	}
}