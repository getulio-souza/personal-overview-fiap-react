import styled from 'styled-components'

export const AboutContainer = styled.section `
    width: 100%;
    height: 100%;
    background-image: url('../../Assets/images/2012-10-05 20.42.42.jpg');
    position: relative;
`;

export const InfoContainer = styled.article `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

export const InfoTitle = styled.h1 `
    text-align: center;

`;

export const InfoBoxContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
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
`;

export const InfoBoxTitle = styled.h3 `

`;

export const InfoBoxDetail = styled.p `

`;

export const AboutMeImg = styled.img`
    width: 100%;
    height: 100%;
    opacity:0.7;
`;
