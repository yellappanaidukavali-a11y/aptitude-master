export const questionsData = [
  {
    id: "q1",
    subject: "Quantitative Aptitude",
    topic: "Percentages",
    difficulty: "Beginner",
    question: "If 20% of a = b, then b% of 20 is the same as:",
    options: ["4% of a", "5% of a", "20% of a", "None of these"],
    correctAnswer: 0, // index of the option
    explanation: "b% of 20 = (b/100) * 20 = b/5. We know b = 20a/100 = a/5. So b/5 = (a/5)/5 = a/25 = 4/100 * a = 4% of a."
  },
  {
    id: "q2",
    subject: "Reasoning",
    topic: "Blood Relations",
    difficulty: "Intermediate",
    question: "Pointing to a photograph of a boy, Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
    options: ["Brother", "Uncle", "Cousin", "Father"],
    correctAnswer: 3,
    explanation: "The 'only son of my mother' is Suresh himself. The boy in the photograph is the son of Suresh. Therefore, Suresh is the father of the boy."
  },
  {
    id: "q3",
    subject: "English / Verbal Ability",
    topic: "Grammar",
    difficulty: "Intermediate",
    question: "Choose the correct sentence:",
    options: ["He go to school every day.", "He goes to school every day.", "He going to school every day.", "He gone to school every day."],
    correctAnswer: 1,
    explanation: "For the third-person singular (He) in the simple present tense, the verb must take an 's' or 'es'. Thus, 'goes' is correct."
  },
  {
    id: "q4",
    subject: "Computer Aptitude",
    topic: "Keyboard Shortcuts",
    difficulty: "Beginner",
    question: "What is the shortcut key to undo the last action in Windows?",
    options: ["Ctrl + X", "Ctrl + Y", "Ctrl + Z", "Ctrl + C"],
    correctAnswer: 2,
    explanation: "Ctrl + Z is the standard shortcut to undo an action."
  },
  {
    id: "q5",
    subject: "Quantitative Aptitude",
    topic: "Time and Work",
    difficulty: "Intermediate",
    question: "A can do a piece of work in 10 days and B can do it in 15 days. If they work together, in how many days will they finish the work?",
    options: ["5 days", "6 days", "8 days", "9 days"],
    correctAnswer: 1,
    explanation: "A's 1 day work = 1/10. B's 1 day work = 1/15. Together 1 day work = 1/10 + 1/15 = 5/30 = 1/6. Total days = 6."
  },
  {
    id: "q6",
    subject: "Software Placement Aptitude",
    topic: "Basic Coding",
    difficulty: "Intermediate",
    question: "What is the time complexity of binary search?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(log n)"],
    correctAnswer: 3,
    explanation: "Binary search repeatedly divides the search interval in half. Thus, its time complexity is O(log n)."
  }
];
