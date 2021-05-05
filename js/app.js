//Importing the quiz questions from an external js file
import questions from "./quizQuestions.js";

//Caching your DOOOOOOM!!! Uhhh I mean DOM.
const choiceSelection = Array.from(document.querySelectorAll(".choice-text"));
const questionText = document.getElementById("question");
const scoreText = document.querySelector("#score");
const progressBar = document.querySelector(".progress-bar");
const questionNo = document.getElementById("questionNumber");
//Variables here!!!!
let score = 0;
let questionCounter = 0;
let currentCorrectAnswer = null;

//With a base of 0, number of questions is 10
const MAX_QUESTIONS = 9;

//Where it all begins...it's time to start the game
function startGame() {
  //Whats this?! A humble tron reference in the log
  console.log("We're on the grid");
  console.log("Let the games begin");

  //Reseting the score and question counter to 0
  questionCounter = 0;
  score = 0;

  //Loading the questions
  loadQuestion();
}

function loadQuestion() {
  /*First things first, a small if statement to check if we have
  answered all of the questions. In this case we have 10 questions,
  so if questionCounter is equal to 9 (base of 0, so 10), we send the user 
  to the end screen. Otherwise continue through the function*/

  if (questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("/javascript-quizapp/end.html");
  }

  /*Sets the question element equal to the question variable
  contained within the questions array imported from the quizQuestions file*/
  questionText.innerHTML = questions[questionCounter].question;

  /*Adjusting progress bar width, by calculating percentage of width
  against the acmount of questions in the quiz*/
  //Standard formula for calculating a percentage, ((value/totalValue) * 100).
  progressBar.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  loadAnswers();
}

//The load answers function loops through the choice array of the current question
//The current question is tracked using the questionCounter variable.
function loadAnswers() {
  //Adjusts small question counter on the top left
  questionNo.innerHTML = String(questionCounter + 1);
  for (let j = 0; j < questions[questionCounter].choice.length; ++j) {
    // console.log(questions[questionCounter].choice[j]);

    currentCorrectAnswer = questions[questionCounter].answer;

    let answer = questions[questionCounter].choice[j];
    choiceSelection[j].innerText = answer;

    // choiceSelection[j].addEventListener("click", function (e) {
    //   let selectedAnswer = e.currentTarget.innerHTML;
    //   checkAnswer(currentCorrectAnswer, selectedAnswer);
    // });
  }
  ++questionCounter;
}

function makeSelection(e) {
  let selectedAnswer = e.currentTarget.innerText;
  selectedAnswer = String(selectedAnswer);
  checkAnswer(currentCorrectAnswer, selectedAnswer);
}

/*Check asnwer function is called and passed the index value for the
correct answer, and the nodeValue selection from the user. If the index is 
equal to the number specified in the quizQuestions array answer, then that's
10 points to Griffindor! Although, I'm probably more of a Ravenclaw...
*/
function checkAnswer(correctAnswer, answer) {
  if (answer == correctAnswer) {
    console.log("Correct!");

    score += 10;
    scoreText.innerHTML = score;
  } else {
    console.log("nope");
  }

  //Once the comparison between the user selection and the
  //actual answer is done, we load the next question.
  loadQuestion();
}

//Adding an event listener to each answer button which calls
//the check answer function.
choiceSelection.forEach(function (item) {
  item.addEventListener("click", function (e) {
    //There's likely to be a better way to do this using a
    //getAttribute() method, but in the space of time
    //the nodeValue has been used to get the passed value.
    // Come back and refactor some time, maybe...
    let selectedAnswer = e.target.attributes.value.nodeValue;
    console.log(e.target.attributes.value.nodeValue);
    checkAnswer(currentCorrectAnswer, selectedAnswer);
  });
});

//Initiate the game
startGame();

//Note to self, this coding life can be tough sometimes.
//Make sure to take a breather
