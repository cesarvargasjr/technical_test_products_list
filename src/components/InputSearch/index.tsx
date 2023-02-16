import TextField from '@mui/material/TextField';
import * as S from './styles';

interface PropsInputSearch {
  onChange: (e: any) => void;
};

export const InputSearch = ({ onChange }: PropsInputSearch) => {
  return (
    <TextField
      type="search"
      placeholder="Busque aqui"
      sx={S.styleInput}
      onChange={onChange}
    />
  )
};