import { useState, useEffect, useCallback } from "react";
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
import { DIFFICULTY_LEVEL } from "../models/quiz-model";

const LEVEL_LIMIT = {
  easy: 10,
  medium: 15,
  hard: 20,
  expert: 25,
};
const MODAL_TYPES = {
  checkAnswer: "checkAnswer",
  gameOver: "gameOver",
  nextLevel: "nextLevel",
};

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

const getQuestionsData = (difficulty = "easy", limit = LEVEL_LIMIT.easy) => {
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
  setDifficulty,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [itemCounter, setItemCounter] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(MODAL_TYPES.checkAnswer);

  const isLevelFinished = useCallback(() => {
    return itemCounter + 1 > LEVEL_LIMIT[difficulty];
  }, [itemCounter, difficulty]);

  useEffect(() => {
    const questions = getQuestionsData(difficulty, LEVEL_LIMIT[difficulty]);
    setQuizData(questions);
  }, [difficulty]);

  useEffect(() => {
    if (isLevelFinished() && difficulty !== "difficult") {
      showNextLevelModal();
    }
  }, [isLevelFinished, difficulty]);

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const showNextLevelModal = () => {
    setModalType(MODAL_TYPES.nextLevel);
    setShowModal(true);
  };

  const handleNextQuestion = () => {
    handleClose();
    setIsCorrect(false);
    setSelectedAnswer(null);
    if (!isLevelFinished()) {
      setItemCounter(itemCounter + 1);
    }
  };

  const startNextLevel = () => {
    const difficultySetting =
      difficulty === DIFFICULTY_LEVEL.easy.difficulty
        ? DIFFICULTY_LEVEL.medium.difficulty
        : DIFFICULTY_LEVEL.difficult.difficulty;
    handleClose();
    setModalType("checkAnswer");
    if (difficultySetting !== "difficult") {
      setIsCorrect(false);
      setSelectedAnswer(null);
      setItemCounter(0);
      setDifficulty(difficultySetting);
    }
  };

  const handleCheckAnswer = () => {
    if (isLevelFinished()) {
      alert("Level finished!");
    } else {
      handleShow();
      if (selectedAnswer === quizData[getItemIndex()].getAnswer()) {
        setIsCorrect(true);
        setPoints(points + quizData[getItemIndex()].getPoints());
      } else {
        setIsCorrect(false);
        setHeartCounter(heartCounter - 1);
      }
    }
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
    let msg = "";
    let clickAction = handleNextQuestion;
    let buttonVariant = "info";
    let buttonText = "Continue";
    if (modalType === MODAL_TYPES.checkAnswer) {
      msg = isCorrect ? "Great!" : "Oops. That is incorrect.";
      buttonVariant = isCorrect ? "success" : "danger";
      buttonText = "Continue";
      clickAction = handleNextQuestion;
    } else if (modalType === MODAL_TYPES.nextLevel) {
      msg = "Congratulations! You've made it to the next level.";
      buttonVariant = "primary";
      buttonText = "Start next level";
      clickAction = startNextLevel;
    }

    return (
      <Modal
        show={showModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        {modalType !== "checkAnswer" && (
          <Modal.Header>
            <Modal.Title>Level up</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant={buttonVariant} onClick={clickAction}>
            {buttonText}
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
            <Row className="py-2">
              <Col
                xs={12}
                className="d-flex justify-content-center align-content-center"
              >
                <div className="difficulty-level-text">
                  {difficulty.toUpperCase()} ROUND
                </div>
              </Col>
            </Row>
            <Row className="p-0">
              <Col xs={6} md={8} className="pt-1">
                <QuizProgressBar
                  now={getItemIndex() + 1}
                  max={LEVEL_LIMIT[difficulty]}
                />
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
