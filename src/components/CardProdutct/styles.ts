import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 20px;
  height: 320px;
  width: 230px;
  box-shadow: 0 0 3px 3px #0001;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 220px;
  }

  @media (max-width: 590px) {
    height: 180px;
    width: 130px;
    padding: 15px;
  }
`;

export const NameProduct = styled.p`
  font-size: 16px;
  text-align: center;
  align-self: center;

  @media (max-width: 590px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  height: 250px;
  width: 250px;

  @media (max-width: 590px) {
    height: 100px;
    width: 100px;
  }
`;