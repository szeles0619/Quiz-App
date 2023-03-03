let clearBtn = document.getElementById("clear");

function displayScores() {
  let savedHighscores = JSON.parse(
    window.localStorage.getItem("savedHighscores")
  ); 
  savedHighscores.sort(function (a, b) {
    return b.score - a.score;
  });

  savedHighscores.forEach(function (score) {
    let scoreLi = document.createElement("li");
    scoreLi.textContent = score.initials + " - " + score.score;
    let scoreOl = document.getElementById("highscores");
    scoreOl.appendChild(scoreLi);
  });
}


function clearScores() {
  window.localStorage.removeItem("savedHighscores");
  window.location.reload();
}

clearBtn.addEventListener("click", clearScores);
displayScores();

