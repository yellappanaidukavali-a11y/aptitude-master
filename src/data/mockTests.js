export const mockTestsDB = [
  {
    id: "mt-ssc-cgl-1",
    title: "SSC CGL Tier-1 Mock Test 1",
    exam: "SSC CGL",
    category: "SSC",
    duration: 60, // minutes
    totalQuestions: 100,
    difficulty: "Medium",
    sections: [
      { name: "Quantitative Aptitude", questionsCount: 25 },
      { name: "Reasoning", questionsCount: 25 },
      { name: "English", questionsCount: 25 },
      { name: "General Awareness", questionsCount: 25 }
    ]
  },
  {
    id: "mt-tcs-1",
    title: "TCS NQT Full Mock Test",
    exam: "TCS",
    category: "Software Placements",
    duration: 90, // minutes
    totalQuestions: 65,
    difficulty: "Medium",
    sections: [
      { name: "Numerical Ability", questionsCount: 20 },
      { name: "Verbal Ability", questionsCount: 24 },
      { name: "Reasoning Ability", questionsCount: 21 }
    ]
  }
];
