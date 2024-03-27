$(onLoad)

function onLoad() {
    $('#filter-all').on('click', () => { filterPokemon(predicateAll) });
    $('#filter-weight').on('click', () => { filterPokemon(predicateWeight) });
    $('#filter-height').on('click', () => { filterPokemon(predicateHeight) });
}

function filterPokemon(predicate) {
    $("tbody tr").hide(); // Hide all rows
    $("tbody tr").filter(function () {
        return predicate($(this))
    }).show(); //Show selected rows
}

function predicateAll(object) {
    // Show all pokemons
    return true;
}

function predicateWeight(object) {
    // Show all pokemons with weight greater than 3
    return parseFloat(object.find(".pokemon-weight").text()) > 3;
}

function predicateHeight(object) {
    // Show all pokemons with height less than 1
    return parseFloat(object.find(".pokemon-height").text()) < 1;
}