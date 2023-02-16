import { createStyles } from "@mui/material";

export const styleInput = createStyles({
  width: '100%',

  '& .MuiInputBase-root': {
    display: 'flex',
    height: 40,
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
  '& .MuiInputBase-input': {
    fontSize: 16,
    fontWeight: 400,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFF',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
});