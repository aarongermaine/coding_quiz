function startQuiz() {
  var x = document.getElementById("quizShow");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//GIVEN I am taking a code quiz /press start button /load quiz page
//WHEN I click the start button
//THEN a timer starts and I am presented with a question /start timer /start question loop
//WHEN I answer a question
//THEN I am presented with another question /
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score
