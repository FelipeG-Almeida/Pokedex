import { Card, Info, Name, Types, Picture, Buttons } from "./Style"
import { goToPokemonDetailPage } from "../../Routes/coordinator"
import { GlobalContext } from "../../Global/GlobalContext"
import { Button, useDisclosure } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import ModalComponent from "../Modal/Modal"

export default function PokemonCard({ pokemon, remove }) {

    const { states, setters } = useContext(GlobalContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { name, id, types, sprites } = pokemon
    const [modal, setModal] = useState({ title: "", text: "" })
    const navigate = useNavigate()
    const picture = sprites.other["official-artwork"].front_default

    function capturePokemon() {
        const found = states.pokedex.find(p => p.name === pokemon?.name)
        if (!found) {
            setters.setPokedex([...states.pokedex, pokemon]);
            setModal({ title: "Gotcha!", text: "O Pokémon foi adicionado a sua Pokédex" })
            onOpen()
        } else {
            setModal({ title: "Ops!", text: "O Pokémon já está presente na sua Pokédex" })
            onOpen()
        }
    }

    function removePokemon() {
        setters.setPokedex(states.pokedex.filter(p => p.name !== pokemon.name))
        setModal({ title: "Oh, no!", text: "O Pokémon foi removido da sua Pokedéx" })
        onOpen()
    }

    return (
        <Card type={types[0].type.name}>
            <Info>
                <p>{"#" + id}</p>
                <Name size={pokemon?.name.length}>{name}</Name>
                <Types>
                    {types.map((type) => {
                        return (
                            <img key={type.type.name}
                                src={require(`../../assets/images/${type.type.name}.svg`)}
                                alt={type.type.name} />)
                    })}
                </Types>
            </Info>
            <Picture src={picture} alt={name} />
            <Buttons>
                <Button
                    color={"white"}
                    variant={"link"}
                    size={"sm"}
                    onClick={() => goToPokemonDetailPage(navigate, name)}>
                    Detalhes
                </Button>
                <Button
                    color={remove ? "white" : "black"}
                    colorScheme={remove ? "red" : "gray"}
                    fontSize={"1rem"}
                    fontWeight={"400"}
                    onClick={remove ? removePokemon : capturePokemon}
                    size={"sm"}
                    w={"145px"}>
                    {remove ? "Excluir" : "Capturar!"}
                </Button>
                <ModalComponent
                    isOpen={isOpen}
                    onClose={onClose}
                    title={modal.title}
                    text={modal.text} />
            </Buttons>
        </Card>
    )
}
