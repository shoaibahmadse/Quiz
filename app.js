const timer = document.querySelector(".timer");
time = 0;
const quiz_show = document.querySelector(".Quiz-show");
const extra = document.querySelector(".extra");
const start = document.querySelector(".start");
const div_questions = document.querySelector(".questions");
const start_btn = document.querySelector(".jumbotron");
const outer_question = document.querySelector(".question");

//get every choice element
const choice_all = document.querySelectorAll(".choice");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const result = document.querySelector("result");
const prize = 0;
var scoreBoard = document.querySelector(".score");
var score = 0;
let gameOver = false;
let rightAns = false;
var selOP = "undefined";
let correctAns = false;
var CorrectOP = "A";
// Questions:
const questions = [
  {
    question: "What does HTML stands for?",
    options: [
      {
        choice: "Hyper text Markup Language",
        correctAns: true,
      },
      {
        choice: "Hyper teller Markup language",
        correctAns: false,
      },
      {
        choice: "Hyper toll Markup Language",
        correctAns: false,
      },
    ],
  },
  {
    question: "What does HTML stands for?",
    options: [
      {
        choice: "Hyper text Markup Language",
        correctAns: true,
      },
      {
        choice: "Hyper teller Markup language",
        correctAns: false,
      },
      {
        choice: "Hyper toll Markup Language",
        correctAns: false,
      },
    ],
  },
  {
    question: "What does HTML stands for?",
    options: [
      {
        choice: "Hyper text Markup Language",
        correctAns: true,
      },
      {
        choice: "Hyper teller Markup language",
        correctAns: false,
      },
      {
        choice: "Hyper toll Markup Language",
        correctAns: false,
      },
    ],
  },
  {
    question: "What does HTML stands for?",
    options: [
      {
        choice: "Hyper text Markup Language",
        correctAns: true,
      },
      {
        choice: "Hyper teller Markup language",
        correctAns: false,
      },
      {
        choice: "Hyper toll Markup Language",
        correctAns: false,
      },
    ],
  },
];
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
start.addEventListener("click", initGame);
//Game start:
function initGame() {
  scoreBoard.style.display = "inline";
  quiz_show.style.display = "none";
  extra.style.display = "none";
  start_btn.style.display = "none";
  outer_question.style.display = "block";
  renderQuestion(runningQuestion);
  // time = 10;
  // setInterval(countDown, 1000);
}
// render question
function renderQuestion() {
  let q = questions[runningQuestion];
  div_questions.innerHTML = "<p>" + q.question + "</p>";
  choice_all.forEach((choice, index) => {
    choice.innerHTML = q.options[index].choice;
  });
}
