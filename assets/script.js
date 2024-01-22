//Grab elements
var startQuizContainer = document.querySelector('#quiz-beginning-container');
var startQuizButton = document.querySelector('#start-button') ;


var quizContainer = document.querySelector('#quiz-container');
var questionContainer = document.querySelector('#question-container');
var quizQuestions = document.querySelector('#quiz-questions');
var options = document.querySelector('#options');


var endQuizContainer = document.querySelector('#quiz-end-container');
// var finalScoreNum = document.querySelector('#final-score');
// var initialsSubmit = document.querySelector('#initials-submit'); eventListener?

// var highScoresContainer = document.querySelector('#quiz-hs');
//high scores list ...
// var hsBackButton = document.querySelector('#back-button'); event listener
// var clearHsButton = document.querySelector('#clear-hs'); event listener

// var quizTimer = document.querySelector('#seconds-left');
// var viewHighscoreButton = document.querySelector('#view-highscores') ; //beggining of page



// Quiz Questions array
var quizQuestions = [
    {   //key   :  value
        question: "Commonly used data types DO NOT include:", 
        //key  : value
        answers: {
        //key: value
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        //key        : value
        correctAnswer: "c"
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parenthesis",
            d: "square brackets"
        },
        correctAnswer: "b"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "String values must be encolsed within ___ when being assigned to variables.",
        answers: {
            a: "commas",
            b: "curly brackers",
            c: "quotes",
            d: "parenthesis"
        },
        correctAnswer: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "JavaScript",
            b: "terminal / bash",
            c: "for loops",
            d: "console.log"
        },
        correctAnswer: "d"
    },
]

//beginning of functions

startQuizButton.addEventListener("click",)



generateQuiz(startQuizContainer, quizQuestions, quizContainer, endQuizContainer);

function generateQuiz (quizContainer, quizQuestions, endQuizContainer){
    function displayQuiz(){


    }    








}