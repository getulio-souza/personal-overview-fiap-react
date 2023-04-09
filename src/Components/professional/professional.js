import React from 'react'
import { MainSection, MainTitle, ImgContainer } from '../../Assets/global/global'

import {InfoContainer, TimeLineContainer, TimeLineYearBox, TimeLineYear, TimeLine, TimeLineMark, TimeLineText } from './professional.styles'

import professionalImg from '../../Assets/images/DSC01291.JPG'

function professional() {
  return (
    <>
      <MainSection>
        <ImgContainer src={professionalImg} ></ImgContainer>
        <InfoContainer>
          <MainTitle>Minha jornada profissional</MainTitle>
          <TimeLineContainer>
            <TimeLineYearBox>
              <TimeLineYear>2014</TimeLineYear>
              <TimeLine>
                <TimeLineMark></TimeLineMark>
              </TimeLine>
              <TimeLineText>Me formo em jornalismo pela Universidade Mackenzie.</TimeLineText>
            </TimeLineYearBox>

            <TimeLineYearBox>
              <TimeLineYear>2017</TimeLineYear>
              <TimeLine>
                <TimeLineMark></TimeLineMark>
              </TimeLine>
              <TimeLineText>Dou ínicio à minha carreira como redator sendo contratado pela Yooper Digital Marketing.</TimeLineText>
            </TimeLineYearBox>

            <TimeLineYearBox>
              <TimeLineYear>2019</TimeLineYear>
              <TimeLine>
                <TimeLineMark></TimeLineMark>
              </TimeLine>
              <TimeLineText>Volto novamente ao Mackenzie para iniciar uma pós graduação em Marketing de Conteúdo.</TimeLineText>
            </TimeLineYearBox>

            <TimeLineYearBox>
              <TimeLineYear>2022</TimeLineYear>
              <TimeLine>
                <TimeLineMark></TimeLineMark>
              </TimeLine>
              <TimeLineText>Decido fazer uma transição de carreira para TI, focando em desenvolvimento Front End</TimeLineText>
            </TimeLineYearBox>

          </TimeLineContainer>
        </InfoContainer>
      </MainSection>
    </>
  )
}

export default professional