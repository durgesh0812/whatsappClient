import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './component/Chat/Chat';
import Sidebar from './component/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages,setMessages] = useState([])

  useEffect(()=>{
    axios.get('https://whatsapp-cloneback.herokuapp.com//messages/sync')
    .then((response)=>{
      setMessages(response.data)
      
    })

  },[]);
  useEffect(()=>{
    const pusher = new Pusher('a842ada02d8d36883388', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {     
      setMessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();

    }
  },[messages]);
  console.log(messages)   
  return (
    <div className="app">
        <div className='app_body'>
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
