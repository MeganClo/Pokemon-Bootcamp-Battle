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
var count = 0
var randomUser = document.querySelector("#opponentHeader")
var moveOne = document.querySelector("#move1")
var moveTwo = document.querySelector("#move2")
var moveThree = document.querySelector("#move3")
var moveFour = document.querySelector("#move4")
var pokemonDictionary = {};
var pokemon = "pikachu"

let getUserInfo = () => {
    fetch("https://randomuser.me/api/").then((response) => {
        response.json().then((data) => {
            displayRepos(data.results);
        })
    });

};
getUserInfo();

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
        randomUserImg.setAttribute('src', picture[0]);
        // let randomUserPicture = picture[2]
        // console.log(randomUserPicture)

        randomUser.appendChild(randomUserImg)

    }
}

let getCurrentInfo = () => {
    let apiURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    fetch(apiURL).then((response) => {
        response.json().then((data) => {

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

        })
    })
}
getCurrentInfo()
