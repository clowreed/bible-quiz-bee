export const DIFFICULTY_LEVEL = {
  easy: {
    difficulty: "easy",
    points: 1
  },
  medium: {
    difficulty: "medium",
    points: 3
  },
  difficult: {
    difficulty: "difficult",
    points: 5
  },
  expert: {
    difficulty: "expert",
    points: 10
  }
};

export const CATEGORIES = {
  places: "places",
  animals: "animals",
  persons: "persons",
  kings: "kings",
  female: "female",
  men: "men",
  general: "general",
  miracles: "miracles"
}

class QuizModel {
  constructor({
    id, question, answer, options,
    category  = CATEGORIES.general ,
    difficulty =  DIFFICULTY_LEVEL.easy.difficulty,
    points = DIFFICULTY_LEVEL.easy.points
  }) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.options = options;
    this.category = category;
    this.difficulty = difficulty;
    this.points = points;
  }
}

export default QuizModel;
