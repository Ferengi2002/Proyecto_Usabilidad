import React, { useState } from 'react';
import SubHeader from './SubHeader';
import Roulette from './Roulette';
import Question from './Question';
import GameBoard from './BoardGame/GameBoard';
import Instructions from './Instructions';
import './SecondScreen.css';


const SecondScreen = () => {

    const [showRoulette, setShowRoulette] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);
    const [steps, setSteps] = useState(0);

    const handleStartClick = () => {
        // Mostrar la ruleta cuando se haga clic en la casilla de inicio
        setShowRoulette(true);
    };

    const handleRouletteClose = (result) => {
        // Recibir el resultado de la ruleta, cerrar la ruleta y mover el avatar
        setSteps(result);
        setShowRoulette(false);
        setShowQuestion(true); // Mostrar la pregunta después de mover el avatar
    };


    const handleQuestionResult = (isCorrect) => {
        // Determinar si avanza o retrocede en el tablero según la respuesta
        if (isCorrect) {
            setSteps(1); // Avanza una casilla si la respuesta es correcta
        } else {
            setSteps(-1); // Retrocede una casilla si la respuesta es incorrecta
        }
        setShowQuestion(false);
    };

/*
    const handleClose = () => {
        setShowRoulette(false);
        // Cuando se cierra la ruleta, se puede navegar aqui a otro componente
    };

    // Para que se muestre nuevamente la ruleta
    const showRouletteAgain = () => {
      setShowRoulette(true);
    };
    const gameOver = () => {
        console.log('Game Over');
        // Aquí puedes agregar lógica para mostrar un mensaje de game over
        // o navegar a otro componente
        showRouletteAgain();
    };*/

    return (
        <div>
            <SubHeader />
            <div className="second-screen">
            <div className="content">
                <div className="game-section">
                <GameBoard 
                    steps={steps} 
                    onClickStart={handleStartClick} 
                />
                
                </div>
                {showRoulette && <Roulette onClose={handleRouletteClose} />}
                {showQuestion && <Question                 
                onResult={handleQuestionResult} />}

                
            </div>
            </div>
            {/* {showRoulette && <Roulette onClose={handleClose} />} */}
            {/* Puedes agregar aquí otros componentes o lógica para mostrar 
            cuando la ruleta esté cerrada */}
            <Instructions />
            
            {/* Componente para mostrar la pregunta cargada */}
            
        </div>
    );
};

export default SecondScreen;
