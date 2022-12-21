import QuizModel, { DIFFICULTY_LEVEL, CATEGORIES} from "../models/quiz-model";

export const QUESTIONS = [
  new QuizModel({
    id: 1,
    question: "Who was the oldest living person recorded in the Bible?",
    answer: "Methuselah",
    options: ["Moses", "Adam", "David", "Methuselah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 2,
    question: "Who did God instruct to build a big boat called the ark to save them from a great flood?",
    answer: "Noah",
    options: ["Abraham", "Adam", "Noah", "Peter"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 3,
    question: "Where did God write the 10 commandments?",
    answer: "Stone tablets",
    options: ["Papyrus", "Stone tablets", "Notepad", "Clay tablets"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 4,
    question: "Who was the mother of all human beings?",
    answer: "Eve",
    options: ["Mary", "Eve", "Sarah", "Miriam"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 5,
    question: "Who was the shepherd boy that defeated a giant?",
    answer: "David",
    options: ["Moses", "Joseph", "David", "Jonathan"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 6,
    question: "Who was the man thrown into the lion's pit but was rescued by an angel?",
    answer: "Daniel",
    options: ["Hananiah", "Mishael", "Azariah", "Daniel"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 7,
    question: "Who was the man who was swallowed alive by a big fish?",
    answer: "Jonah",
    options: ["Jeremiah", "Jonah", "Nathaniel", "Jacob"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 8,
    question: "What did God make on the first day of creation?",
    answer: "Light",
    options: ["Earth", "Wind", "Fire", "Light"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 9,
    question: "Who is referred to as the father of many nations?",
    answer: "Abraham",
    options: ["Jeremiah", "Abraham", "Nathaniel", "Jacob"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 10,
    question: "Who was the wisest man in the Bible?",
    answer: "Solomon",
    options: ["David", "Solomon", "Job", "Abel"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 11,
    question: "What is the first book in the Old Testment",
    answer: "Genesis",
    options: ["Genesis", "Matthew", "Joshua", "Numbers"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 12,
    question: "How many disciples did Jesus have?",
    answer: "12",
    options: ["7", "6", "12", "24"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 13,
    question: "Where was town where the baby Jesus born?",
    answer: "Bethlehem",
    options: ["Nazareth", "Gilead", "Bethlehem", "Bethsaida"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 14,
    question: "Who tempted Eve to eat the fruit?",
    answer: "Serpent",
    options: ["Bull", "Eagle", "Lion", "Serpent"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 15,
    question: "Who led the Israelites exodus out of Egypt?",
    answer: "Moses",
    options: ["David", "Moses", "Aaron", "Judah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  })
];
