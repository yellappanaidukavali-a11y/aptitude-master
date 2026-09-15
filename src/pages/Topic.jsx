import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { CheckCircle, Info, Target, FileText } from 'lucide-react';
import { topicContentDB } from '../data/topicContent';

const Topic = () => {
  const { topicId } = useParams();
  const { allTopics, completedTopics, toggleTopic } = useProgress();

  const topic = allTopics.find(t => t.id === topicId);
  const contentData = topicContentDB[topicId];

  if (!topic) {
    return (
      <div>
        <h1 className="page-title">Topic Not Found</h1>
        <p className="page-subtitle">We couldn't find the requested topic details.</p>
      </div>
    );
  }

  const isCompleted = completedTopics.includes(topic.id);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>{topic.name}</h1>
        {isCompleted && <CheckCircle color="var(--secondary)" />}
      </div>
      <p className="page-subtitle">
        <Link to={`/subject/${topic.subject}`} style={{ color: 'var(--primary)' }}>{topic.subject}</Link> 
        &nbsp;&bull;&nbsp; {topic.category}
      </p>

      <div className="stat-card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Difficulty</span>
            <span style={{ fontWeight: '600' }}>{topic.difficulty}</span>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Applicable Exams</span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
              {topic.exams.map((exam, i) => (
                <span key={i} className="badge" style={{ backgroundColor: '#f3f4f6' }}>{exam}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label className="checkbox-wrapper" style={{ padding: '0.75rem 1.5rem', backgroundColor: isCompleted ? '#d1fae5' : '#f3f4f6', borderRadius: 'var(--radius-md)' }}>
              <input 
                type="checkbox" 
                className="checkbox-input"
                checked={isCompleted}
                onChange={() => toggleTopic(topic.id)}
              />
              <span style={{ fontWeight: '600', color: isCompleted ? '#059669' : 'inherit' }}>
                {isCompleted ? 'Completed' : 'Mark as Completed'}
              </span>
            </label>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        <div className="stat-card">
          <div className="card-header">
            <span className="card-title">Concepts to Learn</span>
            <Info className="card-icon" size={24} />
          </div>
          <p style={{ color: 'var(--text-main)', lineHeight: '1.6', marginTop: '0.5rem' }}>
            {contentData ? contentData.content : `Learn the fundamental concepts of ${topic.name}. This section covers definitions, core logic, and general application of these principles across various problem types in competitive exams.`}
          </p>
        </div>

        {contentData && contentData.formulas && contentData.formulas.length > 0 && (
          <div className="stat-card">
            <div className="card-header">
              <span className="card-title">Important Formulas</span>
              <FileText className="card-icon" size={24} />
            </div>
            <div className="formula-list" style={{ marginTop: '1rem' }}>
              {contentData.formulas.map((f, i) => (
                <div key={i} className="formula-item" style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)' }}>
                  <span className="formula-name" style={{ fontWeight: '600' }}>{f.name}:</span>
                  <span className="formula-val" style={{ marginLeft: '1rem' }}>{f.formula}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {contentData && contentData.tricks && contentData.tricks.length > 0 && (
          <div className="stat-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <div className="card-header">
              <span className="card-title">Shortcuts & Tricks</span>
              <FileText className="card-icon" size={24} style={{ color: 'var(--primary)', backgroundColor: '#e0e7ff' }} />
            </div>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: '1.8' }}>
              {contentData.tricks.map((trick, i) => (
                <li key={i}>{trick}</li>
              ))}
            </ul>
          </div>
        )}

        {contentData && contentData.examples && contentData.examples.length > 0 && (
          <div className="stat-card">
            <div className="card-header">
              <span className="card-title">Solved Examples</span>
              <Target className="card-icon" size={24} />
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contentData.examples.map((ex, i) => (
                <div key={i} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <div style={{ padding: '1rem', backgroundColor: '#f3f4f6', fontWeight: '500' }}>
                    Q: {ex.q}
                  </div>
                  <div style={{ padding: '1rem', backgroundColor: 'white' }}>
                    <strong>Solution:</strong> {ex.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!contentData && (
          <div className="stat-card">
            <div className="card-header">
              <span className="card-title">Important Formulas / Rules</span>
              <FileText className="card-icon" size={24} />
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Reference the Formula Book for specific shortcuts and theorems related to this topic. Make sure you memorize the standard rules.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <Link to="/formulas" className="btn btn-outline">Go to Formula Book</Link>
            </div>
          </div>
        )}

        <div className="stat-card">
          <div className="card-header">
            <span className="card-title">Practice & Previous Year Questions</span>
            <Target className="card-icon" size={24} />
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Apply what you've learned. Test your speed and accuracy using our curated question bank that mimics the actual exam patterns.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/practice" className="btn btn-primary">Start Practice Session</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
