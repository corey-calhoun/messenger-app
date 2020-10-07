import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  return (
    <div className="app">
      <h1>Messenger App</h1>

      {/* Input Field */}
      <input value={input} onChange={event => setInput(event.target.value)} />

      {/* Button */}
      <button>Send Message</button>

      {/* Messages Themselves */}

    </div>
  );
}

export default App;
