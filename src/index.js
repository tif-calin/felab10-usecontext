import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ThemeProvider } from './state/useTheme';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
