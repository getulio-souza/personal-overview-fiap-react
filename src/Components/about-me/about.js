import React from 'react'
import {
  InfoContainer,
  InfoBoxContainer,
  InfoBox,
  InfoBoxTitle,
  InfoBoxDetail,
} from './about.styles'

import {MainSection, MainTitle, ImgContainer} from '../../Assets/global/global'
import aboutImg from '../../Assets/images/DSC00815.JPG'

function about() {
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
            <InfoBox>
              <InfoBoxTitle>Endereço</InfoBoxTitle>
              <InfoBoxDetail>R. Lugar Nenhum, 000 - Jd. xxxx - SP</InfoBoxDetail>
            </InfoBox>
            </InfoBoxContainer>
        </InfoContainer>

    </MainSection>
    </>
  )
}

export default about