import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/common.css";
import "../css/game.css";

function Welcome({
  showGuestInput,
  username,
  isPlayingAsGuest,
  handleGuestLogin,
  handleCloseModal,
  handleTextInput,
  handleSaveGuest,
  startGame,
  connectWallet,
  disconnectWallet,
  isWalletConnected,
}) {
  const renderModal = () => {
    return (
      <Modal
        show={showGuestInput}
        onHide={handleCloseModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>What shall I call you?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="username"
            value={username}
            className="textfield"
            onChange={handleTextInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveGuest}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const renderTitleScreen = () => {
    let loginButtonText = "Login as Guest";

    if (username !== "") {
      loginButtonText = `Hello, ${username}!`;
    } else {
      if (isWalletConnected) {
        loginButtonText = "Enter username";
      }
    }

    return (
      <div className="main-container">
        <div className="text-center title-screen-container">
          <h1 className="main-title">Bible Adventures</h1>
        </div>
        <>
          <Container fluid>
            <Row className="title-buttons-container">
              <Col
                className="d-flex justify-content-center mb-2"
                md={{ span: 4 }}
                lg={{ span: 3 }}
                xs={12}
              >
                <Button
                  variant="info"
                  size="lg"
                  onClick={isWalletConnected ? disconnectWallet : connectWallet}
                >
                  {isWalletConnected ? "Disconnect" : "Connect Wallet"}
                </Button>
              </Col>
              <Col
                className="d-flex justify-content-center mb-2"
                md={{ span: 4 }}
                lg={{ span: 3 }}
                xs={12}
              >
                <Button
                  variant="secondary justify-content-center align-content-center"
                  onClick={handleGuestLogin}
                  size="lg"
                >
                  {loginButtonText}
                </Button>
              </Col>
            </Row>
            {((isPlayingAsGuest && username !== "") ||
              (isWalletConnected && username !== "")) && (
              <Row className="pt-3 pt-md-5">
                <Col>{renderStart()}</Col>
              </Row>
            )}
          </Container>
        </>
      </div>
    );
  };

  const renderStart = () => {
    return (
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={startGame}>
          Start Game
        </Button>
      </div>
    );
  };

  return (
    <Container id="game" fluid className="full-height">
      <div className="welcome">{renderTitleScreen()}</div>
      {renderModal()}
    </Container>
  );
}

export default Welcome;
