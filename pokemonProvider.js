const baseApiUrl = "https://pokeapi.co/api/v2/pokemon"

/**
 * Fetch the pokemon list with the weight and height
 */
function fetchPokemonList(callback, limit = 20) {
    url = baseApiUrl + "?limit=" + limit;
    const request = async() => {
         const response = await fetch(url);
         const json = await response.json();
         let promisesArray = json["results"].map(result => {
            return fetch(result.url).then(response => response.json());
        });
        return Promise.all(promisesArray);
    };
    request().then( (data)=> {
        let pokemons = [];
        for (let i=0; i < data.length; ++i) {
            pokemons.push({"name":data[i].name, "weight": data[i].weight, "height": data[i].height});
        }
        callback(pokemons);
    });  
}

exports.fetchPokemonList = fetchPokemonList;
