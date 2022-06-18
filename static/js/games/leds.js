const hostDomain = "http://127.0.0.1:5000"

document.addEventListener('DOMContentLoaded', function(){
	// Get the element with id="defaultOpen" and click on it
	document.querySelector('#LEDConfig').onclick = LEDGame;
	document.querySelector('#LEDSubmit').onsubmit = () => {clicked = true; return false;};
	
	document.querySelector('#back').onclick = returnToStart;
	document.querySelector('#LEDMode').onchange = LEDModeControl;
});

function endGame(){
	document.getElementById('gameCont').style.display = "none";
	//Zeige den zurück Knopf 
	document.querySelector("#back").style.display = "block";
}
function startGame(){
	document.getElementById("StartCont").style.display = "none";
	document.getElementById("gameCont").style.display = "block";
	document.getElementById("result").style.display = "block";
}
function returnToStart(){
	document.querySelector('#back').style.display = "none";
	document.querySelector('#result').style.display = "none";
	document.querySelector('#result').innerHTML = "";
	document.querySelector('#StartCont').style.display = "block";
}

function LEDModeControl(){
	var mode = document.querySelector('#LEDMode').value;
	var rounds = document.getElementById("rounds");
	var LEDDiv = document.getElementById("LEDDiv");
	
	if (mode === "normal"){
		rounds.min = 3; rounds.value = 3;
		LEDDiv.innerHTML = `<img class="LED" src="/images/LEDOff.png"><img class="LED" src="/images/LEDOff.png">
							<img class="LED" src="/images/LEDOff.png"><img class="LED" src="/images/LEDOff.png">
							<img class="LED" src="/images/LEDOff.png"><img class="LED" src="/images/LEDOff.png">
							<img class="LED" src="/images/LEDOff.png"><img class="LED" src="/images/LEDOff.png">`;
		var leds = document.querySelectorAll('.LED');
		for (let i = 0; i < leds.length; i++) leds[i].style.width = "11%";
	}
	else{
		rounds.min = 5; rounds.value = 5;
		LEDDiv.innerHTML = `<img class="LED" src="/images/LEDOff.png"><img class="LED" src="/images/LEDOff.png">
							<img class="LED" src="/images/LEDOff.png"><img class="LED" src="/images/LEDOff.png">
							<img class="LED" src="/images/LEDOff.png"><img class="LED" src="/images/LEDOff.png">
							<img class="LED" src="/images/LEDOff.png"><img class="LED" src="/images/LEDOff.png">
							<img class="LED" src="/images/LEDOff.png"><img class="LED" src="/images/LEDOff.png">`;
		var leds = document.querySelectorAll('.LED');
		for (let i = 0; i < leds.length; i++) leds[i].style.width = "9%";
	}
}
async function LEDGame()
{	
	startGame();
	var leds = document.querySelectorAll('.LED');
	var mode = document.querySelector('#LEDMode').value;
	
	// Zeigt die LED-Blöcke richtig
	for (let i = 0; i < leds.length; i++) leds[i].style.display = "inline-block";
	
	//FÜr jede Runde...
	var rounds = document.querySelector('#rounds').value;
	var totalResult = 0;
	for (let i = 0; i < rounds; i++)
	{
		//Zeigt aktuelle Runde an.
		document.querySelector('#currentRound').innerHTML = `Ronda ${i + 1} de ${rounds}.`;
		
		//säubert Felder und Eingabefelder
		for (let i = 0; i < leds.length; i++){
			leds[i].src = "/images/LEDOff.png";
		}
		document.querySelector('#guessedNumber').value = 0;
		
		if (mode === "normal"){
			var number = Math.floor(Math.random() * 256); //Zufällige 8 bit-Zahl
			bin(number, 8-1, leds); //8-1 ist die Zahl der LEDs. Macht auch alle nötigen LEDs an.
		}			
		else{
			var number = Math.floor(Math.random() * 1024); //Zufällige 10 bit-Zahl
			bin(number, 10-1, leds);
		} 
		
		
		//Zeit
		var dBef = new Date();
		var timeBefore = dBef.getTime(); //in milliseconds
		
		//Sobald es eine Eingabe gibt.
		await waitEvent();
		
		//Guckt, ob Eingabe stimmt.
		var roundResult;
		var guessedNumber = document.querySelector('#guessedNumber').value;
		if (number == guessedNumber){
			var dAft = new Date();
			var timeAfter = dAft.getTime();
			roundResult = timeAfter - timeBefore;
			document.querySelector('#result').innerHTML += `<p class="alert alert-success"><span class="mr-5">&#10004;</span> +${roundResult / 1000} s</p>`;
		}
		else {
			if (mode === "normal") roundResult = 30000;
			else roundResult = 40000;
			document.querySelector('#result').innerHTML += `<p class="alert alert-danger"><span class="mr-5">&#10060;</span> +${roundResult / 1000} s</p>`;
		}
		
		totalResult += roundResult;
	}
	totalResult = Math.round(totalResult / rounds);
	
	var lang = get_language();
	if (lang == "es"){
	  document.querySelector('#result').innerHTML += `<p class="alert alert-info">MEDIA: ${totalResult / 1000} s</p>`;  
	} else if (lang == "en"){
	  document.querySelector('#result').innerHTML += `<p class="alert alert-info">AVERAGE: ${totalResult / 1000} s</p>`; 
	}else document.querySelector('#result').innerHTML += `<p class="alert alert-info">ERGEBNIS: ${totalResult / 1000} s</p>`; 
	endGame(); //Versteckt Spiel
	
	var name = document.querySelector('#name').value;
	//Speichere Resultat
	scoreSave(totalResult, name, "LEDs", mode);
	return false;
}

function bin(n, pos, leds)
{
	if (n < 1) return;
	
	if (n % 2 == 1) leds[pos].src = "/images/LEDOn.png";
	n = Math.floor(n / 2);
	bin(n, pos - 1, leds);
}

var clicked = false;
var interval;
async function waitEvent(){
	clicked = false;
	await new Promise(function(resolve, reject){
		interval = setInterval(()=>{
		if (clicked == true) {
			clearInterval(interval);
			resolve();
		}
		}, 200);
	});
}

function scoreSave(score, player, game, mode="normal"){
	const request = new XMLHttpRequest();
	request.open('POST', `${ hostDomain }/scoreSubmit`);
	const outData = new FormData();
	outData.append('score', score);
	outData.append('player', player);
	outData.append('game', game);
	outData.append('mode', mode);
	request.send(outData);
	
	request.onload = () => {
		const inData = JSON.parse(request.responseText);
		var scoreTable = document.querySelector('#scoreTable');
		//Zeige Titel
		document.querySelector('#scoresTitle').style.display = "block";
		//generiere Tabelle
		scoreTable.innerHTML = "";
		
		// Nimm die aktuelle Sprache
		var language = get_language();
		
		if (language === "es") scoreTable.innerHTML += `<tr><th>Posición</th><th>Nombre</th><th>Resultado</th></tr>`;
		else if (language === "de") scoreTable.innerHTML += `<tr><th>Position</th><th>Name</th><th>Ergebnis</th></tr>`;
		else scoreTable.innerHTML += `<tr><th>Position</th><th>Name</th><th>Result</th></tr>`;
		for (let i = 0; i < inData.length; i++){
			scoreTable.innerHTML += 
			`
				<tr>
					<td>${i + 1}</td>
					<td>${inData[i].player}</td>
					<td>${inData[i].score / 1000}</td>
				</tr>
			`;
		}
	}
}

function get_language(){
  return document.documentElement.attributes.lang.value;
}