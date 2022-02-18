import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import './App.css';
import Welcome from './components/Welcome';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Calculator />
        <Welcome />
        <Quote />
      </>
    );
  }
}

export default App;
