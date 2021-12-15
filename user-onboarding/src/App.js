import './App.css';
import React, { useState } from 'react';
import Form from './Form';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
    </div>
  );
}

export default App;
