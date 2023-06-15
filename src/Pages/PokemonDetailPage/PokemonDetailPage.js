/* eslint-disable react-hooks/exhaustive-deps */
import {
	Card,
	CardText,
	Description,
	Details,
	DivImage,
	DivText,
	DivTitle,
	Move,
	Name,
	Picture,
	Section,
	StatsBar,
	TableRow,
	TableText,
	Title,
	Types,
} from './Style';
import HeaderComponent from '../../Components/Header/Header';
import { GlobalContext } from '../../Global/GlobalContext';
import { useContext, useEffect, useState } from 'react';
import { Progress, Spinner } from '@chakra-ui/react';
import { BASE_URL } from '../../Constants/url';
import { useParams } from 'react-router-dom';
import FooterComponent from '../../Components/Footer/Footer';
import axios from 'axios';

export default function PokemonDetailPage() {
	const { name } = useParams();
	const [pokemon, setPokemon] = useState();
	const [description, setDescription] = useState();
	const { states } = useContext(GlobalContext);

	useEffect(() => {
		const pokemonDetails = async () => {
			await axios
				.get(`${BASE_URL}pokemon/${name}`)
				.then((pokemon) => setPokemon(pokemon.data))
				.catch((error) => console.log(error));
		};
		const pokemonDescription = async () => {
			await axios
				.get(`${BASE_URL}pokemon-species/${name}`)
				.then((pokemon) =>
					setDescription(
						pokemon.data.flavor_text_entries[8].flavor_text
					)
				)
				.catch((error) => console.log(error));
		};
		pokemonDetails();
		pokemonDescription();
	}, []);

	const picture = pokemon?.sprites.other['official-artwork'].front_default;
	const found = states.pokedex.find((p) => p.name === pokemon?.name);
	const backPicture =
		pokemon?.sprites.versions['generation-v']['black-white'].animated
			.back_default;
	const frontPicture =
		pokemon?.sprites.versions['generation-v']['black-white'].animated
			.front_default;

	const baseStats = {
		HP: pokemon?.stats[0].base_stat,
		Attack: pokemon?.stats[1].base_stat,
		Defense: pokemon?.stats[2].base_stat,
		'Sp. Attack': pokemon?.stats[3].base_stat,
		'Sp. Defense': pokemon?.stats[4].base_stat,
		Speed: pokemon?.stats[5].base_stat,
	};

	const stats = [];
	const moves = [];

	for (const stat in baseStats) {
		let progressColor = '';

		if (baseStats[stat] <= 40) {
			progressColor = 'red';
		} else if (baseStats[stat] < 60) {
			progressColor = 'yellow';
		} else {
			progressColor = 'green';
		}

		stats.push(
			<TableRow key={stat}>
				<TableText>{stat}</TableText>
				<TableText>{baseStats[stat]}</TableText>
				<StatsBar>
					<Progress
						borderRadius={'3px'}
						h={'10px'}
						value={baseStats[stat]}
						colorScheme={progressColor}
						margin={'6px 0'}
					/>
				</StatsBar>
			</TableRow>
		);
	}

	for (let i = 0; i < 7; i++) {
		if (pokemon?.moves[i] !== undefined) {
			const move = pokemon?.moves[i].move.name.replace('-', ' ');
			moves.push(<Move key={i}>{move}</Move>);
		}
	}

	return (
		<>
			<HeaderComponent
				visibility={'visible'}
				color={found ? 'red' : 'green'}
				text={found ? 'Excluir da Pokédex' : 'Adicionar a Pokédex'}
				pokemon={pokemon}
			/>
			<Section type={pokemon?.types[0].type.name}>
				<Title>Detalhes</Title>
				<Details type={pokemon?.types[0].type.name}>
					<DivImage gridRow={1}>
						{pokemon ? (
							<img
								width={'50%'}
								src={frontPicture}
								alt={'Figura do Pokemon ' + pokemon?.name}
							/>
						) : (
							<Spinner
								thickness="8px"
								speed="0.65s"
								emptyColor="gray.200"
								color="red.500"
								size="xl"
							/>
						)}
					</DivImage>
					<DivImage gridRow={2}>
						{pokemon ? (
							<img
								width={'50%'}
								src={backPicture}
								alt={'Figura do Pokemon ' + pokemon?.name}
							/>
						) : (
							<Spinner
								thickness="8px"
								speed="0.65s"
								emptyColor="gray.200"
								color="red.500"
								size="xl"
							/>
						)}
					</DivImage>
					<DivText
						gridColumn={2}
						gridRow={'1 / 3'}
						direction={'column'}
					>
						<DivTitle>Base Stats</DivTitle>
						<table>
							<tbody>{stats}</tbody>
						</table>
					</DivText>
					<Card className="Info">
						<CardText>
							<b>{'#' + pokemon?.id}</b>
							<Name size={pokemon?.name.length}>{pokemon?.name}</Name>
							<Types>
								{pokemon?.types.map((type) => {
									return (
										<img
											key={type.type.name}
											src={require(`../../assets/images/${type.type.name}.svg`)}
											alt={type.type.name}
										/>
									);
								})}
							</Types>
							<Description>{description}</Description>
						</CardText>
						{pokemon ? (
							<Picture src={picture} />
						) : (
							<Spinner
								thickness="8px"
								speed="0.65s"
								emptyColor="gray.200"
								color="red.500"
								size="xl"
							/>
						)}
					</Card>
					<DivText gridColumn={3} gridRow={'2'} direction={'row'}>
						<DivTitle>Moves</DivTitle>
						{moves}
					</DivText>
				</Details>
			</Section>
			<FooterComponent></FooterComponent>
		</>
	);
}
