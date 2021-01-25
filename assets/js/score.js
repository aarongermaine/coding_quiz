const username = document.getElementById("username");
const saveScore = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("scoreResults");
const recentScore = localStorage.getItem("mostRecentScore");
const highScore = JSON.parse(localStorage.getItem("highScores")) || [];
const submit = document.getElementById("saveScoreBtn");
const form = document.getElementById("scoreForm");
const scorelist = document.getElementById("scoreList");
const maxScore = 4;


scoreResults.innerText = recentScore;

const scoreboardCheck = JSON.parse(localStorage.getItem("scoreboard"));

console.log(scoreboardCheck);

submit.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(username.value);

  const userObj = [
    {
      userName: username.value,
      score: recentScore,
    },
  ];

  localStorage.setItem("scoreboard", JSON.stringify(userObj));
});

if (scoreboardCheck !== null) {
  let nameItem = document.createElement("td");
  let scoreItem = document.createElement("td");

  scoreboardCheck.map((i) => {
    nameItem.innerHTML = i.userName;
    scoreItem.innerHTML = i.score;
  });

  scorelist.appendChild(nameItem);
  scorelist.appendChild(scoreItem);
};

const tryAgainBtn = document.getElementById("tryAgain");

tryAgainBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.assign("/coding_quiz");
})
