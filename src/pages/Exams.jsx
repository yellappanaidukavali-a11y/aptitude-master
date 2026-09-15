import React from 'react';
import { examCategories } from '../data/exams';
import { companyCategories } from '../data/companies';
import { BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Exams = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Exams & Placements Covered</h1>
      <p className="page-subtitle">Select an exam or company to see the detailed preparation path.</p>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>Competitive Exams</h2>
        <div className="dashboard-grid">
          {examCategories.map((category) => (
            <div key={category.id} className="stat-card" style={{ padding: '1.5rem' }}>
              <div className="card-header" style={{ marginBottom: '1rem' }}>
                <span className="card-title">{category.name}</span>
                <BookOpen className="card-icon" size={24} />
              </div>
              {category.description && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                  {category.description}
                </p>
              )}
              
              <Link 
                to={`/exam/${category.id === 'upsc' ? 'upsc-csat' : category.id === 'ssc' ? 'ssc-cgl' : category.id === 'banking' ? 'sbi-po' : 'rrb-ntpc'}`} 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                View {category.name} Preparation
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--secondary)' }}>Software Placements</h2>
        <div className="dashboard-grid">
          {companyCategories.map((company) => (
            <div key={company.id} className="stat-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--secondary)' }}>
              <div className="card-header" style={{ marginBottom: '1rem' }}>
                <span className="card-title">{company.name}</span>
                <Briefcase className="card-icon" size={24} style={{ color: 'var(--secondary)', backgroundColor: '#d1fae5' }} />
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Comprehensive placement preparation including aptitude, reasoning, and coding for {company.name}.
              </p>
              
              <Link 
                to={`/company/${company.id}`} 
                className="btn btn-outline" 
                style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--secondary)', color: 'var(--secondary)' }}
              >
                Explore {company.name} Path
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exams;
