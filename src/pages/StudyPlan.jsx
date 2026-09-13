import React, { useState } from 'react';
import { examCategories } from '../data/exams';
import { useProgress } from '../context/ProgressContext';
import { Link } from 'react-router-dom';

const StudyPlan = () => {
  const { allTopics } = useProgress();
  const [exam, setExam] = useState('');
  const [time, setTime] = useState('3');
  const [difficulty, setDifficulty] = useState('All');
  const [planGenerated, setPlanGenerated] = useState(false);
  const [plan, setPlan] = useState([]);

  const generatePlan = (e) => {
    e.preventDefault();
    if (!exam) return;

    let applicableTopics = allTopics.filter(t => 
      t.exams.some(ex => ex.toLowerCase().includes(exam.toLowerCase()))
    );

    if (difficulty !== 'All') {
      applicableTopics = applicableTopics.filter(t => t.difficulty === difficulty);
    }

    // Sort: Beginner -> Intermediate -> Advanced
    const order = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
    applicableTopics.sort((a, b) => order[a.difficulty] - order[b.difficulty]);
    
    setPlan(applicableTopics);
    setPlanGenerated(true);
  };

  return (
    <div>
      <h1 className="page-title">Build My Preparation Plan</h1>
      <p className="page-subtitle">Create a customized, structured study plan tailored to your target exam and timeline.</p>

      {!planGenerated ? (
        <form onSubmit={generatePlan} className="stat-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Target Exam</label>
            <select className="filter-select" style={{ width: '100%' }} value={exam} onChange={(e) => setExam(e.target.value)} required>
              <option value="" disabled>Select your primary exam</option>
              {examCategories.map(cat => (
                <option key={cat.id} value={cat.name === 'State Government' ? 'State' : cat.name === 'Software Placements' ? 'Software' : cat.name}>
                  {cat.name} Category
                </option>
              ))}
              <option value="UPSC CSAT">UPSC CSAT</option>
              <option value="SSC CGL">SSC CGL</option>
            </select>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Available Study Time</label>
            <select className="filter-select" style={{ width: '100%' }} value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="1">1 Month (Crash Course)</option>
              <option value="3">3 Months (Recommended)</option>
              <option value="6">6+ Months (Comprehensive)</option>
            </select>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Current Level</label>
            <select className="filter-select" style={{ width: '100%' }} value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="All">Start from Scratch (All)</option>
              <option value="Intermediate">Intermediate & Advanced Only</option>
              <option value="Advanced">Advanced Only</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Generate Smart Plan
          </button>
        </form>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2>Your Custom {exam} Plan</h2>
            <button className="btn btn-outline" onClick={() => setPlanGenerated(false)}>Edit Parameters</button>
          </div>
          
          {plan.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>No topics found matching your criteria. Try adjusting the difficulty.</p>
          ) : (
            <div className="timeline">
              {plan.map((topic, index) => (
                <div key={topic.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="stat-card" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: '600' }}>Step {index + 1}</span>
                      <span className="badge" style={{ backgroundColor: '#f3f4f6' }}>{topic.difficulty}</span>
                    </div>
                    <Link to={`/topic/${topic.id}`} className="topic-name" style={{ fontSize: '1.125rem' }}>
                      {topic.name}
                    </Link>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      Subject: {topic.subject} &bull; Category: {topic.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudyPlan;
