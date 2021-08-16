import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="Header">
      <Link to="/"><h1>Lists of Things</h1></Link>
      
      <button>☀️/🌑</button>
    </header>
  );
};

export default Header;
