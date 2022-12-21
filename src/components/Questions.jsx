import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import QuizProgressBar from "./QuizProgressBar";
import AnswerCard from "./AnswerCard";
import { IoHeart } from "react-icons/io5";
import CustomIcons from "./CustomIcons";
import { QUESTIONS } from "../data/quiz-data";
import { DIFFICULTY_LEVEL } from "../models/quiz-model";

const EASY_LEVEL_ITEMS = 10;
const MEDIUM_LEVEL_ITEMS = 15;
const HARD_LEVEL_ITEMS = 20;

const renderHearts = (heartCounter) => {
  const hearts = [];
  for (let i = 0; i < heartCounter; i++) {
    hearts.push(renderHeart(i));
  }

  const displayHearts = hearts.map((heart) => {
    return heart;
  });

  return displayHearts;
};

const renderHeart = (index) => (
  <CustomIcons color="red" key={index}>
    <IoHeart />
  </CustomIcons>
);

const getQuestionsData = (difficulty = "easy", limit = EASY_LEVEL_ITEMS) => {
  let count = 0;
  const questions = QUESTIONS.filter((question) => {
    if (count < limit) {
      count++;
      return question.difficulty === difficulty;
    }
    return false;
  });
  return randomizeQuestions(questions);
};

const randomizeQuestions = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
};

function Questions() {
  const [heartCounter, setHeartCounter] = useState(5);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [itemCounter, setItemCounter] = useState(0);

  useEffect(() => {
    const questions = getQuestionsData("easy");
    setQuizData(questions);
  }, []);

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (itemCounter < EASY_LEVEL_ITEMS - 1) {
      setItemCounter(itemCounter + 1);
    }
  };

  return (
    <div className="question-container">
      {quizData && quizData.length > 0 && (
        <Container fluid>
          <Row className="p-0">
            <Col xs={8} md={10} className="pt-1">
              <QuizProgressBar now={itemCounter + 1} />
            </Col>
            <Col
              xs={4}
              md={2}
              className="px-0 d-flex justify-content-center align-content-center"
            >
              {renderHearts(heartCounter)}
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-2">
              <div className="question-text">
                {quizData[itemCounter].question}
              </div>
            </Col>
          </Row>
          <Row className="py-2">
            <Col xs={6} className="d-flex justify-content-center py-2">
              <AnswerCard
                answer={quizData[itemCounter].options[0]}
                index={0}
                handleClick={selectAnswer}
              />
            </Col>
            <Col xs={6} className="d-flex justify-content-center py-2">
              <AnswerCard
                answer={quizData[itemCounter].options[1]}
                index={1}
                handleClick={selectAnswer}
              />
            </Col>
            <Col xs={6} className="d-flex justify-content-center py-2">
              <AnswerCard
                answer={quizData[itemCounter].options[2]}
                index={2}
                handleClick={selectAnswer}
              />
            </Col>
            <Col xs={6} className="d-flex justify-content-center py-2">
              <AnswerCard
                answer={quizData[itemCounter].options[3]}
                index={3}
                handleClick={selectAnswer}
              />
            </Col>
          </Row>
          <Row className="mt-2 mt-md-5">
            <Col className="px-0">
              <div className="check-answer-button-container d-grid gap-2">
                <Button variant="info" size="lg" onClick={handleNextQuestion}>
                  Check Answer
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Questions;
