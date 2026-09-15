import React, { useState } from 'react';
import { questionsDB } from '../data/questions';
import { CheckCircle, XCircle, Filter } from 'lucide-react';

const Practice = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const filteredQuestions = categoryFilter === 'All' 
    ? questionsDB 
    : questionsDB.filter(q => q.category === categoryFilter || q.exam === categoryFilter);

  const question = filteredQuestions[currentQ];

  const handleSelect = (opt) => {
    if (isSubmitted) return;
    setSelectedOption(opt);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setCurrentQ((prev) => (prev + 1) % filteredQuestions.length);
  };

  if (!question) {
    return (
      <div className="page-container">
        <h1 className="page-title">Practice Area</h1>
        <div className="filter-bar" style={{ marginTop: '1rem' }}>
          <select className="filter-select" value={categoryFilter} onChange={(e) => { setCategoryFilter(e.target.value); setCurrentQ(0); }}>
            <option value="All">All Categories</option>
            <option value="SSC">SSC</option>
            <option value="Banking">Banking</option>
            <option value="UPSC">UPSC</option>
            <option value="Software Placements">Software Placements</option>
          </select>
        </div>
        <p>No questions found for this category yet.</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>Practice Area</h1>
        <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Question {currentQ + 1} of {filteredQuestions.length}</span>
      </div>
      <p className="page-subtitle">Test your aptitude with these curated questions.</p>

      <div className="filter-bar" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
          <Filter size={18} />
          <span style={{ fontWeight: '500' }}>Filter by:</span>
        </div>
        <select className="filter-select" value={categoryFilter} onChange={(e) => { setCategoryFilter(e.target.value); setCurrentQ(0); setIsSubmitted(false); setSelectedOption(null); }}>
          <option value="All">All Categories</option>
          <option value="SSC">SSC</option>
          <option value="Banking">Banking</option>
          <option value="UPSC">UPSC</option>
          <option value="Software Placements">Software Placements</option>
        </select>
      </div>

      <div className="question-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span className="badge primary">{question.exam} | {question.subject} - {question.topic}</span>
          <span className="badge" style={{ backgroundColor: '#f3f4f6' }}>{question.difficulty}</span>
        </div>
        
        <h2 style={{ fontSize: '1.25rem', lineHeight: '1.6', marginTop: '1rem' }}>
          {question.question}
        </h2>
        
        <div className="options-grid">
          {question.options.map((opt, idx) => {
            let btnClass = 'option-btn';
            
            if (isSubmitted) {
              if (opt === question.correctAnswer) btnClass += ' correct';
              else if (opt === selectedOption) btnClass += ' wrong';
            } else if (opt === selectedOption) {
              btnClass += ' selected';
            }
            
            return (
              <button 
                key={idx} 
                className={btnClass}
                onClick={() => handleSelect(opt)}
                disabled={isSubmitted}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>{opt}</span>
                {isSubmitted && opt === question.correctAnswer && <CheckCircle color="#059669" size={20} />}
                {isSubmitted && opt === selectedOption && opt !== question.correctAnswer && <XCircle color="#dc2626" size={20} />}
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
