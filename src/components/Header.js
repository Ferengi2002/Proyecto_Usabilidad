import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoImage} alt="Logo FísicaVentura" className="logo" />
      </Link>
    </div>
  );
};

export default Header;
