import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path="calculator" element={<Calculator />} />
          <Route path="/" element={<Welcome />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
