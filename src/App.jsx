import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import CardList from './CardList';
import Box from './Box';
import { useState } from 'react';

function App({ sortedCards, handleCompletionChange }) {

  return (
    <div className='container-fluid outer-container'>

      <CardList />
    </div>
  );
}

export default App;
