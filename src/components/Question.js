import React, { useState, useEffect } from 'react';
import '../App.css';
import Feedback from './Feedback'; // Importa el nuevo componente de retroalimentación
import correctImage from '../assets/images/correct.png'; // Reemplaza con la ruta correcta de tu imagen
import incorrectImage from '../assets/images/incorrect.png'; // Reemplaza con la ruta correcta de tu imagen

function parseQuestions(data) {
  const questionsArray = data.split('\n\n').map(questionBlock => {
      const lines = questionBlock.split('\n').filter(line => line.trim() !== '');
      
      // Verifica que el bloque contenga una pregunta válida y al menos 4 líneas (1 pregunta, 3 opciones, 1 respuesta)
      if (lines.length >= 5) {
        const questionText = lines[0]; // La primera línea es la pregunta
        
        // Recoge las 3 primeras líneas después de la pregunta como opciones
        const options = lines.slice(1, 5).map(option => option.trim());

        // La cuarta línea después de las opciones es la respuesta correcta
        const correctOption = lines[5].replace('Respuesta ', '').trim(); // Reemplaza 'Respuesta' con espacio al inicio

        return {
            questionText: questionText.trim(),
            options: options, // Opciones ya recortadas en el map anterior
            correctOption: correctOption
        };
      }
      return null;
  });

  return questionsArray.filter(question => question !== null); // Filtra bloques vacíos o inválidos
}

const Question = ({ onAnswered }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/questions.txt`)
    .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
  })
  .then(text => {
      console.log(text); // Agrega esto para verificar el contenido
      const parsedQuestions = parseQuestions(text);
      const randomQuestion = parsedQuestions[Math.floor(Math.random() * parsedQuestions.length)];
      setQuestion(randomQuestion);
  })
  .catch(error => {
      console.error('Error cargando el archivo:', error);
      setError('Error cargando las preguntas. Por favor intenta de nuevo más tarde.');
  });
}, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const correct = option === question.correctOption;
    setIsAnswerCorrect(correct);
   
  };

  const handleOkClick = () => {
    onAnswered(isAnswerCorrect); // Asegúrate de llamar a la función onAnswered con true o false
    setSelectedOption(null);
    setIsAnswerCorrect(null);
  };

  const handleFeedbackClick = () => {
    setShowFeedback(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!question) {
    return <div>Cargando pregunta...</div>;
  }

  return (
    <div className='modal-overlay'>
  <div className='modal-content'>
    <div className="question-container">
      <div className="question-header">
        <div className="question-number" tabindex="0">Pregunta</div>
        {question.questionImage && (
          <img
            src={question.questionImage}
            alt="Pregunta"
            className="question-image"
            tabindex="0"
          />
        )}
      </div>
      <div className="question-text" tabindex="0">{question.questionText}</div>
      <div className="options-container">
        {question.options.map((option, index) => (
          <div
            key={index}
            className="option"
            onClick={() => handleOptionClick(option)}
            tabindex="0"
          >
            {option}
          </div>
        ))}
      </div>

      {/* Modal de respuesta correcta o incorrecta */}
      {selectedOption && (
        <div className="answer-modal" tabindex="0">
          <img
            src={isAnswerCorrect ? correctImage : incorrectImage}
            alt={isAnswerCorrect ? 'Respuesta Correcta' : 'Respuesta Incorrecta'}
            className="modal-image"
            tabindex="0"
          />
          <div className="ok-button" onClick={handleOkClick} tabindex="0">
            OK
          </div>
        </div>
      )}
    </div>
  </div>
</div>
  );
};

export default Question;