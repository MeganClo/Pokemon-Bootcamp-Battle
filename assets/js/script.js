// setting the health both parties
var enemyHealth = 100;
var userHealth = 100;

// setting attack value
var userAttack = "";
var enemeyAttack = "";

// targetting the buttons to attack
var attack1 = document.getElementById("1");
var attack2 = document.getElementById("2");
var attack3 = document.getElementById("3");
var attack4 = document.getElementById("4");

// getting the value from each button
var attack1val = document.getElementById("1").value;
var attack2val = document.getElementById("2").value;
var attack3val = document.getElementById("3").value;
var attack4val = document.getElementById("4").value;

// targetting the text to update heath/attack value
var emenyHealthText = document.getElementById("enemyHealth");
var userHealthText = document.getElementById("userHealth");
var enemyAttackText = document.getElementById("enemyAttack");
var userAttackText = document.getElementById("userAttack");

emenyHealthText.textContent = enemyHealth;
userHealthText.textContent = userHealth;




var userfight = function() {
    console.log("fighting!");
}


attack1.addEventListener("click", function() {
    console.log("getting there");
    fight();
});

attack2.addEventListener("click", function() {
    console.log("getting there");
    fight();
});

attack3.addEventListener("click", function() {
    console.log("getting there");
    fight();
});

attack4.addEventListener("click", function() {
    console.log("getting there");
    fight();
});