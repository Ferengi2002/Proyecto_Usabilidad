import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';

const Header = () => {
  return (
    <div className="header" tabindex="0">
    <Link to="/" tabindex="0">
      <img src={logoImage} alt="Logo FísicaVentura" className="logo" tabindex="0" />
    </Link>
  </div>
  );
};

export default Header;
