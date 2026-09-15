import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { examsData } from '../data/exams';
import { BookOpen, Target, Clock, ArrowRight, BarChart2 } from 'lucide-react';

const ExamDashboard = () => {
  const { examId } = useParams();
  const exam = examsData.find(e => e.id === examId);

  if (!exam) {
    return <div className="page-container">Exam not found.</div>;
  }

  return (
    <div className="page-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="/exams" style={{ color: 'var(--primary)', fontWeight: '500' }}>← Back to Exams</Link>
      </div>
      
      <h1 className="page-title">{exam.name} Preparation</h1>
      <p className="page-subtitle">{exam.overview}</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="stat-card">
          <div className="card-header">
            <span className="card-title">Eligibility</span>
            <Target className="card-icon" size={24} />
          </div>
          <p>{exam.eligibility}</p>
        </div>
        <div className="stat-card">
          <div className="card-header">
            <span className="card-title">Time & Marks</span>
            <Clock className="card-icon" size={24} />
          </div>
          <p>Time: {exam.totalTime}</p>
          <p>Marks: {exam.totalMarks}</p>
        </div>
        <div className="stat-card">
          <div className="card-header">
            <span className="card-title">Difficulty</span>
            <BarChart2 className="card-icon" size={24} />
          </div>
          <p>Level: {exam.difficulty}</p>
        </div>
      </div>

      <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Exam Pattern</h2>
      <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)', marginBottom: '3rem' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
              <th style={{ padding: '0.75rem' }}>Section</th>
              <th style={{ padding: '0.75rem' }}>Questions</th>
              <th style={{ padding: '0.75rem' }}>Marks</th>
            </tr>
          </thead>
          <tbody>
            {exam.examPattern.map((pattern, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '0.75rem', fontWeight: '500' }}>{pattern.section}</td>
                <td style={{ padding: '0.75rem' }}>{pattern.questions}</td>
                <td style={{ padding: '0.75rem' }}>{pattern.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Syllabus & Practice</h2>
      <div className="dashboard-grid" style={{ marginBottom: '3rem' }}>
        {exam.subjects.map((subject, idx) => (
          <Link key={idx} to={`/subject/${encodeURIComponent(subject)}`} className="stat-card" style={{ textDecoration: 'none' }}>
            <div className="card-header">
              <span className="card-title">{subject}</span>
              <BookOpen className="card-icon" size={24} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Detailed topics and practice questions for {subject}.</p>
            <div style={{ marginTop: '1rem', color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              View Syllabus <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>

      <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Preparation Strategy</h2>
      <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
        <p style={{ color: '#166534', lineHeight: '1.6' }}>{exam.preparationStrategy}</p>
      </div>

    </div>
  );
};

export default ExamDashboard;
