import Web3 from "web3";

let web3 = null;

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
