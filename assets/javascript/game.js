//****************Global Variable*********************
var wins = 0;

var losses = 0;

var guessesLeft = 15;

var guessedLetters =[];

var availCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomWords = ["beethoven", "mozart", "bach", "brahms", "chopin", "mendelssohn", "wagner", "tchaikovsky", "handel", "haydn"];
  var wordToBeGuessed = randomWords[Math.floor(Math.random()*randomWords.length)];
  var hiddenWord = [];
  for (var i = 0; i < wordToBeGuessed.length; i++){
    hiddenWord[i] = "_ ";

//**********Functions**************

var updateWordToBeGuessed = function(){
    document.querySelector("#currentWord").innerHTML = hiddenWord;
  }
}

var updateGuessedLetters = function(){
  document.querySelector("#userGuesses").innerHTML = guessedLetters.join(", ");
}

var updateGuessesLeft = function(){
  document.querySelector("#guessesRemaining").innerHTML = guessesLeft;
}

var updateWins = function(){
  document.querySelector("#wins") = wins;
}

var updateLosses = function(){
  document.querySelector("#losses") = losses;
}

var reset = function(){
  guesses = 15;
  guessedLetters = [];

  updateWordToBeGuessed();
  updateGuessedLetters();
}

var resetWinsLossesReset = function(){
  wins = 0;
  losses = 0;
  guessesLeft = 15;
  guessedLetters = [];

  updateWins();
  updateLosses();
  updateWordToBeGuessed();
  updateGuessedLetters();  
}

reset();


// main body of game
document.onkeyup = function(event){
  var userGuess = event.key.toLowerCase();

  if (availCharacters.indexOf(userGuess) === -1){
    alert("Please choose a letter!");
  }
  else if (guessedLetters.includes(userGuess)){
    alert("You have already guessed that letter");
  }
  else{
    guessedLetters.push(userGuess);
    guessesLeft--;
  }

    updateGuessesLeft();
    updateGuessedLetters();

      if (guessesLeft > 0 && guessedLetters < wordToBeGuessed.length){

        if (wordToBeGuessed.indexOf(userGuess) = -1){
          guessedLetters.push(userGuess);
          guessesLeft--;
        }
        else{
          hiddenWord.push(userGuess);
        }

      }

  }

  

 

 
  

//   if (computerChosenWord.indexOf(userGuess) == -1) {
//   console.log("Incorrect, " + userGuess + ", is not in word");
//   }//end of if statement
//   else{
//     document.querySelector("#currentWord").innerHTML = userGuess;
//     //currentWord.push(userGuess);
//   }//end of else statement

//   var remainingLetters = computerChosenWord.length;
//   for( var j = 0; j < computerChosenWord.length; j++){
//     if (computerChosenWord[j] === userGuess){
//       currentWord[j] = userGuess;
//       remainingLetters--;
//     }
//   }
// };
     

     
