$(onLoad)

function onLoad() {
    fetchPokemonList((pokemons) => {
        showPokemonList(pokemons, predicateAll)
        $('#filter-all').on('click', () => {showPokemonList(pokemons, predicateAll)});
        $('#filter-weight').on('click', () => {showPokemonList(pokemons, predicateWeight)});
        $('#filter-height').on('click', () => {showPokemonList(pokemons, predicateHeight)});
    })
}

function predicateAll(pokemon) {
    // Show all pokemons
    return true;
}

function predicateWeight(pokemon) {
    // Show all pokemons with weight greater than 3
    return pokemon.weight_kg > 3;
}

function predicateHeight(pokemon) {
    // Show all pokemons with height less than 1
    return pokemon.height_m < 1;
}