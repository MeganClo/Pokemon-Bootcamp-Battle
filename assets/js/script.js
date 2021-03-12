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

// var attackVal = document.querySelectorAll("btn");
// console.log(attackVal);


// targetting the text to update heath/attack value
var emenyHealthText = document.getElementById("enemyHealth");
var userHealthText = document.getElementById("userHealth");
var enemyAttackText = document.getElementById("enemyAttack");
var userAttackText = document.getElementById("userAttack");

// updated health text
var updateHealth = function() {
    emenyHealthText.textContent = enemyHealth;
    userHealthText.textContent = userHealth;
};

var userFight = function(attackVal) {
    console.log("fighting!");
    enemyHealth = enemyHealth-attackVal;
    updateHealth ();
};


attack1.addEventListener("click", function() {
    console.log("getting there");
    var attackVal = document.getElementById("1").value;
    console.log(attackVal);
    userFight(attackVal);
    console.log(enemyHealth);
});

attack2.addEventListener("click", function() {
    console.log("getting there");
    var attackVal = document.getElementById("2").value;
    console.log(attackVal);
    userFight(attackVal);
    console.log(enemyHealth);
});

attack3.addEventListener("click", function() {
    console.log("getting there");
    var attackVal = document.getElementById("3").value;
    console.log(attackVal);
    userFight(attackVal);
    console.log(enemyHealth);
});

attack4.addEventListener("click", function() {
    console.log("getting there");
    var attackVal = document.getElementById("4").value;
    console.log(attackVal);
    userFight(attackVal);
    console.log(enemyHealth);
});

updateHealth();