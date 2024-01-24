//Grab elements
var startQuizContainerEl = document.querySelector('#quiz-beginning-container');
var startQuizButtonEl = document.querySelector('#start-button') ;


var quizContainerEl = document.querySelector('#quiz-container');
var questionContainerEl = document.querySelector('#question-container');
var quizQuestionEl = document.querySelector('#quiz-question');
var optionsEl = document.querySelector('#options');


var endQuizContainerEl = document.querySelector('#quiz-end-container');
var finalScoreNumEL = document.querySelector('#final-score');
var initialsSubmit = document.querySelector('#initials-submit');
var initialsInput = document.querySelector('#initials')

var highScoresContainerEL = document.querySelector('#quiz-hs-container');
var highScoreLiEl = document.querySelector("#highscore-score")
var hsBackButton = document.querySelector('#back-button'); // add event listener

var timerElementEL = document.querySelector('#seconds-left');
var viewHighscoreButton = document.querySelector('#view-highscores') ; //beggining of page
var optionAButton = document.querySelector('#list-choice-a');
var optionBButton = document.querySelector('#list-choice-b');
var optionCButton = document.querySelector('#list-choice-c');
var optionDButton = document.querySelector('#list-choice-d');


// Quiz Questions array
var javaQuestions = [
    {   
        question: "Commonly used data types DO NOT include:", 
        answers: {
        //key: value
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        //key        : value
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parenthesis",
            d: "square brackets"
        },
        correctAnswer: "curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be encolsed within ___ when being assigned to variables.",
        answers: {
            a: "commas",
            b: "curly brackers",
            c: "quotes",
            d: "parenthesis"
        },
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "JavaScript",
            b: "terminal / bash",
            c: "for loops",
            d: "console.log"
        },
        correctAnswer: "console.log"
    },
]


var timer;
var timeLeft;
let questionNum = 0;
var scoreArray = [];

startQuizButtonEl.addEventListener("click", startQuiz)
//button eventListener

function startQuiz(){
    timeLeft = 75;
    startQuizButtonEl.disabled = true; 
    setTimer();
    showQuestion();
}

function setTimer() {
	timer = setInterval(function() {
	timeLeft--;
	timerElementEL.textContent = timeLeft; //updates what is shown in timerElement on screen
		if (timeLeft < 0) {
			clearInterval(timer); //this is to stop timer
		}
	}, 1000);
}


function showQuestion(){ 
    if (questionNum < javaQuestions.length){
        startQuizContainerEl.classList.add("hidden");
        quizContainerEl.classList.remove("hidden");
        let currentQuestion = javaQuestions[questionNum].question
        //show actual question
        quizQuestionEl.textContent = currentQuestion;
        //show li element
            optionAButton.textContent = javaQuestions[questionNum].answers.a;
            optionBButton.textContent = javaQuestions[questionNum].answers.b;
            optionCButton.textContent = javaQuestions[questionNum].answers.c;
            optionDButton.textContent = javaQuestions[questionNum].answers.d;
    }
    else {
        quizContainerEl.classList.add("hidden");
        endQuizContainerEl.classList.remove("hidden");
        clearInterval(timer); //stops timer
        finalScoreNumEL.textContent = timeLeft;
        

    }
}

function checkAnswer (event){
    event.preventDefault(); //to preven button default
    let targetText = event.target.innerHTML //text within the button
    let correctAnswer = javaQuestions[questionNum].correctAnswer //drills down to correct answer

    if (targetText === correctAnswer){
        alert("correct!")
        questionNum = questionNum + 1;
        showQuestion();
    }
    else {
        timeLeft = timeLeft - 10;
        questionNum = questionNum + 1;
        alert("incorrect");
        showQuestion();
    }      
}


function showHighScoresEl() {
    endQuizContainerEl.classList.add("hidden");
    startQuizContainerEl.classList.add("hidden");
    highScoresContainerEL.classList.remove("hidden")
}
viewHighscoreButton.addEventListener('click', showHighScoresEl);


function goBack(){
    highScoresContainerEL.classList.add("hidden");
    startQuizContainerEl.classList.remove("hidden");     
}

hsBackButton.addEventListener('click', goBack)


function addUserScore(event){
    event.preventDefault();
    endQuizContainerEl.classList.add("hidden");
    highScoresContainerEL.classList.remove("hidden");
    var scoreObject = {
        initial: initialsInput.value,
        score: timeLeft
    }
    scoreArray.push(scoreObject);
    var scoreJSON = JSON.stringify(scoreArray);
    localStorage.setItem('highScores', scoreJSON); 
    highScoreLiEl.textContent = scoreJSON
}

initialsSubmit.addEventListener('click', addUserScore)