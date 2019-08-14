import React from "react";
import ReactDOM from "react-dom";
import Countdown from "./Countdown";
import { ReactComponent as HowchooLogo } from "./img/howchoo-logo.svg";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <a href="https://howchoo.com" target="_blank" rel="noopener noreferrer">
        <HowchooLogo />
      </a>
      <Countdown />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
