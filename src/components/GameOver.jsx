import Button from "react-bootstrap/Button";

function GameOver({ restartGame }) {
  return (
    <div className="game-over-container">
      <h1>Game over!</h1>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={restartGame}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default GameOver;
