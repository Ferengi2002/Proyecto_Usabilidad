import React, { useState, useEffect } from 'react';
import '../App.css';
import Feedback from './Feedback'; // Importa el nuevo componente de retroalimentación
import correctImage from '../assets/images/correct.png'; // Reemplaza con la ruta correcta de tu imagen
import incorrectImage from '../assets/images/incorrect.png'; // Reemplaza con la ruta correcta de tu imagen

function parseQuestions(data) {
  const questionsArray = data.split('\n\n').map(questionBlock => {
      const lines = questionBlock.split('\n').filter(line => line.trim() !== '');
      
      const questionText = lines[0]; // La primera línea es la pregunta
      
      const options = lines.slice(1, lines.length - 1).filter(option => !option.startsWith('Respuesta')); // Filtra las líneas que no sean la respuesta

      const correctOption = lines[lines.length - 1].replace('Respuesta', '').trim(); // Última línea es la respuesta correcta

      return {
          questionText: questionText.trim(),
          options: options.map(option => option.trim()), // Asegúrate de recortar las opciones
          correctOption: correctOption.trim()
      };
  });

  return questionsArray;
}

const Question = ({ onAnswered }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/questions.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
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
    onAnswered(correct); // Asegúrate de llamar a la función onAnswered con true o false
  };

  const handleOkClick = () => {
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
            <div className="question-number">Pregunta</div>
            {question.questionImage && <img src={question.questionImage} alt="Pregunta" className="question-image" />}
          </div>
          <div className="question-text">{question.questionText}</div>
          <div className="options-container">
            {question.options.map((option, index) => (
              <div
                key={index}
                className="option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="hint">
            <a href="#hint" onClick={handleFeedbackClick}>¿No sabes la respuesta?</a>
          </div>

          {/* Modal de respuesta correcta o incorrecta */}
          {selectedOption && (
            <div className="answer-modal">
              <img
                src={isAnswerCorrect ? correctImage : incorrectImage}
                alt={isAnswerCorrect ? 'Respuesta Correcta' : 'Respuesta Incorrecta'}
                className="modal-image"
              />
              <div className="ok-button" onClick={handleOkClick}>
                OK
              </div>
            </div>
          )}

          {/* Componente de retroalimentación */}
          {showFeedback && <Feedback onClose={handleCloseFeedback} />}
        </div>
      </div>
    </div>
  );
};

export default Question;