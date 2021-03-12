// setting the health both parties
var enemyHealth = 100;
var userHealth = 100;

// setting attack value
var userAttack = "";
var enemeyAttack = "";

// setting array to randomly choose attack
var possibleEnemyAttackVal = [5, 5, 10, 15];

// randomly choosing the enemy attack
enemyAttackValue = possibleEnemyAttackVal[Math.floor(Math.random() * possibleEnemyAttackVal.length)];
console.log(enemyAttackValue);

// targetting the buttons to attack
var attack1 = document.getElementById("move1");
var attack2 = document.getElementById("move2");
var attack3 = document.getElementById("move3");
var attack4 = document.getElementById("move4");

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

// user fight function to be called on button clicks
var userFight = function(attackVal) {
    console.log("fighting!");
    enemyHealth = enemyHealth-attackVal;
    updateHealth ();
    setTimeout(function() {
        enemyFight();
    }, 5000);
};

var enemyFight = function() {
    console.log("enemy hitting!");
    userHealth = userHealth-enemyAttackValue;
    console.log(userHealth);
    updateHealth();
}

// button attack 1 
attack1.addEventListener("click", function() {
    console.log("getting there");
    var attackVal = document.getElementById("move1").value;
    console.log(attackVal);
    userFight(attackVal);
    console.log(enemyHealth);
});

// button attack 2
attack2.addEventListener("click", function() {
    console.log("getting there");
    var attackVal = document.getElementById("move2").value;
    console.log(attackVal);
    userFight(attackVal);
    console.log(enemyHealth);
});

// button attack 3
attack3.addEventListener("click", function() {
    console.log("getting there");
    var attackVal = document.getElementById("move3").value;
    console.log(attackVal);
    userFight(attackVal);
    console.log(enemyHealth);
});

// button attack 4
attack4.addEventListener("click", function() {
    console.log("getting there");
    var attackVal = document.getElementById("move4").value;
    console.log(attackVal);
    userFight(attackVal);
    console.log(enemyHealth);
});

updateHealth();