var count = 0
var randomUser = document.querySelector("#opponentHeader")
var moveOne = document.querySelector("#move1")
var moveTwo = document.querySelector("#move2")
var moveThree = document.querySelector("#move3")
var moveFour = document.querySelector("#move4")
var pokemonDictionary ={}; 

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

/*async function getPoke (pd, pk) {
   if(pk.length <=0)
        return;
    

    let pokemon = pk[0];
    let pokeRes = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
    let data = await pokeRes.json();
    pd[pokemon] = data.moves[0].move.name;
    console.log("Called: ", pk);
   
    getPoke(pd, pk.splice(0, pk.length - 1))
    
}


async function a() {
    let a = await getPoke(pokemonDictionary, ["pikachu", "charmander", 'bulbasaur', 'eevee']);
    console.log(pokemonDictionary);
}
a(); */


async function getPokemonInfo() {
    
    let pokemon = ["pikachu", "charmander", 'bulbasaur', 'eevee', 'oddish', 'squirtle', 'bellsprout', 'butterfree', 'pidgeot', 'jigglypuff']
    for (let i = 0; i < pokemon.length; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon[i]).then((pokeRes) => {
        // console.log(pokeRes)
        pokeRes.json().then((data) => {
            // console.log(data)

            pokemonDictionary[pokemon[0]] = data.moves[0].move.name; 
            // for (let j = 0; j < 4; j++) {
            //     // console.log(data.moves[j].move.name)
            // }

            if(pokemon[i] == 'pikachu') {
                let movesObject1 = document.createElement("p")
                movesObject1.textContent = data.moves[0].move.name
    
                moveOne.appendChild(movesObject1)
            }
            if(pokemon[i] == 'pikachu') {
                let movesObject1 = document.createElement("p")
                movesObject1.textContent = data.moves[1].move.name
    
                moveTwo.appendChild(movesObject1)
            }
            if(pokemon[i] == 'pikachu') {
                let movesObject1 = document.createElement("p")
                movesObject1.textContent = data.moves[2].move.name
    
                moveThree.appendChild(movesObject1)
            }
            if(pokemon[i] == 'pikachu') {
                let movesObject1 = document.createElement("p")
                movesObject1.textContent = data.moves[3].move.name
    
                moveFour.appendChild(movesObject1)
            }

            // console.log(movesObject1)
            // let movesObject2 = data.moves[1].move.name

            // console.log(movesObject2)
            // let movesObject3 = data.moves[2].move.name

            // console.log(movesObject3)
            // let movesObject4 = data.moves[3].move.name

            // console.log(movesObject4)
        })
    });
        
    }
    console.log("pd", pokemonDictionary);
    // console.log("pd", Object.values(pokemonDictionary));
   
    
    
}
getPokemonInfo()