// an array of objects coinating the questions, possible answers and correct answer.
const questions = [
    {   Question: "Question 1: Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        Question: "Question 2: The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        Question: "Question 3: The instructions for a function are enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets"
    },
    {
        Question: "Question 4: A property of an object that is a function is called a ____.",
        choices: ["method", "string", "stylesheet", "boolean"],
        answer: "method"
    },
    {
        Question: "Question 5: The logical operator that represents 'or' is ____.",
        choices: ["||", "OR", "&&", "==="],
        answer: "||"
    }
]


// declared variables to access the html elements
const $timerTextArea = document.querySelector("#timer-text-area");
const $highscoreButton = document.querySelector("#highscore-button");
const $timeLabel = document.querySelector(".time-label");
const $btnStart = document.querySelector(".btnStart");
const $jumboHeader = document.querySelector(".jumbo-header");
const $questionContainer = document.querySelector(".question-container");
const $questionArea = document.querySelector(".question-area");
const $buttonArea = document.querySelector(".button-area");
const $results = document.querySelector(".results");
const $btn1 = document.querySelector(".btn1");
const $btn2 = document.querySelector(".btn2");
const $btn3 = document.querySelector(".btn3");
const $btn4 = document.querySelector(".btn4");
// declare a variable to count through the questions
let count = 0;
// declare score variable to track score of user
let score = 0;
// variable to store users score history to send to local storage.
let userScores = [];

// hides the buttons and displays a messgage to begin quiz upon page load 
window.onload = function() {
    $buttonArea.style.visibility= "hidden";
    $questionArea.textContent = "Click start to begin Quiz"
}

$btnStart.addEventListener("click",takeQuiz);


// set time left to the amount of questions multiplied ny ten seconds. IE. 50 secs.
let timeLeft = 2 * (questions.length);
console.log(timeLeft);

function takeQuiz() {
    startClock();
    DisplayQuestions();
}
// start the clock function
function startClock() {
    $btnStart.style.visibility = "hidden";
    $buttonArea.style.visibility = "visible";
    
    const countDownInterval = setInterval(function(){
    $timerTextArea.value = timeLeft;
    // timeLeft = timeLeft - 1;
    timeLeft--;
    console.log(timeLeft);
    if (timeLeft <= 0) {
        timeLeft = 0;    
        $timerTextArea.value = '--';
        $timeLabel.textContent = "Times Up!!";
        
        gameOver();
        clearInterval(countDownInterval);
    
    }
  }, 1000);
}
// function that loads first set of questions.
function DisplayQuestions() {
    $jumboHeader.textContent = "Quiz In Progress"
     
        $questionArea.textContent = questions[0].Question
        $btn1.textContent = questions[0].choices[0]
        $btn2.textContent = questions[0].choices[1]
        $btn3.textContent = questions[0].choices[2]
        $btn4.textContent = questions[0].choices[3]
        console.log(questions[0].answer);

    
}
//event listeners for all possible answer buttons
$btn1.addEventListener("click",evaluateAnswer);
$btn2.addEventListener("click",evaluateAnswer);
$btn3.addEventListener("click",evaluateAnswer);
$btn4.addEventListener("click",evaluateAnswer);


// function that checks the users answer by comparing the event target to the correct answer

function evaluateAnswer() {
    // setting variable user answer to the event target
   
    
    let userAnswer = event.target.textContent; 
    console.log(userAnswer);
    
        if(userAnswer === questions[count].answer) {
            score += 5;
            $results.textContent = "correct, score is: " + score;
            
        }
        else {
            timeLeft -= 5;
            $results.textContent = "incorrect, score is: " + score;
          
        }
        count ++;

        if( count > 4) {
            gameOver();
        }
        else {
            $questionArea.textContent = questions[count].Question
            $btn1.textContent = questions[count].choices[0]
            $btn2.textContent = questions[count].choices[1]
            $btn3.textContent = questions[count].choices[2]
            $btn4.textContent = questions[count].choices[3]
        }

}
// function that runs when quiz is over.
function gameOver() {
    timeLeft = 0;
    $jumboHeader.textContent = "Quiz has ended"
    $buttonArea.style.visibility = "hidden";
    $questionArea.style.visibility = "hidden";
    $timeLabel.textContent = "";
    $results.textContent = "GAME OVER. \n Your final score is:  " + score;
}

