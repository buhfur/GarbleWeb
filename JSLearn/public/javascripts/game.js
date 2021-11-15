//first javascript game project 
const selectMenu = document.getElementById("levelSelect");
const levelScreen = document.getElementById("level");
const answers = document.getElementById("answers");
var foundAnswers = [] 
var score = 0;

var gameBoard = new Map(); // holds each word with corresponding dashes 
var shuffleButton = document.getElementById("shuffleButton");
var letterButtons = buttonList.children;
var level = "";

function CheckAnswer(answer){
	//take the input from the text box 
	if(gameBoard.has(answer)){
		console.log("gameboard has the answer!")
		//clear the gameboard and replace the lists key with its value in the gameBoard map, then call PrintBoard again add score as well
		foundAnswers.push(answer);
		PrintBoard(level1key);
	}
}

//printBoard(String[] wordlist, String[] foundAnswers, String level)
function PrintBoard(wordList){
	//attempt to clear the board 

	gameBoard.clear();
	for(var index of wordList){
		//loop determines how many dashes will be in an answer
		var dashes = index.replace(/[a-z]/gi, ' _ ');
		
		
		if(foundAnswers.includes(index)){ //check if user has already guessed that word 
			console.log("answer has already been found, replacing key with value....")
			gameBoard.set(dashes,index); //replace the maps key with its value
		}else{
			gameBoard.set(index, dashes);
		}
	}
	for(var element of gameBoard.values()){
		console.log(element);
		var word = $("<p>", {class: "dashes"}).text(element);
		$("#answers").append(word);
	}

}

function quit(){
	$('div#answers').empty();
	$('#level').hide();
	$('#levelSelect').show();
	
}


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
	$('#level').show();
	$('#levelSelect').hide();
	userInputBox.autofocus = true;
	//clear the userInputBox 
	document.getElementById("userInputBox").value = "";
	document.getElementById("levelHead").innerHTML = "Level 1";
	//call function to generate the dashes 
	PrintBoard(level1key);


	
}

document.getElementById("level2").onclick = function(){
	userInputBox.autofocus = true;
		
	$('#level').show();
	$('#levelSelect').hide();
	document.getElementById("userInputBox").value = "";
	document.getElementById("levelHead").innerHTML = "Level 2";
	//change the letters on the buttons
	for(var x = 0; x < 6; x++){

		//iterate through spli list of level(n)Letters
		//change the buttons text 
		const letters = level2Letters.split(" ");
		try{

			document.getElementById("letterButton" + x).innerHTML = letters[x];
		}catch(error){
			continue;
		}
	}

	PrintBoard(level2key);
	
}

document.getElementById("level3").onclick = function(){
	$('#level').show();
	$('#levelSelect').hide();	
	userInputBox.autofocus = true;
	document.getElementById("levelHead").innerHTML = "Level 3";
	//change the letters on the buttons

	document.getElementById("userInputBox").value = "";
	for(var x = 0; x < 6; x++){

		//iterate through spli list of level(n)Letters
			//change the buttons text 
		const letters = level3Letters.split(" ");
		try{

			document.getElementById("letterButton" + x).innerHTML = letters[x];
		}catch(error){
			continue;
		}
	}

	PrintBoard(level3key);
	
}

document.getElementById("level4").onclick = function(){
	document.getElementById("userInputBox").value = "";
	$('#level').show();
	$('#levelSelect').hide();	
	userInputBox.autofocus = true;
	document.getElementById("levelHead").innerHTML = "Level 4";
	//change the letters on the buttons
	for(var x = 0; x < 6; x++){

		//iterate through spli list of level(n)Letters
		//change the buttons text 
		const letters = level4Letters.split(" ");
		try{ 
			document.getElementById("letterButton" + x).innerHTML = letters[x];
		}catch(error){
			console.log(error);
			continue;
		}
	}
	PrintBoard(level4key);
	
}

document.getElementById("level5").onclick = function(){
	document.getElementById("userInputBox").value = "";
	$('#level').show();
	$('#levelSelect').hide();	
	userInputBox.autofocus = true;
	document.getElementById("levelHead").innerHTML = "Level 5";
	//change the letters on the buttons
	for(var x = 0; x < 6; x++){

		//iterate through spli list of level(n)Letters
			//change the buttons text 
		const letters = level5Letters.split(" ");
		try{
			document.getElementById("letterButton" + x).innerHTML = letters[x];
		}catch(error){
			continue;
		}
	}
	
	PrintBoard(level5key);
}

document.getElementById("randLevel").onclick = function(){
	document.getElementById("userInputBox").value = "";
	//generate randLevel number 
	const randLevel = Math.floor(Math.random() * (6 - 1) + 1);
	document.getElementById("levelHead").innerHTML = "Level " + randLevel;
	$('#level').show();
	$('#levelSelect').hide();	

    letterArray = ["",level1Letters,level2Letters,level3Letters,level4Letters,level5Letters];
	//change the letters on the buttons
	for(var x = 0; x < 6; x++){
		//iterate through split list of level(n)Letters
		//change the buttons text 
		var letters = letterArray[randLevel].split(" ");
		try{
			document.getElementById("letterButton" + x).innerHTML = letters[x];
		}catch(error){
			continue;
		}
	}
		
	
	PrintBoard(letterArray[randLevel]);
}



document.getElementById("submit").onclick = function(){
	//restore all the buttons and clear the text box 
	var letButtons = document.getElementsByClassName("letterButton");
	var userGuess = document.getElementById("userInputBox").value;
	for(var x of letButtons){
		x.style.display = "initial";//show all buttons 
	}
	CheckAnswer(userGuess);
	document.getElementById("userInputBox").value = "";
};
function addLetter(bId){
	console.log("i am pressed");
	document.getElementById("userInputBox").value += document.getElementById(bId).innerText;
	document.getElementById(bId).style.display = "none";//hide the button since it can bypass the character limit on the input 	
}
//game arrays 
const level1key = ["ELM","LOW","OWE","OWL","MELLOW","MEOW","MEW","MEWL","MOLE","MOLL","MOW","WELL","WOE","ELL","LOWE","OLE","MOL","MEL"];
const level2key = ["FIG","FIT","SIT","HIS","HIT","IFS","ITS","FIGS","FITS","FISH","FIST","SIGH","SIFT","HITS","GIFT","GIST","THIS","FIGHT","GIFTS","SHIFT","SIGHT","FLIGHTS"]
const level3key = ["ELM","LEI","LIE","MIL","ELMS","MISS","MISE","MESS","MILE","ISLE","SEMI","SLIM","LIME","LESS","LEIS","LIES","MILES","ISLES","SLIMS","SMILE","SMILE","SLIME","LIMES","SMILES","SLIMES"]
const level4key = ["RAN","RAY","ANY","ARC","NAY","NOR","CON","CAN","CAR","CAY","COY","OAR","YON","ORCA","CYAN","CORN","YARN","RACY","ROAN","NARY","CORNY","RAYON","CARN","CRONY","ACORN","CRAYON"]
const level5key = ["AGE","RED","ARE","RAG","EAR","DAG","GAD","GAG","RAD","EGG","AGED","DARE","DREG","DRAG","GAGE","RAGE","DEAR","READ","EGAD","GEAR","RAGED","GRADE","DAGGER","RAGGED"]
var level1Letters = "L W L M O E";
var level2Letters = "H S G F T I";
var level3Letters = "E M I S S L";
var level4Letters = "R A N Y C O";
var level5Letters = "G A E D R G";





