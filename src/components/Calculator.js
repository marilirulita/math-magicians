import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Container">
        <div className="Calculator">
          <div className="Result">0</div>
          <div className="Row">
            <div className="Number">AC</div>
            <div className="Number">+/-</div>
            <div className="Number">%</div>
            <div className="Simbol">/</div>
          </div>
          <div className="Row">
            <div className="Number">7</div>
            <div className="Number">8</div>
            <div className="Number">9</div>
            <div className="Simbol">x</div>
          </div>
          <div className="Row">
            <div className="Number">4</div>
            <div className="Number">5</div>
            <div className="Number">6</div>
            <div className="Simbol">-</div>
          </div>
          <div className="Row">
            <div className="Number">1</div>
            <div className="Number">2</div>
            <div className="Number">3</div>
            <div className="Simbol">+</div>
          </div>
          <div className="Row">
            <div className="Special">
              <div className="Number">0</div>
            </div>
            <div className="Special">
              <div className="Number">.</div>
              <div className="Simbol">=</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
