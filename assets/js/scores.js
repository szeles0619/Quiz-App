let clearBtn = document.getElementById("clear");

//This functions is displays the scores from localStorage
function displayScores() {
  let savedHighscores = JSON.parse(
    window.localStorage.getItem("savedHighscores")
  ); 
  savedHighscores.sort(function (a, b) {
    return b.score - a.score;
  });

  //New list item
  savedHighscores.forEach(function (score) {
    let scoreLi = document.createElement("li");
    scoreLi.textContent = score.initials + " - " + score.score;

    let scoreOl = document.getElementById("highscores");
    //Items will be added to ordered list
    scoreOl.appendChild(scoreLi);
  });
}

//This function is remove items from local storage
function clearScores() {
  window.localStorage.removeItem("savedHighscores");
  window.location.reload();
}

clearBtn.addEventListener("click", clearScores);

displayScores();


