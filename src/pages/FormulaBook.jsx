import React, { useState } from 'react';
import { formulasData } from '../data/formulas';
import { Search } from 'lucide-react';

const FormulaBook = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1 className="page-title">Formula Book</h1>
      <p className="page-subtitle">Your quick reference guide for essential mathematical and reasoning formulas.</p>

      <div className="search-container" style={{ width: '100%', maxWidth: '500px', marginBottom: '2rem', border: '1px solid var(--border-color)', backgroundColor: 'white' }}>
        <Search size={20} color="var(--text-muted)" />
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search formulas or categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="formula-grid">
        {formulasData.map((category, idx) => {
          const filteredFormulas = category.formulas.filter(f => 
            f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            category.category.toLowerCase().includes(searchTerm.toLowerCase())
          );
          
          if (filteredFormulas.length === 0) return null;

          return (
            <div key={idx} className="formula-card">
              <h2 style={{ fontSize: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--primary)' }}>
                {category.category}
              </h2>
              <div className="formula-list">
                {filteredFormulas.map((f, i) => (
                  <div key={i} className="formula-item">
                    <span className="formula-name">{f.name}</span>
                    <span className="formula-val">{f.formula}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormulaBook;
