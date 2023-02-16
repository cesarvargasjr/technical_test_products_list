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
`;

export const NameProduct = styled.p`
  font-size: 16px;
  text-align: center;
  align-self: center;
`;
