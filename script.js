// generating a random number and roundoff by using ceil
let maxlimit = 100
var myNum = Math.random() * maxlimit;
var numValue = Math.ceil(myNum);
let userInput = document.querySelector("input").value;
// initialize number of turns so how many times user can play this game
let turn = 8;
// function used onclick of a button named check
function check() {
    // taking user input
    userInput = document.querySelector("input").value;
    // first check if  user has enough turns to play a game
    if (turn > 0) {
        // minius each turn on every click
        turn--
        // result lines
        document.querySelector(".turn span").innerHTML = turn;
        document.querySelector(".last-input span").innerHTML = userInput;
        // condition for guessing a number
        if (userInput == numValue) {
            document.querySelector(".input-summary").innerHTML = "Yay! You're Guess is right";
            document.querySelector("body").style.backgroundImage = "url('win.jpg')";
        }
        else if (userInput < numValue && userInput < 100 && userInput > 0) {
            document.querySelector(".input-summary").innerHTML = "My number is greater than " + userInput;
        }
        else if (userInput > numValue && userInput > 0) {
            document.querySelector(".input-summary").innerHTML = "My number is less than " + userInput;
        }
        else {
            document.querySelector(".input-summary").innerHTML = "Enter a number between 1 and 100";
        }
    }
    // when the turns ends
    else {
        document.querySelector(".input-summary").innerHTML = "Oops!! No turns left. My number was " + numValue;


    }

}



