import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../state/useTheme';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="Header">
      <Link to="/"><h1>Lists of Things</h1></Link>
      
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? '🌑' : '☀️'}
      </button>
    </header>
  );
};

export default Header;
