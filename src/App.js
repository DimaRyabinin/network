import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='wrapper'>
        <div className='container'>
          <Nav />
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
