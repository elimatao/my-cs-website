const hostDomain = "http://127.0.0.1:5000"

document.addEventListener("DOMContentLoaded", function(){
    
    fetchComposers();
    
    document.getElementById("composerSelect").onchange = composerHandler;
});

function fetchComposers() {
    const request = new XMLHttpRequest();
    request.open("GET", `${hostDomain}/fetchComposers`);
    request.send()
    
    request.onload = function(){
        const inData = JSON.parse(request.responseText);
        const select = document.getElementById("composerSelect");
        
        for (let i = 0; i < inData.length; i++) {
            select.innerHTML += `<option value="${inData[i].composer}">${inData[i].composer}</option>`;
        }
    };
};

function composerHandler()
{
    var composer = document.querySelector('#composerSelect').value;
    const language = document.documentElement.attributes.lang.value;
	
    const request = new XMLHttpRequest();
	request.open('POST', `${hostDomain}/specificMusic`)
	const outData = new FormData();
	outData.append('composer', composer);
	outData.append('language', language);
	request.send(outData);
	
	request.onload = function() {
        const inData = JSON.parse(request.responseText);
		var tipp1, tipp2;
		var i = 0;
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
		modContent();//passt die neuen Inhalte an Fenstergröße an
	}
	return false;
}