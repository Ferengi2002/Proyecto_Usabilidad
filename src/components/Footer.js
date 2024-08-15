import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>ABMODEL - Derechos Reservados</p>
      <Link to="/report-error">Reportar un error</Link>
    </footer>
  );
};

export default Footer;
