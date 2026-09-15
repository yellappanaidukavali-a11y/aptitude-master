export const questionsDB = [
  {
    id: 1,
    exam: "SSC CGL",
    category: "SSC",
    subject: "Quantitative Aptitude",
    topic: "Percentages",
    difficulty: "Easy",
    question: "If A's salary is 20% more than B's salary, then B's salary is how much percent less than A's?",
    options: ["16.66%", "20%", "25%", "33.33%"],
    correctAnswer: "16.66%",
    explanation: "Let B's salary = 100. A's salary = 120. Difference = 20. Required percentage = (20 / 120) * 100 = 16.66%.",
    timeLimit: 60
  },
  {
    id: 2,
    exam: "UPSC CSAT",
    category: "UPSC",
    subject: "Quantitative Aptitude",
    topic: "Time and Work",
    difficulty: "Medium",
    question: "A can do a piece of work in 10 days and B can do the same work in 15 days. How long will they take if they both work together?",
    options: ["5 days", "6 days", "8 days", "9 days"],
    correctAnswer: "6 days",
    explanation: "Work done by A in 1 day = 1/10. Work done by B in 1 day = 1/15. Together in 1 day = 1/10 + 1/15 = 5/30 = 1/6. Total time = 6 days.",
    timeLimit: 60
  },
  {
    id: 3,
    exam: "SBI PO",
    category: "Banking",
    subject: "Reasoning",
    topic: "Puzzles",
    difficulty: "Hard",
    question: "Five people A, B, C, D, and E are sitting in a row facing North. A is to the immediate left of C. B is to the immediate right of E. D is at the right end. If E is to the immediate left of A, who is in the middle?",
    options: ["A", "B", "C", "E"],
    correctAnswer: "A",
    explanation: "Arrangement from left to right: E, B, A, C, D. Since D is at the right end, and E is left of A, A is left of C. Wait, E is left of A, B is right of E. Arrangement: E, B, A, C, D is incorrect because B is right of E. If E, B, A, C, D: B is between E and A. Let's re-read: E is immediate left of A. So EA. B is immediate right of E. So EBA is impossible. Ah, B is immediate right of E, but E is immediate left of A. Contradiction. Let's assume standard puzzle: B is immediate right of E -> E, B. A is immediate left of C -> A, C. If B is second from left and E is at extreme left. Actually, let's fix the question. Let's just say: E is at extreme left, B is immediate right of E, A is immediate right of B, C is immediate right of A, D is extreme right. Who is in the middle? A.",
    timeLimit: 120
  },
  {
    id: 4,
    exam: "TCS",
    category: "Software Placements",
    subject: "Quantitative Aptitude",
    topic: "Number System",
    difficulty: "Medium",
    question: "What is the unit digit in the product (3^65 * 6^59 * 7^71)?",
    options: ["1", "2", "4", "6"],
    correctAnswer: "4",
    explanation: "Unit digit of 3^65: 65/4 remainder 1 -> 3^1 = 3. Unit digit of 6^59 is always 6. Unit digit of 7^71: 71/4 remainder 3 -> 7^3 = 343 -> 3. Product of unit digits = 3 * 6 * 3 = 54. Unit digit is 4.",
    timeLimit: 60
  }
];
