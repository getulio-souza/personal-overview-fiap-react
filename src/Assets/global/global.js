import styled from 'styled-components'

export const MainSection = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
`;

export const MainTitle = styled.h1 `
    color: #fff;
    padding: 30px 0px;
    text-align: center;
    font-size:28px;
    @media (max-width: 700px){
        padding-bottom:30px;
    }
`;

export const ImgContainer = styled.img`
    width: 100%;
    min-height:100vh; 
    opacity:0.7;
    object-fit:cover;
    @media (max-width:900px){
        min-height:130vh;
    }
`;

