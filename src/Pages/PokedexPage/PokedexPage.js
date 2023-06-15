import { GlobalContext } from "../../Global/GlobalContext";
import { useContext } from "react";
import { Body, Title, PokemonsList } from "./Style";
import HeaderComponent from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import FooterComponent from "../../Components/Footer/Footer";

export default function PokedexPage() {

    const { states } = useContext(GlobalContext)

    return (
        <>
            <HeaderComponent
                visibility={"visible"}
                visibility2={"hidden"} />
            <Body>
                <Title>Meus Pokémons</Title>
                <PokemonsList>
                    {states.pokedex.map((pokemon) => {
                        return (<PokemonCard key={pokemon.id} pokemon={pokemon} remove={true} />)
                    })}
                </PokemonsList>
            </Body>
            <FooterComponent></FooterComponent>
        </>
    )
}
