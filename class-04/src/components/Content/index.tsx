import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Web3ModalContext } from "../../context/Web3ModalContext";

const Content: React.FC = () => {

  const { account , chainId, web3, pizzaWrapper } = React.useContext(Web3ModalContext);

  const [currentChainId, setCurrentChainId] = useState("");
  const [walletStatus, setWalletStatus] = useState(false);
  const [myBalance, setMyBalance] = useState("");
  const [availablePizza, setAvailablePizza] = useState(0);

  const fetchBalance = async () => {
    if(account && chainId && web3) {
      const balance = await web3.eth.getBalance(account);
      setMyBalance(web3.utils.fromWei(balance, "ether"));
    } else {setMyBalance("")}
  }

  const getWalletStatus = () => {
    if(account && chainId) {
      setWalletStatus(true);
    } else {
      setWalletStatus(false);
    }
  }

  const getChainId = () => {
    if(chainId) {
      setCurrentChainId(String(chainId));
    } else {
      setCurrentChainId("");
    }
  }

  const getSliceCount = async () => {
    if(pizzaWrapper) {
      const slices = await pizzaWrapper.getSlices();
      setAvailablePizza(Number(slices));
    }
  }

  const eatSlice = async () => {
    if(pizzaWrapper) {
      await pizzaWrapper.eatSlice();
      getSliceCount();
    }
  }

  React.useEffect(() => {
    getWalletStatus();
    getChainId();
    fetchBalance();
    getSliceCount();
  }, [account, chainId, web3, pizzaWrapper])

  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <div className={styles.interface}>
          <div className={styles.columns} style={{ height: "400px" }}>
              <div className={styles.form}>
                <div className={styles.input}>
                  <div className={styles.title}>
                    <label>My Address:</label>
                  </div>
                  <input
                    type="text"
                    value={account ? (account) : ("")}
                  />
                </div>

                <div className={styles.input}>
                  <div className={styles.title}>
                    <label>Connected to:</label>
                  </div>
                  <input
                    type="text"
                    value={currentChainId}
                  />
                </div>

                <div className={styles.input}>
                  <div className={styles.title}>
                    <label>My Balance (ETH):</label>
                  </div>
                  <input
                    type="text"
                    value={myBalance}
                  />
                </div>

                <div className={styles.input}>
                  <div className={styles.button}>
                    <div onClick={eatSlice}>Gimme Pizza!</div>  
                  </div>
                </div>

                <div className={styles.walletStatus}>
                     {availablePizza} x🍕
                </div>
                
                <div className={styles.walletStatus}>
                      <div
                        className={styles.ball}
                        style={
                          walletStatus
                            ? { backgroundColor: "lime" }
                            : { backgroundColor: "red" }
                        }
                      />
                      Wallet {walletStatus ? "Connected" : "Disconnected"}
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Content;
