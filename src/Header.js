import React from 'react';
import HeaderOption from './HeaderOption';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const user = useSelector(selectUser);


    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (

        <div className="header">
            <div className="header__left">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png"
                    alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={PeopleIcon} title="My Network" />
                <HeaderOption Icon={WorkIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="true" title="Me" onClick={logoutOfApp} />
            </div>
        </div>
    );
}

export default Header