import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { companiesData } from '../data/companies';
import { Briefcase, Layers, Code, PlayCircle, BookOpen } from 'lucide-react';

const CompanyDashboard = () => {
  const { companyId } = useParams();
  const company = companiesData.find(c => c.id === companyId);

  if (!company) {
    return <div className="page-container">Company not found.</div>;
  }

  return (
    <div className="page-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="/exams" style={{ color: 'var(--primary)', fontWeight: '500' }}>← Back to Placements</Link>
      </div>
      
      <h1 className="page-title">{company.name} Placement Preparation</h1>
      <p className="page-subtitle">{company.overview}</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="stat-card">
          <div className="card-header">
            <span className="card-title">Selection Stages</span>
            <Layers className="card-icon" size={24} />
          </div>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', listStyleType: 'decimal' }}>
            {company.selectionStages.map((stage, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>{stage}</li>
            ))}
          </ul>
        </div>
        <div className="stat-card">
          <div className="card-header">
            <span className="card-title">Exam Pattern</span>
            <Briefcase className="card-icon" size={24} />
          </div>
          <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {company.examPattern.map((pattern, idx) => (
              <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span>{pattern.section}</span>
                <span style={{ fontWeight: '500' }}>{pattern.questions} Q ({pattern.time})</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="stat-card">
          <div className="card-header">
            <span className="card-title">Preparation Strategy</span>
            <Code className="card-icon" size={24} />
          </div>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{company.preparationStrategy}</p>
        </div>
      </div>

      <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Syllabus & Practice Areas</h2>
      <div className="dashboard-grid" style={{ marginBottom: '3rem' }}>
        {company.subjects.map((subject, idx) => (
          <Link key={idx} to={`/subject/${encodeURIComponent(subject)}`} className="stat-card" style={{ textDecoration: 'none' }}>
            <div className="card-header">
              <span className="card-title">{subject}</span>
              <BookOpen className="card-icon" size={24} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Core preparation for {subject} based on {company.name} patterns.</p>
          </Link>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          <PlayCircle size={24} /> Start {company.name} Full Mock Test
        </button>
      </div>
    </div>
  );
};

export default CompanyDashboard;
