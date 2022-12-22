import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import QuizProgressBar from "./QuizProgressBar";
import AnswerCard from "./AnswerCard";
import { IoHeart } from "react-icons/io5";
import CustomIcons from "./CustomIcons";
import { QUESTIONS } from "../data/quiz-data";

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
  const questions = QUESTIONS.filter((question) => {
    return question.difficulty === difficulty;
  });
  return randomizeQuestions(questions).slice(0, limit);
};

const randomizeQuestions = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
};

function Questions({
  difficulty = "easy",
  points,
  setPoints,
  heartCounter,
  setHeartCounter,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [itemCounter, setItemCounter] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const questions = getQuestionsData(difficulty);
    setQuizData(questions);
  }, [difficulty]);

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    handleClose();
    setIsCorrect(false);
    setSelectedAnswer(null);
    //if (itemCounter <= EASY_LEVEL_ITEMS - 1) {
    if (!isLevelFinished()) {
      setItemCounter(itemCounter + 1);
    }
  };

  const handleCheckAnswer = () => {
    if (isLevelFinished()) {
      alert("Level finished!");
    } else {
      if (selectedAnswer === quizData[getItemIndex()].getAnswer()) {
        setIsCorrect(true);
        setPoints(points + 1);
      } else {
        setIsCorrect(false);
        setHeartCounter(heartCounter - 1);
      }
      handleShow();
    }
  };

  const isLevelFinished = () => {
    return itemCounter + 1 > EASY_LEVEL_ITEMS;
  };

  const getItemIndex = () => {
    return !isLevelFinished() ? itemCounter : itemCounter - 1;
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const renderOptions = () => {
    return quizData[getItemIndex()].getOptions().map((option, index) => {
      return (
        <Col key={option} xs={6} className="d-flex justify-content-center py-2">
          <AnswerCard
            answer={option}
            index={index}
            handleClick={selectAnswer}
            selectedAnswer={selectedAnswer}
          />
        </Col>
      );
    });
  };

  const renderModal = () => {
    const msg = isCorrect ? "Great!" : "Oops. That is incorrect.";
    return (
      <Modal
        show={showModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button
            variant={isCorrect ? "success" : "danger"}
            onClick={handleNextQuestion}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="question-container">
      {quizData && quizData.length > 0 && (
        <>
          <Container fluid>
            <Row className="p-0">
              <Col xs={6} md={8} className="pt-1">
                <QuizProgressBar now={getItemIndex() + 1} />
              </Col>
              <Col
                xs={4}
                md={2}
                className="px-0 d-flex justify-content-center align-content-center"
              >
                {renderHearts(heartCounter)}
              </Col>
              <Col xs={2} md={2} className="pt-1">
                {points} pts.
              </Col>
            </Row>
            <Row>
              <Col className="text-center py-2">
                <div className="question-text">
                  {quizData[getItemIndex()].getQuestion()}
                </div>
              </Col>
            </Row>
            <Row className="py-2">{renderOptions()}</Row>
            <Row className="mt-2 mt-md-5">
              <Col className="px-0">
                <div className="check-answer-button-container d-grid gap-2">
                  <Button variant="info" size="lg" onClick={handleCheckAnswer}>
                    Check Answer
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          {renderModal()}
        </>
      )}
    </div>
  );
}

export default Questions;
