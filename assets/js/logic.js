//Sound effect on click when user answers
let soundOn = true;
const correctSound = new Audio('./assets/sfx/correct.wav');
const incorrectSound = new Audio('./assets/sfx/incorrect.wav');


const time = document.getElementById("time"); 
const start = document.getElementById("start"); 
const startScreen = document.getElementById("start-screen"); 
const questionScreen = document.getElementById("questions"); 
const questionTitle = document.getElementById("question-title"); 
const choices = document.getElementById("choices"); 
const endScreen = document.getElementById("end-screen"); 
const displayFinalScore = document.getElementById("final-score"); 
const initals = document.getElementById("initials"); 
const submitBtn = document.getElementById("submit"); 

// Object will be kept
let score = 0; 
let finalScore; 
let userScore; 

//Display the added time which is 60sec
let secondsLeft = 60; 
time.textContent = secondsLeft; 
let timerInterval;

//this is function to start the game
function startGame() {
  startTimer();
  startQuestions();
  displayQuestions();
}
