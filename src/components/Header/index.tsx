import { InputSearch } from '../InputSearch';
import * as S from './styles';

interface PropsHeader {
  onChange: (e: any) => void;
};

export const Header = ({ onChange }: PropsHeader) => {
  return (
    <S.ContainerHeader>
      <S.TitleHeader>
        O que você está procurando?
      </S.TitleHeader>
      <S.ContainerInput>
        <InputSearch
          onChange={onChange}
        />
      </S.ContainerInput>
    </S.ContainerHeader>
  )
};