import React, { useState } from 'react'
import {
  InfoContainer,
  InfoBoxContainer,
  InfoBox,
  InfoBoxTitle,
  InfoBoxDetail,
  InfoCepMainContainer,
  InfoCepContainer,
  InfoCepTitle,
  InfolabelandInput,
  CepSearchButton,
  InfoCEPText,
  CepInput, 
  InfoCepData
} from './about.styles'

import {MainSection, MainTitle, ImgContainer} from '../../Assets/global/global'
import aboutImg from '../../Assets/images/DSC00815.JPG' 
import ApiCep from '../../services/ApiCep'

 function About() {

  //criando função para mostrar mensagem
   const [input, setInput] = useState(Number('05761190'));
   const [cep, setCep] = useState({});
   
   async function SearchCepInfo() {
     if (input === '' && setCep.cep === '') {
       return true;
     } else {
       alert('Cep inváliado. Por favor, informe apenas o CEP:05761190')
     }
     
     //função que chama a API
     try {
       const response = await ApiCep.get(`${input}/json/`)
       setCep(response.data)
       setInput('')
     } catch (error) {
       alert('Error ao acessar o CEP. Confira se ele foi digitado corretamente.')
       setInput('');
       return
     }
   }


  return (
    <>
      <MainSection>
        <ImgContainer src={aboutImg}></ImgContainer>
        <InfoContainer>
          <MainTitle>Sobre mim</MainTitle>
            <InfoBoxContainer>
              <InfoBox>
              <InfoBoxTitle>Nome: </InfoBoxTitle>
              <InfoBoxDetail>Getúlio de Souza</InfoBoxDetail>
            </InfoBox>
            <InfoBox>
              <InfoBoxTitle>Idade: </InfoBoxTitle>
              <InfoBoxDetail>31 anos</InfoBoxDetail>
            </InfoBox>
          </InfoBoxContainer>

          <InfoCepMainContainer>
          <InfoCepTitle>Consultar CEP</InfoCepTitle>
          <InfoCepContainer>
            <InfolabelandInput>
                <InfoCEPText>05761190</InfoCEPText>
                <CepInput
                  type='text'
                  placeholder='Digite o CEP acima'
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  maxLength={9}                  
                ></CepInput>
            </InfolabelandInput>
              <CepSearchButton onClick = {SearchCepInfo}>Pesquisar</CepSearchButton>
            </InfoCepContainer>
            
            {Object.keys(cep).length > 0 && (
              <InfoCepData>
                <span><strong>Rua: </strong>{cep.logradouro}</span>
                <span><strong>Bairro:</strong> {cep.bairro}</span>
                <span><strong>Cidade:</strong> {cep.localidade}</span>
                <span><strong>Estado:</strong> {cep.uf}</span>
              </InfoCepData>
            )}
          </InfoCepMainContainer>
        </InfoContainer>

    </MainSection>
    </>
  )
}

export default About