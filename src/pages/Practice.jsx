import React, { useState } from 'react';
import { questionsData } from '../data/questions';
import { CheckCircle, XCircle } from 'lucide-react';

const Practice = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const question = questionsData[currentQ];

  const handleSelect = (idx) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setCurrentQ((prev) => (prev + 1) % questionsData.length);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>Practice Area</h1>
        <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Question {currentQ + 1} of {questionsData.length}</span>
      </div>
      <p className="page-subtitle">Test your aptitude with these curated questions.</p>

      <div className="question-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span className="badge primary">{question.subject} - {question.topic}</span>
          <span className="badge" style={{ backgroundColor: '#f3f4f6' }}>{question.difficulty}</span>
        </div>
        
        <h2 style={{ fontSize: '1.25rem', lineHeight: '1.6', marginTop: '1rem' }}>
          {question.question}
        </h2>
        
        <div className="options-grid">
          {question.options.map((opt, idx) => {
            let btnClass = 'option-btn';
            
            if (isSubmitted) {
              if (idx === question.correctAnswer) btnClass += ' correct';
              else if (idx === selectedOption) btnClass += ' wrong';
            } else if (idx === selectedOption) {
              btnClass += ' selected';
            }
            
            return (
              <button 
                key={idx} 
                className={btnClass}
                onClick={() => handleSelect(idx)}
                disabled={isSubmitted}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>{opt}</span>
                {isSubmitted && idx === question.correctAnswer && <CheckCircle color="#059669" size={20} />}
                {isSubmitted && idx === selectedOption && idx !== question.correctAnswer && <XCircle color="#dc2626" size={20} />}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
          {!isSubmitted ? (
            <button 
              className="btn btn-primary" 
              onClick={handleSubmit} 
              disabled={selectedOption === null}
            >
              Submit Answer
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleNext}>
              Next Question
            </button>
          )}
        </div>

        {isSubmitted && (
          <div className="explanation-box">
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Explanation</h4>
            <p style={{ color: 'var(--text-main)', lineHeight: '1.6' }}>{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practice;
