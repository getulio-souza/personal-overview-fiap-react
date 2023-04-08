import React from 'react'
import {
  AboutContainer,
  InfoContainer,
  InfoTitle,
  InfoBoxContainer,
  InfoBox,
  InfoBoxTitle,
  InfoBoxDetail,
  AboutMeImg
} from './about.styles'

import aboutImg from '../../Assets/images/DSC00815.JPG'

function about() {
  return (
    <>
      <AboutContainer>
        <InfoContainer>
          <InfoTitle>Sobre mim</InfoTitle>
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
            <AboutMeImg src={aboutImg}></AboutMeImg>
            </InfoBoxContainer>
        </InfoContainer>

    </AboutContainer>
    </>
  )
}

export default about