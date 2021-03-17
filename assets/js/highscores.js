var highscoresList = document.getElementById("leaderlist");
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

highscoresList.innerHTML =(highscores.map(score => {
    return `<li>${score.name} - ${score.score}</li>`;
}).join(""));

