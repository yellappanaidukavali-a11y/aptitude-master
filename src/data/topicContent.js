export const topicContentDB = {
  "qa-ns-1": {
    topicId: "qa-ns-1",
    content: "Natural numbers are the set of positive integers used for counting and ordering. They start from 1 and go to infinity: {1, 2, 3, 4, ...}. They do not include zero, negative numbers, or fractions.",
    formulas: [
      { name: "Sum of first n natural numbers", formula: "S = n(n + 1) / 2" },
      { name: "Sum of squares of first n natural numbers", formula: "S = n(n + 1)(2n + 1) / 6" },
      { name: "Sum of cubes of first n natural numbers", formula: "S = [n(n + 1) / 2]²" }
    ],
    tricks: [
      "Trick 1: When asked for the sum of consecutive natural numbers starting from 1, always use the formula instead of manual addition.",
      "Trick 2: To quickly check if a number is a natural number, check if it is > 0 and has no decimal part."
    ],
    examples: [
      {
        q: "What is the sum of the first 50 natural numbers?",
        a: "Using the formula n(n+1)/2, where n = 50. Sum = 50(51)/2 = 25 * 51 = 1275."
      }
    ]
  },
  "qa-ar-5": {
    topicId: "qa-ar-5",
    content: "Percentage means 'out of 100'. It is a fraction with 100 as the denominator. Percentages are widely used in Profit & Loss, Simple Interest, and Data Interpretation.",
    formulas: [
      { name: "Percentage", formula: "(Value / Total Value) × 100" },
      { name: "Percentage Increase", formula: "(Increase in Value / Original Value) × 100" },
      { name: "Percentage Decrease", formula: "(Decrease in Value / Original Value) × 100" }
    ],
    tricks: [
      "Trick 1 (Fraction to %): Memorize standard fractions. 1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16.66%, 1/8 = 12.5%.",
      "Trick 2 (x% of y): x% of y is exactly the same as y% of x. For example, 16% of 25 is difficult, but 25% of 16 is easy (it's 1/4 of 16 = 4).",
      "Trick 3 (Successive %): If a value is increased by a% and then by b%, the net increase is (a + b + ab/100)%."
    ],
    examples: [
      {
        q: "Find 32% of 50.",
        a: "Using the swap trick: 32% of 50 = 50% of 32 = 1/2 of 32 = 16."
      },
      {
        q: "The price of an item increases from $40 to $50. What is the percentage increase?",
        a: "Increase = $10. Original = $40. % Increase = (10/40) * 100 = 1/4 * 100 = 25%."
      }
    ]
  },
  "qa-tm-1": {
    topicId: "qa-tm-1",
    content: "Time and Work problems deal with the relationship between the time taken to complete a job and the number of people working on it. The core principle is that Work = Rate × Time.",
    formulas: [
      { name: "Work Done", formula: "Number of Days × Work done per day" },
      { name: "Efficiency", formula: "1 / Time Taken (if work is constant)" },
      { name: "Together Time (A & B)", formula: "T = (A * B) / (A + B)" },
      { name: "MDH Rule", formula: "(M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2" }
    ],
    tricks: [
      "Trick 1 (LCM Method): Instead of using fractions (1/A + 1/B), assume the total work is the LCM of the individual times taken. Calculate efficiency (units/day) for each person.",
      "Trick 2: Efficiency is inversely proportional to time. If A is twice as efficient as B, A will take half the time B takes."
    ],
    examples: [
      {
        q: "A can do a piece of work in 10 days and B can do it in 15 days. How long will they take if they work together?",
        a: "LCM of 10 and 15 = 30 units (Total Work). A's efficiency = 30/10 = 3 units/day. B's efficiency = 30/15 = 2 units/day. Total efficiency = 3 + 2 = 5 units/day. Time = Total Work / Total Efficiency = 30 / 5 = 6 days."
      }
    ]
  },
  "qa-tm-4": {
    topicId: "qa-tm-4",
    content: "Time, Speed, and Distance problems involve objects in motion. The fundamental relationship is Distance = Speed × Time. These concepts are also extended to Trains and Boats.",
    formulas: [
      { name: "Distance", formula: "Speed × Time" },
      { name: "km/hr to m/s", formula: "Multiply by 5/18" },
      { name: "m/s to km/hr", formula: "Multiply by 18/5" },
      { name: "Average Speed (equal distance)", formula: "2xy / (x + y)" }
    ],
    tricks: [
      "Trick 1: Always ensure units are consistent before calculating (e.g., both in m/s or km/hr).",
      "Trick 2 (Relative Speed): If two bodies are moving in the opposite direction, their relative speed is S1 + S2. If moving in the same direction, it's |S1 - S2|."
    ],
    examples: [
      {
        q: "A person travels from A to B at 40 km/hr and returns from B to A at 60 km/hr. Find the average speed.",
        a: "Since distance is equal, Average Speed = 2xy / (x + y) = 2(40)(60) / (40 + 60) = 4800 / 100 = 48 km/hr."
      }
    ]
  },
  "qa-ar-11": {
    topicId: "qa-ar-11",
    content: "Profit and Loss involves transactions where goods are bought and sold. It determines the financial gain (profit) or loss incurred in a business deal.",
    formulas: [
      { name: "Profit", formula: "Selling Price (SP) - Cost Price (CP)" },
      { name: "Loss", formula: "Cost Price (CP) - Selling Price (SP)" },
      { name: "Profit %", formula: "(Profit / CP) × 100" },
      { name: "Loss %", formula: "(Loss / CP) × 100" }
    ],
    tricks: [
      "Trick 1: Profit and Loss percentages are always calculated on the Cost Price (CP) unless stated otherwise.",
      "Trick 2 (Dishonest Dealer): If a dealer sells goods at CP but uses a false weight, Profit % = (Error / True Value - Error) * 100."
    ],
    examples: [
      {
        q: "A man buys an article for Rs. 300 and sells it for Rs. 360. Find his profit percentage.",
        a: "CP = 300, SP = 360. Profit = 360 - 300 = 60. Profit % = (60 / 300) * 100 = 20%."
      }
    ]
  }
};
