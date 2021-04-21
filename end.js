//caching the DOM
const playerScore = document.querySelector("#finalScore");
const username = document.querySelector("#username");
const saveButton = document.querySelector("#saveBtn");

//Retrieving what current highscores exist in local storage
//Note the use of JSON.parse. This converts the string received
//into a Javascript object
//One more NOTE! Notice the use of or array, this ensures the returned
//value is equal to an empty array instead on null should highScores no exist yet
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Retrieving latest score from local storage
const latestScore = localStorage.getItem("mostRecentScore");
playerScore.innerHTML = latestScore;

saveButton.addEventListener("click", function (e) {
  saveScore(e);
});

function saveScore(e) {
  e.preventDefault();

  const newScore = {
    playerName: username.value,
    score: latestScore,
  };

  //   console.log(newScore);
  highScores.push(newScore);
  console.log(highScores);

  console.log("saved!");

  //Saving new score to localStorage
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
}
