import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.clickFunction = this.clickFunction.bind(this);
  }

  updateState(objx) {
    this.setState(objx);
  }

  clickFunction(e) {
    const button = e.target.innerHTML;
    const answer = calculate(this.state, button);
    this.updateState(answer);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container">
        <div className="calculator">
          <div className="result">
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </div>
          <div className="row">
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">AC</div>
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">+/-</div>
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">%</div>
            <div className="simbol" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">÷</div>
          </div>
          <div className="row">
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">7</div>
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">8</div>
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">9</div>
            <div className="simbol" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">x</div>
          </div>
          <div className="row">
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">4</div>
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">5</div>
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">6</div>
            <div className="simbol" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">-</div>
          </div>
          <div className="row">
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">1</div>
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">2</div>
            <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">3</div>
            <div className="simbol" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">+</div>
          </div>
          <div className="row">
            <div className="row">
              <div className="special" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">0</div>
            </div>
            <div className="row">
              <div className="number" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">.</div>
              <div className="simbol" onClick={this.clickFunction} onKeyDown={this.clickFunction} role="button" tabIndex="0">=</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
