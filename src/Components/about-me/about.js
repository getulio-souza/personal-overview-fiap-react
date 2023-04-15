import React from 'react'
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
  InfoLabel,
  CepSearchButton,
  InfoCEPText
} from './about.styles'

import {MainSection, MainTitle, ImgContainer} from '../../Assets/global/global'
import aboutImg from '../../Assets/images/DSC00815.JPG' 

function about() {

  //criando função para usar api
  

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
              <InfoLabel>CEP</InfoLabel>
             <InfoCEPText>05761190</InfoCEPText>
            </InfolabelandInput>
            <CepSearchButton>Pesquisar</CepSearchButton>
          </InfoCepContainer>
          </InfoCepMainContainer>
        </InfoContainer>

    </MainSection>
    </>
  )
}

export default about