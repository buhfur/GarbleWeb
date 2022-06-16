//first javascript game project 
/*const selectMenu = document.getElementById("levelSelect");
const levelScreen = document.getElementById("level");
const answers = document.getElementById("answers");
*/

var selectMenu = $('.levelSelect');
var foundAnswers = [] // holds correct answers entered by the user  
var score = 0;
var gameBoard = new Map(); // holds each word with corresponding dashes 
var shuffleButton = $("#shuffleButton");
var letterButtons = buttonList.children;
var level = "";



function PrintBoard(wordList){
        //attempt to clear the board 
        $('div#answers').empty();


        if(score == wordList.length){
                quit(); //if the array has no elements, it means the player has guessed all the words 
        }

        for(var index of wordList){
                //loop determines how many dashes will be in an answer
                var dashes = index.replace(/[a-z]/gi, ' _ ');

                if(foundAnswers.includes(index)){ //check if user has already guessed that word 
                        dashes = index;
                        gameBoard.set(index,dashes); //replace the maps key with its value
                }else{
                        gameBoard.set(index, dashes);
                }
        }

        for(var element of gameBoard.values()){
                var word = $("<p>", {class: "dashes grid-item"}).text(element);
                $("#answers").append(word);
        }

}

//resets the UI back to the level selection page 
function quit(){
        $('div#answers').empty();
        $('#level').hide();
        $('#levelSelect').show();

}





/** TODO: plan to replace this with a jquery version but this works for now */
shuffleButton.onclick = function(){ //on click to shuffle the letters around 

        var frag = document.createDocumentFragment(); //holds elements temporarily 
        while (letterButtons.length) {
                frag.appendChild(letterButtons[Math.floor(Math.random() * letterButtons.length)]);
        }
        buttonList.appendChild(frag);
}






//function that reads the level data file and returns the data as an Object
async function getLevelData(file){
  let fileObject = await fetch(file);
  let fileText = await fetch_file.text();
  return JSON.parse(file_text); // return the object
}

// event that effectively starts the game and the timer , as well as sets up the UI for the level 
$('.levelSelectButton').on('click', function(event){

        foundAnswers = [] // array for caching the correctly guessed answers from the player
        gameBoard.clear(); //clears any UI from a previous level
        score = 0; // resets the players score 
        $('#userInputBox').val('');//clears the input box
        $('#level').show(); // present the Parent UI for the level 
        $('#levelSelect').hide();	
        $('#userInputBox').focus(); // focus the input box so the user can enter answers quickly without having to re-click the input box
        //create n buttons with the n letters you are given

        $('#buttonList').show();
        var buttonListItems = $('#buttonList li');
        for(let li of buttonListItems){
                console.log($(li));
        }

});
/*
function selectLevel(id){
        foundAnswers = [] // array for caching the correctly guessed answers from the player
        gameBoard.clear(); //clears any UI from a previous level
        score = 0; // resets the players score 
        $('#level').show(); // present the Parent UI for the level 
        $('#levelSelect').hide();	
        $('#userInputBox').focus(); // focus the input box so the user can enter answers quickly without having to re-click the input box
        //userInputBox.autofocus = true;
        document.getElementById("levelHead").innerHTML = `Level {id}`; //formatted string to display which level the user is currently on 
        //change the letters on the buttons
        //document.getElementById("userInputBox").value = ""; // resets the 
        $('userInputBox').val('');//clears the input box
        //
        //loop to assign an input button to a letter 
        for(var x = 0; x < 6; x++){

                //changes the buttons text to match the corresponding letters for the level using a cached json file for the data 
                const letters = level5Letters.split(" ");
                try{
                        //document.getElementById("letterButton" + x).innerHTML = letters[x];

                        
                }catch(error){
                }
        }

        PrintBoard(key[id]);
        
        	switch(id){
    case "level1":
                // start level here
      level = id; //used to determine which answer key to use when user submits an answer
      $('#level').show();
      $('#levelSelect').hide();
      $('#userInputBox').focus();
//clear the userInputBox 
      document.getElementById("userInputBox").value = "";
      document.getElementById("levelHead").innerHTML = "Level 1";
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
      $('#userInputBox').focus();
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
      $('#userInputBox').focus();
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
      $('#userInputBox').focus();
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
      $('#userInputBox').focus();
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
*/





/****************************************************
 * check answer section
 */


function checkAnswer(answerKey, userGuess, foundAnswers){
        userGuess = userGuess.toUpperCase();
        if(score == answerKey.length){
                //go to winner screen?
                quit();
        }
        if(answerKey.includes(userGuess)){ 	//may change this to an "level1key.includes(userGuess)"
                if(!foundAnswers.includes(userGuess)){
                        score++;
                }
                foundAnswers.push(userGuess);
                PrintBoard(answerKey);
        }else{
                //play a little error sound effect?
        }

}
$('#userInputBox').on("keyup", function(e) {
        if(e.keyCode == 13){
                submit();
                $('userInputBox').focus(); 
        }
})
function submit(){

        //show all buttons and check answer
        var userGuess = $('#userInputBox').val();
        $('.letterButton').show();
        $('#userInputBox').val('');	

        switch(level){
                case "level1":
                        checkAnswer(level1key,userGuess,foundAnswers);
                        break;
                case "level2":
                        checkAnswer(level2key,userGuess,foundAnswers);
                        break;
                case "level3":
                        checkAnswer(level3key,userGuess,foundAnswers);
                        break;
                case "level4":
                        checkAnswer(level4key,userGuess,foundAnswers);
                        break;
                case "level5":
                        checkAnswer(level5key,userGuess,foundAnswers);
                        break;
        }

};
//what does this do ? 
function addLetter(bId){
        document.getElementById("userInputBox").value += document.getElementById(bId).innerText;
        document.getElementById(bId).style.display = "none";//hide the button since it can bypass the character limit on the input 	
}




