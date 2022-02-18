import React from 'react';
import calculate from '../logic/calculate';

const { useState } = React;

const Calculator = () => {
  const initialState = {
    total: null,
    next: null,
    operation: null,
  };

  const [state, setupState] = useState(initialState);

  const clickFunction = (e) => {
    const button = e.target.innerHTML;
    const answer = calculate(state, button);
    setupState(answer);
  };

  const { total, operation, next } = state;

  return (
    <div className="container-calculator">
      <h3>Let&apos;s do some math! </h3>
      <div className="calculator">
        <div className="result">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <div className="row">
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">AC</div>
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">+/-</div>
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">%</div>
          <div className="simbol" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">÷</div>
        </div>
        <div className="row">
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">7</div>
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">8</div>
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">9</div>
          <div className="simbol" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">x</div>
        </div>
        <div className="row">
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">4</div>
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">5</div>
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">6</div>
          <div className="simbol" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">-</div>
        </div>
        <div className="row">
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">1</div>
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">2</div>
          <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">3</div>
          <div className="simbol" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">+</div>
        </div>
        <div className="row">
          <div className="row">
            <div className="special" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">0</div>
          </div>
          <div className="row">
            <div className="number" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">.</div>
            <div className="simbol" onClick={clickFunction} onKeyDown={clickFunction} role="button" tabIndex="0">=</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
