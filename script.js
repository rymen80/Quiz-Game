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
        Questions: "Question 5: The logical operator that represents 'or' is ____.",
        choices: ["||", "OR", "&&", "==="],
        answer: "||"
    }
];

const $timerTextArea = document.querySelector("#timer-text-area");
const $highscoreButton = document.querySelector("#highscore-button");
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

let score = 0;
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// ```
window.onload = function() {
    $buttonArea.style.visibility= "hidden";
    $questionArea.textContent = "Click start to begin Quiz"
    
}
$btnStart.addEventListener("click",takeQuiz);
//event listeners for all possible answer buttons
// $btn1.addEventListener("click",evaluateAnswer );
// $btn2.addEventListener("click",evaluateAnswer );
// $btn3.addEventListener("click",evaluateAnswer );
// $btn4.addEventListener("click",evaluateAnswer );

let timeLeft = 60;
function takeQuiz() {
    startClock();
    DisplayQuestions();
}

function startClock() {
    $btnStart.style.visibility = "hidden";
    $buttonArea.style.visibility = "visible";
    
    const countDownInterval = setInterval(function(){
    $timerTextArea.value = timeLeft;
    // timeLeft = timeLeft - 1;
    timeLeft--;
    if (timeLeft === 0) {
    $timerTextArea.value = '';
    clearInterval(countDownInterval);
    //more code here for the game.
    }
  }, 1000);
}

function DisplayQuestions() {
    $jumboHeader.textContent = "Quiz In Progress"
    questions.forEach((index,element,array) => {
        $questionArea.textContent = questions[0].Question
        $btn1.textContent = questions[0].choices[0]
        $btn2.textContent = questions[0].choices[1]
        $btn3.textContent = questions[0].choices[2]
        $btn4.textContent = questions[0].choices[3]
        console.log(questions[0].answer);

});
}

// questions.forEach((index,element,array) => {    
//     $questionArea.textContent = questions[0].Question
//     $btn1.textContent = questions[0].choices[0]
//     $btn2.textContent = questions[0].choices[1]
//     $btn3.textContent = questions[0].choices[2]
//     $btn4.textContent = questions[0].choices[3]
//     if(event === questions[0].answer) {
//         $results.textContent = "Correct";
//     }
// });