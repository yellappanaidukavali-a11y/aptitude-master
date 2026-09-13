import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { Search as SearchIcon, ArrowRight } from 'lucide-react';

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const Search = () => {
  const query = useQuery().get('q') || '';
  const { allTopics } = useProgress();

  const results = useMemo(() => {
    if (!query) return [];
    const lowerQ = query.toLowerCase();
    return allTopics.filter(topic => 
      topic.name.toLowerCase().includes(lowerQ) ||
      topic.subject.toLowerCase().includes(lowerQ) ||
      topic.category.toLowerCase().includes(lowerQ) ||
      topic.exams.some(e => e.toLowerCase().includes(lowerQ))
    );
  }, [query, allTopics]);

  return (
    <div>
      <h1 className="page-title">Search Results</h1>
      <p className="page-subtitle">Showing results for: <strong style={{ color: 'var(--text-main)' }}>"{query}"</strong></p>

      {results.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
          <SearchIcon size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
          <h3>No topics found</h3>
          <p>Try searching for a different keyword or exam name.</p>
        </div>
      ) : (
        <div className="topic-list">
          {results.map((topic) => (
            <div key={topic.id} className="topic-item">
              <div className="topic-info">
                <Link to={`/topic/${topic.id}`} className="topic-name">
                  {topic.name}
                </Link>
                <div className="topic-meta">
                  <span className="badge primary">{topic.subject}</span>
                  <span style={{ fontSize: '0.8rem' }}>
                    Exams: {topic.exams.slice(0, 4).join(', ')}{topic.exams.length > 4 ? '...' : ''}
                  </span>
                </div>
              </div>
              <Link to={`/topic/${topic.id}`} className="btn btn-outline" style={{ padding: '0.4rem 0.75rem' }}>
                View <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
