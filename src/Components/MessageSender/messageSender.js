/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Avatar } from "@material-ui/core"
import "./messageSender.css"
import VideoCamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmotiIcon from "@material-ui/icons/InsertEmoticon"
import db from '../firebase/firebase';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider/StateProvider';
import 'firebase/firestore';

function MessageSender () {
        const [{user}, dispatch] = useStateValue();
        const [input, setInput] = useState('');
        const [imageUrl, setImageUrl] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault();

            db.collection('posts').add({
              message: input,
              timestamp:firebase.firestore.FieldValue.serverTimestamp(),
              profilePic: user.photoURL,
              username: user.displayName,
              image: imageUrl,
            });
           setInput("");
           setImageUrl("");

        };
        return (
            <div className="messageSender">
                 <div className="messageSender__top" >
                 <Avatar src={user.photoURL}/>
                 <form>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        className="messageSender__input"
                        placeholder={`What on your mind, ${user.displayName}? `}
                    />
                    <input 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)"
                       />
                       <button onClick={handleSubmit} type="submit">
                           Hidden Submit
                       </button>
                 </form>
                 </div>
                 <div className="messageSender__bottom" >
                   <div classname="messageSender__option">
                     <VideoCamIcon style={{ color:"red"}} />
                     <h3>Live Video</h3>
                   </div>
                   <div classname="messageSender__option">
                      <PhotoLibraryIcon style={{ color:"green"}} />
                      <h3>Photo/Video</h3>
                   </div>
                   <div classname="messageSender__option">
                      <InsertEmotiIcon style={{ color:"orange"}} />
                      <h3>Feeling/Activity</h3>
                   </div>
                 </div>
            </div>
        );

        
}


export default MessageSender;