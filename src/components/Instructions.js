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
  <div className="instructions-container" tabindex="0">
    <button className="instructions-button" onClick={toggleInstructions} tabindex="0">
      <img 
        src={PersonajePhoto}
        alt="Personaje de instrucciones" 
        className="instructions-image"
        tabindex="0"
      />
      <p className="instructions-text" tabindex="0">¿Cómo jugar?</p>
    </button>
  </div>

  {isOpen && (
    <>
      <div className="instructions-overlay" tabindex="0"></div>
      <div className="instructions-modal" tabindex="0">
        <div className="instructions-content-container" tabindex="0">
          <div className="instructions-content" tabindex="0">
            <div className='close-button-content' tabindex="0">
              <button className="close-button" onClick={toggleInstructions} tabindex="0">
                <img src={closeImage} alt="Cerrar" tabindex="0" />
              </button>
            </div>
            <h2 tabindex="0">Instrucciones del Juego:</h2>
            <ol tabindex="0">
              <li tabindex="0"><strong>Selecciona el Nivel:</strong> Elige el nivel donde se encuentra tu ficha.</li>
              <li tabindex="0"><strong>Gira la Ruleta:</strong> La ruleta determinará cuántos espacios avanzas en el mapa.</li>
              <li tabindex="0"><strong>Responde Preguntas:</strong> Después de moverte, aparecerá una pregunta de opción múltiple relacionada con el juego de física.</li>
              <li tabindex="0"><strong>Respuesta Correcta:</strong> Avanzas más espacios.</li>
              <li tabindex="0"><strong>Respuesta Incorrecta:</strong> Retrocedes algunos espacios.</li>
              <li tabindex="0"><strong>Cerca del Final:</strong> Si estás cerca de la meta, debes sacar el número exacto para llegar. Si obtienes un número mayor, retrocedes la diferencia hasta completar el movimiento.</li>
            </ol>
            <p className="good-luck" tabindex="0"><strong>¡Buena Suerte!</strong></p>
          </div>
        </div>
      </div>
    </>
    )}
  </>
    );
  };
  
  export default Instructions;