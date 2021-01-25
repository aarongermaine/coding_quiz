const choices = Array.from(document.getElementsByClassName("button-label"));
const question = document.getElementById("question");
var timer = document.getElementById("timeSet");
var scoreText = document.getElementById("scoreSet");

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Who invented JavaScript?",

    choice1: "Douglas Crockford",
    choice2: "Sheryl Sandberg",
    choice3: "Brendan Eich",

    answer: 3,
  },
  {
    question: "Which one of these is a JavaScript package manager?",

    choice1: "Node.js",
    choice2: "TypeScript",
    choice3: "npm",

    answer: 3,
  },
  {
    question: "Which tool can you use to ensure code quality?",

    choice1: "Angular",
    choice2: "jQuery",
    choice3: "ESLint",

    answer: 3,
  },
  {
    question: "What year was Javascript's first appearance?",

    choice1: "1998",
    choice2: "1995",
    choice3: "1990",

    answer: 2,
  },
  {
    question: "Where in your HTML should you link your Javascript file?",

    choice1: "<body>",
    choice2: "<div>",
    choice3: "<head>",

    answer: 1,
  },
];

const scorePoints = 100;
const maxQuestions = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];

  getNewQuestion();
  startTimer();
};

setScore = () => {};

var seconds = 15;
startTimer = () => {
  var timeout = setInterval(function () {
    seconds--;
    timer.innerHTML = seconds;
    
    if (seconds === 0) {
      
      clearInterval(timeout);
       
      return window.location.assign("/coding_quiz/results.html");

    }
  }, 1000);
  if (selectedAnswer) {
    seconds += 10;
    return;
    //add 10 to timer
  }
};
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/coding_quiz/results.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

changeScore = (num) => {
      score += num;
      scoreText.innerText = score;
    };

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    let selectedAnswer = selectedChoice.dataset["number"];

    let applyMe =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (applyMe === "correct") {
      changeScore(scorePoints);
      seconds = seconds + 10;
    } else {
      seconds = seconds - 5;
    }

    

    selectedChoice.parentElement.classList.add(applyMe);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(applyMe);
      getNewQuestion();
    }, 1000);
  });
});



startGame();

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
