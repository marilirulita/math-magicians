import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="result">0</div>
          <div className="row">
            <div className="number">AC</div>
            <div className="number">+/-</div>
            <div className="number">%</div>
            <div className="simbol">/</div>
          </div>
          <div className="row">
            <div className="number">7</div>
            <div className="number">8</div>
            <div className="number">9</div>
            <div className="simbol">x</div>
          </div>
          <div className="row">
            <div className="number">4</div>
            <div className="number">5</div>
            <div className="number">6</div>
            <div className="simbol">-</div>
          </div>
          <div className="row">
            <div className="number">1</div>
            <div className="number">2</div>
            <div className="number">3</div>
            <div className="simbol">+</div>
          </div>
          <div className="row">
            <div className="special">
              <div className="number">0</div>
            </div>
            <div className="special">
              <div className="number">.</div>
              <div className="simbol">=</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
