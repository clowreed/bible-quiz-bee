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
    question: "Where was the town where the baby Jesus born?",
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
    question: "Who led the Israelites' exodus out of Egypt?",
    answer: "Moses",
    options: ["David", "Moses", "Aaron", "Judah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 16,
    question: "Who fashioned the golden calf that the Israelites worshipped?",
    answer: "Aaron",
    options: ["Abihu", "Nadab", "Aaron", "Eliezer"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 17,
    question: "Who was the brother of Mary and Martha that Jesus resurrected?",
    answer: "Lazarus",
    options: ["Matthew", "Zaccheus", "Lazarus", "Bartimaeus"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 18,
    question: "Who was the successor of the prophet Elijah when he ascended to heaven?",
    answer: "Elisha",
    options: ["Naaman", "Ahab", "Elisha", "Gehazi"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 19,
    question: "Who was the king of Israel when the Kingdom of Israel split into two?",
    answer: "Rehoboam",
    options: ["Solomon", "Saul", "Rehoboam", "David"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 19,
    question: "Where did Jesus' family went to when they fled from Herod?",
    answer: "Egypt",
    options: ["Capernaum", "Galilee", "Egypt", "Bethlehem"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 20,
    question: "Who was the tax collector among Jesus' disciples?",
    answer: "Matthew",
    options: ["Peter", "Andrew", "James", "Matthew"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 21,
    question: "Who was the father of Moses?",
    answer: "Amram",
    options: ["Aaron", "Amram", "Jacob", "Elihu"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 22,
    question: "What was the trade of the apostle Paul?",
    answer: "Tent maker",
    options: ["Tent maker", "Carpenter", "Baker", "Merchant"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 23,
    question: "Who was the eldest son of Jacob?",
    answer: "Reuben",
    options: ["Simeon", "Reuben", "Joseph", "Levi"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 24,
    question: "Who was the only daughter of Jacob?",
    answer: "Dinah",
    options: ["Dinah", "Rebekah", "Rachel", "Tamar"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 25,
    question: "Who is Queen Esther's cousin?",
    answer: "Mordecai",
    options: ["Haman", "Jonathan", "Mordecai", "Daniel"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 26,
    question: "Who was the king of Babylon who conquered Judah?",
    answer: "Nebuchadnezzar",
    options: ["Ashurbanipal", "Nebuchadnezzar", "Neco", "Rehum"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 27,
    question: "Who was the husband of Queen Esther?",
    answer: "Ahasuerus",
    options: ["Artaxerxes", "Haman", "Mordecai", "Ahasuerus"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 28,
    question: "What is the longest book of the Bible?",
    answer: "Psalms",
    options: ["Deuteronomy", "Psalms", "Revelation", "Isaiah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 29,
    question: "What did God command Peter to do when he showed him a vision of a sheet of animals?",
    answer: "Kill and eat",
    options: ["Set them free", "Take care of them", "Kill and eat", "Give them away"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 30,
    question: "Who is the father of Moab?",
    answer: "Lot",
    options: ["Esau", "Ham", "Lot", "Jacob"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
];
