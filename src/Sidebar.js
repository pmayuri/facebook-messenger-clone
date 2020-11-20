import React, { useEffect, useState } from "react";
import "./Sidebar.css"
import SettingsIcon from '@material-ui/icons/Settings';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from "./firebase";

function Sidebar() {
 const [rooms,setRooms] = useState([]);

  useEffect(() => {
 const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => 
    setRooms(
        snapshot.docs.map((doc) => ({
            id:doc.id,
            data:doc.data(),
        }))
    )
    );

return () => {
    unsubscribe();
}
   },[]);



    return (
        <div className="sidebar">
            <div className ="sidebar__header">
                <h1>Chats</h1>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <SettingsIcon />

                    </IconButton>
                    <IconButton>
                        <VideoCallIcon />

                    </IconButton>
                    <IconButton>
                        <CreateIcon />

                    </IconButton>
                    </div> 
            </div>
            <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search Messenger" type="text" />
            </div>
           
            </div>
           
             <div className="sidebar__chats">
                 <SidebarChat addNewChat />
                {rooms.map(room => (
                   <SidebarChat key={room.id} id={room.id} 
                name={room.data.name} />
                
                ))}
            </div>
        </div>
    );
}

export default Sidebar ;

