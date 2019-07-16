import React, { useState } from 'react';
import isHtml from 'is-html';
import { validateContent } from './validate';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setIsValid(isHtml(value) && validateContent(value));
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <textarea className='form-control' rows='5' onChange={handleChange} />
        <p className='text-success mt-5'>{isValid ? 'Valid' : 'Invalid'}</p>
      </header>
    </div>
  );
}

export default App;
