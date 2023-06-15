import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage"
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"

export default function Router() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PokemonsListPage />} />
                <Route path='/details/:name' element={<PokemonDetailPage />} />
                <Route path='/pokedex' element={<PokedexPage />} />
            </Routes>
        </BrowserRouter>
    )
}
