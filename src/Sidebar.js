import React from 'react'
import "./Sidebar.css"

import SettingsIcon from '@material-ui/icons/Settings';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
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

            </div>
        </div>
    );
}

export default Sidebar ;

