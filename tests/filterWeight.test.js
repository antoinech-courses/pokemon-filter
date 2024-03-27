const provider = require("../pokemonProvider.js")
const filters = require("../filter.js")

test('Filter by weight', () => {
    provider.fetchPokemonList((pokemons) => {
        expect(pokemons.length).toBeGreaterThanOrEqual(1)
        filteredPokemons = pokemons.filter(filters.predicateWeight)
        expect(filteredPokemons.length).toBeLessThanOrEqual(pokemons.length)
        for (let i = 0; i < filteredPokemons.length; ++i) {
            expect(filteredPokemons[i].weight_kg).toBeGreaterThan(3)
        }
    })
})