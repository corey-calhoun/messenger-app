import React, { useState, useEffect } from 'react';
import './App.css';
import {Button, Input, FormControl, InputLabel} from '@material-ui/core'
import Message from './components/Message'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'Corey', text: 'Hey man!'},
    {username: 'Sarah', text: 'Hey how are you doing!'}
  ]);
  const [username, setUsername] = useState('');

  //  useState = variable in REACT
  //  useEffect = run code on a condition in REACT

  useEffect(() => {
    // run code here...
    // blank, this code will run ONCE when the app component loads
    setUsername(prompt('Please enter your name'));

  }, []) // condition

  const sendMessage = (event) => {
    event.preventDefault(); // prevents page from auto refreshing due to input and button being in a form element
    // Logic to send message goes here
    setMessages([...messages, {username: username, text: input}]); // spreads out current array of messages and pushes input to the message array
    setInput(''); //clears input field
  }

  return (
    <div className="app">
      <h1>Messenger App</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button 
           disabled={!input}
           type="submit"  
           onClick={sendMessage}
           variant='contained'
           color='secondary'
          >
          Send Message
          </Button>
        </FormControl>
      </form>

      {
        messages.map(message => ( // maps each message in the array and returns the individual messages
          <Message username={message.username} text={message.text} />
        ))
      }
    </div>
  );
}

export default App;
