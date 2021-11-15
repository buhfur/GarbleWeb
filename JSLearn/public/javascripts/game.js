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



function PrintBoard(wordList){
	//attempt to clear the board 
	$('div#answers').empty();
	gameBoard.clear();
	for(var index of wordList){
		//loop determines how many dashes will be in an answer
		var dashes = index.replace(/[a-z]/gi, ' _ ');
		
		
		if(foundAnswers.includes(index)){ //check if user has already guessed that word 
			console.log("answer has already been found, replacing key with value....")
			dashes = index;
			console.log(dashes + ": found answer");
			gameBoard.set(index,dashes); //replace the maps key with its value
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


function selectLevel(id){
	
	switch(id){
		case "level1":
			// start level here
			level = id; //used to determine which answer key to use when user submits an answer
			$('#level').show();
			$('#levelSelect').hide();
			userInputBox.autofocus = true;
			//clear the userInputBox 
			document.getElementById("userInputBox").value = "";
			document.getElementById("levelHead").innerHTML = "Level 1";
			//call function to generate the dashes 
			for(var x = 0; x < 6; x++){

					//iterate through spli list of level(n)Letters
					//change the buttons text 
					const letters = level1Letters.split(" ");
					try{

						document.getElementById("letterButton" + x).innerHTML = letters[x];
					}catch(error){
						continue;
					}
			}
			
			PrintBoard(level1key);
			break;	

		case "level2":
			level=id;
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
			break;

		case "level3":
			level=id
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
			break;

		case "level4":
			level=id;
			$('#level').show();
			$('#levelSelect').hide();	
			userInputBox.autofocus = true;
			document.getElementById("levelHead").innerHTML = "Level 4";
			//change the letters on the buttons

			document.getElementById("userInputBox").value = "";
			for(var x = 0; x < 6; x++){

				//iterate through spli list of level(n)Letters
					//change the buttons text 
				const letters = level4Letters.split(" ");
				try{

					document.getElementById("letterButton" + x).innerHTML = letters[x];
				}catch(error){
					continue;
				}
			}

			PrintBoard(level4key);
			break;
		
		case "level5":
			level=id;
			$('#level').show();
			$('#levelSelect').hide();	
			userInputBox.autofocus = true;
			document.getElementById("levelHead").innerHTML = "Level 5";
			//change the letters on the buttons

			document.getElementById("userInputBox").value = "";
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
			break;
	}

	
}

/****************************************************
 * check answer section
 */

function checkAnswer(levelkey, answer){

}
document.getElementById("submit").onclick = function(){
	//show all buttons and check answer
	var userGuess = $('#userInputBox').val();
	console.log(level1key.indexOf(userGuess));
	$('.letterButton').show();
	$('#userInputBox').val('');	
	
	switch(level){
		case "level1":
			if(level1key.indexOf(userGuess) > -1){
				console.log('is valid answer');
				foundAnswers.push(userGuess);
				PrintBoard(level1key);
			}
			break;
	}

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





