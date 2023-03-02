//Sound effect on click when user answers
let soundOn = true;
const correctSound = new Audio('./assets/sfx/correct.wav');
const incorrectSound = new Audio('./assets/sfx/incorrect.wav');

//querySelector added which selects HTML elements
const startBtn = document.querySelector("#start");
const time = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const questionsScreen = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const finalScore = document.querySelector("#final-score");
const endScreen = document.querySelector("#end-screen");
const initials = document.querySelector('#initials');
const submitBtn = document.querySelector('#submit');
const toggleSoundBtn = document.querySelector("#toggleSound");
const saved = document.querySelector(".saved");
const error = document.querySelector(".error");
const feedbackEl = document.querySelector(".feedback");
const scores = document.querySelector("#scores");


//Quiz starts when click on Start Quiz
const startQuiz = () => {

    startScreen.classList.add("hide");
    timerCount = 60;

    questionsScreen.classList.remove("hide");
    startCounting();
    showQuestion();
}

//Added event listeners to 
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitScore);
