import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import { Layout } from './components/Layout';

// Page Placeholders
import Dashboard from './pages/Dashboard';
import Exams from './pages/Exams';
import Subjects from './pages/Subjects';
import Topic from './pages/Topic';
import Search from './pages/Search';
import Practice from './pages/Practice';
import FormulaBook from './pages/FormulaBook';
import StudyPlan from './pages/StudyPlan';

function App() {
  return (
    <ProgressProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/subject/:subjectName" element={<Subjects />} />
            <Route path="/topic/:topicId" element={<Topic />} />
            <Route path="/search" element={<Search />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/formulas" element={<FormulaBook />} />
            <Route path="/study-plan" element={<StudyPlan />} />
            <Route path="/progress" element={<Dashboard />} /> {/* Alias to dashboard for now */}
          </Routes>
        </Layout>
      </Router>
    </ProgressProvider>
  );
}

export default App;
