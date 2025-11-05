
import type { ChapterPart } from './types';

export const chapterStructure: ChapterPart[] = [
  {
    part: "Introduction",
    chapters: [
      { id: "intro", title: "Introduction" }
    ]
  },
  {
    part: "Part One: Vision",
    chapters: [
      { id: "ch1", title: "Chapter 1: Start" },
      { id: "ch2", title: "Chapter 2: Define" },
      { id: "ch3", title: "Chapter 3: Learn" },
      { id: "ch4", title: "Chapter 4: Experiment" },
    ],
  },
  {
    part: "Part Two: Steer",
    chapters: [
      { id: "ch5", title: "Chapter 5: Leap" },
      { id: "ch6", title: "Chapter 6: Test" },
      { id: "ch7", title: "Chapter 7: Measure" },
      { id: "ch8", title: "Chapter 8: Pivot (or Persevere)" },
    ],
  },
  {
    part: "Part Three: Accelerate",
    chapters: [
      { id: "ch9", title: "Chapter 9: Batch" },
      { id: "ch10", title: "Chapter 10: Grow" },
      { id: "ch11", title: "Chapter 11: Adapt" },
      { id: "ch12", title: "Chapter 12: Innovate" },
    ],
  },
   {
    part: "Conclusion",
    chapters: [
      { id: "epilogue", title: "Epilogue: Waste Not" },
      { id: "join", title: "Join the Movement" },
    ],
  },
];
