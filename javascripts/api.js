//this script is used for randomly generating game data from an api that I used
//in a python prototype of this game that uses the anagramica api 

//remove this in production 
import fetch from "node-fetch"


function generate_random_letters(x){ 
        //randomly pick x letters from this string which will be used for generating 
        //the words for our levels 
        const alpha = "abcdefghijklmnopqrstuvwxyz";
        var gen_letters = "";
        for(var i = 0 ; i < parseInt(x) ; i++ ) {
               gen_letters += alpha[Math.floor(Math.random() * alpha.length)];
        }
        
        return gen_letters;
        
}


//get request to anagramica API 
//parameters : 
//  get_answers( int how_many_levels) 
//
//  how_many_levels : int -> how many levels the user would like to generate at a time 
//  gen_letters : string -> the letters that are returned from the generate_random_letters() function
function get_answers(how_many_levels, gen_letters){
        console.log(gen_letters)
        var url = `http://anagramica.com/all/${gen_letters}`
        var game_data;
        
        return new Promise((resolve, reject) => {
                fetch(url).then(function(res){
                        return res.json();
                }).then(function(data){
                        //console.log(data);
                        console.log(game_data);
                        game_data = data;

                }).catch(function(){
                        console.log("could not make request to API" );
                });
        });

}


var letters = generate_random_letters(5) ;

var answers = get_answers(1, letters);


console.log(answers)
