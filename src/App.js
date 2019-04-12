import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import TourList from './components/TourList/TourList';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    );
  }
}

export default App;
