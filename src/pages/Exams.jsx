import React from 'react';
import { examCategories } from '../data/exams';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Exams = () => {
  return (
    <div>
      <h1 className="page-title">Exams Covered</h1>
      <p className="page-subtitle">Select an exam category to see the detailed list of applicable examinations.</p>

      <div className="dashboard-grid">
        {examCategories.map((category) => (
          <div key={category.id} className="stat-card">
            <div className="card-header">
              <span className="card-title">{category.name}</span>
              <BookOpen className="card-icon" size={24} />
            </div>
            {category.description && (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                {category.description}
              </p>
            )}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              {category.exams.map((exam, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>
                  {exam}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;
