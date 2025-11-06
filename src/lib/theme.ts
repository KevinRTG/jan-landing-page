import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#facc15' }, // kuning JAN
    secondary: { main: '#1f2937' }, // abu gelap
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
