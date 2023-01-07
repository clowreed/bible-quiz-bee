import Web3 from "web3";

import BibleQuizRookieContract from "../contracts/BibleQuizRookieContract";
import BibleQuizAdeptContract from "../contracts/BibleQuizAdeptContract";
import BibleQuizGuruContract from "../contracts/BibleQuizGuruContract";
import BibleQuizClaimContract from "../contracts/BibleQuizClaimContract";

let web3 = null;

let rookieContract = null;
let adeptContract = null;
let guruContract = null;
let claimContract = null;


export const requestAccounts = async () => {
  if (window.ethereum) {
    web3 = new Web3(Web3.givenProvider);
    const network = await web3.eth.net.getNetworkType();
    if (network !== "goerli") {
      alert("Please connect to Goerli network");
      return null;
    }
    const account = await web3.eth.requestAccounts();
    return account;
  } else {
    alert("Please install MetaMask first.");
  }
};

export const accountChange = (setAccounts) => {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (account) => {
      setAccounts(account);
    });
  }
};

export const initializeContracts = async () => {
  if (web3) {
    rookieContract = new web3.eth.Contract(BibleQuizRookieContract.abi, BibleQuizRookieContract.contractAddress);
    adeptContract = new web3.eth.Contract(BibleQuizAdeptContract.abi, BibleQuizAdeptContract.contractAddress);
    guruContract = new web3.eth.Contract(BibleQuizGuruContract.abi, BibleQuizGuruContract.contractAddress);
    claimContract = new web3.eth.Contract(BibleQuizClaimContract.abi, BibleQuizClaimContract.contractAddress);
  }
};

export const mintToken = async (difficulty = 'easy', address) => {
  let contract = null;
  if (web3) {
    if (difficulty === 'difficult') {
      contract = guruContract;
    } else if (difficulty === 'medium') {
      contract = adeptContract;
    } else if (difficulty === 'easy') {
      contract = rookieContract
    }

    if (address) {
      try {
        return contract.methods.publicMint(address)
        .send({ from: address})
      } catch (error) {
        console.error("Error", error);
        return false;
      }
    }
  } else {
    alert("Error claiming NFT");
  }

};
