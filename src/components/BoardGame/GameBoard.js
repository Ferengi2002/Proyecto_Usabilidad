import React, { useEffect, useState } from 'react';
import './GameBoard.css';
import Roulette from '../Roulette';  // Importa tu componente de la ruleta
import Question from '../Question';

function GameBoard() {
    const [positions, setPositions] = useState([]);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [showRoulette, setShowRoulette] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);
    const [pendingMove, setPendingMove] = useState(0);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

    useEffect(() => {
        const positions = calculatePositions();
        setPositions(positions);
    }, []);

    function calculatePositions() {
        let positions = [];
        let verticalOffset = 20; // Desplazamiento vertical adicional por cada casilla dentro de la fila
        let rowHeight = 200; // Espacio vertical entre filas para evitar superposición

        for (let i = 0; i < 20; i++) {
            let row = Math.floor(i / 5); // Determina en qué fila está la casilla
            let col = i % 5; // Determina la columna de la casilla

            // Invertir el orden de las casillas en las filas impares para el efecto zigzag
            if (row % 2 === 1) { 
                col = 4 - col;
            }

            // Calcula la posición 'y' agregando un desplazamiento incremental
            let posY = row * rowHeight + col * verticalOffset;

            // Agrega un ajuste vertical si la fila es inversa (esto mantiene la continuidad en el zigzag)
            if (row % 2 === 1) {
                posY = row * rowHeight + (4 - col) * verticalOffset;
            }

            // Agrega la posición a la lista de posiciones
            positions.push({ x: col * 120, y: posY });
        }

        return positions;
    }

    function handleAvatarClick() {
        if (!showRoulette && !showQuestion) {
            setShowRoulette(true); // Muestra la ruleta
        }
    }

    function handleRouletteClose(result) {
        setShowRoulette(false);
        setPendingMove(result); // Establece cuántas casillas mover
        setShowQuestion(true); // Muestra la pregunta
    }

    function moveAvatar(steps) {
        setCurrentPosition((prev) => {
            let newPosition = prev + steps;
            if (newPosition >= positions.length) {
                newPosition = positions.length - 1; // Asegura que no pase el límite del tablero
            } else if (newPosition < 0) {
                newPosition = 0; // Asegura que no retroceda más allá del inicio
            }
            return newPosition;
        });
    }

    function handleQuestionAnswered(isCorrect) {
        setShowQuestion(false);
        if (isCorrect) {
            moveAvatar(pendingMove); // Mueve el avatar hacia adelante si es correcto
        } else {
            moveAvatar(-pendingMove); // Retrocede el avatar si la respuesta es incorrecta
        }
        setIsQuestionAnswered(true);
    }

    function handleNextRound() {
        setPendingMove(0);
        setIsQuestionAnswered(false);
    }

    useEffect(() => {
        if (isQuestionAnswered) {
            handleNextRound(); // Prepara para la siguiente ronda
        }
    }, [isQuestionAnswered]);

    return (
        <div>
            <div className="game-board" onClick={handleAvatarClick}>
                {positions.map((pos, index) => (
                    <div
                        key={index}
                        className={`board-cell ${index === 0 ? 'start-cell' : ''} ${index === positions.length - 1 ? 'end-cell' : ''}`}
                        style={{
                            left: `${pos.x}px`,
                            top: `${pos.y}px`,
                        }}
                    >
                        <span className="cell-number">
                            {index === 0 ? 'Inicio' : index + 1}
                        </span>
                    </div>
                ))}
                {positions.length > 0 && currentPosition < positions.length && (
                    <div
                        className="avatar"
                        style={{
                            left: `${positions[currentPosition].x + 60}px`,
                            top: `${positions[currentPosition].y + 60}px`,
                        }}
                    ></div>
                )}
            </div>
            {showRoulette && <Roulette onClose={handleRouletteClose} />}
            {showQuestion && <Question onAnswered={handleQuestionAnswered} />}
        </div>
    );
}

export default GameBoard;