export const goToPokemonsListPage = (navigate) => {
    navigate("/")

}
export const goToPokemonDetailPage = (navigate, name) => {
    navigate(`/details/${name}`)
}

export const goToPokedexPage = (navigate) => {
    navigate("/pokedex")
}
