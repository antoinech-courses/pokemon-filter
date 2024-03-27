//const fetchPokemonList = require("./pokemonProvider.js")

$(onLoad)

function showPokemonList(pokemons, filterpredicate = () => true) {
    pokemons = pokemons.map(convertUnit).filter(filterpredicate); // Add converted units

    let table = $("tbody");
    table.empty()
    for (let i = 0; i < pokemons.length; ++i) {
        table.append(showPokemon(pokemons[i]));
    }
}

function showPokemon(pokemon){
    let row = $("<tr>");
    row.append($("<td>").text(pokemon.name));
    row.append($("<td>").text(pokemon.weight_kg));
    row.append($("<td>").text(pokemon.height_m));
    return row
}

function convertUnit(pokemon) {
    // Convert weight and height to USI units
    return { weight_kg: pokemon.weight / 10, height_m: pokemon.height / 10, ...pokemon }
}