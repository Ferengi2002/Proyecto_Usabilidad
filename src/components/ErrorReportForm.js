import React, { useState } from 'react';
import '../styles/PaginaSugerencias.css';

const ErrorReportForm = () => {
  const [errorReport, setErrorReport] = useState('');

  const handleChange = (e) => {
    setErrorReport(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Error reportado:', errorReport);
    setErrorReport('');
  };

  return (
    <div className="form-container" style={{ width: '400px', height: '240px' }}>
      <p>
        Si encontró algún error, repórtelo en nuestros canales oficiales o en la caja de texto.
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={errorReport}
          onChange={handleChange}
          placeholder="Coloque el error que encontró"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ErrorReportForm;
