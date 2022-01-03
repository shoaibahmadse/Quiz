let timer = document.querySelector(".timer");
const text_warning = document.querySelector(".text-warning");
const time_no = document.querySelector(".time");
var cor;
const chhoice_alll = document.querySelector('.choices');
let time = 0;
const restart = document.querySelector('.restart');
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
const result = document.querySelector("result");
const prize = 0;
var scoreBoard = document.querySelector(".score");
var score = 0;
let gameOver = false;
let rightAns = false;
var selOP = "undefined";
let correctAns = false;
var CorrectOP = '0';
var opselect = '0';
// Questions:

//to check if user can select (and get points) for a option
let canSelect = true;



const questions = [{
        question: "What does HTML stands for?",
        options: [{
                choice: "Hyper text Markup Language",
                correctAns: false,
            },
            {
                choice: "Hyper teller Markup language",
                correctAns: true,
            },
            {
                choice: "Hyper toll Markup Language",
                correctAns: false,
            },
        ],
    },
    {
        question: "What does HTML stfdsafadsfands for?",
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
];
const lastQuestion = questions.length - 1;
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
    timer.style.display = '';
    setInterval(countDown, 1000);
    // if (runningQuestion === '1') {
    //     clearInterval(prev_quiz_playing);
    // }
    // if (prev_quiz_playing) {
    //     clearInterval(prev_quiz_playing);
    // }
}
//restart game
function restartgame() {
    restart.style.display = 'none';
    location.reload();
}
// render question
function renderQuestion() {
    time = 10;

    canSelect = true;
    let q = questions[runningQuestion];

    div_questions.innerHTML = "<p>" + q.question + "</p>";
    choice_all.forEach((choice, index) => {
        choice.innerHTML = q.options[index].choice;
    });
    //allow to select option again
    choiceA.style.background = 'none';
    choiceB.style.background = 'none';
    choiceC.style.background = 'none';
    choiceA.style.color = 'none';
    choiceB.style.color = 'none';
    choiceC.style.color = 'none';
    // if (runningQuestion === 1) {
    //     clearInterval(prev_quiz_playing);
    // }
    // clearInterval(prev_quiz_playing);
    // choice_all.forEach((choice, index) => {
    //     choice = q.options[index].correctAns;
    //     console.log(choice);
    // })
    CorrectOP = questions[runningQuestion].options.findIndex(option => option.correctAns);
}

// questions[runningQuestion].options.forEach((option) => {
//     console.log(option.correctAns);
// });


function checkAnswer(option) {

    if (selOP == 'undefined') {
        if (option == '0') {
            choiceA.style.background = 'black';

            // opSelect++;
            selOP = '0';
        } else if (option == '1') {
            selOP = '1';

            // opSelect++;
            choiceB.style.background = 'black';
        } else if (option == '2') {
            selOP = '2';

            // opSelect++;
            choiceC.style.background = 'black';
        }
    }
    // if (selOP === '0' && questions[runningQuestion].options[option].correctAns) {
    //     CorrectOP = '0';
    // } else if (selOP === '1' && questions[runningQuestion].options[option].correctAns) {
    //     CorrectOP = '1';
    // } else if (selOP === '2' && questions[runningQuestion].options[option].correctAns) {
    //     CorrectOP = '2';
    // }
    // cor = questions[runningQuestion].options[option].correctAns;
    // questions[runningQuestion].options[option].correctAns;
    if (!canSelect) return;
    //disable selection untill next one is rendered
    canSelect = false;
    if (questions[runningQuestion].options[option].correctAns) {
        // score++;
        // scoreBoard.innerHTML = `<h2>Your Score : ${score}`;
        // runningQuestion++;
        // renderQuestion(runningQuestion);
        rightAns = true;
        correctAns = true;

        // clearInterval(prev_quiz_playing);
        // setInterval(countDown, 1000);
    } else if (!questions[runningQuestion].options[option].correctAns) {
        rightAns = false;
        // timer.innerHTML = `<h1>WRONG</h1>`;

        // clearInterval(prev_quiz_playing);
    }

}


function showAns(sel, corr) {
    if (sel != corr) {
        timer.style.display = 'block';
        timer.innerHTML = `<h1>WRONG</h1>`;
        if (sel == '0') {
            choiceA.style.background = '#f54c4c'
        } else if (sel == '1') {
            choiceB.style.background = '#f54c4c'
        } else if (sel == '2') {
            choiceC.style.background = '#f54c4c'
        }
        if (corr == '0') {
            choiceA.style.background = '#5eed4e'
        } else if (corr == '1') {
            choiceB.style.background = '#5eed4e'
        } else if (corr == '2') {
            choiceC.style.background = '#5eed4e'
        }
    }
}

function showCorrect(corr) {
    // chhoice_alll.style.color = 'none';
    if (selOP == corr) {
        timer.style.display = 'block';
        timer.innerHTML = `<h1>Correct</h1>`
    } else if (selOP == 'undefined') {
        // restart.style.display = 'block'
        // outer_question.style.display = "none";
        timer.innerHTML = `<h1> You run out of time! </h1>`;
    }
    if (corr == '0') {
        choiceA.style.background = '#5eed4e'
        choiceA.style.color = 'black';
    } else if (corr == '1') {
        choiceB.style.background = '#5eed4e'
        choiceB.style.color = 'black';
    } else if (corr == '2') {
        choiceC.style.background = '#5eed4e'
        choiceC.style.color = 'black';
    }
}

function countDown() {
    if (time > 0) {
        time--;
        timer.style.display = 'block';
        timer.innerHTML = `<h1>${time}</h1>`
    } else if (time === 0) {
        time--;
        timer.style.display = 'none';
        outer_question.style.display = 'none';
        if (rightAns) {
            showCorrect(CorrectOP);
            outer_question.style.display = 'block';
        } else if (!rightAns) {
            if (selOP == 'undefined') {
                showCorrect(CorrectOP);
            } else if (selOP == '0' || selOP == '1' || selOP == '2') {
                showAns(selOP, CorrectOP);
            }
            outer_question.style.display = 'block';
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
                selOP = 'undefined';
            }
        } else if (runningQuestion == lastQuestion) {
            if (score < questions.length / 2) {

            } else {

            }
        }
    }
}
start.addEventListener("click", initGame);
restart.addEventListener('click', restartgame);
// clearInterval(prev_quiz_playing);