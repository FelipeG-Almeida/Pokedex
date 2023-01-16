import React from "react";
import { Header, Figura, Logo, Titulo, Menu, ItensMenu, Carrinho } from "./Style";
import logo from '../../Assets/Images/logo.png'
import carrinho from '../../Assets/Images/carrinho.png'

export default function Cabecalho (props) {
    return (
        <Header>
            <Figura>
                <Logo src={logo} />
                <Titulo>AstroDev Shop</Titulo>
            </Figura>
            <nav>
                <Menu>
                    <ItensMenu>Home</ItensMenu>
                    <ItensMenu>Comprar</ItensMenu>
                    <ItensMenu>Sobre Nós</ItensMenu>
                    <ItensMenu>Contato</ItensMenu>
                </Menu>
            </nav>
            <Carrinho src={carrinho} onClick={props.showCarrinho} />
        </Header>
    )
}
