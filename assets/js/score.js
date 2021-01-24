const username = document.getElementById("username");
const saveScore = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("scoreResults");
const recentScore = localStorage.getItem("mostRecentScore");
const highScore = JSON.parse(localStorage.getItem("highScores")) || [];
const submit = document.getElementById("saveScoreBtn");
const maxScore = 4;

scoreResults.innerText = recentScore;
