import styled from 'styled-components';

export const Body = styled.section`
    display: flex;
    background-color: #5e5e5e;
    color: white;
    flex-direction: row;
    flex-grow: 2;
    flex-wrap: wrap;
    justify-content: center;
    padding: 60px 30px;
    @media screen and (max-width: 767px) {
        padding: 30px 15px;
    }
`;

export const Container = styled.div`
    column-gap: 10px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 55px;
    width: 100%;
    @media screen and (max-width: 1023px) {
        margin-bottom: 25px;
        justify-content: space-between;
    }
    @media screen and (max-width: 767px) {
        align-items: center;
        flex-direction: column;
        row-gap: 15px;
    }
`;

export const Title = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    width: 30%;
    @media screen and (max-width: 1023px) {
        font-size: 1.5rem;
        width: 20%;
    }
    @media screen and (max-width: 767px) {
        text-align: center;
        width: 100%;
    }
`;

export const PokemonsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 50px 20px;
    max-width: 100%;
    @media screen and (max-width: 1023px) {
        font-size: 1.5rem;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`;
