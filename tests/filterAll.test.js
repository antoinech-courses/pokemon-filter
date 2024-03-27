const provider = require("../pokemonProvider.js")
const filters = require("../filter.js")

test('Filter all', () => {
    provider.fetchPokemonList((pokemons) => {
        expect(pokemons.length).toBeGreaterThanOrEqual(1)
        filteredPokemons = pokemons.filter(filters.predicateAll)
        expect(filteredPokemons.length).toBe(pokemons.length)
    })
})