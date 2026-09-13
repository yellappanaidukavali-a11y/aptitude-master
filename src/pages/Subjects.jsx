import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { syllabusData } from '../data/syllabus';
import { useProgress } from '../context/ProgressContext';
import { Check, ArrowRight } from 'lucide-react';

const Subjects = () => {
  const { subjectName } = useParams();
  const { completedTopics, toggleTopic } = useProgress();
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  const subject = syllabusData.find((s) => s.subject === subjectName);

  if (!subject) {
    return (
      <div>
        <h1 className="page-title">Subject Not Found</h1>
        <p className="page-subtitle">The requested subject "{subjectName}" does not exist.</p>
      </div>
    );
  }

  const handleDifficultyFilter = (e) => {
    setFilterDifficulty(e.target.value);
  };

  const getDifficultyColor = (diff) => {
    switch (diff.toLowerCase()) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <div>
      <h1 className="page-title">{subject.subject}</h1>
      <p className="page-subtitle">Complete syllabus and topics for {subject.subject}</p>

      <div className="filter-bar">
        <select className="filter-select" value={filterDifficulty} onChange={handleDifficultyFilter}>
          <option value="All">All Difficulties</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {subject.categories.map((category) => {
          const filteredTopics = category.topics.filter(t => 
            filterDifficulty === 'All' || t.difficulty === filterDifficulty
          );
          
          if (filteredTopics.length === 0) return null;

          return (
            <div key={category.name}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                {category.name}
              </h2>
              <div className="topic-list">
                {filteredTopics.map((topic) => {
                  const isCompleted = completedTopics.includes(topic.id);
                  return (
                    <div key={topic.id} className="topic-item">
                      <div className="topic-info">
                        <Link to={`/topic/${topic.id}`} className="topic-name">
                          {topic.name}
                        </Link>
                        <div className="topic-meta">
                          <span className={`badge ${getDifficultyColor(topic.difficulty)}`}>
                            {topic.difficulty}
                          </span>
                          <span style={{ fontSize: '0.8rem' }}>
                            Useful for: {topic.exams.slice(0, 3).join(', ')}{topic.exams.length > 3 ? '...' : ''}
                          </span>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <label className="checkbox-wrapper">
                          <input 
                            type="checkbox" 
                            className="checkbox-input"
                            checked={isCompleted}
                            onChange={() => toggleTopic(topic.id)}
                          />
                          <span style={{ fontSize: '0.875rem', color: isCompleted ? 'var(--secondary)' : 'var(--text-muted)' }}>
                            {isCompleted ? 'Completed' : 'Mark Done'}
                          </span>
                        </label>
                        <Link to={`/topic/${topic.id}`} className="btn btn-outline" style={{ padding: '0.4rem 0.75rem' }}>
                          Study <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subjects;
