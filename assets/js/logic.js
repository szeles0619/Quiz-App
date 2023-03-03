//Sound effect on click when user answers
let soundOn = true;
const correctSound = new Audio('./assets/sfx/correct.wav');
const incorrectSound = new Audio('./assets/sfx/incorrect.wav');

//Selecting HTML elements
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

//Variables for score
let score = 0;
let finalScore;
let userScore;

//This function will start the quiz
function startGame() {
    startTimer();
    startQuestions();
    displayQuestions();
}

function startQuestions() {
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
}

let currentQuestionIndex = 0;

function displayQuestions() {
    let currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    choices.innerHTML = "";
    currentQuestion.choices.forEach(function (choice, i) {
        let choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = checkAnswer;
        choices.appendChild(choiceBtn);
    });
}

let secondsLeft = 60;
time.textContent = secondsLeft;
let timerInterval;

// function for timer
function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;
        if (secondsLeft === 0) {
            endGame();
        }
    }, 1000);
}


function checkAnswer() {
    if (this.value === questions[currentQuestionIndex].answer) {
        score += +5;
        time.textContent = secondsLeft;
    } else {
        secondsLeft -= 10;
        score -= 5;
        time.textContent = secondsLeft;
    } if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        endGame();
    } 
    else {
        displayQuestions();
    }
}

function endGame() {
    clearInterval(timerInterval);
    questionScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScore = score + secondsLeft;
    displayFinalScore.textContent = finalScore;
}
function saveScore() {
    let initials = initals.value;
    if (!initials) {
        alert("Please enter your initials");
        return;
    } else {
        let savedHighscores =
            JSON.parse(window.localStorage.getItem("savedHighscores")) || [];

        userScore = {
            initials: initials,
            score: finalScore,
        };

        savedHighscores.push(userScore);
        window.localStorage.setItem(
            "savedHighscores",
            JSON.stringify(savedHighscores)
        );
        window.location.href = "highscores.html";
    }
}

function submitEnter(event) {
    if (event.key === "Enter") {
        saveScore();
    }
}

start.addEventListener("click", startGame);

submitBtn.addEventListener("click", saveScore);

initals.onkeyup = submitEnter;
