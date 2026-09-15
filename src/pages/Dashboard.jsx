import React from 'react';
import { examCategories } from '../data/exams';
import { syllabusData, getAllTopics } from '../data/syllabus';
import { useProgress } from '../context/ProgressContext';
import { BookOpen, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { completedTopics, allTopics, getOverallProgress } = useProgress();

  const getExamStats = (examNameKeyword) => {
    // Filter topics that have any exam containing the keyword (case-insensitive for broad matching, or precise matching)
    const applicableTopics = allTopics.filter(t => 
      t.exams.some(e => e.toLowerCase().includes(examNameKeyword.toLowerCase()))
    );
    
    const total = applicableTopics.length;
    const completed = applicableTopics.filter(t => completedTopics.includes(t.id)).length;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, progress };
  };

  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">Welcome back! Track your aptitude preparation progress.</p>

      <div className="stat-card" style={{ marginBottom: '2rem', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Overall Progress</h2>
          <div className="progress-container">
            <div className="progress-text">
              <span>{completedTopics.length} of {allTopics.length} Topics Completed</span>
              <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{getOverallProgress()}%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${getOverallProgress()}%` }}></div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/study-plan" className="btn btn-primary">
            <Target size={18} /> My Study Plan
          </Link>
          <Link to="/practice" className="btn btn-outline">
            <Award size={18} /> Practice Now
          </Link>
        </div>
      </div>

      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '2rem' }}>Exam Categories</h2>
      <div className="dashboard-grid">
        {examCategories.map((category) => {
          // Use the category name (or a specific keyword) to find stats
          // E.g., for UPSC, match "UPSC". For Banking, match "Banking".
          const searchKey = category.name === 'State Government' ? 'State' : 
                            category.name === 'Software Placements' ? 'Software' : category.name;
          
          const stats = getExamStats(searchKey);
          
          return (
            <div key={category.id} className="stat-card">
              <div className="card-header">
                <span className="card-title">{category.name}</span>
                <BookOpen className="card-icon" size={24} />
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                {category.description}
              </p>
              <div className="progress-container">
                <div className="progress-text">
                  <span>{stats.completed} / {stats.total} Topics</span>
                  <span>{stats.progress}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${stats.progress}%` }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
