import React, { useState, useEffect } from 'react';
import './App.css';
import {Button, Input, FormControl, InputLabel} from '@material-ui/core'
import Message from './components/Message'
import firebase from 'firebase'
import db from './firebase'
import FlipMove from 'react-flip-move'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  //  useState = variable in REACT
  //  useEffect = run code on a condition in REACT and only runs when page loads

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}))) // realtime listener that displays message
    });
  }, []) // condition

  useEffect(() => {
    // run code here...
    // blank, this code will run ONCE when the app component loads
    setUsername(prompt('Please enter your name'));

  }, []) // condition

  const sendMessage = (event) => {
    event.preventDefault(); // prevents page from auto refreshing due to input and button being in a form element
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
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

      <FlipMove>
        {
        messages.map(({id, message}) => ( // maps each message in the array and returns the individual messages
          <Message key={id} username={username} message={message} />
        ))
      }
      </FlipMove>
      
    </div>
  );
}

export default App;
