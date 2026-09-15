export const companiesData = [
  {
    id: "tcs",
    name: "TCS (Tata Consultancy Services)",
    overview: "TCS conducts National Qualifier Tests (NQT) for hiring freshers. It tests cognitive abilities along with technical programming skills.",
    selectionStages: ["Online Aptitude & Coding Test", "Technical Interview", "HR Interview"],
    examPattern: [
      { section: "Numerical Ability", questions: "20", time: "25 mins" },
      { section: "Verbal Ability", questions: "24", time: "30 mins" },
      { section: "Reasoning Ability", questions: "30", time: "50 mins" },
      { section: "Programming Logic", questions: "10", time: "15 mins" },
      { section: "Coding", questions: "2", time: "45 mins" }
    ],
    difficulty: "Moderate",
    subjects: ["Quantitative Aptitude", "Reasoning", "English", "Coding Aptitude"],
    topics: ["Percentages", "Time and Work", "Number Series", "Reading Comprehension", "Arrays", "Strings"],
    preparationStrategy: "Focus on speed for cognitive sections. For coding, practice basic data structures, arrays, and string manipulations in C, C++, Java, or Python."
  },
  {
    id: "infosys",
    name: "Infosys",
    overview: "Infosys placement process heavily emphasizes logical reasoning and mathematical puzzles.",
    selectionStages: ["Online Aptitude Test", "Technical Interview", "HR Interview"],
    examPattern: [
      { section: "Reasoning Ability", questions: "15", time: "25 mins" },
      { section: "Mathematical Ability", questions: "10", time: "35 mins" },
      { section: "Verbal Ability", questions: "20", time: "20 mins" },
      { section: "Pseudocode", questions: "5", time: "10 mins" },
      { section: "Puzzle Solving", questions: "4", time: "10 mins" }
    ],
    difficulty: "Moderate to Hard",
    subjects: ["Quantitative Aptitude", "Reasoning", "English", "Computer Aptitude"],
    topics: ["Cryptarithmetic", "Syllogism", "Data Sufficiency", "Permutation and Combination", "Pseudocode"],
    preparationStrategy: "Infosys is known for its challenging reasoning and mathematical ability sections. Practice cryptarithmetic and data sufficiency thoroughly."
  }
];

export const companyCategories = [
  { id: "tcs", name: "TCS" },
  { id: "infosys", name: "Infosys" },
  { id: "wipro", name: "Wipro" },
  { id: "accenture", name: "Accenture" },
  { id: "cognizant", name: "Cognizant" },
  { id: "capgemini", name: "Capgemini" },
  { id: "deloitte", name: "Deloitte" },
  { id: "product-companies", name: "Product Companies" }
];
