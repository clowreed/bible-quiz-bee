import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import QuizProgressBar from "./QuizProgressBar";
import AnswerCard from "./AnswerCard";
import { IoHeart } from "react-icons/io5";
import CustomIcons from "./CustomIcons";

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

function Questions() {
  const [heartCounter, setHeartCounter] = useState(5);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const itemsAnswered = 8;
  const progressLabel = `${itemsAnswered} of 10`;

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="question-container">
      <Container fluid>
        <Row className="p-0">
          <Col xs={8} md={10} className="pt-1">
            <QuizProgressBar now={9} label={progressLabel} />
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
              Question No. 1: Who was the oldest living person recorded in the
              Bible?
            </div>
          </Col>
        </Row>
        <Row className="py-2">
          <Col xs={6} className="d-flex justify-content-center py-2">
            <AnswerCard answer="Moses" index={0} handleClick={selectAnswer} />
          </Col>
          <Col xs={6} className="d-flex justify-content-center py-2">
            <AnswerCard answer="Adam" index={1} handleClick={selectAnswer} />
          </Col>
          <Col xs={6} className="d-flex justify-content-center py-2">
            <AnswerCard answer="David" index={2} handleClick={selectAnswer} />
          </Col>
          <Col xs={6} className="d-flex justify-content-center py-2">
            <AnswerCard
              answer="Methuselah"
              index={3}
              handleClick={selectAnswer}
            />
          </Col>
        </Row>
        <Row className="mt-2 mt-md-5">
          <Col className="px-0">
            <div className="check-answer-button-container d-grid gap-2">
              <Button variant="info" size="lg">
                Check Answer
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Questions;
