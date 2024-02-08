import { useState } from 'react';

export default function App() {
  const [displayState, setDisplayState] = useState('0');

  function handleClick(event) {
    if (event.target.id === 'clear') {
      setDisplayState({ displayState: '0' });
    } else if (event.target.textContent === '=') {
      parseFormula();
    } else if (event.target.textContent === '.') {
      let dtxt = displayState;
      let reg = /[*/+-]/g;
      let res = dtxt.split(reg);
      if (res.length > 1) {
        if (res[res.length - 1].indexOf('.') === -1) {
          setDisplayState(dtxt + event.target.textContent);
        }
      } else if (dtxt.indexOf('.') === -1) {
        setDisplayState(dtxt + event.target.textContent);
      }
    } else if (event.target.textContent === '0') {
      if (!isInitialZero()) {
        setDisplayState(displayState + event.target.textContent);
      }
    } else if (displayState.length === 1 && displayState === '0') {
      setDisplayState(event.target.textContent);
    } else {
      setDisplayState(displayState + event.target.textContent);
    }
  }

  function parseFormula() {
    let formula = displayState;
    let reg = /[*/+-]{2,}/g;
    let res = formula.match(reg);
    if (res !== null) {
      res = res[0];
      if (res[res.length - 1] !== '-') {
        let op = res[res.length - 1];
        formula = formula.replace(res, op);
        setDisplayState(eval(formula));
      } else {
        let op = res[res.length - 2];
        formula = formula.replace(res.slice(0, res.length - 1), op);
        setDisplayState(eval(formula));
      }
    } else {
      setDisplayState(eval(formula));
    }
  }

  function isInitialZero() {
    if (displayState.length === 1) {
      return displayState[0] === '0';
    }
  }

  return (
    <div className="calc-container">
      <div
        className="display-box"
        id="display"
      >
        {displayState}
      </div>
      <div className="calc-pad">
        <button
          className="num-btn"
          id="zero"
          onClick={handleClick}
        >
          0
        </button>
        <button
          className="num-btn"
          id="one"
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="num-btn"
          id="two"
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="num-btn"
          id="three"
          onClick={handleClick}
        >
          3
        </button>
        <button
          className="num-btn"
          id="four"
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="num-btn"
          id="five"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="num-btn"
          id="six"
          onClick={handleClick}
        >
          6
        </button>
        <button
          className="num-btn"
          id="seven"
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="num-btn"
          id="eight"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="num-btn"
          id="nine"
          onClick={handleClick}
        >
          9
        </button>
        <button
          className="op-btn"
          id="add"
          onClick={handleClick}
        >
          +
        </button>
        <button
          className="op-btn"
          id="subtract"
          onClick={handleClick}
        >
          -
        </button>
        <button
          className="op-btn"
          id="multiply"
          onClick={handleClick}
        >
          *
        </button>
        <button
          className="op-btn"
          id="divide"
          onClick={handleClick}
        >
          /
        </button>
        <button
          className="dot-btn"
          id="decimal"
          onClick={handleClick}
        >
          .
        </button>
        <button
          className="clr-btn"
          id="clear"
          onClick={handleClick}
        >
          Clear
        </button>
        <button
          className="eval-btn"
          id="equals"
          onClick={handleClick}
        >
          =
        </button>
      </div>
    </div>
  );
}
