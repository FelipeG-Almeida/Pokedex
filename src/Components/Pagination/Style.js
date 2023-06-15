import styled from "styled-components"

export const PaginationContainer = styled.div`
    display: flex;
    column-gap: 5px;
    width: 50%;
    @media screen and (max-width: 767px) {
        justify-content: center;
        width: 100%;
    }
`
