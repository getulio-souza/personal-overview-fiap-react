import styled from "styled-components";

import { Colors } from "../../shared/DesignTokens";

export const InfoContainer = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${Colors.TEXT_WHITE};
`;

export const InfoBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px 0px;
`;

export const InfoBox = styled.div`
  background-color: #2a2a2a;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  width: 240px;
  min-width: 240px;
  max-width: 240px;
  height: 170px;
  min-height: 170px;
  max-height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  transition: 0.5s;
  &:hover {
    background-color: rgb(55, 54, 54);
    cursor: default;
  }
`;

export const InfoBoxTitle = styled.h3`
  text-align: center;
  font-size: 25px;
`;

export const InfoBoxDetail = styled.p`
  font-size: 20px;
`;

export const InfoCepMainContainer = styled.div`
  background-color: #2a2a2a;
  padding: 10px;
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    background-color: rgb(55, 54, 54);
    cursor: default;
  }
`;

export const InfoCepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const InfoCepData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
`;

export const InfoCepTitle = styled.h3`
font-size:25px;
  text-align: center;
  padding: 10px 0px;
`;

export const InfoCEPText = styled.h6`
  font-size: 20px;
  padding-bottom: 10px;
`;

export const InfolabelandInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const InfoLabel = styled.label``;

export const CepInput = styled.input`
  min-width: 180px;
  max-width: 180px;
  padding: 10px 15px;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 15px;
`;

export const CepSearchButton = styled.button`
  padding: 10px 25px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 8px;
  transition: 0.3s;
  padding: 10px;
  margin: 10px 0px;
  width: 150px;
min-width: 150px;
max-width: 150px;
font-size: 16px;
height: 40px;
min-height: 40px;
max-height: 40px;


  &:hover {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
`;
