import styled from 'styled-components'

export const HobbiesContainer = styled.div`
    display: flex;
    padding-top: 40px;
    justify-content: space-between;
    align-items: baseline;
    gap: 20px;
    text-align: center;
    text-shadow: rgb(46, 44, 44) 1px 2px 3px;
`;

export const HobbiesBox = styled.div`
    background-color: #2a2a2a;
    padding:15px;
    border-radius:15px;
    min-height:200px;
    min-width:240px;
    box-shadow: rgb(26, 23, 23) 1px 2px 3px;
    transition: 0.5s;
    &:hover{
        cursor:default;
        background-color: rgb(55, 54, 54);
    }
`;

export const HobbieText = styled.div`
   font-size:14px;
    padding-top:10px;
`;

export const HobbiesImg = styled.img `
   width:70px;
`;



