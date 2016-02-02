

//Create an array with the following answers: Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an
//Australian do, then do the opposite, Your answer here.
function generateAnswer () {

var userQuestion = (document.getElementById("userQuestion").value);
alert(userQuestion);
var answers = ['Yup!', 'Fuhgeddaboudit', 'Computer says NO!', 'If you dont know you better acks somebody', 'Your answer here.'];
var randomIndex = Math.floor(Math.random()*answers.length);
var newAnswer = userQuestion + " " + answers[randomIndex];
alert(newAnswer);



 document.getElementById('questionAnswers').innerHTML=newAnswer;

};



//Input a question from the user.

 // <input type="text" id="question"/>
 //

//Create a random number to select one of the answers (hint: use Math.random() and change the magnitude).
//Math.floor(Math.random()*answers.length);




//Output the question with the random answer.




//Put the question and answer into a loop that stops when the user enters STOP.
