const startButton = document.getElementById("start");
const questionContainer = document.getElementById("quizShow");
var questionEl = document.getElementById("question");
const answerButtonEl = document.getElementById("answer-buttons");
const nextButtonEl = document.getElementById("next");

const questionList = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];

function loadQuiz() {
  questionContainer.classList.add("show");
  questionEl = questionList[question[0]];
}

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hidden");
  loadQuiz();
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
