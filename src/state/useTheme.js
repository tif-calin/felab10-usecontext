import React from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = React.useState('light');

};
