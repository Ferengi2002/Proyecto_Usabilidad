import React, { useState } from 'react';
import '../styles/Instrucciones.css';
import PersonajePhoto from '../assets/images/personajeInstruciones.png'
import closeImage from '../assets/images/close.png';


const Instructions = () => {
    const [isOpen, setIsOpen]=useState(false)
  
    const toggleInstructions = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <div className="instructions-container">
          <button className="instructions-button" onClick={toggleInstructions}>
            <img 
              src={PersonajePhoto}
              alt="" 
              className="instructions-image"
            />
            <p className="instructions-text">¿Cómo jugar?</p>
          </button>
        </div>
  
        {isOpen && (
        <>
        <div className="instructions-overlay"></div>
        <div className="instructions-modal">
          <div className="instructions-content-container">
            <div className="instructions-content">
             <div className='close-button-content'>
             <button className="close-button" onClick={toggleInstructions}>
                <img src={closeImage} alt="Cerrar" />
                </button>
             </div>
            <h2>Instrucciones del Juego:</h2>
              <ol>
                <li><strong>Selecciona el Nivel:</strong> Elige el nivel donde se encuentra tu ficha.</li>
                <li><strong>Gira la Ruleta:</strong> La ruleta determinará cuántos espacios avanzas en el mapa.</li>
                <li><strong>Responde Preguntas:</strong> Después de moverte, aparecerá una pregunta de opción múltiple relacionada con el juego de física.</li>
                <li><strong>Respuesta Correcta:</strong> Avanzas más espacios.</li>
                <li><strong>Respuesta Incorrecta:</strong> Retrocedes algunos espacios.</li>
                <li><strong>Cerca del Final:</strong> Si estás cerca de la meta, debes sacar el número exacto para llegar. Si obtienes un número mayor, retrocedes la diferencia hasta completar el movimiento.</li>
              </ol>
              <p className="good-luck"><strong>¡Buena Suerte!</strong></p>
            </div>
          </div>
        </div>
        </>
        )}
      </>
    );
  };
  
  export default Instructions;