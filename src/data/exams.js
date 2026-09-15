export const examsData = [
  {
    id: "upsc-csat",
    category: "UPSC",
    name: "UPSC CSAT",
    overview: "The Civil Services Aptitude Test (CSAT) is the General Studies Paper-II of the UPSC Civil Services Preliminary Examination. It is a qualifying paper, requiring a minimum of 33% (66 marks out of 200).",
    eligibility: "Any graduate from a recognized university.",
    examPattern: [
      { section: "Quantitative Aptitude", questions: "30-35", marks: "75-87.5" },
      { section: "Logical Reasoning & Analytical Ability", questions: "20-25", marks: "50-62.5" },
      { section: "Reading Comprehension", questions: "25-30", marks: "62.5-75" }
    ],
    totalTime: "120 minutes (2 Hours)",
    totalMarks: "200 Marks",
    difficulty: "Moderate to Hard",
    subjects: ["Quantitative Aptitude", "Reasoning", "English"],
    preparationStrategy: "Focus primarily on reading comprehension accuracy, basic numeracy up to Class X level, and logical puzzle solving. Since it is qualifying, aim to securely attempt 50-55 questions."
  },
  {
    id: "ssc-cgl",
    category: "SSC",
    name: "SSC CGL",
    overview: "The Staff Selection Commission Combined Graduate Level (SSC CGL) exam is conducted to recruit staff to various posts in ministries, departments and organisations of the Government of India.",
    eligibility: "Graduation in any discipline.",
    examPattern: [
      { section: "General Intelligence & Reasoning", questions: "25", marks: "50" },
      { section: "General Awareness", questions: "25", marks: "50" },
      { section: "Quantitative Aptitude", questions: "25", marks: "50" },
      { section: "English Comprehension", questions: "25", marks: "50" }
    ],
    totalTime: "60 minutes (Tier-I)",
    totalMarks: "200 Marks",
    difficulty: "Moderate",
    subjects: ["Quantitative Aptitude", "Reasoning", "English", "General Awareness"],
    preparationStrategy: "Speed and accuracy are crucial. Focus heavily on advanced math (Trigonometry, Geometry, Algebra) and practice previous year question papers extensively."
  },
  {
    id: "sbi-po",
    category: "Banking",
    name: "SBI PO",
    overview: "The State Bank of India Probationary Officer (SBI PO) is one of the most coveted banking exams in India.",
    eligibility: "Graduation in any discipline.",
    examPattern: [
      { section: "English Language", questions: "30", marks: "30" },
      { section: "Quantitative Aptitude", questions: "35", marks: "35" },
      { section: "Reasoning Ability", questions: "35", marks: "35" }
    ],
    totalTime: "60 minutes (20 mins per section)",
    totalMarks: "100 Marks",
    difficulty: "Hard",
    subjects: ["Quantitative Aptitude", "Reasoning", "English"],
    preparationStrategy: "Banking exams prioritize Data Interpretation and Puzzles. Practice calculation speed, approximation, and high-level reasoning sets."
  },
  {
    id: "rrb-ntpc",
    category: "Railways",
    name: "RRB NTPC",
    overview: "Railway Recruitment Board Non-Technical Popular Categories (NTPC) for various auxiliary posts in Indian Railways.",
    eligibility: "12th Pass or Graduate depending on post.",
    examPattern: [
      { section: "General Awareness", questions: "40", marks: "40" },
      { section: "Mathematics", questions: "30", marks: "30" },
      { section: "General Intelligence & Reasoning", questions: "30", marks: "30" }
    ],
    totalTime: "90 minutes",
    totalMarks: "100 Marks",
    difficulty: "Easy to Moderate",
    subjects: ["Quantitative Aptitude", "Reasoning", "General Awareness"],
    preparationStrategy: "Focus on arithmetic, basic science, and current affairs. The math section is less advanced compared to SSC CGL."
  }
];

export const examCategories = [
  { id: "upsc", name: "UPSC", description: "Civil Services, CAPF, CDS, NDA" },
  { id: "ssc", name: "SSC", description: "CGL, CHSL, MTS, CPO, GD" },
  { id: "banking", name: "Banking", description: "SBI PO/Clerk, IBPS PO/Clerk, RBI" },
  { id: "railways", name: "Railways", description: "NTPC, Group D, ALP, JE" },
  { id: "insurance", name: "Insurance", description: "LIC, NIACL, UIIC, OICL" },
  { id: "defence", name: "Defence", description: "NDA, CDS, AFCAT, CAPF" }
];
