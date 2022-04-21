import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (<Avatar className="headerOption__icon" src={user?.photoUrl} rel="noreferer">{user?.displayName[0]}</Avatar>)}
      <p className="headerOption__title">{title}</p>
      </div>
  );

};

export default HeaderOption