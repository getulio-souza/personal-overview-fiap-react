import styled from "styled-components";

export const ContactContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to right, #1c2127, #232d30, #2e3837, #3c433f, #4c4e47);`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    align-items: flex-start;
`;


export const FormNameLabel = styled.label `
    padding: 10px 0px;
    color:#fff;
    font-weight:700;
`;

export const FormNameInput = styled.input `
    border-radius:5px;
    width:100%;
    min-height: 30px;
    padding-left: 5px;

`;

export const FormEmailLabel = styled.label `
    padding: 10px 0px;
    color:#fff;
    font-weight:700;
`;

export const FormEmailInput = styled.input `
    border-radius:5px;
    width:100%;
    min-height: 30px;
    padding-left: 5px;
`;

export const FormTextArea = styled.textarea `
    margin:20px 0px 10px 0px;
    min-height:100px;
    width:100%;
    border-radius:5px;
    padding: 5px 0px 0px 5px;
`;


export const FormGender = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormGenderBox = styled.div`
    padding: 10px 0px;
    display: flex;
    gap:10px;
`;

export const FormGenderContainer = styled.div`
    display: flex;
    gap:10px;
`;

export const FormGenderTitle = styled.label`
    color: #fff;
`;

export const FormGenderName = styled.label`
    color: #fff;
    padding-right:5px;
`;

export const FormGenderRadio = styled.input``;

export const FormSendButton = styled.button `
    border: none;
    padding: 10px 20px;
    border-radius:10px;
    cursor:pointer;
    transition: 0.5s;
`;