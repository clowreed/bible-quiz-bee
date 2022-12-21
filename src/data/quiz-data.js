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
    question: "Who did God instruct to build the Ark?",
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
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  })
];
