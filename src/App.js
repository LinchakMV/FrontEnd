import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
