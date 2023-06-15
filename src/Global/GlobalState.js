import { useState, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import { BASE_URL } from '../Constants/url';
import axios from 'axios';

export default function GlobalState({ children }) {
    const [pokemonsList, setPokemonsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState(
        JSON.parse(localStorage.getItem('pokedex')) || []
    );
    const [type, setType] = useState('tudo');

    useEffect(() => {
        (async function getPokemons() {
            try {
                if (type === 'tudo') {
                    const pokemonsListResponse = await axios.get(
                        `${BASE_URL}pokemon?limit=27&offset=${currentPage * 27}`
                    );
                    setPokemonsList(pokemonsListResponse.data.results);
                } else {
                    const pokemonsListResponse = await axios.get(
                        `${BASE_URL}type/${type}`
                    );
                    setPokemonsList(pokemonsListResponse.data.pokemon);
                }
            } catch (error) {
                console.error(error);
            }
        })();
    }, [currentPage, type]);

    useEffect(() => {
        (async function showPokemons() {
            const pokemonsInfo = [];
            setPokemons([]);
            try {
                if (type === 'tudo') {
                    await Promise.all(
                        pokemonsList.map(async (pokemon) => {
                            const pokemonInfoResponse = await axios.get(
                                pokemon.url
                            );
                            pokemonsInfo.push(pokemonInfoResponse.data);
                        })
                    );
                } else {
                    await Promise.all(
                        pokemonsList.map(async (pokemon) => {
                            const pokemonInfoResponse = await axios.get(
                                pokemon.pokemon.url
                            );
                            pokemonsInfo.push(pokemonInfoResponse.data);
                        })
                    );
                }
                setPokemons(pokemonsInfo);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [pokemonsList, type]);

    useEffect(() => {
        localStorage.setItem('pokedex', JSON.stringify(pokedex));
    }, [pokedex]);

    const states = {
        type,
        currentPage,
        pokemons,
        pokedex,
    };

    const setters = {
        setType,
        setPokedex,
        setCurrentPage,
    };

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {children}
        </GlobalContext.Provider>
    );
}
