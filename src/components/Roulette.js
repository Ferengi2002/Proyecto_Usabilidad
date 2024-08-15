import React, { useState, useEffect, useCallback } from 'react';
import ruletaImage from '../assets/images/ruleta.png';
import flechaImage from '../assets/images/flecha.png';
import closeImage from '../assets/images/close.png';

const Roulette = ({ onClose }) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [resultado, setResultado] = useState('');
  const [showResult, setShowResult] = useState(false);

  const lanzar = () => {
    if (!isSpinning) {
      girar();
    }
  };

  const girar = () => {
    setIsSpinning(true);
    setResultado('');
    setShowResult(false);
    const randomRotation = Math.floor(Math.random() * 1440) + 720;
    setRotation(prevRotation => prevRotation + randomRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
    }, 6000);
  };

  const final = useCallback(() => {
    const grados = (rotation % 360 + 360) % 360;
    let casillas;

    if (grados >= 0 && grados < 30) {
      casillas = 3;
    } else if (grados >= 30 && grados < 90) {
      casillas = 2;
    } else if (grados >= 90 && grados < 150) {
      casillas = 1;
    } else if (grados >= 150 && grados < 210) {
      casillas = 6;
    } else if (grados >= 210 && grados < 270) {
      casillas = 5;
    } else if (grados >= 270 && grados < 330) {
      casillas = 4;
    } else if (grados >= 330 && grados < 360) {
      casillas = 3;
    }

    setResultado(casillas);
  }, [rotation, onClose]); // Añadir 'onClose' como dependencia porque se está utilizando dentro del efecto.

  const handleResultClick = () => {
    onClose(resultado); // Pasar el resultado solo cuando se hace clic en el botón
  };


  useEffect(() => {
    if (!isSpinning && showResult) {
      final(); // Usar la función memoizada
    }
  }, [isSpinning, showResult, final]);

  return (
    <div className='modal-overlay' tabindex="0">
  <div className='modal-content' tabindex="0">
    <div className='plafon' tabindex="0">
      <div className='close-button-container' tabindex="0"> 
        <button 
          className='close-button' 
          onClick={() => onClose(resultado)} 
          disabled={isSpinning || !showResult}
          tabindex="0"
        >
          <img src={closeImage} alt="Cerrar" tabindex="0" />
        </button>
      </div>
      <div className={`ruleta ${isSpinning ? 'spinning' : ''}`} style={{
        backgroundImage: `url(${ruletaImage})`,
        transform: `rotate(${rotation}deg)`,
        transition: "transform 6s cubic-bezier(0.2,0.8,0.7,0.99)"
      }} tabindex="0"
      alt= "Ruleta de casillas: Contenido, 1, 2, 3, 4, 5 y 6">
      </div>
      <div className='resultado-container' style={{ minHeight: '50px' }} tabindex="0">
        {showResult ? (
          <button className='resultado-button' onClick={handleResultClick} tabindex="0">
            {resultado !== '' && `Avanza ${resultado} casillas`}
          </button>
        ) : (
          <div className='barra-inferior' tabindex="0">
            <button className='girar' onClick={lanzar} disabled={isSpinning} tabindex="0">
              {isSpinning ? 'Girando...' : 'Girar'}
            </button>
          </div>
        )}
      </div>
      <div className='flecha' tabindex="0">
        <img src={flechaImage} alt='flecha para girar' tabindex="0" />
      </div>
    </div>
  </div>
</div>
  );
};

export default Roulette;