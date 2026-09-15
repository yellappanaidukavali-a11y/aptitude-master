import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calculator, 
  BrainCircuit, 
  BookA, 
  PieChart, 
  Monitor, 
  Code, 
  FlaskConical, 
  PenTool, 
  Map, 
  TrendingUp, 
  Menu,
  X,
  Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Exams', path: '/exams', icon: BookOpen },
    { name: 'Quantitative', path: '/subject/Quantitative Aptitude', icon: Calculator },
    { name: 'Reasoning', path: '/subject/Reasoning', icon: BrainCircuit },
    { name: 'English', path: '/subject/English - Verbal Ability', icon: BookA },
    { name: 'Data Interpretation', path: '/subject/Data Interpretation & Analytical Ability', icon: PieChart },
    { name: 'Computer Aptitude', path: '/subject/Computer Aptitude', icon: Monitor },
    { name: 'Software Placements', path: '/exams', icon: Code },
    { name: 'Formula Book', path: '/formulas', icon: FlaskConical },
    { name: 'Practice', path: '/practice', icon: PenTool },
    { name: 'Study Plan', path: '/study-plan', icon: Map },
    { name: 'Progress', path: '/progress', icon: TrendingUp },
  ];

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <BookOpen className="text-primary" />
          <span>Aptitude Master</span>
          <button className="mobile-menu-btn" style={{marginLeft: 'auto'}} onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 40 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

const Header = ({ setIsOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="top-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
          <Menu size={24} color="var(--text-main)" />
        </button>
      </div>
      
      <form className="search-container" onSubmit={handleSearch}>
        <Search size={20} color="var(--text-muted)" />
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search topics, exams..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      
      <div>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          U
        </div>
      </div>
    </header>
  );
};

export const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className="main-content">
        <Header setIsOpen={setIsSidebarOpen} />
        <div className="page-container">
          {children}
        </div>
        <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}>
          <p className="disclaimer" style={{ marginTop: 0 }}>
            <strong>Disclaimer:</strong> This platform provides a consolidated preparation syllabus based on common topics found across competitive examinations and placement assessments. Exact exam patterns, eligibility, sections, marks, and syllabi can change. Always check the latest official notification of the examination you are preparing for.
          </p>
        </footer>
      </main>
    </div>
  );
};
