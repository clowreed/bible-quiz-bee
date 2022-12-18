import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const STEP_1_TEXT = `This app will test your knowledge about the Bible.
  You will be given a set of questions in three levels of difficulty;
  Easy, Average and Hard. If you manage to pass each level, you will be
  able to unlock the next level and claim some tokens and NFTs.`;

const STEP_2_TEXT = `If you consume all your hearts then you will have to start again from the beginning. You will also need to connect your MetaMask wallet in order to claim tokens and NFTs. You can still play without connecting your wallet but you will not be able to claim the tokens and NFTs.`;

const STEP_3_TEXT = `Once you are ready, click the Start button to begin. Good luck!`;

function Game({ username }) {
  const [step, setNextStep] = useState(1);
  const [instructionText, setInstructionText] = useState(
    `Hello ${username}! ${STEP_1_TEXT}`
  );

  useEffect(() => {
    if (step === 1) {
      setInstructionText(`Hello ${username}! ${STEP_1_TEXT}`);
    } else if (step === 2) {
      setInstructionText(STEP_2_TEXT);
    } else {
      setInstructionText(STEP_3_TEXT);
    }
  }, [username, step, instructionText]);

  const handleClickNextStep = () => {
    setNextStep(step + 1);
  };

  const renderInstructionsScreen = () => {
    return (
      <div className="instructions-container">
        <div className="instructions-text text-center">
          <p>{instructionText}</p>
        </div>
        {step !== 3 && (
          <div className="next-button-container">
            <Button size="lg" onClick={handleClickNextStep}>
              Next
            </Button>
          </div>
        )}
        {step === 3 && renderStart()}
      </div>
    );
  };

  const renderStart = () => {
    return (
      <div className="start-game-container">
        <div className="button-container d-grid gap-2">
          <Button variant="primary" size="lg">
            Start
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Container id="game" fluid className="full-height">
      <div className="game-screen">{renderInstructionsScreen()}</div>
    </Container>
  );
}

export default Game;
