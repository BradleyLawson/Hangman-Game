//****************Global Variable*********************
var wins = 0;

var losses = 0;

var availCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomWords = ["beethoven", "mozart", "bach", "brahms", "chopin", "mendelssohn", "wagner", "tchaikovsky", "handel", "haydn"];
  
var wordToBeGuessed = randomWords[Math.floor(Math.random()*randomWords.length)];

var alreadyGuessedLetters = [];

//array that underscores will be pushed to
var underScoreWord = [];
for (var i = 0; i < wordToBeGuessed.length; i++){
  underScoreWord[i] = "_"
}

underScoreWord.join("");

var remainingLettersToBeGuessed = wordToBeGuessed.length;

//while (remainingLettersToBeGuessed > 0){
  document.onkeyup = function(event){
    var userGuess = event.key.toLowerCase();

    document.querySelector("#currentWord").innerHTML = underScoreWord;

    if (availCharacters.indexOf(userGuess) === -1){
    alert("Please choose a letter!");
    }

    else if (alreadyGuessedLetters.includes(userGuess)){
    alert("You have already guessed that letter");
    }

    else{
      
      for (var j = 0; j < wordToBeGuessed.length; j++){
        if (wordToBeGuessed[j] === userGuess){
          underScoreWord[j] = userGuess;
          remainingLettersToBeGuessed--;
        }
      }
    }
 };
//}

    document.querySelector("#currentWord").innerHTML = underScoreWord.join(" ");








  
