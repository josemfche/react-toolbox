import React from 'react';
import NavBar from './components/NavBar'
import TableDisplay from './components/TableDisplay'
import Layout from './components/Layout';
import './App.scss';

function App() {
  return (
    <div className="App bg-dark">
      <Layout>
        <NavBar />
        <TableDisplay />
      </Layout>
    </div>
  );
}

export default App;
