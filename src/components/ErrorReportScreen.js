import React from 'react';
import '../styles/PaginaSugerencias.css';
import SuggestionsForm from './SuggestionsForm';
import ErrorReportForm from './ErrorReportForm';

const ErrorReportScreen = () => {
  return (
    <div className="error-screen">
      <div className="header">
      <div className="header-container">
        <h1 className='abmodel-text'>ABMODEL</h1>
      </div>
      </div>
      <div className="content">
        <div className="suggestions-section">
          <SuggestionsForm />
        </div>
        <div className="about-section">
          <p>
            En ABMODEL, fusionamos la innovación con la accesibilidad para dar
            vida a experiencias digitales cautivadoras. Nos especializamos en la
            creación de páginas interactivas y juegos que son visualmente
            impactantes hacia nuestros clientes. Nuestra misión es llevar la
            creatividad a nuevos niveles, asegurándonos de que todas nuestras
            creaciones sean inclusivas y fáciles de usar para todos.
          </p>
        </div>
        <div className="error-section">
          <ErrorReportForm />
        </div>
      </div>
    </div>
  );
};

export default ErrorReportScreen;
