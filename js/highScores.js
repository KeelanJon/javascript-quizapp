//Get scores from local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const scoreBoard = document.querySelector("#score-list");

console.log(highScores);

highScores.forEach(function (item) {
  let tempItem = document.createElement("li");

  console.log(item);
  tempItem.innerHTML = `${item.playerName} ${item.score}`;
  scoreBoard.appendChild(tempItem);
});
