import React from 'react';
import '../App.css';
import closeIcon from '../assets/images/close-icon.png'; // Reemplaza con la ruta correcta de tu ícono de cerrar

const Feedback = ({ onClose }) => {
  return (
<div className="feedback-container" tabindex="0">
  <div className="feedback-content" tabindex="0">
    <img 
      src={closeIcon} 
      alt="bonton para cerrar" 
      className="close-icon" 
      onClick={onClose} 
      tabindex="0"
    />
    <div className="feedback-text" tabindex="0">
      {/* Aquí puedes poner la retroalimentación o pista */}
      La respuesta correcta se relaciona con el tiempo que tarda un cuerpo en completar una vuelta completa.
    </div>
  </div>
</div>
  );
};

export default Feedback;
