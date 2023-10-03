"use strict";

document.addEventListener("DOMContentLoaded", function(){    
	document.getElementById("viewSelect").onclick = viewSelectorRotator;
	sessionStorage.getItem("view") ? viewSelectorSetter(sessionStorage.getItem("view")) : viewSelectorSetter("select-row-big");
});

function viewSelectorRotator(){
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

function viewSelectorSetter(viewId){
	// sets the view selector to the given view
	var viewSelect = document.getElementById("viewSelect");
	for (let i = 0; i < viewSelect.childElementCount; i++) {
		const viewI = viewSelect.children[i];
		if (viewI.classList.contains("active")){
			viewI.classList.remove("active");
			break; // Damit das nicht gleich noch einmal geändert wird
		}
	}
	document.getElementById(viewId).classList.add("active");
	renderData(viewId);
}


// Setzt voraus, dass leere rows bereits reingerendert wurden
function renderData(viewId){
	sessionStorage.setItem("view", viewId);
	let vrb = document.getElementById("view-row-big")
	vrb.classList.add("d-none");
	let vrs = document.getElementById("view-row-small")
	vrs.classList.add("d-none");
	
	if (viewId == "select-row-big"){
		vrb.classList.remove("d-none");
	} else if (viewId = "select-row-small"){
		vrs.classList.remove("d-none");
	} else{
		console.log("Error: No matching view function.")
	}
	
	
}


const xs = 576;
const sm = 768;
const md = 992;
const lg = 1200;
const xl = 1500;