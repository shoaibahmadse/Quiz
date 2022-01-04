let timer = document.querySelector(".timer");
const text_warning = document.querySelector(".text-warning");
const time_no = document.querySelector(".time");
const head = document.querySelector('.head');
var cor;
const chhoice_alll = document.querySelector(".choices");
const result_1 = document.querySelector(".result-1")
const result_2 = document.querySelector(".result-2")
let time = 0;
const restart = document.querySelector(".restart");
const quiz_show = document.querySelector(".Quiz-show");
const extra = document.querySelector(".extra");
const start = document.querySelector(".start");
const div_questions = document.querySelector(".questions");
const start_btn = document.querySelector(".jumbotron");
const outer_question = document.querySelector(".question");
var prev_quiz_playing = null;
//get every choice element
const choice_all = document.querySelectorAll(".choice");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const result = document.querySelector(".results");
const prize = 0;
var scoreBoard = document.querySelector(".score");
var score = 0;
let gameOver = false;
let rightAns = false;
var selOP = "undefined";
let correctAns = false;
var CorrectOP = "0";
var opselect = "0";


//to check if user can select (and get points) for a option
let canSelect = true;

//Questions portions:
const questions = [{
        question: "What does HTML stands for?",
        options: [{
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
        question: "What does CSS stands for?",
        options: [{
                choice: "Casting Sheet style",
                correctAns: false,
            },
            {
                choice: "Casting style sheet",
                correctAns: true,
            },
            {
                choice: "Coloumn style sheet",
                correctAns: false,
            },
        ],
    },
    {
        question: "What does Js stands for?",
        options: [{
                choice: "Jango script",
                correctAns: false,
            },
            {
                choice: "Joke script",
                correctAns: false,
            },
            {
                choice: "Java script",
                correctAns: true,
            },
        ],
    },
    {
        question: "Plural of sheep is?",
        options: [{
                choice: "Sheepes",
                correctAns: false,
            },
            {
                choice: "Sheep",
                correctAns: true,
            },
            {
                choice: "Sheeps",
                correctAns: false,
            },
        ],
    },
];
const lastQuestion = questions.length - 1; //to get last question.
let runningQuestion = 0;


//Game start:
function initGame() {
    scoreBoard.style.display = "inline";
    quiz_show.style.display = "none";
    extra.style.display = "none";
    start_btn.style.display = "none";
    renderQuestion(runningQuestion);
    time = 10;
    outer_question.style.display = "block";
    setInterval(countDown, 1000);
}
//restart game
function restartgame() {
    restart.style.display = "block";
    location.reload();
}
// render question
function renderQuestion() {
    time = 10;
    // Changing the background and color after new question.
    choiceA.style.background = "#343a40";
    choiceB.style.background = "#343a40";
    choiceC.style.background = "#343a40";
    choiceA.style.color = "#ffc107";
    choiceB.style.color = "#ffc107";
    choiceC.style.color = "#ffc107";

    //allow to select option again
    canSelect = true;
    let q = questions[runningQuestion];

    div_questions.innerHTML = "<p>" + q.question + "</p>";
    // Pushing questions to html.
    choice_all.forEach((choice, index) => {
        choice.innerHTML = q.options[index].choice;
    });
    // Getting the index of correct option.
    CorrectOP = questions[runningQuestion].options.findIndex(
        (option) => option.correctAns
    );
}

//Check answer function:
function checkAnswer(option) {
    if (selOP == "undefined") {
        if (option == "0") {
            choiceA.style.background = "black";
            selOP = "0";
        } else if (option == "1") {
            selOP = "1";
            choiceB.style.background = "black";
        } else if (option == "2") {
            selOP = "2";
            choiceC.style.background = "black";
        }
    }
    //if selection is done then it will return.
    if (!canSelect) return;
    //disable selection untill next one is rendered
    canSelect = false;
    //getting the right answer of all questions
    if (questions[runningQuestion].options[option].correctAns) {
        rightAns = true;
        correctAns = true;
    } else if (!questions[runningQuestion].options[option].correctAns) {
        rightAns = false;
    }
}
//show answer if user select a option.
function showAns(sel, corr) {
    if (sel != corr) {
        timer.style.display = "block";
        timer.innerHTML = `<h1>WRONG</h1>`;
        if (sel == "0") {
            choiceA.style.background = "red";
            choiceA.style.color = "black";
        } else if (sel == "1") {
            choiceB.style.background = "red";
            choiceB.style.color = "black";
        } else if (sel == "2") {
            choiceC.style.background = "red";
            choiceC.style.color = "black";
        }
        if (corr == "0") {
            choiceA.style.background = "#5eed4e";
            choiceA.style.color = "black";
        } else if (corr == "1") {
            choiceB.style.background = "#5eed4e";
            choiceB.style.color = "black";
        } else if (corr == "2") {
            choiceC.style.background = "#5eed4e";
            choiceC.style.color = "black";
        }
    }
}
//Show answer if user can't select a option.
function showCorrect(corr) {
    if (selOP == corr) {
        timer.style.display = "block";
        timer.innerHTML = `<h1>Correct</h1>`;
    } else if (selOP == "undefined") {
        timer.style.display = 'block';
        scoreBoard.style.display = 'block';
        outer_question.style.display = "none";
        timer.innerHTML = `<h1> You run out of time! </h1>`;
    }
    if (corr == "0") {
        choiceA.style.background = "#5eed4e";
        choiceA.style.color = "black";
    } else if (corr == "1") {
        choiceB.style.background = "#5eed4e";
        choiceB.style.color = "black";
    } else if (corr == "2") {
        choiceC.style.background = "#5eed4e";
        choiceC.style.color = "black";
    }
}
//this function is for countdown purpose and for last result page.
function countDown() {
    if (time > 0) {
        time--;
        timer.style.display = "block";
        timer.innerHTML = `<h1>${time}</h1>`;
    } else if (time === 0) {
        time--;
        timer.style.display = "none";
        outer_question.style.display = "none";
        if (rightAns) {
            showCorrect(CorrectOP);
            outer_question.style.display = "block";
        } else if (!rightAns) {
            if (selOP == "undefined") {
                showCorrect(CorrectOP);
            } else if (selOP == "0" || selOP == "1" || selOP == "2") {
                showAns(selOP, CorrectOP);
            }
            outer_question.style.display = "block";
        }
        if (correctAns) {
            score++;
            scoreBoard.innerHTML = `<h2>Your Score : ${score}</h2>`;
        }
    } else if (time < 0 && time > -4) {
        time--;
    } else if (time === -4) {
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
            correctAns = false;
            if (runningQuestion > 0) {
                selOP = "undefined";
            }
        } else if (runningQuestion == lastQuestion) {
            if (score < questions.length / 2) {
                timer.style.display = 'none';
                scoreBoard.style.display = 'none';
                result.style.display = 'block';
                outer_question.style.display = 'none';
                result_1.innerHTML = `Your Score : ${score}`;
                result_2.innerHTML = `You lost. You score half then the total question`;
                result.style.display = 'block';
            } else {
                timer.style.display = 'none';
                scoreBoard.style.display = 'none';
                result.style.display = 'block';
                outer_question.style.display = 'none';
                result_1.innerHTML = `Your Score : ${score}`;
            }
            restart.style.display = 'block';
        }
    }
}
start.addEventListener("click", initGame);
restart.addEventListener("click", restartgame);