var highscoresList = document.getElementById("leaderlist");
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var noScore = document.getElementById("noScore")

highscoresList.innerHTML =(highscores.map(score => {
    return `<li>${score.name} - ${score.score}</li>`;
}).join(""));

console.log(highscores.length);

if (highscores.length === 0) {
    noScore.innerHTML = "No High Scores, yet!"
};
