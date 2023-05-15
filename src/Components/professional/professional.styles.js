import styled from "styled-components";

export const InfoContainer = styled.article`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    border-radius: 15px;
`;

export const TimeLineContainer = styled.div`
    display: flex;
    text-align: center;
    @media (max-width: 700px){
        display:flex;
        flex-direction: column;
        align-items:center;
    }
`;

export const TimeLineYearBox = styled.div`
    text-shadow: 1px 2px 3px #2e2c2c;   
`;

export const TimeLineYear = styled.div`
    padding-left: 20px;
    @media (max-width: 700px){
    font-size: 20px;
    font-weight: bold;
    }
`;

export const TimeLine = styled.div`
    width: 100%;
    height: 5px;
    background-color: #fff;
    margin: 10px 0px;
    position: relative;
`;

export const TimeLineMark = styled.div`
    width: 20px;
    height: 5px;
    background-color: #fff;
    transform: rotate(90deg);
    position: absolute;
    left: 50%;
`;

export const TimeLineText = styled.p`
    font-size: 18px;
    width: 200px;
    min-width: 200px;
    max-width: 200px;
    padding: 10px 20px 0px;
`;
