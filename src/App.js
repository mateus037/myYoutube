import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'

function App() {
  return (
    <div className="App">
      
      <SearchBar/>
      <VideoList/>
      <VideoPlayer/>

    </div>
  );
}

export default App;
