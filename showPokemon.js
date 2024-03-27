//const fetchPokemonList = require("./pokemonProvider.js")

$(onLoad)

function onLoad() {
    fetchPokemonList(showPokemon, 200)
}

function showPokemon(pokemons) {
    pokemons = pokemons.map(convertUnit); // Add converted units
    let table = $("tbody");
    for (let i=0; i < pokemons.length; ++i) {
        let row = $("<tr>");
        row.append($("<td>").text(pokemons[i].name));
        row.append($("<td class='pokemon-weight'>").text(pokemons[i].weight_kg));
        row.append($("<td class='pokemon-height'>").text(pokemons[i].height_kg));
        table.append(row);
    }
}

function convertUnit(pokemon){
    // Convert weight and height to USI units
    return {weight_kg : pokemon.weight / 10, height_kg : pokemon.height / 10, ...pokemon}
}