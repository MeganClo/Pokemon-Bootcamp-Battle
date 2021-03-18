// targeting the list to display the scores
var highscoresList = document.getElementById("leaderlist");

// targeting location to display if there are no scores
var noScore = document.getElementById("noScore")

// getting the scores from local storage
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// displaying scores on the page
highscoresList.innerHTML =(highscores.map(score => {
    return `<li>${score.name} - ${score.score}</li>`;
}).join(""));

// display if there's no high scores
if (highscores.length === 0) {
    noScore.innerHTML = "No High Scores, yet!"
};
