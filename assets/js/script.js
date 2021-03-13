var count = 0
var randomUser = document.querySelector("#randomUser")

let getUserInfo = () => {
 fetch("https://randomuser.me/api/").then((response) => {
     response.json().then((data) => {
         displayRepos(data.results);
     })
 });

};
getUserInfo();

let displayRepos = (repos) => {
    console.log(repos);

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

let getPokemonInfo = () => {
    var pokemon = ["pikachu", "charmander", 'bulbasaur', 'eevee', 'oddish', 'squirtle', 'bellsprout', 'butterfree', 'pidgeot', 'jigglypuff']
    for (let i = 0; i < pokemon.length; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon[i]).then((pokeRes) => {
        // console.log(pokeRes)
        pokeRes.json().then((data) => {
            // console.log(data.moves[0]);
            let movesObject1 = data.moves[count].move.name
            count++
            console.log(movesObject1)
        })
    });
        
    }
    
}
getPokemonInfo()