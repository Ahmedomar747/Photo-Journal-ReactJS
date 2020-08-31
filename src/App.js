import React from 'react';
import BannerImage from './components/BannerImage'
import AlbumMaker from './components/AlbumMaker'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage/>
        <div>
          <h1>Welcome to Photo Journal</h1>
          <h3>Ahmed Omar</h3>
          <AlbumMaker/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
