import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/UniqueNumber';
import UniqueNumber from './components/UniqueNumber';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
          <h1>Find Unique Numbers</h1>
      </header>
      <main>
          <UniqueNumber/>
      </main>
    </div>
  );
}

export default App;
