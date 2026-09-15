import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockTestsDB } from '../data/mockTests';
import { questionsDB } from '../data/questions';
import { Clock, CheckCircle, Flag, AlertCircle, ChevronLeft, ChevronRight, XCircle } from 'lucide-react';

const MockTest = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  
  const [test, setTest] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewStatus, setReviewStatus] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0, total: 0 });

  useEffect(() => {
    // In a real app, you would fetch test details by ID
    // and randomly select questions from questionsDB based on the test sections.
    // For this demo, we'll just use the available questions in questionsDB.
    const foundTest = mockTestsDB.find(t => t.id === testId) || mockTestsDB[0];
    setTest(foundTest);
    setQuestions(questionsDB); // Using the mock db directly for demo
    setTimeLeft(foundTest.duration * 60);
  }, [testId]);

  useEffect(() => {
    if (timeLeft <= 0 || isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (opt) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [currentIdx]: opt }));
  };

  const toggleReview = () => {
    if (isSubmitted) return;
    setReviewStatus(prev => ({ ...prev, [currentIdx]: !prev[currentIdx] }));
  };

  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to submit the test? You cannot change answers after submission.")) {
      let correct = 0;
      let wrong = 0;
      
      questions.forEach((q, idx) => {
        if (answers[idx]) {
          if (answers[idx] === q.correctAnswer) correct++;
          else wrong++;
        }
      });

      setScore({ correct, wrong, total: questions.length });
      setIsSubmitted(true);
    }
  };

  if (!test || questions.length === 0) return <div className="page-container">Loading test...</div>;

  const currentQ = questions[currentIdx];

  if (isSubmitted) {
    return (
      <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Test Result: {test.title}</h1>
        
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', flex: 1 }}>
            <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--primary)' }}>{score.correct}</div>
            <div style={{ color: 'var(--text-muted)' }}>Correct</div>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', flex: 1 }}>
            <div style={{ fontSize: '3rem', fontWeight: '700', color: '#ef4444' }}>{score.wrong}</div>
            <div style={{ color: 'var(--text-muted)' }}>Incorrect</div>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', flex: 1 }}>
            <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--text-main)' }}>{score.total - score.correct - score.wrong}</div>
            <div style={{ color: 'var(--text-muted)' }}>Unattempted</div>
          </div>
        </div>

        <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Detailed Review</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {questions.map((q, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontWeight: '600' }}>Question {idx + 1}</span>
                {answers[idx] === q.correctAnswer ? (
                  <span style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><CheckCircle size={18} /> Correct</span>
                ) : answers[idx] ? (
                  <span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><XCircle size={18} /> Incorrect</span>
                ) : (
                  <span style={{ color: 'var(--text-muted)' }}>Not Attempted</span>
                )}
              </div>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>{q.question}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {q.options.map((opt, i) => {
                  let bgColor = 'white';
                  let borderColor = 'var(--border-color)';
                  
                  if (opt === q.correctAnswer) {
                    bgColor = '#d1fae5';
                    borderColor = 'var(--secondary)';
                  } else if (answers[idx] === opt && opt !== q.correctAnswer) {
                    bgColor = '#fee2e2';
                    borderColor = '#ef4444';
                  }

                  return (
                    <div key={i} style={{ padding: '1rem', border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)', backgroundColor: bgColor }}>
                      {opt}
                    </div>
                  );
                })}
              </div>
              
              <div className="explanation-box">
                <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Explanation:</p>
                <p>{q.explanation}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <button className="btn btn-primary" onClick={() => navigate('/exams')}>Return to Exams</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--bg-color)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100 }}>
      {/* Left panel - Question Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '2rem', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>{test.title}</h1>
            <span style={{ color: 'var(--text-muted)' }}>{currentQ.subject} | {currentQ.topic}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: '600', color: timeLeft < 300 ? '#ef4444' : 'var(--text-main)' }}>
            <Clock size={24} /> {formatTime(timeLeft)}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '2rem' }}>
            <span style={{ marginRight: '1rem', color: 'var(--primary)' }}>Q {currentIdx + 1}.</span>
            {currentQ.question}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {currentQ.options.map((opt, idx) => (
              <button 
                key={idx} 
                className={`option-btn ${answers[currentIdx] === opt ? 'selected' : ''}`}
                onClick={() => handleSelectOption(opt)}
                style={{ fontSize: '1.05rem', padding: '1.25rem' }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
          <button 
            className="btn btn-outline"
            onClick={toggleReview}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderColor: reviewStatus[currentIdx] ? '#eab308' : 'var(--border-color)', color: reviewStatus[currentIdx] ? '#eab308' : 'var(--text-main)' }}
          >
            <Flag size={18} /> {reviewStatus[currentIdx] ? 'Unmark Review' : 'Mark for Review'}
          </button>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              className="btn btn-outline" 
              onClick={() => setCurrentIdx(p => Math.max(0, p - 1))}
              disabled={currentIdx === 0}
            >
              <ChevronLeft size={20} /> Previous
            </button>
            <button 
              className="btn btn-primary" 
              onClick={() => setCurrentIdx(p => Math.min(questions.length - 1, p + 1))}
              disabled={currentIdx === questions.length - 1}
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right panel - Navigation */}
      <div style={{ width: '300px', backgroundColor: 'white', borderLeft: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)' }}>Question Palette</h3>
        </div>
        
        <div style={{ padding: '1.5rem', flex: 1, overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
            {questions.map((_, idx) => {
              let bg = 'white';
              let color = 'var(--text-main)';
              let border = '1px solid var(--border-color)';
              
              if (currentIdx === idx) {
                border = '2px solid var(--primary)';
              } else if (answers[idx]) {
                bg = 'var(--secondary)';
                color = 'white';
                border = '1px solid var(--secondary)';
              }

              if (reviewStatus[idx]) {
                bg = answers[idx] ? '#ca8a04' : '#fef08a';
                color = answers[idx] ? 'white' : '#854d0e';
                border = answers[idx] ? '1px solid #ca8a04' : '1px solid #eab308';
              }

              return (
                <button 
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  style={{
                    aspectRatio: '1',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: bg,
                    color: color,
                    border: border,
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: 'var(--secondary)', borderRadius: '4px' }}></div> Answered
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '16px', height: '16px', border: '1px solid var(--border-color)', borderRadius: '4px' }}></div> Unanswered
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: '#fef08a', borderRadius: '4px' }}></div> Marked
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: '#ca8a04', borderRadius: '4px' }}></div> Marked & Ans
            </div>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%', justifyContent: 'center', padding: '1rem', backgroundColor: '#ef4444' }}
            onClick={handleSubmit}
          >
            Submit Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockTest;
