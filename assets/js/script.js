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
