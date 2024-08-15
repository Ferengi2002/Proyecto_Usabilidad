import React from 'react';
import '../styles/PaginaSugerencias.css';
import SuggestionsForm from './SuggestionsForm';
import ErrorReportForm from './ErrorReportForm';

const ErrorReportScreen = () => {
  return (
<div className="error-screen" tabindex="0">
  <div className="header" tabindex="0">
    <div className="header-container" tabindex="0">
      <h1 className='abmodel-text' tabindex="0">ABMODEL</h1>
    </div>
  </div>
  <div className="content" tabindex="0">
    <div className="suggestions-section" tabindex="0">
      <SuggestionsForm tabindex="0" />
    </div>
    <div className="about-section" tabindex="0">
      <p tabindex="0">
        En ABMODEL, fusionamos la innovación con la accesibilidad para dar
        vida a experiencias digitales cautivadoras. Nos especializamos en la
        creación de páginas interactivas y juegos que son visualmente
        impactantes hacia nuestros clientes. Nuestra misión es llevar la
        creatividad a nuevos niveles, asegurándonos de que todas nuestras
        creaciones sean inclusivas y fáciles de usar para todos.
      </p>
    </div>
    <div className="error-section" tabindex="0">
      <ErrorReportForm tabindex="0" />
    </div>
  </div>
</div>
  );
};

export default ErrorReportScreen;
