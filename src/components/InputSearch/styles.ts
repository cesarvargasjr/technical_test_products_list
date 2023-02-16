import { createStyles } from "@mui/material";

export const styleInput = createStyles({
  '& .MuiInputBase-root': {
    height: 40,
    width: 550,
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