import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'

import "./Feed.css";
import Post from './Post';
import InputOption from './InputOption';
import FlipMove from 'react-flip-move';
// Icon componets mui
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
// call function from firebase v.9
import {
    db,
    collection,
    serverTimestamp,
    addDoc,
    orderBy,
    onSnapshot,
    query,
    getDocs,
} from "./firebase";

function Feed() {
    const user = useSelector(selectUser);
    const colRef = collection(db, 'posts');
    // form input
    const [input, setInput] = useState('');
    // posts array
    const [posts, setPosts] = useState([]);
    // the posts query
    const q = query(colRef, orderBy('timestamp', 'desc'));

    // get posts once on page reload
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // send post to database
    const sendPost = (e) => {
        e.preventDefault();

        addDoc(colRef, {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: serverTimestamp(),
        })

        setInput('');
        
    };

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type='text'
                            placeholder='Start a post'
                        />
                        <button
                            onClick={sendPost}
                            type='submit'>
                            Send
                        </button>
                    </form>
                </div>

                <div className='feed__inputOptions'>
                    <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
                    <InputOption Icon={SubscriptionsIcon} title='Photo' color='#e7a33e' />
                    <InputOption Icon={EventNoteIcon} title='Photo' color='#c0cbcd' />
                    <InputOption Icon={CalendarViewDayIcon} title='Photo' color='#7fc15e'
                    />
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    );
}

export default Feed;