import React from 'react';

import './App.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import TourList from './components/TourList/TourList.jsx';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="App">
        <TourList />
      </main> 
    </div>
    
  );
}

export default App;
