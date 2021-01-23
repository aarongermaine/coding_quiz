//const startButton = document.getElementById("start");
//const questionContainer = document.getElementById("quizShow");
const choices = Array.from(
  document.getElementsByClassName("button-label")
);
const question = document.getElementById("question");
var timer = document.getElementById("timeSet");
var score = document.getElementById("scoreSet");
//const answerButtonEl = document.getElementById("answer-buttons");
//const nextButtonEl = document.getElementById("next");

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
];

const correctScore = 100;
const maxQuestions = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  
  getNewQuestion();
  startTimer();
};

setScore = () => {

};

startTimer = () => {
  var seconds = 30;
  setInterval(function() {
    timer.innerHTML = seconds--
  }, 1000);

}

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    let selectedAnswer = selectedChoice.dataset["number"];
    
    let applyMe = 
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    
     console.log(applyMe);
    selectedChoice.parentElement.classList.add(applyMe);

    setTimeout( () => {
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
