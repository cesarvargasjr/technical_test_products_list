import styled from 'styled-components';

export const ContainerPage = styled.div`
  display: flex;
  padding: 50px 0;
  justify-content: center;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
  max-width: 70%;
`;

export const Title = styled.h2`
  font-size: 16px;
  width: 100%;
`;

export const TitleResult = styled.div`
  font-size: 21px;
  font-weight: 700;
  width: 100%;
  margin-bottom: 20px;
`;

export const ColumnCategories = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 370px;
  border-radius: 8px;
  padding: 20px 0 0 30px;
  box-shadow: 0 0 3px 3px #0001;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: row;
`;