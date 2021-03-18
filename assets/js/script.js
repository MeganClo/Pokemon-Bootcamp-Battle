// getting username from landing page via local storage
var userName = localStorage.getItem("Name");
console.log(userName);

// setting the health both parties
var enemyHealth = 100;
var userHealth = 100;

// setting attack value
var userAttack = "";
var enemyAttack = "";

// setting array to randomly choose attack
var possibleEnemyAttackVal = [5, 5, 10, 15];

// randomly choosing the enemy attack
enemyAttackValue = possibleEnemyAttackVal[Math.floor(Math.random() * possibleEnemyAttackVal.length)];
console.log(enemyAttackValue);

// targeting the health bars
var userHealthBar = document.getElementById("userHealthBar");
var userHealthStats = document.getElementById("userHealthStats");
var userHealthEl = document.getElementById("user-Health");
var enemyHealthBar = document.getElementById("enemyHealthBar");
var enemyHealthStats = document.getElementById("enemyHealthStats");
var enemyHealthEl = document.getElementById("enemy-health");

// targetting the buttons to attack
var attack1 = document.getElementById("move1");
var attack2 = document.getElementById("move2");
var attack3 = document.getElementById("move3");
var attack4 = document.getElementById("move4");

// targeting all the buttons
var attackButtons = document.getElementsByClassName("attackButtons");

// targeting opponent random user information placeholders
var randomUser = document.querySelector("#randomPicture");
var randomUpdates = document.querySelector("#randomUpdates");

// targetting the text to update attack value
var enemyAttackText = document.getElementById("enemyAttack");
var userAttackText = document.getElementById("userAttack");

// var emenyHealthText = document.getElementById("enemyHealth");
// var userHealthText = document.getElementById("userHealth");

// adding moves to the page
var moveOne = document.querySelector("#move1")
var moveTwo = document.querySelector("#move2")
var moveThree = document.querySelector("#move3")
var moveFour = document.querySelector("#move4")

// targetting user's and opponents pokemons and pokemons images placeholders
var userPokemon = document.querySelector("#userPokemonName")
var userPokemonPlaceholder = document.querySelector("#userPokemonPicture")
var opponentPokemon = document.querySelector("#randomPokemonName")
var opponentPokemonPlaceholder = document.querySelector("#randomPokemonPicture")

// creating a random user pokemon
var pokemon = ["pikachu", "charmander", "bulbasaur", "eevee", "oddish", "squirtle", "bellsprout", "butterfree", "pidgeotto", "jigglypuff"]
const random = Math.floor(Math.random() * pokemon.length);
var userRandomPokemon = pokemon[random];
console.log(userRandomPokemon);

//creating opponent random pokemon
var opponentRandomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)]; //Get a random field name from the array
while (pokemon == opponentRandomPokemon) {
    var opponentPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
};

// updated health text
var updateHealth = function () {
    // enemy health
    enemyHealthBar.setAttribute("aria-valuenow", enemyHealth);
    enemyHealthBar.setAttribute("aria-valuetext", enemyHealth);
    enemyHealthStats.style.width = enemyHealth + "%";
    enemyHealthEl.textContent = enemyHealth;
    // user health
    userHealthBar.setAttribute("aria-valuenow", userHealth);
    userHealthBar.setAttribute("aria-valuetext", userHealth);
    userHealthStats.style.width = userHealth + "%";
    userHealthEl.textContent = userHealth;
    // checking for the end of the game
    if (userHealth <= 0) {
        alert("YOU LOST!")
    } else if (enemyHealth <= 0) {
        alert("YOU WON! Your score is" + userHealth + "!");
    } else {
        // setting class to change color of user's health bar
        if (userHealth > 50) {
            userHealthBar.setAttribute("class", "success progress");
        } else if (userHealth > 25) {
            userHealthBar.setAttribute("class", "warning progress");
        } else userHealthBar.setAttribute("class", "alert progress");
        // setting class to change color of enemy's health bar
        if (enemyHealth > 50) {
            enemyHealthBar.setAttribute("class", "success progress");
        } else if (enemyHealth > 25) {
            enemyHealthBar.setAttribute("class", "warning progress");
        } else enemyHealthBar.setAttribute("class", "alert progress");
    };
};

// user fight function to be called on button clicks
var userFight = function (attackVal) {
    console.log("fighting!");
    enemyHealth = enemyHealth - attackVal;
};

// time interval used to wait until enemy attack to attack again
var fightButtonClicks = function () {
    for (var i = 0; i < attackButtons.length; i++) {
        attackButtons[i].disabled = true;
    };
    setTimeout(function () {
        enemyFight();
        for (var i = 0; i < attackButtons.length; i++) {
            attackButtons[i].disabled = false;
        };
    }, 3000);
};


