import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer tabindex="0">
    <p tabindex="0">ABMODEL - Derechos Reservados</p>
    <Link to="/report-error" tabindex="0">Reportar un error</Link>
  </footer>
  );
};

export default Footer;
