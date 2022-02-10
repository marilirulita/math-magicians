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
            <div className="number" onClick={this.clickFunction}>AC</div>
            <div className="number" onClick={this.clickFunction}>+/-</div>
            <div className="number" onClick={this.clickFunction}>%</div>
            <div className="simbol" onClick={this.clickFunction}>÷</div>
          </div>
          <div className="row">
            <div className="number" onClick={this.clickFunction}>7</div>
            <div className="number" onClick={this.clickFunction}>8</div>
            <div className="number" onClick={this.clickFunction}>9</div>
            <div className="simbol" onClick={this.clickFunction}>x</div>
          </div>
          <div className="row">
            <div className="number" onClick={this.clickFunction}>4</div>
            <div className="number" onClick={this.clickFunction}>5</div>
            <div className="number" onClick={this.clickFunction}>6</div>
            <div className="simbol" onClick={this.clickFunction}>-</div>
          </div>
          <div className="row">
            <div className="number" onClick={this.clickFunction}>1</div>
            <div className="number" onClick={this.clickFunction}>2</div>
            <div className="number" onClick={this.clickFunction}>3</div>
            <div className="simbol" onClick={this.clickFunction}>+</div>
          </div>
          <div className="row">
            <div className="row">
              <div className="special" onClick={this.clickFunction}>0</div>
            </div>
            <div className="row">
              <div className="number" onClick={this.clickFunction}>.</div>
              <div className="simbol" onClick={this.clickFunction}>=</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
