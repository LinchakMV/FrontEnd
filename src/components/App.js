import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

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