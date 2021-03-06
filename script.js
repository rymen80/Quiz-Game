// an array of objects coinating the questions, possible answers and correct answer.
const questions = [
  {
    Question: "Question 1: Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    Question:
      "Question 2: The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    Question:
      "Question 3: The instructions for a function are enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "curly brackets",
  },
  {
    Question:
      "Question 4: A property of an object that is a function is called a ____.",
    choices: ["method", "string", "stylesheet", "boolean"],
    answer: "method",
  },
  {
    Question: "Question 5: The logical operator that represents 'or' is ____.",
    choices: ["||", "OR", "&&", "==="],
    answer: "||",
  },
];
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
// variable to store users score.
let userScores = [];
// variable to store user initials
let userInitial = "";
// a variable to store the users name and score.
let userTag = "";
// set time left to the amount of questions multiplied ny ten seconds. IE. 50 secs.
let timeLeft = 10 * questions.length;
// hides the buttons and displays a messgage to begin quiz upon page load
window.onload = function () {
  $buttonArea.style.visibility = "hidden";
  $questionArea.textContent = "Click start to begin Quiz";
};
$highscoreButton.addEventListener("click", getScores);
// on click event that loads the take quiz function
$btnStart.addEventListener("click", takeQuiz);
// function that runs the startClock and displaysQuestions functions
function takeQuiz() {
  startClock();
  displayQuestions();
}
// start the clock function
function startClock() {
  $btnStart.style.visibility = "hidden";
  $buttonArea.style.visibility = "visible";
  const countDownInterval = setInterval(function () {
    $timerTextArea.value = timeLeft;
    // timeLeft = timeLeft - 1;
    timeLeft--;
    console.log(timeLeft);
    if (timeLeft <= 0) {
      timeLeft = 0;
      clearInterval(countDownInterval);
      $timerTextArea.value = "--";
      $timeLabel.textContent = "Times Up!!";
      gameOver();
    }
  }, 1000);
}
// function that loads first set of questions.
function displayQuestions() {
  $jumboHeader.textContent = "Quiz In Progress";

  $questionArea.textContent = questions[0].Question;
  $btn1.textContent = questions[0].choices[0];
  $btn2.textContent = questions[0].choices[1];
  $btn3.textContent = questions[0].choices[2];
  $btn4.textContent = questions[0].choices[3];
  console.log(questions[0].answer);
}
//event listeners for all possible answer buttons
$btn1.addEventListener("click", evaluateAnswer);
$btn2.addEventListener("click", evaluateAnswer);
$btn3.addEventListener("click", evaluateAnswer);
$btn4.addEventListener("click", evaluateAnswer);
// function that checks the users answer by comparing the event target to the correct answer
function evaluateAnswer() {
  // setting variable user answer to the event target
  let userAnswer = event.target.textContent;
  console.log(userAnswer);

  if (userAnswer === questions[count].answer) {
    score += 5;
    $results.textContent = "correct, score is: " + score;
  } else {
    timeLeft -= 5;
    $results.textContent = "incorrect, score is: " + score;
  }
  count++;
  if (count > 4) {
    timeLeft = 0;
  } else {
    $questionArea.textContent = questions[count].Question;
    $btn1.textContent = questions[count].choices[0];
    $btn2.textContent = questions[count].choices[1];
    $btn3.textContent = questions[count].choices[2];
    $btn4.textContent = questions[count].choices[3];
  }
}
// function to input user score
function enterScore() {
  let initialsInput = document.createElement("textarea");
  initialsInput.setAttribute("rows", 1);
  initialsInput.setAttribute("cols", 3);
  initialsInput.style.marginTop = "20px";
  initialsInput.className += "initials-input";
  $questionContainer.textContent =
    "You scored " + score + " enter intials to record score  ";
  $questionContainer.appendChild(initialsInput);
  let inputButton = document.createElement("button");
  inputButton.className += "submit-button";
  inputButton.textContent = "submit";
  inputButton.style.marginLeft = "20px";
  $questionContainer.appendChild(inputButton);
  const $submitButton = document.querySelector(".submit-button");
  $submitButton.addEventListener("click", function () {
    if (initialsInput.value) {
      userInitial += initialsInput.value;
      userTag = score + "  " + userInitial;
      userScores.push(userTag);
      console.log(userScores);
    } else {
      alert("Must input Initials");
    }
  });
  storeInfo();
}
// function to send user score and intials to local storage.
function storeInfo() {
    localStorage.setItem('scoreHistory', JSON.stringify(userScores));
}
$highscoreButton.addEventListener('click', getScores);
// get scores form local storage to display
function getScores() {
    const highScore = JSON.parse(localStorage.getItem("scoreHistory"));
    for (let i = 0; i < highScore.length; i++) {
      const userList = document.createElement("li");
      userList.innerText = highScores[i];
      $results.appendChild(userList);
    }
  }

// function that runs when quiz is over.
function gameOver() {
  
  $jumboHeader.textContent = "Quiz has ended";
  $buttonArea.style.visibility = "hidden";
  $questionArea.style.visibility = "hidden";
  $timeLabel.textContent = "";
  $results.textContent = "GAME OVER. \n Your final score is:  " + score;
  enterScore();
  
  
  
}