// enemy fight function 
var enemyFight = function () {
    if (userHealth > 0 && enemyHealth > 0) {
        var num = Math.floor(Math.random() * 10) + 1;
        if (enemyAttackValue === 5) {
            if (num < 3) {
                enemyAttackText.textContent = (`Incoming! ${opponentRandomPokemon} attacked ${userRandomPokemon}!`);
                userAttackText.textContent = (`${userRandomPokemon} blocked attack from ${opponentRandomPokemon}!`);
            } else {
                userHealth = userHealth - enemyAttackValue;
                enemyAttackText.textContent = (`Incoming! ${opponentRandomPokemon} attacked ${userRandomPokemon}!`);
                userAttackText.textContent = (`${userRandomPokemon} got hit from ${opponentRandomPokemon}!`);
                updateHealth();
            }
        } else if (enemyAttackValue === 10) {
            if (num < 6) {
                enemyAttackText.textContent = (`Incoming! ${opponentRandomPokemon} attacked ${userRandomPokemon}!`);
                userAttackText.textContent = (`${userRandomPokemon} blocked attack from ${opponentRandomPokemon}!`);
            } else {
                userHealth = userHealth - enemyAttackValue;
                enemyAttackText.textContent = (`Incoming! ${opponentRandomPokemon} attacked ${userRandomPokemon}!`);
                userAttackText.textContent = (`${userRandomPokemon} got hit from ${opponentRandomPokemon}!`);
                updateHealth();
            }
        } else {
            if (num < 8) {
                enemyAttackText.textContent = (`Incoming! ${opponentRandomPokemon} attacked ${userRandomPokemon}!`);
                userAttackText.textContent = (`${userRandomPokemon} blocked attack from ${opponentRandomPokemon}!`);
            } else {
                userHealth = userHealth - enemyAttackValue;
                enemyAttackText.textContent = (`Incoming! ${opponentRandomPokemon} attacked ${userRandomPokemon}!`);
                userAttackText.textContent = (`${userRandomPokemon} got hit from ${opponentRandomPokemon}!`);
                updateHealth();
            };
        };
    };
};

// button attack 1 (value 5)
attack1.addEventListener("click", function () {
    console.log("fight button 1");
    var num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
    userAttackText.textContent = (`Get 'em! ${userRandomPokemon} attacked ${opponentRandomPokemon}!`);
    if (num < 3) {
        enemyAttackText.textContent = (`${opponentRandomPokemon} blocked attack from ${userRandomPokemon}!`);
    } else {
        var attackVal = document.getElementById("move1").value;
        console.log(attackVal);
        userFight(attackVal);
        enemyAttackText.textContent = (`${opponentRandomPokemon} got hit from ${userRandomPokemon}!`);
        updateHealth();
    };
    fightButtonClicks();
});

// button attack 2 (value 10)
attack2.addEventListener("click", function () {
    console.log("fight button 2");
    var num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
    userAttackText.textContent = (`Get 'em! ${userRandomPokemon} attacked ${opponentRandomPokemon}!`);
    if (num < 6) {
        enemyAttackText.textContent = (`${opponentRandomPokemon} blocked attack from ${userRandomPokemon}!`);
    } else {
        var attackVal = document.getElementById("move2").value;
        console.log(attackVal);
        userFight(attackVal);
        enemyAttackText.textContent = (`${opponentRandomPokemon} got hit from ${userRandomPokemon}!`);
        updateHealth();
    };
    fightButtonClicks();
});

// button attack 3 (value 15)
attack3.addEventListener("click", function () {
    console.log("fight button 3");
    var num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
    userAttackText.textContent = (`Get 'em! ${userRandomPokemon} attacked ${opponentRandomPokemon}!`);
    if (num < 8) {
        enemyAttackText.textContent = (`${opponentRandomPokemon} blocked attack from ${userRandomPokemon}!`);
    } else {
        var attackVal = document.getElementById("move3").value;
        console.log(attackVal);
        userFight(attackVal);
        enemyAttackText.textContent = (`${opponentRandomPokemon} got hit from ${userRandomPokemon}!`);
        updateHealth();
    };
    fightButtonClicks();
});

// button attack 4 (value 5)
attack4.addEventListener("click", function () {
    console.log("fight button 4");
    var num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
    userAttackText.textContent = (`Get 'em! ${userRandomPokemon} attacked ${opponentRandomPokemon}!`);
    if (num < 4) {
        enemyAttackText.textContent = (`${opponentRandomPokemon} blocked attack from ${userRandomPokemon}!`);
    } else {
        var attackVal = document.getElementById("move4").value;
        console.log(attackVal);
        userFight(attackVal);
        enemyAttackText.textContent = (`${opponentRandomPokemon} got hit from ${userRandomPokemon}!`);
        updateHealth();
    };
    fightButtonClicks();
});


