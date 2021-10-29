/********************************************************************************************************************
Countdown.js is a simple script to add a countdown timer
for your website. Currently it can only do full minutes
and partial minutes aren't supported. This script is a fork of http://jsfiddle.net/HRrYG/ with some 
added extensions. Since the original code that I forked was released under Creative Commons by SA license, 
I have to release this code under the same license. You can view a live demo of this code at http://jsfiddle.net/JmrQE/2/.
********************************************************************************************************************/

var counter = document.getElementById("counter"); //ryanM change

function countdown(minutes,levelkey) {
    var seconds = 60;
    var current_minutes = mins-1; 
    var mins = minutes
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }
        check(level);
    }
    tick();
    
}
//You can use this script with a call to onclick, onblur or any other attribute you would like to use. 
//countdown(n);where n is the number of minutes required. 


/***********************************************************************
Ryan McVickers changes
***********************************************************************/
function check(levelkey){
    //check when the countdown reaches zero 

    if(counter.innerText === "0:00"){
        //check if they have all the answers, if the foundAnswers array isnt the same size as the answer key, they lose
        if(foundAnswers.length != level1key.length) {
            alert("game over, you lose!"); 
        }else{
            alert("congrats! you win!");
        }
        quit();

    }
}

