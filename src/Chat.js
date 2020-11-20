import React ,{useEffect,useState}from 'react';
import "./Chat.css"
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import GifIcon from '@material-ui/icons/Gif';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ImageIcon from '@material-ui/icons/Image';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useParams } from 'react-router-dom';
import db from './firebase';
function Chat() {
        const [input,setInput] = useState("");

    const [seed,setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName,setRoomName] = useState("");

useEffect(() => {
 if (roomId) {
    db.collection("rooms")
    .doc(roomId)
     .onSnapshot((snapshot) => setRoomName
     (snapshot.data().name));
 }
}, [roomId]);

useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
 
 const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed >>>", input);

        setInput("");
    };



    return (
        <div className="chat">

<div className="chat__header">
  <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                                 <span className="chat__name">mayuri</span>

                </div>
<div className="chat__headerRight">
<IconButton>
                    <CallIcon />
                 </IconButton>
                 <IconButton>
                    <VideocamIcon />
                </IconButton>
                <IconButton>
                     <InfoIcon/>
                </IconButton>
                </div>


</div>
<div className="chat__body">
<p className={`chat__message ${true && "chat__reciever"}`}>
   hey guys

            <span
         className="chat__timestamp">3:52pm
            </span>
</p>
                 

</div>

<div className="chat__footer">

                <AddIcon />
                <GifIcon />
                <NoteAddIcon />
                <ImageIcon />
                <InsertDriveFileIcon />
                <form>
                      <input                                                                                                                                                                                                                                                                                                                                 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />            <button onClick={sendMessage} type="submit">Send a message</button>
                </form>

                < InsertEmoticonIcon/>
                <ThumbUpIcon />
            </div>
        </div>
    );
}

export default Chat;
