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
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

function Chat() {
    const [input,setInput] = useState("");
    const [seed,setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName,setRoomName] = useState("");
const [messages,setMessages] = useState([]);
const [{ user }, dispatch ] = useStateValue ();



useEffect(() => {
 if (roomId) {
    db.collection("rooms")
    .doc(roomId)
     .onSnapshot((snapshot) => setRoomName
     (snapshot.data().name));

db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot
((snapshot) => 
    setMessages(snapshot.docs.map((doc) => doc.data()))
);
}
}, [roomId]);

useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);
 
 const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed >>>", input);

    db.collection("rooms").doc(roomId).collection
    ("messages").add({
    message:input,
    name:user.displayName,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
});

    setInput("");
    };



    return (
        <div className="chat">

<div className="chat__header">
  <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>

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


                {
                    messages.map((message) => (
                                <div className="chat__body">

                    <p className={`chat__message ${message.name === user.displayName && "chat__reciever"}`}>

                        {message.message} {message.id} 

                    </p>
                    <p>
                        <div className="time">
                        <span
                            className="chat__timestamp">
                                {new Date(message.timestamp?.toDate()).toUTCString()}
                         </span> 
                         </div>
                    </p>
                                </div>

                ))}

<div className="chat__footer">
                    <IconButton>

                <AddIcon />
                                    </IconButton>
                    <IconButton>

                <GifIcon />
                                    </IconButton>
                    <IconButton>

                <NoteAddIcon />
                                    </IconButton>
                    <IconButton>

                <ImageIcon />
                                    </IconButton>
                    <IconButton>

                <InsertDriveFileIcon />
                                    </IconButton>

                <form>
                      <input                                                                                                                                                                                                                                                                                                                                 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />            <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                    < InsertEmoticonIcon />

                </IconButton>
                <IconButton>
                    <ThumbUpIcon />
                </IconButton>

            </div>
        </div>
    );
}

export default Chat;
