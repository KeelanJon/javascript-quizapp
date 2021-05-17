//caching the DOOOOOM!!!
const playerScore = document.querySelector("#finalScore");
const username = document.querySelector("#username");
const saveButton = document.querySelector("#saveBtn");

//Retrieving what current highscores exist in local storage
//Note the use of JSON.parse. This converts the string received
//into a Javascript object
//One more NOTE! Notice the use of or array, this ensures the returned
//value is equal to an empty array instead on null should highScores not exist yet
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Retrieving latest score from local storage
const latestScore = localStorage.getItem("mostRecentScore");
playerScore.innerHTML = latestScore;

//Save button simply calls the save score function
saveButton.addEventListener("click", function (e) {
  saveScore(e);
});

//Now this does a couple of cool things!
function saveScore(e) {
  //Passing the event and using the preventDefault method to stop browser refresh
  e.preventDefault();

  //Creates a new score object that will be used to store the player name and score
  //together for use on the scoreboard
  const newScore = {
    playerName: username.value,
    score: latestScore,
  };

  //Here we push the newScore object into the highScores array
  highScores.push(newScore);

  //To sort the scores from highest to lowest, we use the sort method.
  //By default this simply sorts alphabetically,
  //So we pass in a call back function known as a "compare function" to change
  //the sorting order.
  //The compare function will then run through the array, comparing 2 values at a time i.e. a, b.
  //If the result is negative a is sorted before b, if the result is positive b is sorted before a.
  //Knowing this, we can reverse the sort order should we wish by changing the order of comparison
  //for example, a - b (sorts lowest to heighest), or b - a (sorts heighest to lowest).
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  //Splicing the array to only save 8 scores and removing the rest
  highScores.splice(8);

  console.log("saved!");

  //Saving new score to localStorage
  //Notice the additional use of JSON. Here we stringify the array as
  //local storage saving can only be done with strings, so will need to be
  //converted back into JSON/objects when getting the data back.
  localStorage.setItem("highScores", JSON.stringify(highScores));
  //Lastly we move the user back to the home directory using the window.location.assign() method.
  window.location.assign("/javascript-quizapp/");
}

/*Now this was surprisingly a lot of typing! But if you're a developer and so happen
to find yourself here, thanks for stopping by or using this quiz app

Should you have any questions or would like to get in touch with me here is my business email
address: info@keelsdesign.co.uk

*/
