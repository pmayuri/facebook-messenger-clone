import React, { useState, useEffect } from 'react';
import { Button, FormControl,InputLabel,Input } from '@material-ui/core';
import './App.css';
import Sidebar from './Sidebar';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
    const [input,setInput] = useState('');
    const [messages,setMessages] = useState([]);
    const [username,setUsername] = useState('');

    useEffect(() => {
      // run oncee when the app component loads
      db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id,message: doc.data()})))
      });
    }, [] )

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, []) // condition

    const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  // all the logic to send a message goes here
  setInput('');
}
    
  return (
    <div className="App">
      <div className="chat__header">
<h1>hello</h1>
      <h2>{username}</h2>
      </div>
      <div className ="app__body"> 
      <Sidebar/>
      </div>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>


  );
}

export default App;
