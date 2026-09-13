export const formulasData = [
  {
    category: "Arithmetic",
    formulas: [
      { name: "Average", formula: "Sum of observations / Number of observations" },
      { name: "Percentage", formula: "(Value / Total Value) × 100" },
      { name: "Ratio", formula: "a : b = a / b" },
      { name: "Proportion", formula: "If a:b :: c:d, then ad = bc" },
    ],
  },
  {
    category: "Algebra",
    formulas: [
      { name: "(a + b)²", formula: "a² + b² + 2ab" },
      { name: "(a - b)²", formula: "a² + b² - 2ab" },
      { name: "a² - b²", formula: "(a - b)(a + b)" },
      { name: "(a + b)³", formula: "a³ + b³ + 3ab(a + b)" },
      { name: "(a - b)³", formula: "a³ - b³ - 3ab(a - b)" },
      { name: "a³ + b³", formula: "(a + b)(a² - ab + b²)" },
      { name: "a³ - b³", formula: "(a - b)(a² + ab + b²)" },
      { name: "Quadratic Equation Roots", formula: "x = [-b ± √(b² - 4ac)] / 2a" },
    ],
  },
  {
    category: "Geometry",
    formulas: [
      { name: "Pythagoras Theorem", formula: "Hypotenuse² = Base² + Perpendicular²" },
      { name: "Sum of Angles in Triangle", formula: "180°" },
      { name: "Sum of Interior Angles of Polygon", formula: "(n - 2) × 180° (where n is number of sides)" },
    ],
  },
  {
    category: "Mensuration",
    formulas: [
      { name: "Area of Rectangle", formula: "Length × Breadth" },
      { name: "Perimeter of Rectangle", formula: "2(Length + Breadth)" },
      { name: "Area of Square", formula: "Side²" },
      { name: "Area of Triangle", formula: "½ × Base × Height" },
      { name: "Area of Circle", formula: "πr²" },
      { name: "Circumference of Circle", formula: "2πr" },
      { name: "Volume of Cylinder", formula: "πr²h" },
      { name: "Volume of Cone", formula: "⅓πr²h" },
      { name: "Volume of Sphere", formula: "4/3 πr³" },
    ],
  },
  {
    category: "Time & Work",
    formulas: [
      { name: "Work Done", formula: "Number of Days × Work done per day" },
      { name: "Efficiency", formula: "1 / Time Taken" },
      { name: "MDH Rule", formula: "(M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2" },
    ],
  },
  {
    category: "Time & Distance",
    formulas: [
      { name: "Speed", formula: "Distance / Time" },
      { name: "km/hr to m/s", formula: "Multiply by 5/18" },
      { name: "m/s to km/hr", formula: "Multiply by 18/5" },
      { name: "Average Speed (equal distance)", formula: "2xy / (x + y)" },
      { name: "Relative Speed (same direction)", formula: "S1 - S2" },
      { name: "Relative Speed (opposite direction)", formula: "S1 + S2" },
    ],
  },
  {
    category: "Profit & Loss",
    formulas: [
      { name: "Profit", formula: "Selling Price (SP) - Cost Price (CP)" },
      { name: "Loss", formula: "Cost Price (CP) - Selling Price (SP)" },
      { name: "Profit %", formula: "(Profit / CP) × 100" },
      { name: "Loss %", formula: "(Loss / CP) × 100" },
      { name: "Discount", formula: "Marked Price (MP) - Selling Price (SP)" },
      { name: "Discount %", formula: "(Discount / MP) × 100" },
    ],
  },
  {
    category: "SI & CI",
    formulas: [
      { name: "Simple Interest (SI)", formula: "(P × R × T) / 100" },
      { name: "Amount (SI)", formula: "P + SI" },
      { name: "Compound Interest (CI)", formula: "Amount - Principal" },
      { name: "Amount (CI)", formula: "P(1 + R/100)^T" },
    ],
  },
  {
    category: "Probability & Permutation",
    formulas: [
      { name: "Probability", formula: "Favorable Outcomes / Total Outcomes" },
      { name: "Permutation (nPr)", formula: "n! / (n - r)!" },
      { name: "Combination (nCr)", formula: "n! / [r!(n - r)!]" },
    ],
  }
];
