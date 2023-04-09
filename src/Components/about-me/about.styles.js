import styled from 'styled-components'

export const InfoContainer = styled.article `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

export const InfoBoxContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding-top: 40px;
`;

export const InfoBox = styled.div `
    background-color: #2a2a2a;
    padding: 10px;
    border-radius: 20px;
    text-align: center;
    min-width: 150px;
    max-width: 150px;
    width: 150px;
    height: 120px;
    min-height: 120px;
    max-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    transition:.5s;
    &:hover{
        background-color: #000;
        cursor: default;
    }
`;

export const InfoBoxTitle = styled.h3 `
`;

export const InfoBoxDetail = styled.p `
 font-size: 15px
`;
