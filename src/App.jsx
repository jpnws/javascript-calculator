import { useState } from 'react';

import NumberButton from './NumberButton';
import OperationButton from './OperationButton';
import DotButton from './DotButton';
import ClearButton from './ClearButton';
import EqualButton from './EqualButton';
import DisplayBox from './DisplayBox';

export default function App() {
  const [displayState, setDisplayState] = useState('0');

  function handleClick(event) {
    if (event.target.id === 'clear') {
      setDisplayState('0');
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
      <DisplayBox displayState={displayState} />
      <div className="calc-pad">
        <NumberButton
          number={0}
          numberText={'zero'}
          onButtonClick={handleClick}
        />
        <NumberButton
          number={1}
          numberText={'one'}
          onButtonClick={handleClick}
        />
        <NumberButton
          number={2}
          numberText={'two'}
          onButtonClick={handleClick}
        />
        <NumberButton
          number={3}
          numberText={'three'}
          onButtonClick={handleClick}
        />
        <NumberButton
          number={4}
          numberText={'four'}
          onButtonClick={handleClick}
        />
        <NumberButton
          number={5}
          numberText={'five'}
          onButtonClick={handleClick}
        />
        <NumberButton
          number={6}
          numberText={'six'}
          onButtonClick={handleClick}
        />
        <NumberButton
          number={7}
          numberText={'seven'}
          onButtonClick={handleClick}
        />
        <NumberButton
          number={8}
          numberText={'eight'}
          onButtonClick={handleClick}
        />
        <NumberButton
          number={9}
          numberText={'nine'}
          onButtonClick={handleClick}
        />
        <OperationButton
          opSymbol={'+'}
          opText={'add'}
          onButtonClick={handleClick}
        />
        <OperationButton
          opSymbol={'-'}
          opText={'subtract'}
          onButtonClick={handleClick}
        />
        <OperationButton
          opSymbol={'*'}
          opText={'multiply'}
          onButtonClick={handleClick}
        />
        <OperationButton
          opSymbol={'/'}
          opText={'divide'}
          onButtonClick={handleClick}
        />
        <DotButton onButtonClick={handleClick} />
        <ClearButton onButtonClick={handleClick} />
        <EqualButton onButtonClick={handleClick} />
      </div>
    </div>
  );
}
