import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import LoadingCard from '../../Components/LoadingCard/LoadingCard';
import { Body, Title, PokemonsList, Container } from './Style';
import Pagination from '../../Components/Pagination/Pagination';
import HeaderComponent from '../../Components/Header/Header';
import { GlobalContext } from '../../Global/GlobalContext';
import { Select } from '@chakra-ui/react';
import { useContext } from 'react';
import FooterComponent from '../../Components/Footer/Footer';

export default function PokemonsListPage() {
    const { states, setters } = useContext(GlobalContext);

    function List() {
        if (states.pokemons.length > 1) {
            return states.pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
            });
        } else {
            return <LoadingCard />;
        }
    }

    return (
        <>
            <HeaderComponent
                visibility={'hidden'}
                color={'blue'}
                text={'Pokédex'}
            />
            <Body>
                <Container>
                    <Title>Todos os Pokémons</Title>
                    <Pagination />
                    <Select
                        bg={'white'}
                        color={'#343434'}
                        fontWeight={700}
                        variant={'outline'}
                        maxW={'300px'}
                        value={states.type}
                        onChange={(e) => setters.setType(e.target.value)}
                    >
                        <option value={'tudo'}>Tudo</option>
                        <option value={'poison'}>Poison</option>
                        <option value={'grass'}>Grass</option>
                        <option value={'fire'}>Fire</option>
                        <option value={'flying'}>Flying</option>
                        <option value={'water'}>Water</option>
                        <option value={'bug'}>Bug</option>
                        <option value={'normal'}>Normal</option>
                        <option value={'dark'}>Dark</option>
                        <option value={'dragon'}>Dragon</option>
                        <option value={'electric'}>Electric</option>
                        <option value={'fairy'}>Fairy</option>
                        <option value={'fighting'}>Fighting</option>
                        <option value={'ghost'}>Ghost</option>
                        <option value={'ground'}>Ground</option>
                        <option value={'ice'}>Ice</option>
                        <option value={'psychic'}>Psychic</option>
                        <option value={'rock'}>Rock</option>
                        <option value={'steel'}>Steel</option>
                    </Select>
                </Container>
                <PokemonsList>{List()}</PokemonsList>
            </Body>
            <FooterComponent></FooterComponent>
        </>
    );
}
