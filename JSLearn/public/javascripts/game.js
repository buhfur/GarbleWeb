
const selectMenu = document.getElementById("levelSelect");
const levelScreen = document.getElementById("level");
var buttonList = document.getElementById("buttonList");
var shuffleButton = document.getElementById("shuffleButton");
var letterButtons = buttonList.children;
var level = "";



/** EVENT LISTENERS  */
shuffleButton.onclick = function(){ //on click to shuffle the letters around 

	var frag = document.createDocumentFragment(); //holds elements temporarily 
	while (letterButtons.length) {
		frag.appendChild(letterButtons[Math.floor(Math.random() * letterButtons.length)]);
	}
	buttonList.appendChild(frag);
}

document.getElementById("level1").onclick = function(){
	//hide level select window
	selectMenu.style.display="none";
	levelScreen.style.display = "initial";	

}

document.getElementById("level2").onclick = function(){

	selectMenu.style.display="none";
	levelScreen.style.display = "initial";	

	//change the letters on the buttons
	for(var x = 0; x < 6; x++){

		//iterate through spli list of level(n)Letters
			//change the buttons text 
		const letters = level2Letters.split(" ");
		try{

			console.log("letterButton" + x);//delete
			console.log(letters[x]); //delete 
			document.getElementById("letterButton" + x).innerHTML = letters[x];
		}catch(error){
			continue;
		}
	}
}

document.getElementById("level3").onclick = function(){

	selectMenu.style.display="none";
	levelScreen.style.display = "initial";	

	//change the letters on the buttons
	for(var x = 0; x < 6; x++){

		//iterate through spli list of level(n)Letters
			//change the buttons text 
		const letters = level3Letters.split(" ");
		try{

			console.log("letterButton" + x);//delete
			console.log(letters[x]); //delete 
			document.getElementById("letterButton" + x).innerHTML = letters[x];
		}catch(error){
			continue;
		}
	}
}

document.getElementById("level4").onclick = function(){

	selectMenu.style.display="none";
	levelScreen.style.display = "initial";	

	//change the letters on the buttons
	for(var x = 0; x < 6; x++){

		//iterate through spli list of level(n)Letters
			//change the buttons text 
		const letters = level4Letters.split(" ");
		try{

			console.log("letterButton" + x);//delete
			console.log(letters[x]); //delete 
			document.getElementById("letterButton" + x).innerHTML = letters[x];
		}catch(error){
			continue;
		}
	}
}

document.getElementById("level5").onclick = function(){

	selectMenu.style.display="none";
	levelScreen.style.display = "initial";	

	//change the letters on the buttons
	for(var x = 0; x < 6; x++){

		//iterate through spli list of level(n)Letters
			//change the buttons text 
		const letters = level5Letters.split(" ");
		try{

			console.log("letterButton" + x);//delete
			console.log(letters[x]); //delete 
			document.getElementById("letterButton" + x).innerHTML = letters[x];
		}catch(error){
			continue;
		}
	}
}

document.getElementById("randLevel").onclick = function(){

	selectMenu.style.display="none";
	levelScreen.style.display = "initial";	
}

document.getElementById("quit").onclick = function(){

	selectMenu.style.display="initial";
	levelScreen.style.display = "none";	
	//also stop timer
}
//game arrays 
const level1key = ["ELM","LOW","OWE","OWL","MELLOW","MEOW","MEW","MEWL","MOLE","MOLL","MOW","WELL","WOE","ELL","LOWE","OLE","MOL","MEL"];
const level2key = ["FIG","FIT","SIT","HIS","HIT","IFS","ITS","FIGS","FITS","FISH","FIST","SIGH","SIFT","HITS","GIFT","GIST","THIS","FIGHT","GIFTS","SHIFT","SIGHT","FLIGHTS"]
const level3key = ["ELM","LEI","LIE","MIL","ELMS","MISS","MISE","MESS","MILE","ISLE","SEMI","SLIM","LIME","LESS","LEIS","LIES","MILES","ISLES","SLIMS","SMILE","SMILE","SLIME","LIMES","SMILES","SLIMES"]
const level4key = ["RAN","RAY","ANY","ARC","NAY","NOR","CON","CAN","CAR","CAY","COY","OAR","YON","ORCA","CYAN","CORN","YARN","RACY","ROAN","NARY","CORNY","RAYON","CARN","CRONY","ACORN","CRAYON"]
const level5key = ["AGE","RED","ARE","RAG","EAR","DAG","GAD","GAG","RAD","EGG","AGED","DARE","DREG","DRAG","GAGE","RAGE","DEAR","READ","EGAD","GEAR","RAGED","GRADE","DAGGER","RAGGED"]
var level1Letters =  "L W L M O E";
var level2Letters =  "H S G F T I";
var level3Letters =  "E M I S S L";
var level4Letters =  "R A N Y C O";
var level5Letters =  "G A E D R G";

//printBoard(String[] wordlist, String[] foundAnswers, String level)
function PrintBoard(wordList, foundAnswers,level){

	const gameBoard = new Map(); // holds each word with corresponding dashes 

	for(let index of wordList){

		var dashes = "";

		//loop determines how many dashes will be in an answer

		for(var i = 0; i < index.length; i++){
			dashes += " _ ";
			gameBoard.set(index, dashes);
		}

	}

	//edit the elements to present the gameboard
	for(var value of gameBoard.values()){
		$(document).ready(function() {
			$("#dashList").append($("<li>").html(value))
		});
	}




	
}

function GameLoop(wordList){
// hide all elements of the page until user picks a level
	var foundAnswers = [];


}


