/* this file here is to quickly refresh on the basic 
syntax of javascript since for some reason i learn better this way
 its much easier than trying to build a complex project from source and explain what its does, cause i wont fucking remember everytime.

 Ryan McVicker

im going to write this as if im writing a tutorial myself on the inner workings and basics of javascript

first off lets start with manipulating elements 
there are different ways to access elements in html 
 first make sure to link this script in index.html
*/

// can access elements via their class name or id


const changeButton = document.getElementById("changeButton");

changeButton.onclick = function(){
	
	document.getElementById("changeHeader").innerHTML = "this changed!";
};

//changing by class name 
	


