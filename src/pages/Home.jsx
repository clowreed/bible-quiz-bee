import { useState } from "react";
import Welcome from "../components/Welcome";
import Game from "./Game";
function Home() {
  const [showGuestInput, setShowGuestInput] = useState("");
  const [username, setUserName] = useState("");
  const [isPlayingAsGuest, setIsPlayingAsGuest] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleGuestLogin = () => {
    setShowGuestInput(true);
  };

  const handleCloseModal = () => {
    setShowGuestInput(false);
  };

  const handleTextInput = (event) => {
    const val = event.target.value;
    setUserName(val);
  };

  const handleSaveGuest = () => {
    if (username === "") {
      alert("Please enter a valid username");
      return;
    }
    setIsPlayingAsGuest(true);
    handleCloseModal();
  };

  const startGame = () => {
    setIsGameStarted(true);
  };

  const restartGame = () => {
    setIsGameStarted(false);
    setUserName("");
  };

  const renderWelcomeScreen = () => {
    return (
      <Welcome
        showGuestInput={showGuestInput}
        username={username}
        isPlayingAsGuest={isPlayingAsGuest}
        handleGuestLogin={handleGuestLogin}
        handleCloseModal={handleCloseModal}
        handleTextInput={handleTextInput}
        handleSaveGuest={handleSaveGuest}
        startGame={startGame}
      />
    );
  };

  const renderGameScreen = () => {
    return (
      <Game
        username={username}
        restartGame={restartGame}
        isWalletConnected={isWalletConnected}
      />
    );
  };

  const screen = isGameStarted ? renderGameScreen() : renderWelcomeScreen();

  return <>{screen}</>;
}

export default Home;
