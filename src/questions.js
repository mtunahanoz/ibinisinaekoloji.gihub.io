import React, { useState } from 'react';
import questions from "./sorular"
import { useNavigate } from 'react-router-dom';


const Quiz = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  
  const handleAnswer = (optionIndex) => {
    setAnswers([...answers.slice(0, currentQuestionIndex), optionIndex + 1, ...answers.slice(currentQuestionIndex + 1)]);
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleNextOrSubmit = () => {

    

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // post answers to server

      const score = answers.reduce((a, b) => a + b, 0);
      window.location.replace("/result?param1="+ score);
      console.log('Total score:', score);
    }
  };
  
  return (
    <div style={{ display: 'flex', marginLeft: "20px", marginRight: "20px", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      
      <h1 id="soruBaslik">{questions[currentQuestionIndex].question}</h1>
      <br/>
      <div className='question'>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <div key={index}>
          <input className="form-check-input" type="radio" id={`option-${index}`} name="option" onChange={() => handleAnswer(index)} checked={answers[currentQuestionIndex] === index + 1} />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
      </div>
      <br/>
      <br/>
      <div style={{ flexDirection: "row"}}>
     {currentQuestionIndex >=  1 &&  <button  className="button"  onClick={handlePrevious}><i className="fa-solid fa-arrow-left"></i></button> }
      <button className="button" onClick={handleNextOrSubmit}>{currentQuestionIndex === questions.length - 1 ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-arrow-right"></i>}</button>
      </div>
    </div>
  );
};

export default Quiz;