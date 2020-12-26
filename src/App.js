import React from 'react';

import { Map } from './Map.js'
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map publicKey={process.env.REACT_APP_MAPBOX_PUBLIC_KEY} />

        <p>This is what it is</p>
      </header>

    </div>
  );
}

export default App;
