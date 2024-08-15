import React, { useState } from 'react';
import '../styles/PaginaSugerencias.css';

const SuggestionsForm = () => {
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sugerencia enviada:', suggestion);
    setSuggestion('');
  };

  return (
    <div className="form-container">
      <h2>Sugerencias o Comentarios</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={suggestion}
          onChange={handleChange}
          placeholder="Ingrese alguna sugerencia o comentario"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default SuggestionsForm;
