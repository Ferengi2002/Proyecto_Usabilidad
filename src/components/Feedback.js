import React from 'react';
import '../App.css';
import closeIcon from '../assets/images/close-icon.png'; // Reemplaza con la ruta correcta de tu ícono de cerrar

const Feedback = ({ onClose }) => {
  return (
    <div className="feedback-container">
      <div className="feedback-content">
        <img src={closeIcon} alt="Close" className="close-icon" onClick={onClose} />
        <div className="feedback-text">
          {/* Aquí puedes poner la retroalimentación o pista */}
          La respuesta correcta se relaciona con el tiempo que tarda un cuerpo en completar una vuelta completa.
        </div>
      </div>
    </div>
  );
};

export default Feedback;
