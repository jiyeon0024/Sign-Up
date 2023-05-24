import { useState } from "react";
import "./index.css";
import ErrIcon from "./assets/icon-error.svg";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLasstNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwErr, setPwErr] = useState(false);

  function submitted(e) {
    e.preventDefault();
    console.log(e);
    if (firstName.length == 0) {
      setFirstNameErr(true);
    }
    if (lastName.length == 0) {
      setLasstNameErr(true);
    }
    if (email.length == 0) {
      setEmailErr(true);
    }
    if (pw.length == 0) {
      setPwErr(true);
    }
  }

  return (
    <div className="app">
      <div className="wrapBox container">
        <div className="paraWrap">
          <h3 className="para">Learn to code by watching others</h3>
          <h1 className="subpara">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is valuable.
          </h1>
        </div>
        <div className="Box">
          <p className="formPara">Try it free 7 days then $20/mo. thereafter</p>

          <div className="formWrap">
            <form className="formArea" onSubmit={submitted}>
              <div className="wrapInputEl">
                <input
                  type="text"
                  className={`input ${firstNameErr ? "error" : ""}`}
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                {firstNameErr ? (
                  <img className="errIcon" src={ErrIcon}></img>
                ) : null}
              </div>
              {firstNameErr ? (
                <p className="warnPara">First Name cannot be emty</p>
              ) : null}
              <div className="wrapInputEl">
                <input
                  type="text"
                  className={`input ${lastNameErr ? "error" : ""}`}
                  placeholder={`Last Name`}
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />

                {lastNameErr ? (
                  <img className="errIcon" src={ErrIcon}></img>
                ) : null}
              </div>
              {lastNameErr ? (
                <p className="warnPara">Last Name cannot be emty</p>
              ) : null}
              <div className="wrapInputEl">
                <input
                  type="text"
                  className={`input ${emailErr ? "error" : ""}`}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {emailErr ? (
                  <img className="errIcon" src={ErrIcon}></img>
                ) : null}
              </div>
              {emailErr ? (
                <p className="warnPara">Email cannot be emty</p>
              ) : null}
              <div className="wrapInputEl">
                <input
                  type="text"
                  className={`input ${pwErr ? "error" : ""}`}
                  placeholder="Password"
                  onChange={(e) => setPw(e.target.value)}
                  value={pw}
                />
                {pwErr ? <img className="errIcon" src={ErrIcon}></img> : null}
              </div>
              {pwErr ? (
                <p className="warnPara">Password cannot be emty</p>
              ) : null}
              <button className="btn" type="submit">
                CLAIM YOUR FREE TRIAL
              </button>
              <p className="btnPara">
                By clicking the button, you are agreeing to our
                <span className="span">Terms and Services</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
