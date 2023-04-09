import React from 'react'
import {MainSection, MainTitle, ImgContainer} from '../../Assets/global/global'
import {HobbiesContainer, HobbiesBox, HobbieText, HobbiesImg } from './hobbies.styles'
import { InfoContainer } from '../about-me/about.styles'

import aboutImg from '../../Assets/images/show-heavy-metal-rock.jpg'
import show from '../../Assets/images/concert.png'
import rockFriends from '../../Assets/images/rock-2.png'
import jam from '../../Assets/images/star.png'

function hobbies() {
  return (
    <>
      <MainSection>
        <ImgContainer src={aboutImg}></ImgContainer>
        <InfoContainer>
        <MainTitle>Meus hobbies</MainTitle>
        <HobbiesContainer>
            <HobbiesBox>
              <HobbiesImg src={show} ></HobbiesImg>
            <HobbieText>Ir em shows de rock/metal está entre uma das coisas que mais gosto fazer no meu tempo livre.</HobbieText>
            </HobbiesBox>
            <HobbiesBox>
              <HobbiesImg src={rockFriends}></HobbiesImg>
            <HobbieText>São nesses momentos que me encontro com pessoas que compartilham da mesma paixão pela música que eu.</HobbieText>
          </HobbiesBox>
            <HobbiesBox>
              <HobbiesImg src={jam} ></HobbiesImg>
            <HobbieText>Assim que um show de uma banda que gosto termina, volto mais feliz e revigorado para casa.</HobbieText>
          </HobbiesBox>
        </HobbiesContainer>
      </InfoContainer>
      </MainSection>
    </>
  )
}

export default hobbies