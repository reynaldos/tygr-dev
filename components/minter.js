import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
} from "../utils/interact.js";
import { addToDb } from "../config/fire-config";

const providerOptions = {
  /* See Provider Options Section */
};

const Minter = (props) => {
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
    addToDb('mints', {
      assetId: '123',
      buyerId: walletResponse.address,
      fromId: '123',
      quantity: '1',
      timeStamp: +new Date,
    });
  };

  const onMintPressed = async () => {
    const resp = await mintNFT(1);
    console.log("minted", resp);
    setStatus(resp.status);
  };

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <span>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </span>
      );
    }
  };

  useEffect(async () => {
    // const { address, status } = await getCurrentWalletConnected();
    // setWallet(address);
    // setStatus(status);
    // addWalletListener();
    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });
    
    const instance = await web3Modal.connect();
    
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
  }, []);

  //the UI of our component
  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title">🧙‍♂️ Alchemy NFT Minter</h1>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <span id="status">{status}</span>
    </div>
  );
};
export default Minter;
