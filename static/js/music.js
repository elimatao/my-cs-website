"use strict";


document.addEventListener("DOMContentLoaded", function(){

	var composerSelect = document.getElementById("composerSelect");
    
	composerSelect.onchange = composerHandler;
    
	document.getElementById("viewSelect").onclick = viewHandler;
	
	renderComposers(); // Loads composer list
	startLoadMessage();

});

// Calls fetchComposers and waits for it to finish, then renders them.
async function renderComposers() {
	try{
		const inData = await fetchComposers();

		// If the composers can be fetched, add them to the select.
		for (let i = 0; i < inData.length; i++) {
			composerSelect.innerHTML += `<option value="${inData[i].id}">${inData[i].name} ${inData[i].surname}</option>`;
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
			
			endLoadMessage();

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
	const composer = params.get("id");

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
	outData.append('id', this.value);  // The change of the select triggered the event
	outData.append('language', language);
	request.send(outData);
	
	request.onload = function() {
		
		sessionStorage.clear()
		sessionStorage.setItem("list", request.responseText); // Speichert die Daten lokal zum weiteren Gebrauch
		
		
		renderData(document.getElementById("viewSelect").querySelector(".active").id);
	}
	return false;
}

// Setzt voraus, dass leere rows bereits reingerendert wurden
function renderData(viewId){
	var list = document.getElementById('recordings');
	list.innerHTML = ""
	
	var data = JSON.parse(sessionStorage.getItem("list"))
	
	if (viewId == "select-row-big"){
		renderBigRow(list, data);
	} else if (viewId = "select-row-small"){
		renderSmallRow(list, data);
	} else{
		console.log("Error: No matching view function.")
	}
	
	
}

function renderSmallRow(list, data){
	list.innerHTML +=
	`
	<table class="mx-auto my-3">
		<tbody>
		</tbody>
	</table>
	`

	for(let i = 0; i < data.length; i++){
		let tableBody = list.lastElementChild.lastElementChild;
		
		tableBody.innerHTML += 
		`
		<tr class="row-small">
			<td><b>${data[i].title}</b></td>
			<td>${data[i].recdate}</td>
			<td>
				<a href="${data[i].url}">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" class="bi bi-youtube" viewBox="0 0 16 16">
						<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
					</svg>
				</a>
			</td>
		</tr>
		`
	}
}

function renderBigRow(list, data){
	for(let i = 0; i < data.length; i++){
		// Das geht effizienter
		list.innerHTML += document.getElementById("row-big-template").innerHTML;
		var listItem = list.lastElementChild;
		
		// For every odd row
		if (i%2 != 0){
			listItem.children[0].classList.add("order-1", "order-md-2")
			listItem.children[1].classList.add("order-2", "order-md-1")
		}
		
		listItem.getElementsByClassName("title")[0].innerHTML = data[i].title
		listItem.getElementsByClassName("date")[0].innerHTML = data[i].recdate
		listItem.getElementsByClassName("body")[0].innerHTML = data[i].description
		listItem.getElementsByClassName("media")[0].src = data[i].url
	}
}


function viewHandler(){
	var viewSelect = document.getElementById("viewSelect");

	for (let i = 0; i < viewSelect.childElementCount; i++) {
		const viewI = viewSelect.children[i];
		if (viewI.classList.contains("active")){
			viewI.classList.remove("active");
			let nextView = viewSelect.children[(i+1)% viewSelect.childElementCount]
			nextView.classList.add("active"); // Rotiert die Staffel!
			renderData(nextView.id);
			break; // Damit das nicht gleich noch einmal geändert wird
		}
	}

}


function startLoadMessage(){
	document.getElementById("load-message").classList.remove("d-none");
}
function endLoadMessage(){
	document.getElementById("load-message").classList.add("d-none");
}


const xs = 576;
const sm = 768;
const md = 992;
const lg = 1200;
const xl = 1500;