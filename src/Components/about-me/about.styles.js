import styled from 'styled-components'

export const InfoContainer = styled.article `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

export const InfoBoxContainer = styled.div `
    display: flex;
    justify-content:center;
    align-items:center;
    gap: 40px;
    padding: 40px 0px;
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
        background-color: rgb(55, 54, 54);
        cursor: default;
    }
`;

export const InfoBoxTitle = styled.h3 `
    text-align:center;
`;

export const InfoBoxDetail = styled.p `
 font-size: 15px
`;

export const InfoCepMainContainer = styled.div`
    background-color: #2a2a2a;
    padding:10px;
    border-radius: 20px;
    transition:.5s;
    &:hover{
        background-color: rgb(55, 54, 54);
        cursor: default;
    }
`;

export const InfoCepContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    gap: 10px;
`;

export const InfoCepData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 10px;
    padding-top:20px;
`;

export const InfoCepTitle = styled.h3`
    text-align:center;
    padding: 10px 0px;
`;

export const InfolabelandInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 10px;
`;
export const InfoLabel = styled.label``;

export const InfoCEPText = styled.h6`
    font-size:16px;
`;

export const CepInput = styled.input`
    /* padding-left:5px; */
    min-width:130px;
    max-width:130px;
    padding: 10px 15px;
    border-radius:10px;
    padding:10px 15px;
    font-size:10px;
`;

export const CepSearchButton = styled.button`
    padding: 10px 25px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 8px;
    transition: .3s;
    padding: 10px;
    margin: 10px 0px;

    &:hover{
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
    }
`;

