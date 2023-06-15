import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #2b2b2b;
    display: flex;
    justify-content: space-around;
    padding: 24px;
    @media screen and (max-width: 767px) {
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
`

export const Text = styled.p`
    color: #fff;
    font-size: 1.5rem;
`

export const Span = styled.span`
    font-weight: 700;
`

export const Buttons = styled.div`
    column-gap: 20px;
    display: flex;
    flex-direction: row;
`

export const Img = styled.img`
    width: 50px;
`
