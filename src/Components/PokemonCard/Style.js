import styled from 'styled-components';
import Background from '../../assets/images/cardBackground.svg';

const typeColor = {
	grass: '#729F92',
	fire: '#EAAB7D',
	water: '#71C3FF',
	bug: '#76A866',
	normal: '#BF9762',
	poison: '#7A447B',
	electric: '#C1A62E',
	ground: '#A55B34',
	fairy: '#B970B4',
	rock: '#7A7055',
	fighting: '#812842',
	psychic: '#A94d51',
	ghost: '#2D3A5F',
	ice: '#488178',
	dragon: '#004170',
	steel: '#4F4F4F',
	dark: '#5c5365',
};

export const Card = styled.div`
	background-color: ${(props) => typeColor[props.type]};
	background-image: url(${Background});
	background-repeat: no-repeat;
	background-position: right;
	border-radius: 12px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 75% 25%;
	height: 180px;
	padding: 25px 23px 13px 23px;
	transition: 0.2s all;
	width: 400px;
	& > div > p {
		font-size: 1rem;
		font-weight: 700;
		line-height: 0.5rem;
		@media screen and (max-width: 1023px) {
			font-size: 0.75rem;
		}
	}
	&:hover {
		transform: translateY(-5px) scale(1.005) translateZ(0);
		box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
			0 24px 46px ${(props) => typeColor[props.type]};
	}
	@media screen and (max-width: 1023px) {
		padding: 20px 20px 10px 20px;
		width: 300px;
	}
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Name = styled.h4`
	font-size: ${(props) => (props.size >= 9 ? '1.35rem' : '2rem')};
	font-weight: 700;
	min-height: 48px;
	text-transform: capitalize;
	@media screen and (max-width: 1023px) {
		${(props) => (props.size >= 15 ? '1rem' : '1.25rem')};
	}
`;

export const Types = styled.div`
	column-gap: 7px;
	display: flex;
	@media screen and (max-width: 1023px) {
		align-items: flex-start;
		flex-direction: column;
		row-gap: 5px;
		& > img {
			height: 30px;
		}
	}
`;

export const Picture = styled.img`
	position: relative;
	height: 180px;
	left: 15px;
	bottom: 75px;
	width: 180px;
	@media screen and (max-width: 1023px) {
		bottom: 25px;
		height: 135px;
	}
`;

export const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	grid-column: 1 / 3;
	justify-content: space-between;
`;
