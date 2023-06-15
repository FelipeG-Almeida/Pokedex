import styled from "styled-components"

export const Header = styled.header`
    align-items: center;
    display: flex;
    height: 160px;
    margin: 20px 40px;
    justify-content: space-between;
    > * {
        font-family: 'Poppins', sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
    }
    @media screen and (max-width: 767px) {
        flex-direction: column;
        row-gap: 10px;
    }
`

export const Logo = styled.img`
    height: 110px;
    margin: 0 auto;
    width: 300px;
    @media screen and (max-width: 1023px) {
        margin: 0;
        order: -1;
        width: 175px;
    }
`
