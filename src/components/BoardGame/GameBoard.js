import React, { useEffect, useState } from 'react';
import './GameBoard.css';

function GameBoard({ steps, onClickStart }) {
    const [positions, setPositions] = useState([]);
    const [currentPosition, setCurrentPosition] = useState(0);
    

    useEffect(() => {
        // Calcula las posiciones cuando se monta el componente
        const positions = calculatePositions();
        setPositions(positions);
    }, []);

    useEffect(() => {
        // Mueve el avatar cuando se actualizan los pasos
        if (steps !== 0 && positions.length > 0) {
            moverAvatar(steps);
        }
    }, [steps, positions]);

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

    function moverAvatar(steps) {
        let newPosition = (currentPosition + steps) % positions.length;
        setCurrentPosition(newPosition); // Actualiza la posición actual del avatar
    }

    function handleClick() {
        if (currentPosition === 0) {
            onClickStart();
        }
    }

    return (
        <div>
            <div className="game-board" onClick={handleClick}>
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
                {positions.length > 0 && (
                    <div
                        className="avatar"
                        style={{
                            left: `${positions[currentPosition].x+60}px`,
                            top: `${positions[currentPosition].y+60}px`,
                        }}
                    ></div>
                )}
            </div>
        </div>
    );
}

export default GameBoard;
