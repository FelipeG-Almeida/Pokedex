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

export const Section = styled.section`
	background-color: #5e5e5e;
	background-image: url(${Background});
	background-position: 50% center;
	background-repeat: no-repeat;
	background-size: 60%;
	color: white;
	display: flex;
	flex-direction: column;
	flex-grow: 2;
	padding: 60px 25px;
	@media screen and (max-width: 767px) {
		padding: 60px 0;
		background-color: ${(props) => typeColor[props.type]};
	}
`;
export const Title = styled.h2`
	font-size: 2.25rem;
	font-weight: 700;
	margin-bottom: 20px;
	@media screen and (max-width: 767px) {
		text-align: center;
		margin-bottom: 150px;
	}
`;
export const Details = styled.div`
	background-color: ${(props) => typeColor[props.type]};
	background-image: url(${Background});
	background-repeat: no-repeat;
	background-position: 50% 60.3%;
	background-size: 62%;
	border-radius: 38px;
	display: grid;
	grid-gap: 30px;
	grid-template: repeat(1fr, 2) / repeat(1fr, 4);
	flex-grow: 2;
	justify-items: stretch;
	padding: 26px 44px;
	@media screen and (max-width: 1023px) {
		align-items: center;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	@media screen and (max-width: 767px) {
		background-color: #fff;
		background-image: none;
		padding: 26px 22px;
	}
`;
export const DivImage = styled.div`
	align-items: center;
	background-color: white;
	border-radius: 8px;
	color: black;
	display: flex;
	flex-direction: column;
	grid-row: ${(props) => props.gridRow};
	grid-column: 1;
	min-height: 200px;
	justify-content: center;
	padding: 18px;
	min-width: 200px;
	@media screen and (min-width: 1900px) {
		width: 400px;
	}
	@media screen and (max-width: 767px) {
		padding: 0;
	}
`;
export const DivText = styled.div`
	align-items: left;
	background-color: white;
	border-radius: 8px;
	color: black;
	display: flex;
	flex-direction: ${(props) => props.direction};
	flex-wrap: wrap;
	gap: 8px;
	grid-row: ${(props) => props.gridRow};
	grid-column: ${(props) => props.gridColumn};
	min-height: 200px;
	justify-content: flex-start;
	padding: 18px;
	@media screen and (max-width: 1023px) {
		width: 100%;
	}
	@media screen and (max-width: 767px) {
		padding: 0;
	}
`;
export const DivTitle = styled.h3`
	font-family: 'Poppins', sans-serif;
	font-size: 2rem;
	font-weight: 800;
	margin-bottom: 10px;
	width: 100%;
`;
export const TableText = styled.td`
	border-top: solid 1px #f0f0f0;
	border-bottom: solid 1px #f0f0f0;
	color: #7f7f7f;
	font-size: 1.25rem;
	height: 35px;
	padding: 5px 10px;
	white-space: nowrap;
	@media screen and (max-width: 767px) {
		font-size: 1rem;
	}
`;
export const TableRow = styled.tr`
	align-items: center;
	display: flex;
	justify-content: flex-end;
	@media screen and (max-width: 1300px) {
		flex-wrap: wrap;
		justify-content: flex-start;
	}
`;

export const StatsBar = styled.td`
	border-top: solid 1px #f0f0f0;
	border-bottom: solid 1px #f0f0f0;
	height: 35px;
	padding: 5px 10px;
	width: 190px;
	@media screen and (max-width: 1300px) {
		width: 100%;
	}
`;

export const Move = styled.p`
	background-color: #ececec;
	border-radius: 15px;
	border: 1px dashed rgba(0, 0, 0, 0.14);
	display: inline-block;
	font-family: 'Montserrat', sans-serif;
	font-size: 0.875rem;
	font-weight: 400;
	height: 45px;
	text-transform: capitalize;
	padding: 10px;
`;
export const Card = styled.div.attrs((props) => ({
	className: props.className,
}))`
	&.Info {
		order: -1;
		@media screen and (max-width: 767px) {
			align-items: center;
			flex-direction: column-reverse;
		}
	}
	display: flex;
	flex-direction: row;
`;

export const CardText = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	position: relative;
	@media screen and (min-width: 1900px) {
		width: 60%;
	}
	@media screen and (max-width: 767px) {
		&:nth-child(1) {
			color: #1a202c;
		}
	}
`;
export const Name = styled.h3`
	font-size: ${(props) => (props.size >= 9 ? '2rem' : '3rem')};
	font-weight: 700;
	line-height: 50px;
	margin-bottom: 20px;
	text-transform: capitalize;
	@media screen and (max-width: 1300px) {
		font-size: 2rem;
	}
`;
export const Types = styled.div`
	column-gap: 10px;
	display: flex;
	flex-direction: row;
`;

export const Description = styled.p`
	font-size: 1.25rem;
	font-weight: 400;
	line-height: 1.75rem;
	margin-top: 10px;
`;

export const Picture = styled.img`
	height: 250px;
	position: absolute;
	right: 30px;
	top: 200px;
	width: 250px;
	@media screen and (min-width: 1900px) {
		height: auto;
		position: inherit;
		width: auto;
	}
	@media screen and (max-width: 767px) {
		height: 200px;
		position: absolute;
		top: 300px;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 200px;
	}
`;
