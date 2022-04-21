import React from 'react';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";


function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://scontent.fpoz6-1.fna.fbcdn.net/v/t1.18169-9/12573709_861836310581051_3410657605001504107_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=19026a&_nc_ohc=YDKUrZC1JJEAX9zugjh&_nc_ht=scontent.fpoz6-1.fna&oh=00_AT9AjsZoUtElfJSVHbn60oMwzJJwGxij33VCPdWcuHobTA&oe=6273A8F3" alt="" />
                <Avatar className="sidebar__avatar" src={user?.photoUrl}>{user?.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">9999</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">9999</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("HTML, CSS, Javascript")}
                {recentItem("ReactJs, React Redux")}
                {recentItem("Web development")}
            </div>
        </div>
    );
}

export default Sidebar