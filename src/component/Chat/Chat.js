import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState } from 'react';
import './Chat.css';
import axios from '../../axios';

function Chat({messages}) {
    const [input,setInput] = useState('')

    const sendMessage = async(e) =>{
        e.preventDefault();

       await axios.post('https://whatsapp-cloneback.herokuapp.com//messages/new',{
            message: input,  
            name: "durgesh12",
            timestamp: "Just now",
            received : false,
        });

        setInput('');
    }
    return (
        <div className='chat'>
          <div className='chat_header'>
              <Avatar />

          
          <div className='chat_headerInfo'>
              <h3>Room name</h3>
              <p>Last seeen at ...</p>

          </div>
          <div className='chat_headerRight'>
              <IconButton>
                  <SearchOutlined/>
              </IconButton>

              <IconButton>
                  <AttachFile />
              </IconButton>

              <IconButton>
                  <MoreVert />
              </IconButton>

          </div>
          </div>
            <div className='chat_body'>
                {messages.map((message)=>(
                <p className={`chat_message ${message.received && 'chat_reciever'}`}>
                    <span className='chat_name'>{message.name}

                    </span>
                 {message.message}
                    <span className='chat_time'>{message.timestamp}</span>
                    </p>
                    ))}

                   

                    

            </div>

            <div className='chat_footer'>
                <InsertEmoticon className='smiley'/>

                <form>
                    <input 
                   
                    value={input}
                    onChange={e =>setInput(e.target.value)}
                    placeholder='Type your message'
                    type='text'
                    />
                    <button 
                    type='submit' onClick={sendMessage}><SendIcon className='send'/></button>
                </form>
                <MicIcon  className='mic'/>
            </div>
        </div>
    )
}

export default Chat
