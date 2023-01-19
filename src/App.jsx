import { useState } from "react";
import "./App.css";
import { wish } from "./data.js";

function App() {
  const [text, setText] = useState("");

  const handleDate = (e) => {
    const value = e.target.value;
    if (value in wish) setText(wish[value]);
  };

  return (
    <>
      <input className="date" type="date" onChange={handleDate} />
      <p className="text">{text}</p>
      <div className="feliz">Happy new year</div>
      <div className="ano_novo">
        <span>202</span>
        <span className="seis">2</span>
        <span className="sete">3</span>
        <div className="balao"></div>
      </div>
      <div className="fogos">
        <div className="f1">
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
        </div>
        <div className="f2">
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
        </div>
        <div className="f3">
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
        </div>
        <div className="f4">
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
          <span>
            <i></i>
          </span>
        </div>
      </div>
      {/* <a href="https://twitter.com/cecelabomfim" className="author">
        Marcela Bomfim
      </a> */}
    </>
  );
}

export default App;
