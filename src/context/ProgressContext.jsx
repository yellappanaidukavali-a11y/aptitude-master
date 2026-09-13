import React, { createContext, useContext, useState, useEffect } from 'react';
import { syllabusData, getAllTopics } from '../data/syllabus';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [completedTopics, setCompletedTopics] = useState([]);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    // Load from LocalStorage
    const stored = localStorage.getItem('aptitude_master_progress');
    if (stored) {
      try {
        setCompletedTopics(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse progress from local storage", e);
      }
    }
    setAllTopics(getAllTopics());
  }, []);

  const markCompleted = (topicId) => {
    setCompletedTopics((prev) => {
      const updated = prev.includes(topicId) ? prev : [...prev, topicId];
      localStorage.setItem('aptitude_master_progress', JSON.stringify(updated));
      return updated;
    });
  };

  const unmarkCompleted = (topicId) => {
    setCompletedTopics((prev) => {
      const updated = prev.filter((id) => id !== topicId);
      localStorage.setItem('aptitude_master_progress', JSON.stringify(updated));
      return updated;
    });
  };

  const toggleTopic = (topicId) => {
    if (completedTopics.includes(topicId)) {
      unmarkCompleted(topicId);
    } else {
      markCompleted(topicId);
    }
  };

  const resetProgress = () => {
    setCompletedTopics([]);
    localStorage.removeItem('aptitude_master_progress');
  };

  const getOverallProgress = () => {
    if (allTopics.length === 0) return 0;
    return Math.round((completedTopics.length / allTopics.length) * 100);
  };

  const getSubjectProgress = (subjectName) => {
    const subject = syllabusData.find(s => s.subject === subjectName);
    if (!subject) return 0;
    
    let totalTopics = 0;
    let completed = 0;
    
    subject.categories.forEach(cat => {
      cat.topics.forEach(topic => {
        totalTopics++;
        if (completedTopics.includes(topic.id)) {
          completed++;
        }
      });
    });
    
    if (totalTopics === 0) return 0;
    return Math.round((completed / totalTopics) * 100);
  };
  
  const getSubjectCounts = (subjectName) => {
    const subject = syllabusData.find(s => s.subject === subjectName);
    if (!subject) return { total: 0, completed: 0 };
    
    let totalTopics = 0;
    let completed = 0;
    
    subject.categories.forEach(cat => {
      cat.topics.forEach(topic => {
        totalTopics++;
        if (completedTopics.includes(topic.id)) {
          completed++;
        }
      });
    });
    
    return { total: totalTopics, completed };
  }

  return (
    <ProgressContext.Provider value={{
      completedTopics,
      allTopics,
      markCompleted,
      unmarkCompleted,
      toggleTopic,
      resetProgress,
      getOverallProgress,
      getSubjectProgress,
      getSubjectCounts
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
