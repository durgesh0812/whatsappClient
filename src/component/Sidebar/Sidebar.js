import React from 'react';
import './Sidebar.css';
 import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar,IconButton } from '@material-ui/core';
import profile from '../../Images/pp157041.jpg'
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from '../SidebarChat/SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
           <div className='sidebar_header'>
               <Avatar  src={profile} />
               <div className='sidebar_headerRight'>
                   <IconButton>
                   <DonutLargeIcon />

                   </IconButton>
                   <IconButton>
                      <ChatIcon />
                   </IconButton>
                      
                   <IconButton>
                        <MoreVertIcon />
                       </IconButton>
                   
                  

               </div>
           </div>

           <div clas='sidebar_search'>
               <div className='sidebar_searchContainer'>
                   <SearchOutlined />
                   <input placeholder='Start a new chat' type='text' />

               </div>

           </div>
           <div className='sidebar_chats'>
               <SidebarChat />
               <SidebarChat />
               <SidebarChat />

           </div>
            
        </div>
    )
}

export default Sidebar
