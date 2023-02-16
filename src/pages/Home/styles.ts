import styled from 'styled-components';

export const ContainerPage = styled.div`
  display: flex;
  padding: 50px 0;
  justify-content: center;

  @media (max-width: 660px) {
    flex-direction: column;
  }

  @media (max-width: 540px) {
    align-items: center;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
  width: 70%;
  gap: 30px;

  @media (max-width: 660px) {
    margin-left: 0;
    width: 95%;
    justify-content: center;
    align-self: center;
    margin-top: 50px;
  }

  @media (max-width: 620px) {
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  width: 100%;
`;

export const TitleResult = styled.div`
  font-size: 21px;
  font-weight: 700;
  width: 100%;

  @media (max-width: 660px) {
    padding-left: 25px;
  }

  @media (max-width: 540px) {
    text-align: center;
    padding: 0;
  }
`;

export const ColumnCategories = styled.div<{ expand: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  max-width: 220px;
  height: ${(({ expand }) => expand === true ? 350 : 40)}px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 3px 3px #0001;

  @media (max-width: 1366px) {
    margin-left: 30px;
  }

  @media (max-width: 540px) {
    margin-left: 0;
  }
`;

export const ContainerFilter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ContainerCheckbox = styled.div<{ expand: boolean }>`
  display: ${({ expand }) => expand ? 'flex' : 'none'};
  flex-direction: row;
`;