// getting random user information from API
let getUserInfo = () => {
    fetch("https://randomuser.me/api/").then((response) => {
        response.json().then((data) => {
            displayRepos(data.results);
        })
    });

};


// displaying random user information from API
let displayRepos = (repos) => {
    // console.log(repos);

    // //     // loop over repos
    for (let i = 0; i < repos.length; i++) {
        // loop over user name
        let nameObject = repos[i].name


        const name = Object.values(nameObject)
        // create an elememt to hold random user name
        let randomUserName = document.createElement("div");
        randomUserName.textContent = name[1] + " " + name[2];
        randomUser.appendChild(randomUserName)
        // loop over user country
        let countryObject = repos[i].location
        const country = Object.values(countryObject)
        // let randomUserCountry = country[3]
        // console.log("I am from " + randomUserCountry)
        let randomUserCountry = document.createElement("div");
        randomUserCountry.textContent = country[3]
        randomUser.appendChild(randomUserCountry)
        //loop over pictures
        let pictureObject = repos[i].picture
        // console.log(pictureObject)

        const picture = Object.values(pictureObject)
        let randomUserImg = document.createElement('img');
        randomUserImg.setAttribute("class", "circle")
        randomUserImg.setAttribute('src', picture[0]);

        // let randomUserPicture = picture[2]
        // console.log(randomUserPicture)

        randomUser.appendChild(randomUserImg)
    }
};

// getting and displaying user's random pokemon and moves
let getCurrentInfo = () => {
    let apiURL = "https://pokeapi.co/api/v2/pokemon/" + userRandomPokemon;
    fetch(apiURL).then((response) => {
        response.json().then((data) => {
            //displaying random user pokemon name
            userPokemon.textContent = userRandomPokemon
            //displaying random user pokemon picture
            var userPokemonImage = document.createElement("img")
            var imageURL = "./assets/images/" + userRandomPokemon + ".png"
            userPokemonImage.setAttribute("src", imageURL)
            userPokemonImage.setAttribute("style", "max-width: 15vh")
            console.log(userPokemonImage)
            // console.log(userPokemonImage)
            userPokemonPlaceholder.appendChild(userPokemonImage)

            let movesObject1 = document.createElement("p")
            movesObject1.textContent = data.moves[0].move.name
            moveOne.appendChild(movesObject1)
            let movesObject2 = document.createElement("p")
            movesObject2.textContent = data.moves[1].move.name
            moveTwo.appendChild(movesObject2)
            let movesObject3 = document.createElement("p")
            movesObject3.textContent = data.moves[2].move.name
            moveThree.appendChild(movesObject3)
            let movesObject4 = document.createElement("p")
            movesObject4.textContent = data.moves[3].move.name
            moveFour.appendChild(movesObject4)

            console.log(userRandomPokemon)

            // function jsUcfirst(string) {
            //     return string.charAt(0).toUpperCase() + string.slice(1);
            // }
            // jsUcfirst(userRandomPokemon)
            // console.log(userRandomPokemon)
        })
    })
};

// getting from API and displaying opponent's pokemon and moves
let opponentInfo = () => {
    let apiURL = "https://pokeapi.co/api/v2/pokemon/" + opponentRandomPokemon;
    fetch(apiURL).then((response) => {
        response.json().then((data) => {
            console.log(data)

            // displaying opponent random pokemon's name
            opponentPokemon.textContent = opponentRandomPokemon
            // console.log(opponentPokemon)

            //displaying oponent's random pokemon picture
            var opponentPokemonImage = document.createElement("img")
            var imageURL = "./assets/images/" + opponentRandomPokemon + ".png"
            opponentPokemonImage.setAttribute("src", imageURL)
            opponentPokemonImage.setAttribute("style", "max-width: 15vh")
            // console.log(userPokemonImage)
            opponentPokemonPlaceholder.appendChild(opponentPokemonImage)

            //displaying radom moves
            var opponentMove = document.createElement("p")
            opponentMove.textContent = data.moves[0].move.name
            console.log(opponentMove)

            randomUpdates.appendChild(opponentMove)
        })
    })
};


var gameEnd = function () {
    var score = {
        score: userHealth,
        name: userName
    };
    highscores.push(score);
    highscores.sort((a, b) => {
        return b.score - a.score;
    });
    highscores.splice(3);
    localStorage.setItem("highscores", JSON.stringify(highscores));
};

// Click function for show the Modal
// $(".show").on("click", function(){
//     $(".mask").addClass("active");
//   });

// Function for close the Modal

function closeModal() {
    $(".mask").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".close, .mask").on("click", function () {
    closeModal();
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});


getCurrentInfo();
updateHealth();
getUserInfo();
$(document).foundation();
opponentInfo()
