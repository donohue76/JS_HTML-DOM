

// function playGame() {
//   var randomNumber = Math.floor(Math.random()*100) + 1;
//   var userGuess;
//   do {
//     userGuess = prompt("Input guess: ");
//     if (userGuess > randomNumber) {
//       alert("Too high! Try again");
//     } else if (userGuess < randomNumber) {
//       alert("Too low! Try again");
//     } else {
//        alert("congrats!");
//     }
//
//   }
//    while (userGuess != randomNumber);
//
// };
var randomNumber = Math.floor(Math.random()*100) + 1;
var previousGuesses = [];
var userGuess;

console.log(randomNumber);
function processGuess() {
  userGuess = (document.getElementById("userGuess").value);
  storeGuesses();
  var hint = document.getElementById('hint');
  if (userGuess == randomNumber){
    hint.innerHTML = "You GOT IT!!!"
  }
  else if(userGuess > randomNumber) {
     hint.innerHTML = "Too High!!! Guess Again!!!"
  }
  else if (userGuess < randomNumber) {
     hint.innerHTML = "Too Low!!! Guess Again!!!"
  }
  else if (isNaN(userGuess)) {
     hint.innerHTML = "Guess must be a number!!!"
  }

  document.getElementById('userGuess').value = "";

  // var lastGuess = document.getElementById("previousGuess");
  // Guess.innerHTML = userGuess;
  document.getElementById('userGuess').value = "";
};

function storeGuesses() {

  previousGuesses.push(userGuess);
  document.getElementById("guessStorage").innerHTML = previousGuesses;

  var html = "";
  previousGuesses.forEach(function (e) { html = html + e + "<br/>"});
  document.getElementById("guessStorage").innerHTML = html;


};
