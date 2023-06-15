import { useNavigate } from "react-router-dom";
import { Header, Logo } from "./Style";
import { GlobalContext } from "../../Global/GlobalContext";
import { useContext, useState } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { goToPokedexPage, goToPokemonsListPage } from "../../Routes/coordinator";
import logo from "../../assets/images/logoPokemon.svg"
import ModalComponent from "../Modal/Modal";

export default function HeaderComponent(props) {

    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { states, setters } = useContext(GlobalContext)
    const [modal, setModal] = useState({ title: "", text: "" })
    const { visibility, visibility2, color, text, pokemon } = props

    function handleClick() {
        switch (text) {
            default:
                goToPokedexPage(navigate)
                break;
            case "Adicionar a Pokédex":
                setters.setPokedex([...states.pokedex, pokemon])
                setModal({ title: "Gotcha!", text: "O Pokémon foi adicionado a sua Pokédex" })
                onOpen()
                break
            case "Excluir da Pokédex":
                setters.setPokedex(states.pokedex.filter(p => p.name !== pokemon.name))
                setModal({ title: "Oh, no!", text: "O Pokémon foi removido da sua Pokedéx" })
                onOpen()
                break
        }
    }

    return (
        <Header>
            <Button
                visibility={visibility}
                variant={"ghost"}
                h={"65px"} w={"200px"}
                onClick={() => { goToPokemonsListPage(navigate) }}>
                Todos Pokemons
            </Button>
            <Logo src={logo} alt="" />
            <Button
                onClick={handleClick}
                fontSize={"1rem"}
                colorScheme={color}
                h={"65px"} w={"240px"}
                visibility={visibility2}>
                {text}
            </Button>
            <ModalComponent
                isOpen={isOpen}
                onClose={onClose}
                title={modal.title}
                text={modal.text} />
        </Header>
    )
}
