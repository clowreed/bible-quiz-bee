import { useState } from "react";
import Web3 from "web3";
import Welcome from "../components/Welcome";
import Game from "./Game";

function Home() {
  const [showGuestInput, setShowGuestInput] = useState("");
  const [username, setUserName] = useState("");
  const [isPlayingAsGuest, setIsPlayingAsGuest] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);

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
    if (!isWalletConnected) {
      setIsPlayingAsGuest(true);
    }
    handleCloseModal();
  };

  const disconnectWallet = () => {
    setAccounts([]);
    setIsWalletConnected(false);
    setUserName("");
    setIsPlayingAsGuest(true);
  };

  const startGame = () => {
    setIsGameStarted(true);
  };

  const restartGame = () => {
    setIsGameStarted(false);
    setUserName("");
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(Web3.givenProvider);
      const network = await web3.eth.net.getNetworkType();
      if (network !== "goerli") {
        alert("Please connect to Goerli network");
        return;
      }
      const account = await web3.eth.requestAccounts();
      setIsWalletConnected(true);
      setAccounts(account);
    } else {
      alert("Please install MetaMask first.");
    }
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
        disconnectWallet={disconnectWallet}
        startGame={startGame}
        connectWallet={connectWallet}
        isWalletConnected={isWalletConnected}
      />
    );
  };

  const renderGameScreen = () => {
    return (
      <Game
        username={username}
        restartGame={restartGame}
        isWalletConnected={isWalletConnected}
        accounts={accounts}
      />
    );
  };

  const screen = isGameStarted ? renderGameScreen() : renderWelcomeScreen();

  return <>{screen}</>;
}

export default Home;
