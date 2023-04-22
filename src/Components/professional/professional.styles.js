import styled from "styled-components";

export const InfoContainer = styled.article `
    position: absolute;
    top: 20%;
    left: 36%;
    color: #fff;
    padding: 10px 50px 20px 0px;
    border-radius: 15px
`;

export const TimeLineContainer = styled.div`
    display: flex;
    text-align: center;
    padding-top: 40px;
`;

export const TimeLineYearBox = styled.div`
    text-shadow: 1px 2px 3px #2e2c2c;   
`;

export const TimeLineYear = styled.div`
    padding-left: 20px;
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
