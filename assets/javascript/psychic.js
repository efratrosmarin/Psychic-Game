    
    var computerGuessHTML = document.getElementById('computer-guess');
    var winsHTML = document.getElementById('wins');
    var lossesHTML = document.getElementById('losses');
    var guessesLeftHTML = document.getElementById('guesses-left'); 
    var userGuessHTML = document.getElementById('user-guess');
    

//computer variable

var computerChoices = ['a','b','c','d','e','f','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log (computerChoices.length);


//variables for wins and losses and guesses left

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//whenever a key is pressed creates an event

document.onkeyup = function(event) {
    console.log ("inthekeyfunction");
//Capture user's guess

    // var userGuess = event.key;
    // guessesSoFar.push(userGuess);


// Generate choice 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessesSoFar.push(userGuess);
   

//if/else statements for computer against user

// if ((userGuess === "e") || (userGuess === "f") || (userGuess === "r")|| (userGuess === "a") || (userGuess === "t")) {

    //run game

    if (userGuess === computerGuess){
        wins++;
        guessesLeft = 9;
        guessesSoFar.length = 0;
        reset();

    }
    
        else if (guessesLeft == 0){

            losses++;
            guessesLeft = 9;
            guessesSoFar.length = 0;

        }

        else if (userGuess !== computerGuess){

            guessesLeft--;

        }

    
    


//write results to html

        computerGuessHTML.textContent = computerGuess;
        userGuessHTML.textContent = userGuess;
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
        guessesLeftHTML.textContent=guessesLeft;
    };