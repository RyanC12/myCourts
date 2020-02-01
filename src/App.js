import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import MyCourts from './pages/MyCourts';

function App() {
  return (
    <ThemeProvider>
      <MyCourts />
    </ThemeProvider>
  );
}

// Global Themes
// const theme = createMuiTheme({
//   palette: {
//     primary: { main: '#2B3137' },
//     secondary: { main: '#f96302', dark: '#F56505' },
//     link: { main: '#3E7697' },
//     error: { main: '#D90F15' },
//     accentColor: { main: '#EEEEEE', dark: '#808080' }
//   },
//   typography: {
//     // Tell Material-UI what's the font-size on the html element is.
//     htmlFontSize: 10,
//     button: {
//       textTransform: 'none'
//     }
//   },
// });

export default App;
