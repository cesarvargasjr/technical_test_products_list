import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  height: 100px;
  background-color: #3F75FF;
  box-shadow: 0 0 10px 3px #0005;
  align-items: center;
  padding-left: 100px;

  @media (max-width: 1024px) {
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 840px) {
    height: 130px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 550px;
  margin-right: 50px;

  @media (max-width: 1024px) {
    margin-right: 0;
    width: 400px;
  }

  @media (max-width: 630px) {
    max-width: 88%;
    margin-right: 0;
  }
`;

export const TitleHeader = styled.h1`
  font-size: 21px;
  font-weight: 700;
  color: #FFF;
  margin-right: 30px;

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-right: 20px;
  }

  @media (max-width: 840px) {
    font-size: 18px;
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 630px) {
  }
`;
