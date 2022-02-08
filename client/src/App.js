import "./App.css";
import puma from "./puma.png";
import { useState } from "react";
import axios from "axios";

function App() {
  // 변수선언
  const [newMnemonic, setNewMnemonic] = useState("");
  const [pwd, setPwd] = useState("");
  const [mnemonic, setMnemonic] = useState("");
  const [address, setAddress] = useState("");
  const [keystore, setKeystore] = useState("");
  const handleNewMnemonic = () => {
    axios
      .post("http://localhost:4000/wallet/newmnemonic", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setNewMnemonic(res.data);
      });
  };

  const handleNewWallet = () => {
    axios
      .post(
        "http://localhost:4000/wallet/newwallet",
        {
          mnemonic: newMnemonic,
          pwd: pwd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        setAddress(res.data.address);
        setKeystore(res.data.keystore);
      });
  };

  const handleMnemomic = (e) => {
    setMnemonic(e.target.value);
  };

  const handlePwd = (e) => {
    setPwd(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="brandLogo">
          <img src={puma} className="logo" alt="" />
        </div>
        <div className="newMnemomic">
          <button className="mnemonicBtn" onClick={handleNewMnemonic}>
            니모닉코드 생성하기
          </button>
          <input
            className="resMnemonic"
            value={newMnemonic}
            placeholder="생성된 니모닉 코드가 나타납니다"
            readOnly
          />
        </div>
        <div className="newWallet">
          <input
            className="inputMnemomic"
            type="text"
            placeholder="니모닉코드를 입력해주세요"
            onChange={handleMnemomic}
            value={newMnemonic}
          />
          <input
            className="inputPwd"
            type="text"
            placeholder="패스워드를 입력하세요"
            onChange={handlePwd}
          />
          <button className="newWalletBtn" onClick={handleNewWallet}>
            지갑생성
          </button>
          <div className="resNewWallet">
            <input
              className="newAddress"
              placeholder="생성된 계정이 나타납니다"
              value={address}
              readOnly
            ></input>
            <div className="keyStore"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
