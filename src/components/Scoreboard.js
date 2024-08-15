import React from 'react';
import '../styles/PaginaPrincipal.css';


const Scoreboard = () => {
  const scores = [
    { name: 'Nombre 1', time: '12:32' },
    { name: 'Nombre 2', time: '12:40' },
    { name: 'Nombre 3', time: '13:05' },
    { name: 'Nombre 4', time: '14:50' },
  ];

  return (
    <div className="scoreboard-container">
    <div className="scoreboard">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tiempo</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.name}</td>
              <td>{score.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Scoreboard;
