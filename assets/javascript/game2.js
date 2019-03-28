var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guessLeft = 8;
var guessChoice = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessLeft-text");
var userChoiceText = document.getElementById("userChoice");

    document.onkeyup = function(event) {
    var userChoice = event.key;
    console.log(userChoiceText);

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessLeftText.textContent = "Guesses Left: " + guessLeft;
    userChoiceText.textContent = "Guessed So Far: " + userChoice;    

if (options.indexOf(userChoice) > -1) {

    if (userChoice === computerGuess) {
        wins++;
        guessLeft = 8;
        guessChoice = [];
    }

    if (userChoice != computerGuess) {
        guessLeft --;
        guessChoice.push(userChoice);
    }

    if (guessLeft === 0) {
        guessLeft = 8;
        losses ++;
        guessChoice = [];
    }

}
  };
