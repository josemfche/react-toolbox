import React from 'react';
import NavBar from './components/NavBar'
import TableDisplay from './components/TableDisplay'
import Layaut from './components/Layaut';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Layaut>
        <NavBar />
        <TableDisplay />
      </Layaut>
    </div>
  );
}

export default App;
