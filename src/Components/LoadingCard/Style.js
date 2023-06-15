import styled from 'styled-components';
import Background from '../../assets/images/cardBackground.svg';

export const Card = styled.div`
    align-items: center;
    background-color: #313131;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: right;
    border-radius: 12px;
    display: flex;
    height: 180px;
    justify-content: center;
    padding: 25px 23px 13px 23px;
    width: 400px;
`;
