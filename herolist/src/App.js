import React, { Component } from 'react';
import Navigation from './components/navbar';
import HomePage from './components/homepage';
import './App.css';
import HeroList from './components/herolist';
import heroes from './components/heroes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <HomePage />
        <HeroList heroes={heroes} />
      </div>
    );
  }
}

export default App;
